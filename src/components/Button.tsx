import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'light' | 'outline'
  showIcon?: boolean
}

export function Button({ children, variant = 'primary', showIcon = true, className = '', ...props }: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      {showIcon && <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />}
    </a>
  )
}
