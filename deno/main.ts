import { Hono } from 'https://deno.land/x/hono/mod.ts'

const app = new Hono()

Deno.serve(app.fetch)
