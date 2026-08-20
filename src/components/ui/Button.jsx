import React from 'react';

export default function Button({ children, variant = 'primary', size = 'medium', className = '', ...props }) {
  const baseClasses = 'font-bold tracking-tight transition-opacity rounded';
  const variantClasses = {
    primary: 'bg-primary text-on-primary hover:opacity-90',
    secondary: 'bg-surface-container text-on-surface hover:bg-surface-container-high',
  };
  const sizeClasses = {
    small: 'py-1 px-3 text-xs',
    medium: 'py-2 px-4 text-sm',
    large: 'py-3 px-6 text-base',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
