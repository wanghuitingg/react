import React, { useState,useEffect,useRef } from 'react';
// useState：用来声明状态（state）
// useEffect：将class组件中的componentDidMount,componentDidUpdate,componentWillUnmount合并成一个API
// useRef：类似于class组件中的createRef()

function Com(props) {
    /**
     * useState(params)
     *  params 对状态进行初始化，方法返回一个数组
     *  数组的第0项是当前的state
     *  数组的第1项是修改状态的方法
     */
    // useState 初始化state
    const [count, setCount] = useState(1)
    const [list, setList] = useState([{id:1,name:'zs',age:18},{id:2,name:'ls',age:19},{id:3,name:'ww',age:20}])

    /**
     * useEffect:componentDidMount,componentDidUpdate,componentWillUnmount
     * useEffect(callback,array)
     * 通过array来控制当前useEffect方法的执行
     * 默认不传array 会在componentDidMount，componentDidUpdate时执行
     * [] 会在componentDidMount时执行
     * 第二个参数([]) 里传了某个属性 就代表只有这个属性发生变化才会执行这个办法
     * return后在卸载前执行componentWillUnmount
     */
    // useEffect(()=>{
    //     // componentDidMount
    //     console.log('render');
    //     return()=>{
    //         // componentWillUnmount
    //         console.log('componentWillUnmount');
    //     }
    // },[])
    // useEffect(()=>{
    //     // componentDidMount  componentDidUpdate
    //     console.log('componentDidMount  componentDidUpdate');
    //     // [count]:只有count发生变化 才会进入到这个方法里
    // },[count])
    useEffect(()=>{
        return ()=>{
            // componentDidUpdate  componentWillUnmount
            console.log('render');
        }
    },[count])

    // 定义一个事件处理函数  调用setCount修改count的值
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
            <input></input>
            <button onClick={addList}>添加list</button>
        </div>
    );
}

export default Com;