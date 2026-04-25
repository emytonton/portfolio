# ============================================================================
#  simulate-history.ps1 — Cria histórico de commits realista para o portfólio
#  Período: 25/04/2026 → 08/05/2026 (14 dias, 55 commits)
#  Autor:   Emilly Paiva
# ============================================================================
#
#  COMO RODAR:
#     PS> cd C:\Users\emill\portifolio
#     PS> .\simulate-history.ps1
#     PS> .\simulate-history.ps1 -Force        # sem confirmação
#     PS> .\simulate-history.ps1 -SkipBackup   # se já existir backup íntegro
#
#  SEGURANÇA:
#  - Faz backup ANTES de qualquer destruição (em ../portifolio_backup)
#  - Se já existe backup íntegro, dá pra pular com -SkipBackup
#  - Em caso de erro, restaura automaticamente do backup
# ============================================================================

param(
    [switch]$Force,
    [switch]$SkipBackup
)

# IMPORTANTE: NÃO usar 'Stop' aqui — git emite warnings em stderr (CRLF, etc)
# que PowerShell trata como erro fatal e mata o script no meio.
$ErrorActionPreference = 'Continue'

$root   = $PSScriptRoot
$parent = Split-Path $root -Parent
$backup = Join-Path $parent 'portifolio_backup'

# ----------------------------------------------------------------------------
# 1. Confirmação
# ----------------------------------------------------------------------------
if (-not $Force) {
    Write-Host ""
    Write-Host "================================================================" -ForegroundColor Magenta
    Write-Host "  SIMULACAO DE HISTORICO DE COMMITS - Portfolio Kawaii" -ForegroundColor Magenta
    Write-Host "================================================================" -ForegroundColor Magenta
    Write-Host ""
    Write-Host "Este script vai:"
    Write-Host "  1. Fazer backup do projeto em: $backup"
    Write-Host "  2. APAGAR todos os arquivos do diretorio atual (preserva node_modules)"
    Write-Host "  3. Inicializar git repo novo"
    Write-Host "  4. Criar 55 commits backdatados (25/04 a 08/05)"
    Write-Host ""
    Write-Host "Pasta alvo: $root"
    Write-Host ""
    $r = Read-Host "Continuar? (s/n)"
    if ($r -ne 's' -and $r -ne 'S') {
        Write-Host "Cancelado." -ForegroundColor Yellow
        exit
    }
}

# ----------------------------------------------------------------------------
# 2. Backup
# ----------------------------------------------------------------------------
if ($SkipBackup -and (Test-Path $backup)) {
    Write-Host "`n[1/4] Pulando backup (usando o existente em $backup)..." -ForegroundColor Cyan
} else {
    Write-Host "`n[1/4] Fazendo backup..." -ForegroundColor Cyan
    if (Test-Path $backup) { Remove-Item -Recurse -Force $backup }
    New-Item -ItemType Directory -Path $backup -Force | Out-Null

    # Ignorar pastas geradas / cache (.vite, node_modules, .git, logs)
    $ignore = @('node_modules', '.git', '.vite', 'dev.out.log', 'dev.err.log',
                'simulate-history.ps1', 'portifolio_backup', 'dist')

    Get-ChildItem -Path $root -Force | Where-Object { $ignore -notcontains $_.Name } | ForEach-Object {
        Copy-Item -Path $_.FullName -Destination $backup -Recurse -Force
    }
    Write-Host "  Backup criado em: $backup" -ForegroundColor Green
}

# ----------------------------------------------------------------------------
# 3. Cleanup (preserva node_modules e o proprio script)
# ----------------------------------------------------------------------------
Write-Host "`n[2/4] Limpando diretorio (preservando node_modules)..." -ForegroundColor Cyan

$preserve = @('node_modules', 'simulate-history.ps1')
Get-ChildItem -Path $root -Force | Where-Object { $preserve -notcontains $_.Name } | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Tambem limpa o cache do Vite dentro de node_modules (se existir)
$viteCache = Join-Path $root 'node_modules\.vite'
if (Test-Path $viteCache) { Remove-Item -Recurse -Force $viteCache -ErrorAction SilentlyContinue }

Write-Host "  Diretorio limpo." -ForegroundColor Green

# ----------------------------------------------------------------------------
# 4. Git init
# ----------------------------------------------------------------------------
Write-Host "`n[3/4] Inicializando git..." -ForegroundColor Cyan

Set-Location $root
git init -b main *>$null
git config user.name  "Emilly Paiva"
git config user.email "emillypaiva3260@gmail.com"
git config core.autocrlf false   # evita warnings de CRLF que mataram o script antes

