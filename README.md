# cmssy-forge

CLI tool for publishing BlockForge blocks and templates to Cmssy Marketplace.

## Installation

```bash
npm install -g cmssy-forge
```

## Usage

### Configure API credentials

```bash
cmssy-forge configure
```

You'll be prompted for:
- **Cmssy API URL**: `https://api.cmssy.io/graphql` (or your local dev URL)
- **API Token**: Get this from your Cmssy workspace settings → API Tokens

Create an API token with `marketplace:publish` scope.

### Deploy blocks to marketplace

```bash
# Deploy all blocks
cmssy-forge deploy --all

# Deploy specific blocks
cmssy-forge deploy --blocks hero pricing

# Deploy specific templates
cmssy-forge deploy --templates landing-page

# Dry run (preview without publishing)
cmssy-forge deploy --all --dry-run
```

## Requirements

- Node.js 18+
- BlockForge project with built files in `public/` directory
- Cmssy API token with `marketplace:publish` scope

## Project Structure

Your BlockForge project should have:

```
your-project/
├── blockforge.config.js
├── blocks/
│   └── hero/
│       ├── package.json    # with "blockforge" metadata
│       └── src/
├── public/                 # Build output (from blockforge build)
│   └── @vendor/package-name/version/
│       ├── index.js
│       ├── index.css
│       └── package.json
└── .env                    # Created by cmssy-forge configure
```

## Workflow

1. Build your blocks with BlockForge:
   ```bash
   blockforge build
   ```

2. Configure cmssy-forge (one-time):
   ```bash
   cmssy-forge configure
   ```

3. Deploy to marketplace:
   ```bash
   cmssy-forge deploy --all
   ```

4. Your packages are submitted for Cmssy review
5. Once approved, they'll be available in the marketplace

## License

MIT
