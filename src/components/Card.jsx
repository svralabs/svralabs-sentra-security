import React from 'react';

export default function Card({ children, className = '', ...props }) {
  const baseClasses = 'p-8 rounded-[32px] bg-surface-container border border-white/10 rim-light hover:border-white/20 transition-all group';

  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}
