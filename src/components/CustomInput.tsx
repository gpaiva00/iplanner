interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  className?: string
  type?: string
  disabled?: boolean
  label?: string
  required?: boolean
  optional?: boolean
}

export default function CustomInput(props: CustomInputProps) {
  const {
    value,
    onChange,
    placeholder,
    className,
    type,
    disabled,
    label,
    required,
    optional,
    ...rest
  } = props

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="label">
          {label}
          {required && <span className="text-red-500 text-sm ml-0.5">*</span>}
          {optional && (
            <span className="text-zinc-600 ml-1 text-sm font-thin">
              (opcional)
            </span>
          )}
        </label>
      )}
      <input
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={`${className} rounded focus:outline-none`}
        {...rest}
      />
    </div>
  )
}
