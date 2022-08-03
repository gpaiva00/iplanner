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
}

export default function Badge(props: BadgeProps) {
  const { children, type = 'info' } = props

  return (
    <div
      className={classNames(
        'flex gap-1 text-xs font-semibold py-1 px-2 rounded text-white items-center',
        { 'bg-success text-green-700': type === 'success' },
        { 'bg-red-700': type === 'danger' },
        { 'bg-orange-700': type === 'warning' },
        { 'bg-info text-blue-700': type === 'info' },
        { 'bg-gray-500': type === 'light' },
        { 'bg-gray-900': type === 'dark' },
        { 'bg-wishlist text-purple-700': type === 'wishlist' }
      )}
    >
      {children}
    </div>
  )
}
