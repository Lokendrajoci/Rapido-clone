"use client";
import { useState } from "react";

function Page() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="h-screen w-full bg-yellow-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Counter Example</h1>
        <button
          onClick={incrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default Page;
