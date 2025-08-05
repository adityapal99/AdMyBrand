"use client";

import React from "react";

export interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}

export const Skeleton = ({ 
  className = "",
  variant = "text" 
}: SkeletonProps) => {
  const variants = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded"
  };
  
  return (
    <div className={`bg-secondary animate-pulse ${variants[variant]} ${className}`} />
  );
}; 