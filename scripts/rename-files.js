#!/usr/bin/env node

/**
 * rename-files.js
 * Recursively rename files and folders to clean slug-based names.
 *
 * Usage:
 *   node scripts/rename-files.js <directory> [--dry-run]
 *
 * Examples:
 *   node scripts/rename-files.js ./public/images
 *   node scripts/rename-files.js ./public/images --dry-run
 */

const fs = require('fs');
const path = require('path');

// ─── CLI Args ────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const targetDir = args.find((a) => !a.startsWith('--'));

if (!targetDir) {
  console.error('\n❌  Please provide a target directory.\n');
  console.error('   Usage: node scripts/rename-files.js <directory> [--dry-run]\n');
  process.exit(1);
}

const rootDir = path.resolve(targetDir);

if (!fs.existsSync(rootDir)) {
  console.error(`\n❌  Directory not found: ${rootDir}\n`);
  process.exit(1);
}

// ─── Slug Helper ─────────────────────────────────────────────────────────────

/**
 * Convert a name (without extension) into a clean slug.
 *
 * Steps:
 *   1. Lowercase
 *   2. Replace dots that are NOT part of a decimal number with a hyphen
 *      e.g. "NO.1" → "no-1" but keep "3.14" as-is (rare edge case, safe here)
 *   3. Remove all special characters except alphanumerics, hyphens, spaces
 *   4. Replace whitespace runs with a single hyphen
 *   5. Collapse multiple hyphens
 *   6. Trim leading / trailing hyphens
 */
function toSlug(name) {
  return name
    .toLowerCase()
    // Replace dots followed by a digit or space/end → treat as separator
    .replace(/\.(?=\s|[a-z]|$)/g, '-')
    // Remove the dot in patterns like "NO.1" (dot between alpha and digit)
    .replace(/([a-z])\.(\d)/g, '$1$2')
    .replace(/(\d)\.([a-z])/g, '$1$2')
    .replace(/\./g, '-')                          // remaining dots → hyphen
    .replace(/[@#$%^&*()+={}\[\]:;"'<>,?/\\|~`!]/g, '') // remove specials
    .replace(/\s+/g, '-')                         // spaces → hyphen
    .replace(/-+/g, '-')                          // collapse hyphens
    .replace(/^-+|-+$/g, '');                     // trim edge hyphens
}

/**
 * Build a slug-safe name for a filesystem entry.
 * Preserves the file extension (lowercased).
 */
function slugName(entry) {
  const ext = path.extname(entry);          // e.g. ".jpg" or ""
  const base = path.basename(entry, ext);   // name without ext
  const slugBase = toSlug(base);
  const slugExt = ext.toLowerCase();        // lowercase extension too
  return slugBase + slugExt;
}

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = { renamed: 0, skipped: 0, conflicts: 0, errors: 0 };

// ─── Rename Logic ─────────────────────────────────────────────────────────────

/**
 * Collect all entries in a directory (non-recursive, sorted deepest-first
 * for safe bottom-up renaming).
 */
function collectEntries(dir) {
  const results = [];

  function walk(current) {
    let entries;
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch (err) {
      console.error(`  ⚠️  Cannot read directory: ${current} — ${err.message}`);
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);                   // recurse first (depth-first)
        results.push({ fullPath, isDir: true });
      } else {
        results.push({ fullPath, isDir: false });
      }
    }
  }

  walk(dir);
  return results;
}

/**
 * Rename a single entry if its slug differs from the current name.
 */
function processEntry({ fullPath, isDir }) {
  const dir = path.dirname(fullPath);
  const currentName = path.basename(fullPath);
  const newName = slugName(currentName);

  if (newName === currentName) {
    // Already clean – nothing to do
    stats.skipped++;
    return;
  }

  const newPath = path.join(dir, newName);

  // Conflict check: target already exists (and is a different file)
  if (fs.existsSync(newPath) && newPath.toLowerCase() !== fullPath.toLowerCase()) {
    console.warn(`  ⚠️  CONFLICT — skipping (target exists):`);
    console.warn(`       FROM: ${fullPath}`);
    console.warn(`         TO: ${newPath}`);
    stats.conflicts++;
    return;
  }

  // On case-insensitive file systems (Windows/macOS) the paths may refer
  // to the same file when only casing changes.  We must still rename.
  const label = isDir ? '📁' : '📄';

  if (DRY_RUN) {
    console.log(`  ${label} [DRY-RUN] ${currentName}  →  ${newName}`);
    stats.renamed++;
    return;
  }

  try {
    fs.renameSync(fullPath, newPath);
    console.log(`  ${label} RENAMED  ${currentName}  →  ${newName}`);
    stats.renamed++;
  } catch (err) {
    console.error(`  ❌  ERROR renaming: ${fullPath}`);
    console.error(`       ${err.message}`);
    stats.errors++;
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const modeLabel = DRY_RUN ? ' (DRY-RUN — no files will be changed)' : '';
  console.log(`\n🚀  rename-files.js${modeLabel}`);
  console.log(`📂  Target: ${rootDir}\n`);

  const entries = collectEntries(rootDir);

  if (entries.length === 0) {
    console.log('ℹ️   No entries found.\n');
    return;
  }

  console.log(`🔍  Found ${entries.length} entries (files + folders).\n`);

  for (const entry of entries) {
    processEntry(entry);
  }

  console.log('\n─────────────────────────────────────────────');
  console.log(`✅  Renamed  : ${stats.renamed}`);
  console.log(`⏭️   Skipped  : ${stats.skipped}`);
  console.log(`⚠️   Conflicts: ${stats.conflicts}`);
  console.log(`❌  Errors   : ${stats.errors}`);
  console.log('─────────────────────────────────────────────\n');

  if (DRY_RUN) {
    console.log('ℹ️   Dry-run complete. Re-run without --dry-run to apply changes.\n');
  }
}

main();
