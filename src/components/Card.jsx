import React from 'react';

export default function Card({
  children,
  className = '',
  variant = 'glass',
  rounded = '3xl',
  padding = 'p-10'
}) {
  const variantClasses = {
    glass: 'bg-surface-dim/80 backdrop-blur-lg border border-outline-variant/10',
    solid: 'bg-surface-container-high border border-outline-variant/10'
  };

  const roundedClasses = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    '2xl': 'rounded-[32px]',
    '3xl': 'rounded-[40px]',
    full: 'rounded-full'
  };

  return (
    <div className={`${variantClasses[variant]} ${roundedClasses[rounded]} ${padding} ${className}`}>
      {children}
    </div>
  );
}
