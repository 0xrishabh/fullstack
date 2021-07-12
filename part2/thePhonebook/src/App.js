import React, { useState } from 'react'

const Filter = (props) => {
  return (
    <div>
      filter shown with: <input onChange={(event)=>{props.setSearchQuery(event.target.value)}}/>
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addName}>
        <div>
          name: <input onChange={(event)=>{props.setNewName(event.target.value)}}/><br/>
          number: <input onChange={(event)=>{props.setNewNumber(event.target.value)}}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const Persons = (props) => {
  return (
    <div>
      {
        props.persons.map((person,key) => {
          return person.name.indexOf(props.newQuery) !== -1? 
            <p key={key}>{person.name} {person.number}</p>:
            <></>
        })
      }
    </div>
  )
}
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newQuery, setSearchQuery ] = useState('')
  const addName = (event) => {
    event.preventDefault()
    
    let newObj = {
      name: newName, 
      number: newNumber
    }

    let allNames = persons.map((object)=>object.name)
    if(allNames.indexOf(newName) !== -1){
      alert(`${newName} is already added to phonebook.`)
      return 
    }

    setPersons([...persons].concat([newObj]));
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearchQuery={setSearchQuery}/>
      <PersonForm addName={addName} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newQuery={newQuery}/>
    </div>
  )
}

export default App