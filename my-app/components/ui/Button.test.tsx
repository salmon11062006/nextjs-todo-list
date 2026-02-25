import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button component', () => {
    test('renders the button with default props', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    });
});