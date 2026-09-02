"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center dark:bg-neutral-950">
      <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        Something went wrong
      </h1>
      <p className="max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
        This page hit an unexpected error. You can try again, or head back to
        the docs home.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
        >
          Try again
        </button>
        <a
          href="/introduction"
          className="rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
        >
          Back to docs
        </a>
      </div>
    </div>
  );
}
