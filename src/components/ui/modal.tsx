"use client";

import React from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Modal = ({ 
  isOpen, 
  onClose, 
  children,
  size = "md"
}: ModalProps) => {
  if (!isOpen) return null;
  
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg"
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative glass-card rounded-2xl p-8 w-full mx-4 animate-scale-in ${sizeClasses[size]}`}>
        {children}
      </div>
    </div>
  );
}; 