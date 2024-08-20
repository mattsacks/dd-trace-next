import * as Sentry from "@sentry/nextjs";

Sentry.init({});

export async function register() {
  const tracer = await import("dd-trace");
  tracer.init({
    logInjection: true,
    runtimeMetrics: true,
  });
}
