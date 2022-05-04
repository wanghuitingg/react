import React,{ useReducer } from 'react';

// 初始化状态
const  initialState = {
    number:0
}

// 定义action里的type
const ADD_NUM = 'ADD_NUM'

// 定义reducer（纯函数） 修改各个状态
// 函数接收一个旧的state和action，返回一个全新的state
const reducer = (preState=initialState,action)=>{
    switch (action.type) {
        case ADD_NUM:
            // 返回一个新的state
            return Object.assign({},preState,{
                number:preState.number+1
            })
    
        default:
            return preState;
    }
}

function Count(props) {
    /**
     * useReducer(reducer,initialState)
     *  需要两个参数，第一个参数是一个纯函数（reducer），第二个参数是初始的state
     *  方法返回一个数组（最好用解构）
     *    数组第0项是state
     *    数组第1项是dispatch函数
     */
    const [state,dispatch] = useReducer(reducer,initialState)
    const addFun = ()=>{
        // 调用dispatch要传入一个action
        // action跟redux里的
        dispatch({
            type:ADD_NUM
        })
    }
    return (
        <div>
            <h1>计数器组件</h1>
            <p>number:{initialState}</p>
            <button onClick={addFun}>点击修改number</button>
        </div>
    );
}

export default Count;