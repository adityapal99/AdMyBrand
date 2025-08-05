"use client";

import React from "react";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Spinner = ({ 
  size = "md",
  className = "" 
}: SpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };
  
  return (
    <div className={`animate-spin rounded-full border-2 border-border border-t-primary ${sizeClasses[size]} ${className}`} />
  );
}; 