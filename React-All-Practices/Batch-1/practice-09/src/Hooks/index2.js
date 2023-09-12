import React,{useState} from 'react';

const Index2 = () => {
    
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Count: {count}   [Using functional Component with useState]</h1>
            <button className = "my-1" onClick={handleClick}>Increment</button>
        </div>
    );
};

export default Index2;