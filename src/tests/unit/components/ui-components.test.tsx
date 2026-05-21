import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Skeleton, CardSkeleton, GraphSkeleton } from '@/components/ui/Skeleton';
import { showToast, ToastProvider } from '@/components/ui/Toast';

// Mock react-hot-toast so tests don't need real toast rendering
vi.mock('react-hot-toast', () => {
  const toastFn = vi.fn() as ReturnType<typeof vi.fn> & {
    success: ReturnType<typeof vi.fn>;
    error: ReturnType<typeof vi.fn>;
    loading: ReturnType<typeof vi.fn>;
    dismiss: ReturnType<typeof vi.fn>;
  };
  toastFn.success = vi.fn();
  toastFn.error = vi.fn();
  toastFn.loading = vi.fn();
  toastFn.dismiss = vi.fn();
  return {
    default: toastFn,
    Toaster: () => null,
  };
});

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

// ═══════════════════════════════════════════
// Skeleton
// ═══════════════════════════════════════════
describe('Skeleton', () => {
  it('renders text variant with animate-pulse class', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass('animate-pulse');
  });

  it('renders circular variant with rounded-full', () => {
    const { container } = render(<Skeleton variant="circular" />);
    expect(container.firstChild).toHaveClass('rounded-full');
  });

  it('circular variant uses default 40x40 dimensions', () => {
    const { container } = render(<Skeleton variant="circular" />);
    const div = container.firstChild as HTMLElement;
    expect(div.style.width).toBe('40px');
    expect(div.style.height).toBe('40px');
  });

  it('circular variant accepts custom dimensions', () => {
    const { container } = render(<Skeleton variant="circular" width={80} height={80} />);
    const div = container.firstChild as HTMLElement;
    expect(div.style.width).toBe('80px');
    expect(div.style.height).toBe('80px');
  });

  it('renders rectangular variant with rounded-lg', () => {
    const { container } = render(<Skeleton variant="rectangular" />);
    expect(container.firstChild).toHaveClass('rounded-lg');
  });

  it('rectangular variant uses default 100%×120 dimensions', () => {
    const { container } = render(<Skeleton variant="rectangular" />);
    const div = container.firstChild as HTMLElement;
    expect(div.style.width).toBe('100%');
    expect(div.style.height).toBe('120px');
  });

  it('text single-line renders a single div', () => {
    const { container } = render(<Skeleton variant="text" lines={1} />);
    // Single line renders a single div (not a wrapper)
    expect(container.firstChild).toHaveClass('h-4');
  });

  it('text multi-line renders a wrapper with multiple lines', () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('space-y-2');
    expect(wrapper.children.length).toBe(3);
  });

  it('last line in multi-line text is 60% wide', () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    const wrapper = container.firstChild as HTMLElement;
    const lastLine = wrapper.children[2] as HTMLElement;
    expect(lastLine.style.width).toBe('60%');
  });

  it('applies custom className', () => {
    const { container } = render(<Skeleton className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});

describe('CardSkeleton', () => {
  it('renders a card-shaped skeleton with multiple sections', () => {
    const { container } = render(<CardSkeleton />);
    // Should contain multiple animate-pulse elements
    const pulseElements = container.querySelectorAll('.animate-pulse');
    expect(pulseElements.length).toBeGreaterThan(2);
  });
});

describe('GraphSkeleton', () => {
  it('renders a graph placeholder with circular skeleton', () => {
    const { container } = render(<GraphSkeleton />);
    const circular = container.querySelector('.rounded-full');
    expect(circular).toBeInTheDocument();
  });
});

// ═══════════════════════════════════════════
// Toast (showToast)
// ═══════════════════════════════════════════
describe('showToast', () => {
  it('ToastProvider renders without crashing', () => {
    const { container } = render(<ToastProvider />);
    // react-hot-toast is mocked to null, so container should be empty
    expect(container).toBeDefined();
  });

  it('showToast.success delegates to toast.success', async () => {
    const toastModule = await import('react-hot-toast');
    showToast.success('Great job!');
    expect((toastModule.default as unknown as { success: ReturnType<typeof vi.fn> }).success)
      .toHaveBeenCalledWith('Great job!');
  });

  it('showToast.error delegates to toast.error', async () => {
    const toastModule = await import('react-hot-toast');
    showToast.error('Something broke');
    expect((toastModule.default as unknown as { error: ReturnType<typeof vi.fn> }).error)
      .toHaveBeenCalledWith('Something broke');
  });

  it('showToast.loading delegates to toast.loading', async () => {
    const toastModule = await import('react-hot-toast');
    showToast.loading('Please wait...');
    expect((toastModule.default as unknown as { loading: ReturnType<typeof vi.fn> }).loading)
      .toHaveBeenCalledWith('Please wait...');
  });

  it('showToast.info calls toast with info icon (aria-hidden JSX span)', async () => {
    const toastModule = await import('react-hot-toast');
    showToast.info('FYI');
    // B13: icon is now a JSX span with aria-hidden to suppress screen-reader readout
    expect(toastModule.default).toHaveBeenCalledWith('FYI', expect.objectContaining({
      icon: expect.objectContaining({ type: 'span', props: expect.objectContaining({ 'aria-hidden': 'true' }) }),
    }));
  });

  it('showToast.dismiss delegates to toast.dismiss', async () => {
    const toastModule = await import('react-hot-toast');
    showToast.dismiss('toast-id-1');
    expect((toastModule.default as unknown as { dismiss: ReturnType<typeof vi.fn> }).dismiss)
      .toHaveBeenCalledWith('toast-id-1');
  });

  it('showToast.dismiss with no args dismisses all toasts', async () => {
    const toastModule = await import('react-hot-toast');
    showToast.dismiss();
    expect((toastModule.default as unknown as { dismiss: ReturnType<typeof vi.fn> }).dismiss)
      .toHaveBeenCalledWith(undefined);
  });
});
