"use client";

import React from "react";

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Avatar = ({ 
  src, 
  alt,
  size = "md",
  className = "" 
}: AvatarProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };
  
  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-secondary flex items-center justify-center ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-muted font-semibold">
          {alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}; 