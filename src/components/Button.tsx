import classNames from 'classnames'
import { CircleNotch } from 'phosphor-react'

interface ButtonProps {
  className?: string
  onClick?: () => void
  children?: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg' | 'full'
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'outline-primary'
    | 'no-border-primary'
    | 'outline-secondary'
    | 'outline-tertiary'
    | 'danger'
    | 'no-border-danger'

  isLoading?: boolean
  icon?: React.ReactNode
}

export default function Button(props: ButtonProps) {
  const {
    className,
    onClick,
    children,
    disabled,
    type = 'button',
    size = 'md',
    variant = 'primary',
    isLoading = false,
    icon = null
  } = props

  return (
    <button
      onClick={onClick}
      className={classNames(
        'h-10 flex items-center justify-center gap-2 rounded py-2 px-4 transition-colors',
        {
          'bg-primary text-white': variant === 'primary',
          'bg-secondary': variant === 'secondary',
          'bg-tertiary': variant === 'tertiary',
          'bg-transparent border border-primary text-primary':
            variant === 'outline-primary',
          'hover:bg-secondary hover:text-white hover:border-secondary':
            variant === 'outline-primary',
          'hover:bg-secondary hover:text-white hover:border-secondary border-0':
            variant === 'no-border-primary',
          'bg-outline-secondary': variant === 'outline-secondary',
          'bg-outline-tertiary': variant === 'outline-tertiary',
          'hover:bg-secondary': variant === 'primary',
          'hover:bg-primary': variant === 'secondary',
          'text-secondary border border-secondary hover:bg-secondary hover:text-white':
            variant === 'danger',
          'text-secondary border-0 hover:bg-secondary hover:text-white':
            variant === 'no-border-danger',
          'text-gray-700':
            variant === 'secondary' || variant === 'outline-secondary',
          'text-gray-600':
            variant === 'tertiary' || variant === 'outline-tertiary',
          'cursor-not-allowed': disabled || isLoading,
          'opacity-70': disabled || isLoading,
          'pointer-events-none': disabled || isLoading,
          'max-w-[100px]': size === 'sm',
          'max-w-[150px]': size === 'md',
          'max-w-[200px]': size === 'lg',
          'w-full': size === 'full'
        },
        className
      )}
      type={type}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <CircleNotch size={20} className="text-terracota-100 animate-spin" />
      )}

      {!isLoading && icon && <span>{icon}</span>}

      {children}
    </button>
  )
}
