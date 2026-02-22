#!/usr/bin/env bash
set -euo pipefail

# Repo-local self-audit: lightweight checks for common secret leakage patterns.
# Scans TRACKED files only.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "== ai-youtube-persona-spa self-audit =="

echo "\n-- Potential secret files (should usually be untracked) --"
find . -maxdepth 4 -type f \( \
  -name '.env' -o -name '.env.*' -o -name '*.env' -o \
  -name '*.pem' -o -name '*.key' -o -name '*id_rsa*' \
\) -not -path './.git/*' | sed 's|^\./||' || true

echo "\n-- Risky patterns in tracked files (best-effort grep) --"
TRACKED_FILES=$(git ls-files)
if [[ -z "${TRACKED_FILES}" ]]; then
  echo "No git tracked files found."
  exit 0
fi

FOUND=0
while IFS= read -r f; do
  if grep -nHE --binary-files=without-match \
    '(AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{30,}|xox[baprs]-|sk-[A-Za-z0-9]{20,}|Authorization: Bearer|BEGIN (RSA|OPENSSH) PRIVATE KEY|-----BEGIN PRIVATE KEY-----)' \
    "$f" 2>/dev/null; then
    FOUND=1
  fi
done <<< "$TRACKED_FILES"

if [[ $FOUND -eq 1 ]]; then
  echo "\n[!] Matches found above. Verify they are placeholders and not real secrets."
else
  echo "No matches found in tracked files."
fi

echo "\nDone."
