import React,{ useState } from 'react';

function Com(props) {
    const [count,setCount] = useState("hello world")
    return (
        <div>
            <h1>函数组件</h1>
            <p>count:{count}</p>
        </div>
    );
}

export default Com;