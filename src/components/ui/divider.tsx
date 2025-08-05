"use client";

import React from "react";

export interface DividerProps {
  className?: string;
}

export const Divider = ({ 
  className = "" 
}: DividerProps) => {
  return (
    <div className={`border-t border-border ${className}`} />
  );
}; 