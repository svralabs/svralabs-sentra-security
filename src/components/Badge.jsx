import React from 'react';

export default function Badge({ variant = 'primary', children, ...props }) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  const variantClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-surface-container text-on-surface',
    tertiary: 'bg-white/10 text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
