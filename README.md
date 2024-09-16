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

 ⚠ Port 3000 is in use, trying 3001 instead.
  ▲ Next.js 15.0.0-rc.0
  - Local:        http://localhost:3001
  - Experiments (use with caution):
    · instrumentationHook

 ✓ Starting...
 ○ Compiling /instrumentation ...
 ⨯ ./node_modules/@datadog/native-iast-rewriter/js/source-map/index.js:2:1
Module not found: Can't resolve 'path'
  1 | 'use strict'
> 2 | const path = require('path')
    | ^
  3 | const fs = require('fs')
  4 | const LRU = require('lru-cache')
  5 |

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/@datadog/native-iast-rewriter/main.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/rewriter.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/index.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/index.js
./node_modules/dd-trace/packages/dd-trace/src/proxy.js
./node_modules/dd-trace/packages/dd-trace/src/index.js
./node_modules/dd-trace/packages/dd-trace/index.js
./node_modules/dd-trace/index.js
./src/instrumentation.ts
TypeError: An error occurred while loading instrumentation hook: Cannot set property _initialized of [object Module] which has only a getter
    at Module.init (webpack-internal:///(instrument)/./node_modules/dd-trace/packages/dd-trace/src/proxy.js:56:23)
    at Module.register (webpack-internal:///(instrument)/./src/instrumentation.ts:11:12)
    at async DevServer.runInstrumentationHookIfAvailable (./node_modules/next/dist/server/dev/next-dev-server.js:437:17)
    at async Span.traceAsyncFn (./node_modules/next/dist/trace/trace.js:157:20)
    at async DevServer.prepareImpl (./node_modules/next/dist/server/dev/next-dev-server.js:214:9)
    at async NextServer.prepare (./node_modules/next/dist/server/next.js:161:13)
    at async initializeImpl (./node_modules/next/dist/server/lib/render-server.js:98:5)
    at async initialize (./node_modules/next/dist/server/lib/router-server.js:425:22)
    at async Server.<anonymous> (./node_modules/next/dist/server/lib/start-server.js:250:36)
```
