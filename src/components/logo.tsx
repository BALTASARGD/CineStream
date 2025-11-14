import { cn } from "@/lib/utils";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      className={cn("text-primary", className)}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="currentColor"
      >
        CineStream
      </text>
    </svg>
  );
};

export default Logo;
