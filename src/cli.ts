#!/usr/bin/env node

import { Command } from 'commander';
import { configureCommand } from './commands/configure.js';
import { deployCommand } from './commands/deploy.js';
import { syncCommand } from './commands/sync.js';

const program = new Command();

program
  .name('cmssy-forge')
  .description('Cmssy adapter for BlockForge - publish to marketplace')
  .version('0.1.0');

// cmssy-forge configure
program
  .command('configure')
  .description('Configure Cmssy API credentials')
  .option('--api-url <url>', 'Cmssy API URL', 'https://api.cmssy.io/graphql')
  .action(configureCommand);

// cmssy-forge deploy
program
  .command('deploy')
  .description('Publish blocks/templates to Cmssy marketplace')
  .option('--all', 'Deploy all blocks and templates')
  .option('--blocks <names...>', 'Deploy specific blocks')
  .option('--templates <names...>', 'Deploy specific templates')
  .option('--dry-run', 'Preview what would be deployed without publishing')
  .action(deployCommand);

// cmssy-forge sync
program
  .command('sync')
  .description('Pull blocks from Cmssy marketplace to local project')
  .argument('[package]', 'Package slug to sync (e.g., @vendor/blocks.hero)')
  .option('--workspace <id>', 'Workspace ID to sync from')
  .action(syncCommand);

program.parse();