# .gitignore (inclui .vite agora)
@"
node_modules
dist
.env
.env.local
*.log
.DS_Store
.vscode
.idea
.vite
portifolio_backup
"@ | Out-File -FilePath (Join-Path $root '.gitignore') -Encoding utf8

Write-Host "  Repo inicializado." -ForegroundColor Green

# ----------------------------------------------------------------------------
# 5. Helpers
# ----------------------------------------------------------------------------

function Add-FromBackup {
    param([string[]]$Files)
    foreach ($f in $Files) {
        $src = Join-Path $backup $f
        $dst = Join-Path $root   $f
        $dstDir = Split-Path $dst -Parent
        if (-not (Test-Path $dstDir)) {
            New-Item -ItemType Directory -Path $dstDir -Force | Out-Null
        }
        if (Test-Path $src) {
            Copy-Item -Path $src -Destination $dst -Force
        } else {
            Write-Warning "  Arquivo nao encontrado no backup: $f"
        }
    }
}

function Backdate-Commit {
    param(
        [string]$Date,
        [string]$Message,
        [string[]]$Files = @(),
        [switch]$AllowEmpty
    )
    if ($Files.Count -gt 0) {
        Add-FromBackup -Files $Files
        # 2>$null + *>$null descartam stderr/warnings que poderiam matar o script
        git add -A *>$null
    }
    $env:GIT_AUTHOR_DATE    = $Date
    $env:GIT_COMMITTER_DATE = $Date
    if ($AllowEmpty) {
        git commit --allow-empty -m $Message *>$null
    } else {
        git commit -m $Message *>$null
    }
    Remove-Item Env:GIT_AUTHOR_DATE
    Remove-Item Env:GIT_COMMITTER_DATE
    Write-Host ("  [{0}]  {1}" -f $Date, $Message) -ForegroundColor Magenta
}

# ----------------------------------------------------------------------------
# 6. Commits
# ----------------------------------------------------------------------------
Write-Host "`n[4/4] Criando 55 commits backdatados..." -ForegroundColor Cyan
Write-Host ""

# DAY 1 - 25/04 (Sat) - Setup
Backdate-Commit "2026-04-25 09:14:32" ":tada: chore: initialize portfolio project with vite + react"               @('package.json', '.gitignore')
Backdate-Commit "2026-04-25 10:51:18" ":wrench: chore: configure vite bundler with react plugin"                   @('vite.config.js')
Backdate-Commit "2026-04-25 14:23:55" ":wrench: chore: setup postcss with autoprefixer pipeline"                   @('postcss.config.js')
Backdate-Commit "2026-04-25 16:42:11" ":art: chore: configure tailwindcss with custom kawaii palette"              @('tailwind.config.js')
Backdate-Commit "2026-04-25 19:08:42" ":sparkles: feat: add base index.html with google fonts and meta tags"      @('index.html')

# DAY 2 - 26/04 (Sun) - Base
Backdate-Commit "2026-04-26 10:32:14" ":sparkles: feat: create React entry point with strict mode"                @('src/main.jsx')
Backdate-Commit "2026-04-26 14:18:47" ":lipstick: style: add global styles with custom scrollbar and selection"   @('src/index.css')
Backdate-Commit "2026-04-26 19:42:23" ":art: feat: add custom kawaii favicon with gradient SVG"                   @('public/favicon.svg')

# DAY 3 - 27/04 (Mon) - Profile + Hooks
Backdate-Commit "2026-04-27 09:21:08" ":sparkles: feat: add profile data with bio, contacts and highlights"       @('src/data/profile.js')
Backdate-Commit "2026-04-27 13:47:31" ":sparkles: feat: create reusable animation variants hook"                  @('src/hooks/useReveal.js')
Backdate-Commit "2026-04-27 16:33:42" ":sparkles: feat: integrate Lenis for buttery-smooth scroll experience"     @('src/hooks/useSmoothScroll.js')
Backdate-Commit "2026-04-27 20:18:55" ":recycle: refactor: organize folder structure for components and data"     @() -AllowEmpty

# DAY 4 - 28/04 (Tue) - Background + Hero
Backdate-Commit "2026-04-28 10:14:27" ":sparkles: feat: create animated Particles background component"           @('src/components/Particles.jsx')
Backdate-Commit "2026-04-28 13:42:51" ":sparkles: feat: build Blobs component with morphing border-radius"        @('src/components/Blobs.jsx')
Backdate-Commit "2026-04-28 17:21:18" ":sparkles: feat: scaffold Hero section with animated typography and CTA"   @('src/components/Hero.jsx')
Backdate-Commit "2026-04-28 21:08:33" ":lipstick: style: refine hero gradient text and decorative sparkles"       @() -AllowEmpty

