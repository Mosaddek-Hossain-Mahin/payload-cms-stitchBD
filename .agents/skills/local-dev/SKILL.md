---
name: local-dev
description: Boot stitch-bd locally. Use for setup, POSTGRES_URL, payloadInitError, db.prisma.io, vercelPostgresAdapter WebSocket 404s.
---

# Local development

Use `@payloadcms/db-postgres` (`postgresAdapter`) with `POSTGRES_URL`. Prisma Postgres (`db.prisma.io`) works over TCP.

Do not use `@payloadcms/db-vercel-postgres` with a Prisma URL. That adapter uses Neon’s WebSocket driver and fails with `wss://db.prisma.io/v2` 404. The header `Failed query` overlay is that connection error, not a broken Header component.

## Env

| Variable | Required | Notes |
| --- | --- | --- |
| `POSTGRES_URL` | yes | From Vercel Storage; Prisma host is OK |
| `PAYLOAD_SECRET` | yes | Any long random string locally |
| Stripe keys | no for CMS/UI | Placeholders are fine until checkout |

## Commands

```bash
pnpm install
pnpm dev
```

Restart the dev server after changing the DB adapter. Open `http://localhost:3000/admin` and create the first user.

## Code

```ts
import { postgresAdapter } from '@payloadcms/db-postgres'

db: postgresAdapter({
  pool: { connectionString: process.env.POSTGRES_URL || '' },
})
```
