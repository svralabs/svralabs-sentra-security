import React from 'react';

export default function Typography({ variant = 'body', children, className = '', ...props }) {
  const variantClasses = {
    headline: 'font-headline text-headline',
    'headline-sm': 'font-headline-sm text-headline-sm',
    'headline-md': 'font-headline-md text-headline-md',
    body: 'text-on-surface-variant',
    'label-mono': 'font-label-mono text-label-mono',
  };

  const Component = variant.includes('headline') ? 'h1' : 'p';

  return (
    <Component className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
