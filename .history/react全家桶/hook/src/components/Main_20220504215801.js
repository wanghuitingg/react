import React,{ useState } from 'react';

function Main(props) {
    const [count,setCount] = useState(1)

    const changeCount
    return (
        <div>
            <h1>性能优化</h1>
            <button onClick={changeCount}>点击++</button>
            <button>点击--</button>
        </div>
    );
}

export default Main;