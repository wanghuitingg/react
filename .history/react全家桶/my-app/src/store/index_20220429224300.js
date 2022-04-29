import { createStore } from "redux";

// 定义状态
let state = {
    number:1
}

// 定义action type
const ADD_NUM = 'ADD_NUM'

// 定义action creator
// action creator 是一个方法，返回一个action（对象）
function AddActionCreator(data) {
    // 方法返回一个action 可以理解为一个动作
    // action有两个属性
    // type：表示类型 比如说“加”这个动作
    // data：需要传的参数
    return {
        type:ADD_NUM,
        data
    }
}

// reducer 纯函数 负责更新state
// 接收一个旧的state和action
// 返回一个新的state
function reducer(preState=state,action) {
    console.log(action);
    switch (action.type) {
        case ADD_NUM:
            // Object.assign({}) hebi
            return Object.assign({})
            break;
    
        default:
            break;
    }
    return preState
}

const store = createStore(reducer)

// 导出store和所有action creator
export{
    store,
    AddActionCreator
}