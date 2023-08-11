import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts'

const app = new Hono()
app.use('/*', async (c, next) => {
  c.header('X-Frame-Options', 'SAMEORIGIN')
  c.header('frame-ancestors', "'self'")
  c.header('X-Content-Type-Options', 'nosniff')
  c.header('X-XSS-Protection', '1; mode=block;')
  await next()
})
app.get('/*', serveStatic({
  root: './'
}))
Deno.serve(app.fetch)
