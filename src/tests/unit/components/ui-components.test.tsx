import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';

// ═══════════════════════════════════════════
// Button
// ═══════════════════════════════════════════
describe('Button', () => {
  it('renders children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick handler', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when isLoading is true', () => {
    render(<Button isLoading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is disabled when disabled prop is set', () => {
    render(<Button disabled>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies variant styles', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-indigo-600');

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-red-600');
  });

  it('applies size styles', () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-6');
  });

  it('shows spinner icon when loading', () => {
    const { container } = render(<Button isLoading>Loading</Button>);
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });
});

// ═══════════════════════════════════════════
// Card
// ═══════════════════════════════════════════
describe('Card', () => {
  it('renders children', () => {
    render(<Card><p>Card content</p></Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('has button role when onClick is provided', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable</Card>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has tabIndex=0 when clickable', () => {
    render(<Card onClick={() => {}}>Clickable</Card>);
    expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '0');
  });

  it('calls onClick on Enter key press', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Card</Card>);
    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not have button role without onClick', () => {
    render(<Card>Static card</Card>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

describe('CardHeader', () => {
  it('renders children', () => {
    render(<CardHeader>Header</CardHeader>);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});

describe('CardBody', () => {
  it('renders children', () => {
    render(<CardBody>Body content</CardBody>);
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });
});

describe('CardFooter', () => {
  it('renders children', () => {
    render(<CardFooter>Footer</CardFooter>);
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});

// ═══════════════════════════════════════════
// Input
// ═══════════════════════════════════════════
describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('associates label with input via id', () => {
    render(<Input label="Username" />);
    const input = screen.getByLabelText('Username');
    expect(input).toHaveAttribute('id', 'username');
  });

  it('shows error message', () => {
    render(<Input label="Email" error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('has aria-invalid when error is set', () => {
    render(<Input label="Email" error="Required" />);
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
  });

  it('has aria-describedby pointing to error', () => {
    render(<Input label="Email" error="Required" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-describedby', 'email-error');
  });

  it('shows helper text when no error', () => {
    render(<Input label="Name" helperText="Enter your full name" />);
    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('hides helper text when error is present', () => {
    render(<Input label="Name" helperText="Helper" error="Error" />);
    expect(screen.queryByText('Helper')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<Input label="Name" />);
    const input = screen.getByLabelText('Name');
    await user.type(input, 'Hello');
    expect(input).toHaveValue('Hello');
  });
});

// ═══════════════════════════════════════════
// Progress
// ═══════════════════════════════════════════
describe('Progress', () => {
  it('renders with correct ARIA attributes', () => {
    render(<Progress value={30} max={100} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '30');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('shows percentage label when enabled', () => {
    render(<Progress value={75} max={100} showPercentage />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('shows custom label', () => {
    render(<Progress value={5} max={10} label="5 / 10 completed" />);
    expect(screen.getByText('5 / 10 completed')).toBeInTheDocument();
  });

  it('clamps to 100% when value exceeds max', () => {
    render(<Progress value={150} max={100} showPercentage />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('handles zero max gracefully', () => {
    render(<Progress value={0} max={0} showPercentage />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });
});

// ═══════════════════════════════════════════
// Badge
// ═══════════════════════════════════════════
describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders default variant with indigo colors', () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText('Default')).toHaveClass('bg-indigo-100');
  });

  it('renders outline variant with border', () => {
    render(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText('Outline')).toHaveClass('border');
  });

  it('applies difficulty colors', () => {
    render(<Badge variant="difficulty" difficulty={1}>Easy</Badge>);
    expect(screen.getByText('Easy')).toHaveClass('bg-green-100');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });
});

// ═══════════════════════════════════════════
// Modal
// ═══════════════════════════════════════════
describe('Modal', () => {
  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen onClose={() => {}}>
        <p>Modal content</p>
      </Modal>
    );
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <p>Hidden</p>
      </Modal>
    );
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
  });

  it('renders title', () => {
    render(
      <Modal isOpen onClose={() => {}} title="My Modal">
        Content
      </Modal>
    );
    expect(screen.getByText('My Modal')).toBeInTheDocument();
  });

  it('has dialog role and aria-modal', () => {
    render(
      <Modal isOpen onClose={() => {}}>
        Content
      </Modal>
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('calls onClose when Escape is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen onClose={handleClose}>
        Content
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(
      <Modal isOpen onClose={handleClose}>
        Content
      </Modal>
    );
    const backdrop = screen.getByRole('dialog').parentElement!.querySelector('[aria-hidden="true"]')!;
    await user.click(backdrop);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('has close button with aria-label', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Test">
        Content
      </Modal>
    );
    expect(screen.getByLabelText('關閉')).toBeInTheDocument();
  });
});
