import React,{ useState } from 'react';

function Main(props) {
    const [count,setCount] = useState(1)
    const [num,setNum] = useState(10)

    const changeCount = ()=>{
        setCount(count+1)
    }
    return (
        <div>
            <h1>性能优化</h1>
            <p>count:{count}</p>
            <button onClick={changeCount}>点击++</button>
            <p>num:{num}</p>
            <button>点击--</button>
        </div>
    );
}

export default Main;