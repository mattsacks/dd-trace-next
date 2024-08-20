This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's intended to showcase an example where the [dd-trace](https://github.com/DataDog/dd-trace-js) package used in [Next.js instrumentation](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation) will prevent the application from starting.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. This will cause the Next.js process to crash with the following error:

```sh
❯ npm run dev

> dd-trace@0.1.0 dev
> next dev

  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
  - Experiments (use with caution):
    · instrumentationHook

 ✓ Starting...
 ○ Compiling /instrumentation ...
 ⨯ ./node_modules/dd-trace/packages/datadog-plugin-graphql/src/tools/transforms.js:9:1
Module not found: Can't resolve 'graphql/language/visitor'

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/dd-trace/packages/datadog-plugin-graphql/src/tools/signature.js
./node_modules/dd-trace/packages/datadog-plugin-graphql/src/tools/index.js
./node_modules/dd-trace/packages/datadog-plugin-graphql/src/execute.js
./node_modules/dd-trace/packages/datadog-plugin-graphql/src/index.js
./node_modules/dd-trace/packages/dd-trace/src/plugins/index.js
./node_modules/dd-trace/packages/dd-trace/src/plugin_manager.js
./node_modules/dd-trace/packages/dd-trace/src/proxy.js
./node_modules/dd-trace/packages/dd-trace/src/index.js
./node_modules/dd-trace/packages/dd-trace/index.js
./node_modules/dd-trace/index.js
./src/instrumentation.ts
Error: An error occurred while loading instrumentation hook: Cannot find module './dd-trace
/.next/server/instrumentation'
Require stack:
- ./dd-trace/node_modules/next/dist/server/dev/next-dev-server.js
- ./dd-trace/node_modules/next/dist/server/next.js
- ./dd-trace/node_modules/next/dist/server/lib/start-server.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1219:15)
    at ./dd-trace/node_modules/next/dist/server/require-hook.js:55:36
    at Module._load (node:internal/modules/cjs/loader:1045:27)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:215:24)
    at Module.require (node:internal/modules/cjs/loader:1304:12)
    at mod.require (./dd-trace/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:123:16)
    at DevServer.runInstrumentationHookIfAvailable (./dd-trace/node_modules/next/dist/serve
r/dev/next-dev-server.js:436:51)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Span.traceAsyncFn (./dd-trace/node_modules/next/dist/trace/trace.js:154:20)
    at async DevServer.prepareImpl (./dd-trace/node_modules/next/dist/server/dev/next-dev-s
erver.js:214:9)
    at async NextServer.prepare (./dd-trace/node_modules/next/dist/server/next.js:161:13)
    at async initializeImpl (./dd-trace/node_modules/next/dist/server/lib/render-server.js:
98:5)
    at async initialize (./dd-trace/node_modules/next/dist/server/lib/router-server.js:423:
22)
    at async Server.<anonymous> (./dd-trace/node_modules/next/dist/server/lib/start-server.
js:249:36) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    './dd-trace/node_modules/next/dist/server/dev/next-dev-server.js',
    './dd-trace/node_modules/next/dist/server/next.js',
    './dd-trace/node_modules/next/dist/server/lib/start-server.js'
  ]
}
```
