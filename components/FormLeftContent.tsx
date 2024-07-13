import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FormLeftContent() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className=" flex justify-center items-center px-4">
      <div className="text-4xl md:text-5xl font-bold mx-auto text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Me.
      </div>
    </div>
  );
}
