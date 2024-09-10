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
 ⨯ ./node_modules/dd-trace/packages/datadog-plugin-graphql/src/tools/transforms.js:9:1
Module not found: Can't resolve 'graphql/language/visitor'
   7 | };
   8 | Object.defineProperty(exports, "__esModule", { value: true });
>  9 | const visitor_1 = require("graphql/language/visitor");
     | ^
  10 | const printer_1 = require("graphql/language/printer");
  11 | const utilities_1 = require("graphql/utilities");
  12 | const lodash_sortby_1 = __importDefault(require("lodash.sortby"));

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
Error: An error occurred while loading instrumentation hook: Cannot find module '/./.next/server/instrumentation'
Require stack:
- ./node_modules/next/dist/server/dev/next-dev-server.js
- ./node_modules/next/dist/server/next.js
- ./node_modules/next/dist/server/lib/start-server.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1142:15)
    at ./node_modules/next/dist/server/require-hook.js:55:36
    at Module._load (node:internal/modules/cjs/loader:983:27)
    at Module.require (node:internal/modules/cjs/loader:1230:19)
    at mod.require (./node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:179:18)
    at DevServer.runInstrumentationHookIfAvailable (./node_modules/next/dist/server/dev/next-dev-server.js:436:51)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Span.traceAsyncFn (./node_modules/next/dist/trace/trace.js:157:20)
    at async DevServer.prepareImpl (./node_modules/next/dist/server/dev/next-dev-server.js:214:9)
    at async NextServer.prepare (./node_modules/next/dist/server/next.js:161:13)
    at async initializeImpl (./node_modules/next/dist/server/lib/render-server.js:98:5)
    at async initialize (./node_modules/next/dist/server/lib/router-server.js:425:22)
    at async Server.<anonymous> (./node_modules/next/dist/server/lib/start-server.js:250:36) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    './node_modules/next/dist/server/dev/next-dev-server.js',
    './node_modules/next/dist/server/next.js',
    './node_modules/next/dist/server/lib/start-server.js'
  ]
}

```
