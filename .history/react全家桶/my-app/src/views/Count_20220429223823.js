import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddActionCreator } from "../store/index";

// 将store中的state与props做一个映射
function mapStateToProps(state) {
    return {
        num:state.number
    };
}

// 将需要对store修改的操作声明在这个对象中，将方法挂在props属性下
function mapDispatchToProps(dispatch) {
    return {
        add:()=>{
            dispatch(AddActionCreator())
        }
    };
}

class Count extends Component {
    render() {
        return (
            <div>
                <h1>计数器</h1>
                <p>num:{this.props.num}</p>
                <button >add</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Count);