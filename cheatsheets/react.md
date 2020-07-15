### making components

```js
// a Person component that shows person's name
// Props in mustaches mean's will evaluate props.name
function Person(props) {
    return <div style={{fontSize: props.age}}>
        {props.name} 
    </div>
}
```

### use a component
```js
// here, you render the Person component
// and pass in the name "alice" in a prop
<Person name="alice" age={30}/>
```

### Looping over components using .map()
```js
function App() {
    const people=['Alice','Bob','Casey','Diana']
    return <div>
        {people.map((item,index)=> {
            // "key" is something that React needs (special prop) 
            return <Person key={index} name={item}/>
        })}
    </div>
}
```

### useState 
```js
// "state" lets you handle changes on your site
// in an intelligent way
function Counter() {
    const [count,setCount] = useState(0)
    return <button onClick={()=>
    setCount(count+1)]}>
    You clicked me {count} times!
    </button>
}
```
### conditionally rendering components 
```js
// you can use && to render a component based on some javascript condition
function App(){
    return <div>
        {1+1===2 && <WillRender />}
        {1+1===3 && <WontRender />}
    </div>
}

// you can also use "ternary expression" to
// conditionally render a component
function App(){
    return <div>
    {1+1===2 ? <WillRender /> : <WontRender />}
    </div>
}
```