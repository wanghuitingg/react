import React,{ useState } from 'react';

function Com(props) {
    const [count,setCount] = useState(1)
    const changeCount=()
    return (
        <div>
            <h1>函数组件</h1>
            <p>count:{count}</p>
            <button onClick={changeCount}>add</button>
        </div>
    );
}

export default Com;