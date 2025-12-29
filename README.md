# cmssy-cli

Unified CLI for building reusable UI blocks and publishing them to Cmssy Marketplace.

## Installation

```bash
npm install -g cmssy-cli
```

## Quick Start

```bash
# 1. Create a new project
npx cmssy init my-blocks

# 2. Navigate to project
cd my-blocks

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Create a new block
npx cmssy create block my-block

# 6. Build for production
npm run build

# 7. Configure Cmssy API (for publishing)
npx cmssy configure

# 8. Deploy to marketplace
npx cmssy deploy --all
```

## Commands

### Initialize Project

```bash
cmssy init [name] [options]
```

Create a new Cmssy project with example blocks.

**Options:**
- `-f, --framework <framework>` - Framework (react, vue, angular, vanilla). Default: react

**Example:**
```bash
cmssy init my-blocks --framework react
```

### Create Block or Template

```bash
cmssy create block <name>
cmssy create template <name>
```

Create a new block or page template in your project.

**Example:**
```bash
cmssy create block hero
cmssy create template landing-page
```

### Build

```bash
cmssy build [options]
```

Build all blocks and templates for production.

**Options:**
- `--framework <framework>` - Override framework from config

**Example:**
```bash
cmssy build
```

**Output:** Built files are generated in `public/@vendor/package-name/version/` directory.

### Development Server

```bash
cmssy dev [options]
```

Start development server with hot reload and preview.

**Options:**
- `-p, --port <port>` - Port number. Default: 3000

**Example:**
```bash
cmssy dev --port 4000
```

### Configure API

```bash
cmssy configure [options]
```

Configure Cmssy API credentials for publishing.

**Options:**
- `--api-url <url>` - Cmssy API URL. Default: https://api.cmssy.io/graphql

**Example:**
```bash
cmssy configure
```

You'll be prompted for:
- **Cmssy API URL**: `https://api.cmssy.io/graphql` (or your local dev URL)
- **API Token**: Get this from your Cmssy workspace settings → API Tokens

Create an API token with `marketplace:publish` scope.

### Deploy to Marketplace

```bash
cmssy deploy [options]
```

Publish blocks/templates to Cmssy marketplace.

**Options:**
- `--all` - Deploy all blocks and templates
- `--blocks <names...>` - Deploy specific blocks
- `--templates <names...>` - Deploy specific templates
- `--dry-run` - Preview without publishing

**Example:**
```bash
# Deploy all
cmssy deploy --all

# Deploy specific blocks
cmssy deploy --blocks hero pricing

# Deploy specific templates
cmssy deploy --templates landing-page

# Dry run
cmssy deploy --all --dry-run
```

### Sync from Marketplace

```bash
cmssy sync [package] [options]
```

Pull blocks from Cmssy marketplace to local project.

**Options:**
- `--workspace <id>` - Workspace ID to sync from

**Example:**
```bash
cmssy sync @vendor/blocks.hero --workspace abc123
```

## Project Structure

```
my-blocks/
├── cmssy.config.js        # Project configuration
├── blocks/                # Your blocks
│   └── hero/
│       ├── package.json   # Block metadata
│       ├── preview.json   # Preview data for dev server
│       └── src/
│           ├── index.tsx  # Block component
│           └── index.css  # Block styles
├── templates/             # Your page templates
├── public/                # Build output
│   └── @vendor/package-name/version/
│       ├── index.js
│       ├── index.css
│       └── package.json
├── package.json
└── .env                   # API credentials
```

## Block Metadata

Each block requires a `cmssy` section in its `package.json`:

```json
{
  "name": "@vendor/blocks.hero",
  "version": "1.0.0",
  "description": "Hero section block",
  "cmssy": {
    "packageType": "block",
    "displayName": "Hero Section",
    "category": "marketing",
    "tags": ["hero", "landing", "cta"],
    "pricing": {
      "licenseType": "free"
    },
    "schemaFields": [...],
    "defaultContent": {...}
  }
}
```

## Requirements

- Node.js 18+

## Complete Workflow

1. **Initialize**: `cmssy init my-blocks`
2. **Develop**: `cmssy dev` (hot reload + preview)
3. **Create**: `cmssy create block my-block`
4. **Build**: `cmssy build`
5. **Configure**: `cmssy configure` (one-time)
6. **Deploy**: `cmssy deploy --all`
7. **Review**: Your packages are submitted for Cmssy review
8. **Publish**: Once approved, they're available in the marketplace

## License

MIT
