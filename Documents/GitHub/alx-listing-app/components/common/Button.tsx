import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonProps } from '../../interfaces';

const base =
  'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black',
  secondary: 'bg-white text-black border border-gray-300 hover:bg-gray-50 focus:ring-gray-300',
  subtle: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-200',
};

type Native = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps & Native) {
  const classes = [base, variants[variant], className].filter(Boolean).join(' ');
  return <button className={classes} {...props}>{children as ReactNode}</button>;
}

