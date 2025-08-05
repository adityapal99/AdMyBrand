"use client";

import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "elevated";
}

export const Card = ({ 
  children, 
  className = "", 
  variant = "default",
  ...props 
}: CardProps) => {
  const variants = {
    default: "bg-background border border-border rounded-2xl p-6 shadow-sm",
    glass: "glass-card rounded-2xl p-6",
    elevated: "bg-background border border-border rounded-2xl p-6 shadow-lg"
  };
  
  return (
    <div className={`${variants[variant]} transition-all duration-300 hover:scale-105 ${className}`} {...props}>
      {children}
    </div>
  );
}; 