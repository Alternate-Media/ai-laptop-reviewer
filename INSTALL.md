# Installation Guide

This guide provides step-by-step instructions for setting up the Laptop Verdict development environment. It's intended for contributors and developers who want to run the site locally or contribute to the project.

## Prerequisites

Before you begin, ensure you have:

- **Git** installed and configured
- **GitHub account** with access to the repository
- **Basic command line familiarity**
- **Administrator/sudo access** (for some installations)

The setup process uses [mise](https://mise.jdx.dev/) as a unified development environment manager to handle all tool dependencies automatically.

## Step 1: Install mise

### macOS

```bash
brew install mise
```

### Linux

```bash
curl https://mise.jdx.dev | sh
```

### Windows (WSL)

```bash
curl https://mise.jdx.dev | sh
```

### Verify mise Installation

```bash
mise --version
```

> **Note**: After installing mise, you may need to restart your terminal or run the mise initialization command that appears during installation.

## Step 2: Clone the Repository

```bash
git clone https://github.com/alternate-media/ai-laptop-reviewer.git
cd ai-laptop-reviewer
```

## Step 3: Install Development Tools

The project uses mise to manage all development tools automatically:

```bash
# Install all tools defined in mise.toml
mise install
```

This will install:

- **Hugo Extended** (latest) - Static site generator
- **Node.js** (version 22) - JavaScript runtime
- **httpie-go** (latest) - HTTP testing tool
- **pre-commit** (latest) - Git hooks manager
- **vale** (latest) - Documentation linting

### Verify Tools Installation

```bash
mise ls
```

You should see all tools listed as "installed".

## Step 4: Install Node.js Dependencies

```bash
cd laptop-reviews-site
npm install
cd ..
```

This installs:

- **Playwright** - UI testing framework
- **Tailwind CSS v4** - CSS framework with PostCSS
- **Lighthouse** - Performance auditing tool
- **Additional development dependencies**

## Step 5: Set Up Git Hooks

Pre-commit hooks ensure code quality and consistency:

```bash
# Install pre-commit hooks
pre-commit install
```

### Test Git Hooks (Optional)

```bash
pre-commit run --all-files
```

This will run all hooks on existing files to verify the setup.

## Step 6: Verify Installation

Run the complete test suite to ensure everything is working:

```bash
# Run full CI pipeline locally
mise run ci
```

This command:

1. Builds the Hugo site
2. Runs enhanced sanity tests
3. Executes Playwright UI tests

If all tests pass, your installation is successful!

## Development Workflow

### Start Development Server

```bash
mise run site:serve
```

The site will be available at `http://localhost:1313`

### Build for Production

```bash
mise run site:build
```

### Run Individual Test Suites

```bash
# Enhanced sanity tests
mise run test:sanity-plus

# Playwright UI tests
mise run test:ui

# Lighthouse performance audit
mise run test:lighthouse
```

### Deploy to GitHub Pages

```bash
mise run site:deploy
```

> **Note**: Deployment requires push access to the repository.

## Project Structure

```
ai-laptop-reviewer/
├── laptop-reviews-site/          # Hugo site
│   ├── archetypes/              # Content templates
│   ├── assets/                  # Source assets
│   ├── content/                 # Site content
│   ├── layouts/                 # Hugo templates
│   ├── static/                  # Static assets
│   ├── ui-tests/               # Playwright tests
│   ├── hugo.toml               # Hugo configuration
│   └── package.json            # Node.js dependencies
├── mise.toml                    # Development environment config
├── .pre-commit-config.yaml     # Git hooks configuration
├── README.md                   # User documentation
├── INSTALL.md                  # This file
├── ROADMAP.md                  # Project planning
└── AGENTS.md                   # Agent documentation
```

## Common Commands Reference

### Mise Tasks

```bash
mise run site:serve      # Start development server
mise run site:build      # Build production site
mise run ci              # Full test suite
mise run test:ui         # Playwright tests
mise run test:lighthouse # Performance audit
mise run site:deploy     # Deploy to GitHub Pages
```

### Hugo Commands

```bash
hugo new posts/my-review/index.md  # Create new review
hugo server -D                     # Development server with drafts
hugo --gc --minify                 # Production build with optimization
```

### Testing Commands

```bash
ht GET http://localhost:1313       # HTTP testing
npx playwright test              # Run Playwright tests
npx lighthouse http://localhost:1313 # Performance audit
```

## Basic Troubleshooting

### mise Not Found

```bash
# Check if mise is in your PATH
which mise

# If not found, add to your shell profile
echo 'eval "$(mise activate bash)"' >> ~/.bashrc
# or for zsh:
echo 'eval "$(mise activate zsh)"' >> ~/.zshrc
```

### Node.js Version Issues

```bash
# Reset node to project version
mise use -g node@22

# Verify node version
node --version
```

### Hugo Build Failures

```bash
# Check hugo version
hugo version

# Reinstall hugo-extended
mise uninstall hugo-extended
mise install
```

### npm Install Errors

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf laptop-reviews-site/node_modules
cd laptop-reviews-site && npm install
```

### Playwright Browser Issues

```bash
# Install Playwright browsers manually
cd laptop-reviews-site
npx playwright install
```

### Permission Issues

```bash
# If you encounter permission errors with npm
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
```

### Pre-commit Hook Issues

```bash
# Reinstall pre-commit hooks
pre-commit uninstall
pre-commit install

# Run hooks manually to debug
pre-commit run --all-files --verbose
```

## Next Steps

After successful installation:

1. **Read the Methodology**: Understand the review standards in [METHODOLOGY.md](METHODOLOGY.md)
2. **Explore Agents**: Learn about the AI agents in [AGENTS.md](AGENTS.md)
3. **Check Roadmap**: See project status in [ROADMAP.md](ROADMAP.md)
4. **Create Content**: Use `hugo new posts/title/index.md` to create reviews
5. **Run Tests**: Always run `mise run ci` before committing changes

## Getting Help

If you encounter issues not covered in this guide:

1. **Check existing issues** on the GitHub repository
2. **Search the mise documentation** at https://mise.jdx.dev/
3. **Review Hugo documentation** at https://gohugo.io/
4. **Create an issue** with details about your setup and error messages

---

_Last Updated: 2026-02-05_
