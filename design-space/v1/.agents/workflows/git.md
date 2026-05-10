---
description: Standardized Git workflow for all agents
---

# Git Workflow

To maintain a clean and traceable history, all agents working on this project MUST follow this git workflow.

> **Note:** This folder is not yet a git repo. See `docs/PUNCH_LIST.md` → Deferred Items → "Git initialization" for the open question on where the repo root should live. Once `git init` is run, the rules below apply.

## Rules

- **Commit after every logical change.** Do not wait until the end of a long task. Commit after every component update, bug fix, or feature addition.
- **Never bundle unrelated work** into one commit.
- **Descriptive messages.** Use the format: `Component/Feature: Brief description of changes`.
- **Never force-push** to shared branches without explicit human approval.
- **Never skip hooks** (`--no-verify`) unless the human explicitly asks for it. If a hook fails, fix the underlying issue.

## Steps

1. Check for untracked or modified files:
   ```bash
   git status
   ```
2. Review the change you're about to commit:
   ```bash
   git diff
   ```
3. Add changes to the staging area (prefer named paths over `git add .` to avoid sweeping in unintended files):
   ```bash
   git add <paths>
   ```
4. Commit with a descriptive message:
   ```bash
   git commit -m "Component/Feature: Brief description of changes"
   ```
5. Verify the commit was successful:
   ```bash
   git log -n 1
   ```

## When a hook fails

The commit did **not** happen. Do **not** use `--amend` to retry — that would modify the previous commit. Instead: fix the issue, re-stage, and create a new commit.
