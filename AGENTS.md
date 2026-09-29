# Agents

Boot this app first. Do **not** load Payload reference docs unless you are changing CMS schema, hooks, access, or queries.

## Local boot (read this, skip the rest)

1. `pnpm install` then `pnpm dev` → http://localhost:3000 and /admin
2. `POSTGRES_URL` in `.env` (Prisma/`db.prisma.io` is fine)
3. Adapter is `postgresAdapter` from `@payloadcms/db-postgres`. Do not use `vercelPostgresAdapter` with Prisma URLs (Neon WebSocket 404s `wss://db.prisma.io/v2`).
4. Do not import `postgresAdapter` from `@payloadcms/db-vercel-postgres` — that package only exports `vercelPostgresAdapter`.

Details: `.agents/skills/local-dev/SKILL.md`

## Payload CMS (only when needed)

Read `.agents/skills/payload/SKILL.md` first. Open **one** file under `.agents/skills/payload/reference/` that matches the task. Do not load the whole reference folder.
