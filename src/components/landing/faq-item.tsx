"use client";

import React, { useState } from "react";
import { Card } from "../ui";

export interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card variant="glass" className="animate-slide-up">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-border animate-fade-in">
          <p className="text-muted">{answer}</p>
        </div>
      )}
    </Card>
  );
}; 