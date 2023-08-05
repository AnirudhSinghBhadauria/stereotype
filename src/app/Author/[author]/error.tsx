"use client";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went Wrong,</h2>
      <button
        className="py-2 px-8 border-2 border-gray-700 bg-gray-600 rounded-lg"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
