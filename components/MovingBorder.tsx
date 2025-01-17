"use client";
import React, { useState } from "react";
import { Button } from "./ui/moving-border";
 
export function MovingBorder() {
    const [copied, setCopied] = useState(false);
    const copyEmail = () => {
        navigator.clipboard.writeText('its.sonu832@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 4000);
      };
  return (
    <div>
      <Button
      onClick={copyEmail}
        borderRadius="1.5rem"
        className="bg-slate-900 text-white  border-slate-800 px-6 py-3"
      >
        {copied ? 'Email Copied!' : 'Copy my email address'}
      </Button>
    </div>
  );
}