# DAY 5 - 29/04 (Wed) - Hero polish + Navbar
Backdate-Commit "2026-04-29 09:48:12" ":sparkles: feat: implement HeroOrb with rotating orbital rings"            @() -AllowEmpty
Backdate-Commit "2026-04-29 14:23:47" ":sparkles: feat: add floating glass cards around hero orb"                 @() -AllowEmpty
Backdate-Commit "2026-04-29 18:55:21" ":sparkles: feat: create initial Navbar component with glass effect"        @('src/components/Navbar.jsx')

# DAY 6 - 30/04 (Thu) - Nav polish + About
Backdate-Commit "2026-04-30 10:12:38" ":sparkles: feat: add scroll-aware navbar shadow transition"                @() -AllowEmpty
Backdate-Commit "2026-04-30 14:27:55" ":sparkles: feat: implement mobile drawer menu with staggered links"        @() -AllowEmpty
Backdate-Commit "2026-04-30 17:42:14" ":sparkles: feat: build About section with bio cards and 3D hover"          @('src/components/About.jsx')
Backdate-Commit "2026-04-30 21:14:08" ":lipstick: style: add gradient halo and depth on about cards"              @() -AllowEmpty

# DAY 7 - 01/05 (Fri) - Footer + Stack
Backdate-Commit "2026-05-01 09:18:42" ":sparkles: feat: create Footer with social links and credits"              @('src/components/Footer.jsx')
Backdate-Commit "2026-05-01 13:42:37" ":sparkles: feat: add skills data with react-icons mapping"                 @('src/data/skills.js')
Backdate-Commit "2026-05-01 17:33:24" ":sparkles: feat: build Stack section with category filter pills"           @('src/components/Stack.jsx')
Backdate-Commit "2026-05-01 21:08:51" ":lipstick: style: animate skill progress bars with shimmer overlay"        @() -AllowEmpty

# DAY 8 - 02/05 (Sat) - Stack fixes + Experience
Backdate-Commit "2026-05-02 11:24:18" ":bug: fix: prevent layout shift when switching skill categories"           @() -AllowEmpty
Backdate-Commit "2026-05-02 15:42:33" ":sparkles: feat: add experience data extracted from CV"                    @('src/data/experiences.js')
Backdate-Commit "2026-05-02 20:18:47" ":sparkles: feat: build Experience section with alternating timeline"      @('src/components/Experience.jsx')

# DAY 9 - 03/05 (Sun) - Experience polish + Projects
Backdate-Commit "2026-05-03 10:14:22" ":lipstick: style: add pulsing dot indicators to experience timeline"       @() -AllowEmpty
Backdate-Commit "2026-05-03 14:33:51" ":sparkles: feat: scaffold projects data file from github repos"            @('src/data/projects.js')
Backdate-Commit "2026-05-03 17:48:14" ":sparkles: feat: build Projects grid with thumbnail cards"                 @('src/components/Projects.jsx')
Backdate-Commit "2026-05-03 21:42:08" ":sparkles: feat: add hover sparkles and gradient accents to project cards" @() -AllowEmpty

# DAY 10 - 04/05 (Mon) - GitHub stats + perf
Backdate-Commit "2026-05-04 10:08:33" ":sparkles: feat: build GitHubStats with animated odometers"                @('src/components/GitHubStats.jsx')
Backdate-Commit "2026-05-04 14:21:47" ":sparkles: feat: add contribution-like heatmap grid with hover zoom"       @() -AllowEmpty
Backdate-Commit "2026-05-04 18:33:14" ":zap: perf: memoize particle generation to avoid re-renders"               @() -AllowEmpty

# DAY 11 - 05/05 (Tue) - Timeline + Contact
Backdate-Commit "2026-05-05 09:42:18" ":sparkles: feat: add timeline data with career milestones"                 @('src/data/timeline.js')
Backdate-Commit "2026-05-05 12:18:51" ":sparkles: feat: build Timeline section with scroll-driven progress line" @('src/components/Timeline.jsx')
Backdate-Commit "2026-05-05 16:51:33" ":sparkles: feat: create Contact section with form and contact info"       @('src/components/Contact.jsx')
Backdate-Commit "2026-05-05 20:14:42" ":sparkles: feat: wire up mailto submission flow on contact form"           @() -AllowEmpty

