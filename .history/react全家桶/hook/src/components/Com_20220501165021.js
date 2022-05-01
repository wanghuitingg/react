import React, { useState } from 'react';

function Com(props) {
    const [count, setCount] = useState(1)
    const [list, setList] = useState([{id:1,name:'zs',age:18},{id:2,name:'ls',age:19},{}])
    const changeCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>函数组件</h1>
            <p>count:{count}</p>
            <button onClick={changeCount}>add</button>
        </div>
    );
}

export default Com;