import { useState } from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Content = (props) => {
    return (
        <div>
            {props.parts.map(part =>
            <p>{part.name} {part.exercises}</p>
            )}
        </div>
    )
}
const Sum_up = (props) => {
    let acc = 0
        props.total.map(value => {
            acc+=value.exercises  // numbers 1, -1, 3, 5 are printed, each to own line
        })
        return(<div>
            <p>Number of exercises {acc}</p>
        </div>)
}
const Age = (props) => {
    const {name,age} = props
    const [ counter, setCounter ] = useState(0) // first element is an accumlator
    // and the second element is a update method. useState(0) is the initial value
    function change(val) {
        if(counter+val < 0){
            setCounter(0)
        }else {
            setCounter(counter + val)
        }
    }
    function reset(){
        setCounter(0)
    }
    setTimeout(
        () => setCounter(counter + 1),
        1000
    )
    const bornYear = () => new Date().getFullYear() - age
    return (
        <div>
            <p> {name} is {age} years old </p>
            <p> {name} was born in {bornYear()} </p>
            <p>{counter}</p>
            <button onClick={()=>change(1)}>Increment</button>
            <button onClick={()=>change(-1)}>Decrement</button>
            <button onClick= {reset}>Reset</button>
            <p>time: {counter}</p>

        </div>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const name = "Peter"
    const age = 18
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course = {course}/>
            <Content parts = {parts}/>
            <Sum_up total = {parts}/>
            <Age age = {age} name = {name}/>
        </div>
        )
}

export default App;
