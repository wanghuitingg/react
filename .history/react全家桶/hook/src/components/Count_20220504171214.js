import React,{ useReducer } from 'react';

// 初始化状态
const  initialState = {
    number:0
}

// 定义action里的type
const ADD_NUM = 'ADD_NUM'

// 定义reducer（纯函数） xiu
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
    return (
        <div>
            <h1>计数器组件</h1>
        </div>
    );
}

export default Count;