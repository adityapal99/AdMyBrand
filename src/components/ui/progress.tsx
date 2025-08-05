"use client";

import React from "react";

export interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

export const ProgressBar = ({ 
  value, 
  max = 100,
  className = "" 
}: ProgressBarProps) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className={`w-full bg-secondary rounded-full h-2 ${className}`}>
      <div 
        className="bg-primary h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}; 