import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary text-on-primary');
  });

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toHaveClass('bg-secondary text-on-secondary');
  });

  it('renders with outlined variant', () => {
    render(<Button variant="outlined">Outlined</Button>);
    const button = screen.getByRole('button', { name: /outlined/i });
    expect(button).toHaveClass('border border-outline text-on-surface');
  });

  it('renders with text variant', () => {
    render(<Button variant="text">Text</Button>);
    const button = screen.getByRole('button', { name: /text/i });
    expect(button).toHaveClass('text-primary');
  });

  it('renders with small size', () => {
    render(<Button size="small">Small</Button>);
    const button = screen.getByRole('button', { name: /small/i });
    expect(button).toHaveClass('px-3 py-1.5 text-sm');
  });

  it('renders with medium size', () => {
    render(<Button size="medium">Medium</Button>);
    const button = screen.getByRole('button', { name: /medium/i });
    expect(button).toHaveClass('px-4 py-2 text-sm');
  });

  it('renders with large size', () => {
    render(<Button size="large">Large</Button>);
    const button = screen.getByRole('button', { name: /large/i });
    expect(button).toHaveClass('px-6 py-3 text-base');
  });

  it('renders with full width', () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole('button', { name: /full width/i });
    expect(button).toHaveClass('w-full');
  });
});
