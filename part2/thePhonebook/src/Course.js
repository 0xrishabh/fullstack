const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map((part) => {
          return <Part part={part.name} exercises={part.exercises}/>  
        })}
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <b> total of {props.parts.reduce((total,part)=>total+part.exercises,0)} exercises</b>
    )
  }
  
  const Course = (props) => {
    return (
      <div>
        <Header course={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
      </div>
    )
  }


  export default Course; 