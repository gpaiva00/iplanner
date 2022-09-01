import classNames from 'classnames'
import { Maybe } from '../graphql/generated'

interface CardProps {
  children: React.ReactNode
  imgSrc?: Maybe<string> | undefined
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Card(props: CardProps) {
  const { imgSrc, children, size = 'md' } = props

  return (
    <div
      className={classNames(
        'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col',
        { 'w-72': size === 'md' },
        { 'w-48': size === 'sm' },
        { 'w-60': size === 'lg' }
      )}
    >
      {imgSrc && (
        <img
          alt=""
          className="rounded-t-lg max-h-80 object-cover"
          src={imgSrc}
        />
      )}
      <div className="flex h-full flex-col justify-center gap-4 p-4">
        {children}
      </div>
    </div>
  )
}
