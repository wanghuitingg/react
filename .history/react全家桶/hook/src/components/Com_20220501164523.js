import React,{ useState } from 'react';

function Com(props) {
    const [count,setCount] = useState(1)
    
    return (
        <div>
            <h1>函数组件</h1>
            <p>count:{count}</p>
            <button onCl>add</button>
        </div>
    );
}

export default Com;