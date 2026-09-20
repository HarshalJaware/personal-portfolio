import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Skills from './Skills';

vi.mock('../common/SectionHeading', () => ({
  default: ({ eyebrow, title, description }) => (
    <div>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  ),
}));

describe('Skills', () => {
  it('renders technical categories and technology percentages', () => {
    render(<Skills />);

    expect(screen.getByText('Frontend Development')).toBeInTheDocument();
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getAllByText('95%').length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /proficiency bars/i })).toHaveAttribute('aria-pressed', 'true');
  });

  it('allows switching to compact badges view', async () => {
    const user = userEvent.setup();
    render(<Skills />);

    const badgesButton = screen.getByRole('button', { name: /compact badges/i });
    await user.click(badgesButton);

    expect(badgesButton).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /proficiency bars/i })).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByText('React.js')).toBeInTheDocument();
  });
});
