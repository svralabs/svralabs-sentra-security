import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) {
  const variantClasses = {
    default: 'bg-white/5 border border-white/10',
    primary: 'bg-primary/10 border border-primary/20 text-primary',
    success: 'bg-success/10 border border-success/20 text-success',
    warning: 'bg-warning/10 border border-warning/20 text-warning',
    error: 'bg-error/10 border border-error/20 text-error'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-2 text-sm'
  };

  return (
    <span className={`${variantClasses[variant]} ${sizeClasses[size]} ${className} inline-flex items-center rounded-full font-label-mono uppercase tracking-tighter`}>
      {children}
    </span>
  );
}
