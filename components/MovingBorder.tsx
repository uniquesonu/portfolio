"use client";
import React, { useState } from "react";
import { Button } from "./ui/moving-border";
 
export function MovingBorder() {
    const [copied, setCopied] = useState(false);
    const copyEmail = () => {
        navigator.clipboard.writeText('its.sonu832@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };
  return (
    <div>
      <Button
      onClick={copyEmail}
        borderRadius="1.5rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3"
      >
        {copied ? 'Email Copied!' : 'Copy my email address'}
      </Button>
    </div>
  );
}