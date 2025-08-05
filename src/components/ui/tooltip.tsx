"use client";

import React, { useState } from "react";

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  className?: string;
}

export const Tooltip = ({ 
  children, 
  content,
  className = "" 
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute z-10 px-2 py-1 text-sm text-white bg-gray-900 rounded-md shadow-lg -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}; 