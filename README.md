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

  ▲ Next.js 15.0.0-rc.0
  - Local:        http://localhost:3000
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
(node:14374) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues
. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ Ready in 1924ms

```
