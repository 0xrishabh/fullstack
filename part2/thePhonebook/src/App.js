import React, { useState, useEffect } from 'react'
import contact from './service/contacts'


const Notification = ({ notification,setMessage }) => {
  let [message,status] = notification
  console.log(message,status)
  if (message === "") {
    return null
  }
  setTimeout(() => setMessage([]), 10000)
  return (   
    <div className={status}>
      {message}
    </div>
  )
}

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
        props.persons.map((person) => {
          if (person.name.indexOf(props.newQuery) !== -1){ 
            return (
              <div key={person.id} id={person.id}>
                <p>{person.name} {person.number}</p>
                <button name={person.name} id={person.id} onClick={(e)=>{
                  
                  if(window.confirm(`delete ${e.target.name}`)){
                    contact.delete(e.target.id).then(() => {
                      props.setMessage([`${e.target.name} Deleted`,"success"])
                    })
                  }
                    
                  
                }}>delete</button>
              </div>
            )
          }
        })
      }
    </div>
  )
}
const App = () => {
  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newQuery, setSearchQuery ] = useState('')
  const [notification, setMessage] = useState([])
  

  const addName = (event) => {
    event.preventDefault()
    
    let newObj = {
      id: persons.length+1,
      name: newName, 
      number: newNumber
    }
    let existInDb = false;
    persons.map((object)=>{
      let name = object.name
      let id = object.id

      if(name === newName){
        let prompt = window.confirm(`${newName} is already added to phonebook, replace the old number with
        the new one?`)
        if (prompt){
          contact.update(id,newObj).then(()=>{
            setMessage([`Updated ${name}`,"success"])
          }).catch(()=>{
            setMessage([`Information for ${name} has already been removed from the server`,"error"])
          })
          
        }
        existInDb = true
      }
      return true
    })
      
    if(!existInDb){
      setPersons([...persons].concat([newObj]));
      contact.create(newObj)
      setMessage([`Added ${newObj.name}`, "success"])
    }
    
  }

  useEffect(() => {contact.getAll().then(results => setPersons(results))}, [])

  return (
    <div>
      <Notification notification={notification} setMessage={setMessage}/>
      <h2>Phonebook</h2>
      <Filter setSearchQuery={setSearchQuery}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newQuery={newQuery} setMessage={setMessage}/>
    </div>
  )
  }



export default App