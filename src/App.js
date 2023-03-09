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
const Display = ({counter}) => <div>Counter: {counter}</div>


const Button = ({handleClick,text}) => <button onClick={handleClick}>{text} </button>


    const App = () => {
        const [counter, setCounter] = useState(0)
        const course = 'Half Stack application development'
        const change = (val) => {
            setCounter(counter + val)
        }
        const setToZero = () => setCounter(0)
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
                <Display counter={counter}/>
                <Header course={course}/>
                <Button handleClick={() => change(1)} text={"+"}/>
                <Button handleClick={() => change(1)} text={"-"}/>
                <Button handleClick={setToZero} text={"Reset"}/>
                <Content parts={parts}/>
            </div>
        )
    }

    export default App;
