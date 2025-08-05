"use client";

import React from "react";

export interface AlertProps {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  className?: string;
}

export const Alert = ({ 
  children, 
  variant = "info",
  className = "" 
}: AlertProps) => {
  const variants = {
    info: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-800",
    success: "bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-200 dark:border-green-800",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-200 dark:border-yellow-800",
    error: "bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-200 dark:border-red-800"
  };
  
  return (
    <div className={`p-4 rounded-lg border ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}; 