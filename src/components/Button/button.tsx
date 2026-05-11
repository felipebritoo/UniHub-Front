import React from 'react'

type ButtonVariant = 'primary' | 'outline'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  onClick?: () => void
}

/* =========================
   📏 Tamanhos (SRP)
   ========================= */
const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-3 py-2 text-sm',
  medium: 'px-4 py-2.5 text-base',
  large: 'px-6 py-3 text-lg',
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-[var(--color-primary)]',
    'border-[var(--color-primary)]',
    'text-white',
    'hover:bg-[var(--color-primary-hover)]',
    'hover:border-[var(--color-primary-hover)]',
  ].join(' '),

  outline: [
    'bg-transparent',
    'border-[var(--color-primary)]',
    'text-[var(--color-primary)]',
    'hover:bg-[var(--color-primary)]',
    'hover:text-white',
  ].join(' '),
}

export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center rounded-lg border font-semibold',
        'transition-colors duration-200 cursor-pointer',

        'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2',

        sizeStyles[size],
        variantStyles[variant],
      ].join(' ')}
    >
      {children}
    </button>
  )
}