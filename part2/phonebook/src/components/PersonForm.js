import Input from './Input'
import Button from './Button'

const PersonForm = ({ onsubmit, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={onsubmit}>
      <Input text={"name: "} value={newName} onchange={handleNameChange} />
      <Input text={"number: "} value={newNumber} onchange={handleNumberChange} />
      <Button type={"submit"} text={"add"} />
    </form>
  )
}

export default PersonForm