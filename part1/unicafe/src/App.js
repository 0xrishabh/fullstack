import React, { useState } from 'react'

const Header = (props) => {
  return (
    <h1> {props.text} </h1>
  )
}
const Stats = (props) => {
  return (
    <div>
      {props.text} {props.count}
    </div>
  )
}
const Button = (props) => {
  return (
    <button onClick={() => props.ftype(props.counter+1)} > {props.text}</button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div> 
      <Header text="give feedback"/>
      <Button ftype={setGood} counter={good} text="good"/>
      <Button ftype={setNeutral} counter={neutral} text="neutral"/>
      <Button ftype={setBad} counter={bad} text="bad"/>
      <Header text="statisctics"/>
      <Stats text="good" count={good}/>
      <Stats text="neutral" count={neutral}/>
      <Stats text="bad" count={bad}/>

    </div>
  )
}

export default App