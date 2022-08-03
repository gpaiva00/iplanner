interface NoContentPlaceholderProps {
  title: string;
  description: string;
}

export default function NoContentPlaceholder(props: NoContentPlaceholderProps) {
  const { title, description } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="font-normal leading-relaxed text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
