import { createStore } from "redux";

// 定义状态
let state = {
    number: 1,
    // todolist 用
    list: [
        {
            id: 1,
            name: "吃饭",
            // 判断是否为true，为true时添加.active属性
            isActive: false
        },
        {
            id: 2,
            name: "睡觉",
            isActive: false
        }, {
            id: 3,
            name: "敲代码",
            isActive: true
        }
    ]
}

// 1.定义action type
const ADD_NUM = 'ADD_NUM'
const REDUCE_NUM = 'REDUCE_NUM'
// todolist
const ADD_LIST = 'ADD_LIST'
const REDUCE_LIST = 'REDUCE_LIST'
const CHANGE_LIST = 'CHANGE_LIST'

// 2.定义action creator
// action creator 是一个方法，返回一个action（对象）
function AddActionCreator(data) {
    // 方法返回一个action 可以理解为一个动作
    // action有两个属性
    // type：表示类型 比如说“加”这个动作
    // data：需要传的参数
    return {
        type: ADD_NUM,
        data
    }
}
function ReduceActionCreator(data) {
    return {
        type: REDUCE_NUM,
        data
    }
}
function AddListActionCreator(data) {
    return {
        type: ADD_LIST,
        data
    }
}
function ReduceListActionCreator(data) {
    return {
        type: REDUCE_LIST,
        data
    }
}
function ChangeListActionCreator(data) {
    return{
        type:CHANGE_LIST,
        data
    }
}

// 4.reducer 纯函数 负责更新state
// 接收一个旧的state和action
// 返回一个新的state
function reducer(preState = state, action) {
    console.log(action);
    switch (action.type) {
        case ADD_NUM:
            // Object.assign({})  对对象进行合并，将之后的对象追加到第一个对象里
            return Object.assign({}, preState, {
                number: preState.number + 1
            })
        case REDUCE_NUM:
            return Object.assign({}, preState, {
                number: preState.number - action.data
            })
        case ADD_LIST:
            // 1. 深拷贝state中的list
            let arr = [...preState.list]
            // 2. 向新数组中追加一项
            arr.push({
                id: new Date().getTime(),
                name: action.data,
                isActive: false
            })
            // 3. 设置state中的list
            return Object.assign({}, preState, {
                list: arr
            })
        case REDUCE_LIST:
            // 调用filter方法遍历数组，返回符合条件的一项，并组成新的数组返回
            let arr2 = preState.list.filter(item => {
                return item.id != action.data
            })
            return Object.assign({}, preState, {
                list: arr2
            })
        default:
            return preState
    }
    // return preState
}

const store = createStore(reducer)

// 3.导出store和所有action creator
export {
    store,
    AddActionCreator,
    ReduceActionCreator,
    AddListActionCreator,
    ReduceListActionCreator,
    ChangeListActionCreator
}