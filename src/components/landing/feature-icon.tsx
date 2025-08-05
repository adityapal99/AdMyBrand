"use client";

import React from "react";

export interface FeatureIconProps {
  icon: string;
  className?: string;
}

export const FeatureIcon = ({ icon, className = "" }: FeatureIconProps) => {
  const icons: { [key: string]: string } = {
    ai: "🤖",
    analytics: "📊",
    automation: "⚡",
    design: "🎨",
    social: "📱",
    email: "📧"
  };
  
  return (
    <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl ${className}`}>
      {icons[icon] || "✨"}
    </div>
  );
}; 