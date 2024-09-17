export async function register() {
  if (process.env.NEXT_RUNTIME !== "edge") {
    const Sentry = await import("@sentry/nextjs");

    Sentry.init({});

    const tracer = await import("dd-trace");
    tracer.init({
      logInjection: true,
      runtimeMetrics: true,
    });
  }
}
