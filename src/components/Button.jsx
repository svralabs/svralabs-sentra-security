import React from 'react';

export default function Button({ variant = 'primary', size = 'medium', disabled = false, children, ...props }) {
  const baseClasses = 'rounded font-bold tracking-tight transition-all';
  const variantClasses = {
    primary: 'bg-primary text-on-primary hover:opacity-90',
    secondary: 'bg-surface-container text-on-surface hover:bg-surface-container-high',
    tertiary: 'bg-transparent text-primary hover:bg-white/5',
  };
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-sm',
    large: 'py-3 px-6 text-base',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