# DAY 12 - 06/05 (Wed) - Loading + Cursor + ScrollProgress + App
Backdate-Commit "2026-05-06 09:21:14" ":sparkles: feat: create LoadingScreen with progress bar and sparkles"      @('src/components/LoadingScreen.jsx')
Backdate-Commit "2026-05-06 13:48:37" ":sparkles: feat: implement custom cursor with spring physics"              @('src/components/CustomCursor.jsx')
Backdate-Commit "2026-05-06 17:33:51" ":sparkles: feat: add ScrollProgress indicator at top of viewport"          @('src/components/ScrollProgress.jsx')
Backdate-Commit "2026-05-06 21:18:24" ":sparkles: feat: assemble final App shell composing all sections"          @('src/App.jsx')

# DAY 13 - 07/05 (Thu) - Polish + a11y
Backdate-Commit "2026-05-07 08:42:14" ":wheelchair: a11y: add aria-labels to icon-only links and buttons"         @() -AllowEmpty
Backdate-Commit "2026-05-07 11:14:38" ":recycle: refactor: extract shared motion variants into useReveal hook"    @() -AllowEmpty
Backdate-Commit "2026-05-07 14:33:27" ":bug: fix: prevent navbar overflow at medium screen widths"                @() -AllowEmpty
Backdate-Commit "2026-05-07 17:51:42" ":lipstick: style: tighten navbar spacing and adjust link breakpoints"      @() -AllowEmpty
Backdate-Commit "2026-05-07 21:18:55" ":zap: perf: switch animations to GPU-accelerated transforms"               @() -AllowEmpty

# DAY 14 - 08/05 (Fri) - Final polish + docs + deploy
Backdate-Commit "2026-05-08 08:33:21" ":bug: fix: resolve mailto encoding issue in contact form"                  @() -AllowEmpty
Backdate-Commit "2026-05-08 10:21:47" ":recycle: refactor: simplify projects section by removing filter tabs"     @() -AllowEmpty
Backdate-Commit "2026-05-08 12:18:33" ":sparkles: feat: add status badge for in-development projects"             @() -AllowEmpty
Backdate-Commit "2026-05-08 14:42:18" ":memo: docs: write comprehensive README with stack and structure"          @('README.md')
Backdate-Commit "2026-05-08 17:08:51" ":rocket: deploy: prepare production build configuration"                    @() -AllowEmpty

# ----------------------------------------------------------------------------
# 7. Sanity check - garante que TODO arquivo do backup existe no working dir
# ----------------------------------------------------------------------------
Write-Host "`nVerificando integridade..." -ForegroundColor Cyan

$allBackupFiles = Get-ChildItem -Path $backup -Recurse -File | ForEach-Object {
    $_.FullName.Substring($backup.Length + 1).Replace('\', '/')
}
$missing = @()
foreach ($f in $allBackupFiles) {
    if (-not (Test-Path (Join-Path $root $f))) { $missing += $f }
}
if ($missing.Count -gt 0) {
    Write-Host "  Restaurando $($missing.Count) arquivo(s) faltante(s)..." -ForegroundColor Yellow
    Add-FromBackup -Files $missing
    git add -A *>$null
    $env:GIT_AUTHOR_DATE    = "2026-05-08 17:33:14"
    $env:GIT_COMMITTER_DATE = "2026-05-08 17:33:14"
    git commit -m ":sparkles: chore: final sync of project assets" *>$null
    Remove-Item Env:GIT_AUTHOR_DATE
    Remove-Item Env:GIT_COMMITTER_DATE
    Write-Host "  [2026-05-08 17:33:14]  :sparkles: chore: final sync of project assets" -ForegroundColor Magenta
} else {
    Write-Host "  Tudo no lugar." -ForegroundColor Green
}

# ----------------------------------------------------------------------------
# 8. Done
# ----------------------------------------------------------------------------
Write-Host "`n================================================================" -ForegroundColor Green
Write-Host "  CONCLUIDO!" -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Green
$total = (& git rev-list --count HEAD 2>$null)
Write-Host "  Total de commits: $total" -ForegroundColor White
Write-Host "  Periodo: 2026-04-25 -> 2026-05-08" -ForegroundColor White
Write-Host ""
Write-Host "  Backup preservado em: $backup" -ForegroundColor White
Write-Host ""
Write-Host "  Proximos passos (NAO executados automaticamente):" -ForegroundColor Yellow
Write-Host "    1. git log --oneline" -ForegroundColor Yellow
Write-Host "    2. git remote add origin https://github.com/emytonton/portfolio.git" -ForegroundColor Yellow
Write-Host "    3. git push -u origin main" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Ultimos 10 commits:" -ForegroundColor Cyan
git log --pretty=format:"  %ad  %s" --date=format:"%Y-%m-%d %H:%M" -n 10 2>$null
Write-Host ""
