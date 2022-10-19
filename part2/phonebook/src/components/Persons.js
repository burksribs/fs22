const Person = ({ name, number }) => {
  return (
    <p>{name} {number}</p>
  )
}

const Persons = ({ personsToShow, filter, persons }) => {
  if (filter === '')
    return (
      <div>
        {persons.map(person =>
          <Person key={person.name} name={person.name} number={person.number} />
        )}
      </div>
    )

  return (
    <div>
      {personsToShow.map(person =>
        <Person key={person.name} name={person.name} number={person.number} />
      )}
    </div>
  )
}

export default Persons