import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import QuickApply from './QuickApply';

vi.mock('../common/SectionHeading', () => ({
  default: ({ title, description }) => (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  ),
}));

vi.mock('../common/Button', () => ({
  default: ({ children, type = 'button', onClick }) => (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  ),
}));

describe('QuickApply', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders target opening input fields and auto-generated pitch description', () => {
    render(<QuickApply />);

    expect(screen.getByLabelText(/recruiter \/ hiring email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/role \/ position title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject line/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email body & pitch description/i)).toBeInTheDocument();

    // Check that default pitch contains Harshal's key credentials & resume link
    const messageField = screen.getByLabelText(/email body & pitch description/i);
    expect(messageField.value).toContain('8 years and 9 months');
    expect(messageField.value).toContain('Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf');
  });

  it('shows error when sending without an email', async () => {
    const user = userEvent.setup();
    render(<QuickApply />);

    const sendGmailBtn = screen.getByRole('button', { name: /send via gmail/i });
    await user.click(sendGmailBtn);

    expect(
      screen.getByText(/please enter the recipient email address/i)
    ).toBeInTheDocument();
  });

  it('updates auto-generated pitch dynamically when company and role change', async () => {
    const user = userEvent.setup();
    render(<QuickApply />);

    const companyInput = screen.getByLabelText(/company name/i);
    await user.type(companyInput, 'Acme Corp');

    const messageField = screen.getByLabelText(/email body & pitch description/i);
    expect(messageField.value).toContain('Dear Hiring Team at Acme Corp');
  });

  it('allows copying pitch to clipboard with valid email', async () => {
    const user = userEvent.setup();
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: writeTextMock,
      },
      configurable: true,
      writable: true,
    });

    render(<QuickApply />);

    const emailInput = screen.getByLabelText(/recruiter \/ hiring email/i);
    await user.type(emailInput, 'recruiter@acme.com');

    const copyBtn = screen.getByRole('button', { name: /copy pitch/i });
    await user.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalled();
  });
});
