import React,{ useState } from 'react';

function Child(props) {
    console.log('子组件render');
    
}
function Main(props) {
    const [count,setCount] = useState(1)
    const [number,setNum] = useState(10)

    const changeCount = ()=>{
        setCount(count+1)
    }
    const changeNum = ()=>{
        setNum(number-1)
    }
    return (
        <div>
            <h1>性能优化</h1>
            <p>count:{count}</p>
            <button onClick={changeCount}>点击++</button>
            <p>number:{number}</p>
            <button onClick={changeNum}>点击--</button>
        </div>
    );
}

export default Main;