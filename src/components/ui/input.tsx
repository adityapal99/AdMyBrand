"use client";

import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ 
  className = "", 
  ...props 
}: InputProps) => {
  return (
    <input
      className={`w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${className}`}
      {...props}
    />
  );
}; 