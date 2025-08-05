"use client";

import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md",
  className = "", 
  ...props 
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-secondary text-foreground border border-border hover:bg-accent focus:ring-primary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary"
  };
  
  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}; 