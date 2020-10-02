import React, {useEffect, useState} from 'react';

export default function ExampleSetSate() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [name,setName]=useState('Ashihs');
    const [todos, setTodos] = useState({ text: 'Learn Hooks' ,name:'dsadas'});

    useEffect(() => {
        console.log('Use effect hook is called when count is changed');
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    },[count]);

    useEffect(() => {
        console.log('Use effect hook is called when name is chaned');
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    },[name]);


    return (
        <div>
            <p>You clicked {count} times</p>
            <p>You name is {name}</p>
            <p>You name is {todos.text}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setName('Mrs Gautam')}>
                Change Name
            </button>
            <button onClick={() => setTodos({text: 'Lerning hook',name:'das'})}>
                Change Name
            </button>
        </div>
    );
}
