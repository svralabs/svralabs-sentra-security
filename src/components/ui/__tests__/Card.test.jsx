import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Card Content</Card>);
    const card = screen.getByText(/card content/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('glass-card rounded-[32px] p-10 flex flex-col gap-8');
  });

  it('renders with additional className', () => {
    render(<Card className="custom-class">Card Content</Card>);
    const card = screen.getByText(/card content/i);
    expect(card).toHaveClass('glass-card rounded-[32px] p-10 flex flex-col gap-8 custom-class');
  });
});
