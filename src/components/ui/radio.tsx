"use client";

import React from "react";

export interface RadioProps {
  checked: boolean;
  onChange: (value: string) => void;
  label?: string;
  name: string;
  value: string;
  className?: string;
}

export const Radio = ({ 
  checked, 
  onChange,
  label,
  name,
  value,
  className = "" 
}: RadioProps) => {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="w-4 h-4 text-primary border-border focus:ring-primary focus:ring-2"
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}; 