import type { ReactNode } from 'react';

export interface CardProps {
  title: string;
  imageSrc?: string;
  children?: ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'subtle';
  className?: string;
  children?: ReactNode;
}

