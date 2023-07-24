import Link from "next/link";
import React from "react";

function Intro() {
  return (
    <div className="gap-4 max-w-[700px] mx-auto flex flex-col ">
      <div className="mt-4">
        <h1 className="hidden sm:block text-white text-xl text-center">
          Seamlessly Generate TypeScript Interfaces with Runtime Validation from
          JSON, JSON Schema, and GraphQL Queries
        </h1>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-3 ">
        <Link
          href="/generate"
          className="px-6 py-3 rounded bg-pink-500  text-white font-bold"
        >
          Generate Typescript Now
        </Link>
        <button className="hidden sm:inline-block sm:visible bg-white px-4 py-3 rounded">
          Install Vscode Extension
        </button>
      </div>
    </div>
  );
}

export default Intro;
