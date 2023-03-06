
const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>Hello {props.name}, your age is {props.age}</p>
        </div>
    )
}
const Friend = (props) => {

}
const MyComponent = () => {
    return (
        <div>
            <p>greetings from footer</p>
        </div>
    )
}
const App = () => {
    const now = new Date()
    const friends = [
        {name: 'Donham', age: 18},
        {name: 'Peter', age: 28}
    ]
    return (
        <div>
            <p>Hello the current time is, {now.toString()}</p>
            <p>Hello, my name is {friends[0].name}, and my age is {friends[0].age}</p>
            <p>Hello, my name is {friends[1].name}, and my age is {friends[1].age}</p>
            <MyComponent/>
        </div>
        )
}

export default App;
