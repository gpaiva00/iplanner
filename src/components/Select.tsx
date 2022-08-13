interface Option {
  text: string
  value: string
}

interface SelectProps {
  options: Option[]
  label?: string
  width?: number
  onChange: (value: string) => void
  required?: boolean
  optional?: boolean
  value?: string
}

export default function Select(props: SelectProps) {
  const { options, label, width, onChange, required, optional, value } = props

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

      <select
        className={`rounded focus:outline-none border-zinc-300 w-${String(
          width
        )}`}
        onChange={e => onChange(e.target.value)}
        value={value}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}
