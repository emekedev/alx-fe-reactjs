import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Counter: {count}</p>
            <button onClick={() =>setCount(count + 1)}>Increment</button>
            <button onClick={() =>setCount(count - 1)}>Decrement</button>
            <button onClick={() =>setCount(0)}>Reset</button>
            <button></button>
            <button></button>
        </div>
    )
}