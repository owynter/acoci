# Agent Session Protocol — ACOCI Website Rebuild

This file is for all agents (Codex, OpenAI, Cursor, Gemini, others). Claude Code reads [`CLAUDE.md`](./CLAUDE.md) automatically; other agents read this file.

**Read [`CLAUDE.md`](./CLAUDE.md) first** — it is the canonical project instruction file.

---

## Session Start

Before doing anything substantive in this repo:

1. Read [`NEXT.md`](./NEXT.md) — current state of play, in-flight work, immediate priorities, live calendar.
2. Read [`CLAUDE.md`](./CLAUDE.md) — operating instructions, stack, project rules, what NOT to build.
3. Read [`docs/PUNCH_LIST.md`](./docs/PUNCH_LIST.md) — Active Decisions, Success Criteria, Failure Conditions, Deferred Items, Open Questions.
4. Check recent git activity: `git log --oneline -20` and `git status --short`. **Note:** repo may not be initialized yet — see PUNCH_LIST.
5. If any item is unclear or appears to contradict another, **ask the human** before acting. Do not silently choose a side.

---

## During the Session

1. **Before changing anything**, check `docs/PUNCH_LIST.md` — the change may be intentionally deferred or already decided.
2. **Commit after every logical change.** Never batch unrelated work into one commit. Commit message format: `Component/Feature: Brief description`. Full protocol in [`.agents/workflows/git.md`](./.agents/workflows/git.md).
3. **If you find a gap** not in `docs/PUNCH_LIST.md`, add it (under Deferred Items, with What / Why deferred / When to address).
4. **If you find a time-sensitive item** not in `NEXT.md`'s Live Calendar, add it.
5. **Do not rewrite `CLAUDE.md` directly.** Flag needed updates in your Session Summary.

---

## Anti-hallucination guardrails

These apply to every session in this repo.

- **Do not invent progress, roadmap items, or repo structure that is not in the files.** If a file or folder isn't there, say so explicitly.
- **Do not describe a stack, runtime, or deployed environment that does not exist.** Verify against actual config files (`docker-compose.yml`, theme `style.css`, etc.) before stating what runs where.
- **If documents disagree, treat the canonical hierarchy as:** `CLAUDE.md` > `docs/PUNCH_LIST.md` > `NEXT.md` > everything else. Call out mismatches instead of silently choosing.
- **If there are uncommitted changes**, mention them in your Session Summary. They materially affect continuity.
- **If you ran a command and it failed**, mention that. Don't paper over it.
- **Do not estimate work in human-engineer hours/days unless explicitly asked.** This project assumes an AI-coding-agent workflow.

---

## Session End

Return a final message in exactly this format. The human uses it to update `NEXT.md`, `docs/PUNCH_LIST.md`, and (if applicable) `CLAUDE.md`.

```
## Session Summary

### Changes made
- [file]: [what changed and why]

### Decisions made
- [architectural or product decisions future agents should know]

### New punch list items (if any)
- [item]: [what / why deferred / when to address]

### Punch list items resolved (if any)
- [item]: [how it was resolved]

### Calendar updates (if any)
- [date / item / type / notes]

### Flagged for human attention
- [anything you couldn't resolve, contradictions you noticed, premises you think need re-examination, uncommitted changes you didn't touch]
```
