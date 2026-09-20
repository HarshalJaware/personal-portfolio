import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Contact from './Contact';

vi.mock('../common/SectionHeading', () => ({
  default: ({ title }) => <h2>{title}</h2>,
}));

vi.mock('../common/Button', () => ({
  default: ({ children, type = 'button' }) => (
    <button type={type}>{children}</button>
  ),
}));

describe('Contact', () => {
  it('renders the contact form fields', () => {
    render(<Contact />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty submission', async () => {
    const user = userEvent.setup();

    render(<Contact />);

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(
      screen.getByText('Please enter your name.')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Please enter your email.')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Please enter your message.')
    ).toBeInTheDocument();
  });

  it('validates an invalid email address', async () => {
    const user = userEvent.setup();

    render(<Contact />);

    await user.type(screen.getByLabelText(/name/i), 'Test User');
    await user.type(screen.getByLabelText(/email/i), 'invalid-email');
    await user.type(
      screen.getByLabelText(/message/i),
      'I would like to discuss an opportunity.'
    );

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(
      screen.getByText('Please enter a valid email address.')
    ).toBeInTheDocument();
  });
});