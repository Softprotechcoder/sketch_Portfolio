# GitHub Pages CI Quick Fix

## Current CI Status

The Angular CI build is working. In the latest checked run:

- `Install dependencies` passed.
- `Run unit tests` passed.
- `Build for GitHub Pages` passed.
- `Upload GitHub Pages artifact` passed.
- `Deploy to GitHub Pages` failed.

The deploy failure is:

```text
Failed to create deployment (status: 404)
Ensure GitHub Pages has been enabled:
https://github.com/Softprotechcoder/sketch_Portfolio/settings/pages
```

This means the code and workflow build are OK, but GitHub Pages is not enabled for the repository yet.

## Fastest Fix From GitHub UI

1. Open this repository:

   ```text
   https://github.com/Softprotechcoder/sketch_Portfolio
   ```

2. Go to:

   ```text
   Settings > Pages
   ```

3. Under **Build and deployment**, set **Source** to:

   ```text
   GitHub Actions
   ```

4. Click **Save** if GitHub shows a save button.

5. Open the failed workflow run:

   ```text
   https://github.com/Softprotechcoder/sketch_Portfolio/actions/runs/24937758163
   ```

6. Click **Re-run jobs**.

7. Wait for the workflow to complete.

8. Open the hosted site:

   ```text
   https://softprotechcoder.github.io/sketch_Portfolio/
   ```

## If The Site Still Shows 404

1. Wait 1-3 minutes after the workflow succeeds.
2. Refresh the site with cache bypass:

   ```text
   Ctrl + F5
   ```

3. Confirm the Pages source is still set to **GitHub Actions**.
4. Rerun the workflow once more.

## Optional API Fix

If GitHub CLI is installed and authenticated with an admin-capable account, this can enable Pages from the terminal:

```bash
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/Softprotechcoder/sketch_Portfolio/pages \
  -f build_type=workflow
```

Then rerun the workflow:

```bash
gh run rerun 24937758163 --repo Softprotechcoder/sketch_Portfolio
```

## Notes

- The local `gh` command was not available on this machine when checked.
- The current workflow deploys from the Angular build artifact using GitHub Pages Actions.
- The repository remote has been updated locally to:

  ```text
  https://github.com/Softprotechcoder/sketch_Portfolio.git
  ```
