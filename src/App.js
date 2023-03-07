
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
const App = () => {
    const course = 'Half Stack application development'
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
        </div>
        )
}

export default App;
