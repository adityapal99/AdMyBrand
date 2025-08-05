"use client";

import React from "react";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const TextArea = ({ 
  className = "", 
  ...props 
}: TextAreaProps) => {
  return (
    <textarea
      className={`w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${className}`}
      {...props}
    />
  );
}; 