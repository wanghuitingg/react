import React, { useState } from 'react';
// 

function Com(props) {
    /**
     * useState(params)
     *  params 对状态进行初始化，方法返回一个数组
     *  数组的第0项是当前的state
     *  数组的第1项是修改状态的方法
     */
    const [count, setCount] = useState(1)
    const [list, setList] = useState([{id:1,name:'zs',age:18},{id:2,name:'ls',age:19},{id:3,name:'ww',age:20}])

    const changeCount = () => {
        setCount(count + 1)
    }
    const addList=()=>{
        let _list = [...list]
        _list.push({
            id:new Date().getTime(),
            name:'ll',
            age:13
        })
        setList(_list)
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
                                <span>姓名：{obj.name}</span>
                                <span>年龄：{obj.age}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={addList}>添加list</button>
        </div>
    );
}

export default Com;