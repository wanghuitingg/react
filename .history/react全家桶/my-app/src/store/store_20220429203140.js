import { createStore } from "redux";

// 定义状态
let state = {
    num:1
}

// 定义action type
const ADD_NUM = 'ADD_NUM'

// 定义action creator
// action creator 是一个方法，返回一个action（对象）
function AddActionCreator(add) {
    // 方法返回一个action 可以理解为一个动作
    // action有两个属性
    // type：表示类型 比如说“加”这个动作
    // data：需要传的参数
    return {
        type:ADD_NUM,
        data
    }
}