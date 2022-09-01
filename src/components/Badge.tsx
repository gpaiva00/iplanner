import classNames from 'classnames'

interface BadgeProps {
  children: React.ReactNode
  type?:
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'wishlist'
  textAlign?: 'normal' | 'center'
}

export default function Badge(props: BadgeProps) {
  const { children, type = 'info', textAlign } = props

  return (
    <div
      className={classNames(
        'flex gap-1 text-xs font-semibold py-0.5 px-1.5 rounded text-white items-center',
        {
          'bg-success text-green-700': type === 'success',
          'bg-red-500': type === 'danger',
          'bg-orange-700': type === 'warning',
          'bg-info text-blue-700': type === 'info',
          'bg-gray-500': type === 'light',
          'bg-zinc-400': type === 'dark',
          'bg-wishlist text-purple-700': type === 'wishlist',
          'justify-center': textAlign === 'center'
        }
      )}
    >
      {children}
    </div>
  )
}
