import React, { useState } from 'react';

function Com(props) {
    const [count, setCount] = useState(1)
    const [list, setList] = useState([{id:1,name:'zs',age:18},{id:2,name:'ls',age:19},{id:3,name:'ww',age:20}])
    const changeCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>函数组件</h1>
            <p>count:{count}</p>
            <button onClick={changeCount}>add</button>
            <ul>
                {
                    list.map(obj=>{
                        return(
                            <li key={obj.id}>
                                <p>姓名：{obj.name}</p>
                                <p>n</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Com;