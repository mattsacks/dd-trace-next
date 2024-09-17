export async function register() {
  if (process.env.NEXT_RUNTIME !== "edge") {
    const Sentry = require("@sentry/nextjs");

    Sentry.init({
      debug: false,
    });

    const tracer = require("dd-trace");
    tracer.init({
      logInjection: true,
      runtimeMetrics: true,
    });
  }
}
