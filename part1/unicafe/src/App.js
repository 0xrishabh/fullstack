import React, { useState } from 'react'

const Header = (props) => {
  return (
    <h1> {props.text} </h1>
  )
}
const Statistic = (props) => {
  return (
    <div>
      {props.text} {props.count}
    </div>
  )
}
const Statistics = (props) => {
  if (props.good==0 & props.neutral==0 & props.bad==0){return (<></>)}
  return (
    <div>
      <Statistic text="good" count={props.good}/>
      <Statistic text="neutral" count={props.neutral}/>
      <Statistic text="bad" count={props.bad}/>
      <Statistic text="all" count={props.good+props.bad+props.neutral}/>
      <Statistic text="average" count={(props.good-props.bad)/(props.good+props.bad+props.neutral)}/>
      <Statistic text="positive" count={props.good/(props.good+props.bad+props.neutral)}/>
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
      <Statistics good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

export default App