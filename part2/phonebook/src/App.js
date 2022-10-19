import { useState, useEffect } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState([])

  useEffect(() => axios
    .get("http://localhost:3001/persons")
    .then(response => setPersons(response.data)), []);

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const filterByName = (event) => {
    const search = event.target.value;
    setFilter(search);
    setPersonsToShow(
      persons.filter((person) => person.name.toLowerCase().includes(search))
    );
    console.log(personsToShow)
  };

  const addPerson = (e) => {
    e.preventDefault()
    const person = persons.filter((person) =>
      person.name === newName
    )
    if (person.length !== 0) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    const newPersons = [...persons]
    setPersons(newPersons.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <Header text={"Phonebook"} />
      <Input text={"filter shown with: "} value={filter} onchange={filterByName} />
      <Header text={"add a new"} />
      <PersonForm onsubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Header text={"Numbers"} />
      <Persons personsToShow={personsToShow} filter={filter} persons={persons} />
    </div>
  )
}

export default App;
