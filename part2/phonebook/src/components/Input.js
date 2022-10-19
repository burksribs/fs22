const Input = ({ text, value, onchange }) => {
  return (
    <div>
      {text} <input value={value} onChange={onchange} />
    </div>
  )
}

export default Input