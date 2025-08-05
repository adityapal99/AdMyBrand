"use client";

import React from "react";

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export const Checkbox = ({ 
  checked, 
  onChange,
  label,
  className = "" 
}: CheckboxProps) => {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}; 