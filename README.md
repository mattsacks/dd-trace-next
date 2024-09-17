This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's intended to showcase an example where the [dd-trace](https://github.com/DataDog/dd-trace-js) package used in [Next.js instrumentation](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation) will prevent the application from starting.

If the `graphql` package is installed locally, the `@sentry/nextjs` package fails due to a expression dependency.

To reproduce, run `npm run dev` locally:

```sh
❯ npm run dev

> dd-trace@0.1.0 dev
> next dev

 ⚠ Port 3000 is in use, trying 3001 instead.
  ▲ Next.js 14.2.11
  - Local:        http://localhost:3001
  - Experiments (use with caution):
    · instrumentationHook

 ✓ Starting...
 ○ Compiling /instrumentation ...
 ⚠ ./node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platfo
rm/node/instrumentation.js
Critical dependency: the request of a dependency is an expression

Import trace for requested module:
./node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platform/
node/instrumentation.js
./node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platform/
node/index.js
./node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/platform/
index.js
./node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/build/esm/index.js
./node_modules/@prisma/instrumentation/dist/chunk-6MQXHI6Y.js
./node_modules/@prisma/instrumentation/dist/index.js
./node_modules/@sentry/node/build/cjs/integrations/tracing/prisma.js
./node_modules/@sentry/node/build/cjs/index.js
./node_modules/@sentry/nextjs/build/cjs/index.server.js
TypeError: An error occurred while loading instrumentation hook: Cannot set property _initialized of [
object Module] which has only a getter
    at Module.init (webpack-internal:///(instrument)/./node_modules/dd-trace/packages/dd-trace/src/proxy.js:56:23)
    at Module.register (webpack-internal:///(instrument)/./src/instrumentation.ts:10:16)
    at async DevServer.runInstrumentationHookIfAvailable (./node_modules/next/dist/server/dev/next-dev-server.js:437:17)
    at async Span.traceAsyncFn (./node_modules/next/dist/trace/trace.js:154:20)
    at async DevServer.prepareImpl (./node_modules/next/dist/server/dev/next-dev-server.js:214:9)
    at async NextServer.prepare (./node_modules/next/dist/server/next.js:161:13)
    at async initializeImpl (./node_modules/next/dist/server/lib/render-server.js:98:5)
    at async initialize (./node_modules/next/dist/server/lib/router-server.js:420:22)
    at async Server.<anonymous> (./node_modules/next/dist/server/lib/start-server.js:249:36)
```
