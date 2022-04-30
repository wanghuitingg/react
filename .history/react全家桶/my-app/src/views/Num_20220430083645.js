import React, { Component,createRef } from 'react';
import { connect } from 'react-redux';
import { ReduceActionCreator } from "../store/index";

function mapStateToProps(state) {
    return {
        count:state.number
    };
}

function mapDispatchToProps(dispatch) {
    return {
        reduce:()=>{
            dispatch(ReduceActionCreator())
        }
    };
}

class Num extends Component {
    constructor(){
        super()

        this.my
    }
    render() {
        return (
            <div>
                <h1>计数器2</h1>
                <p>count:{this.props.count}</p>
                <input type="text" />
                <button onClick={this.props.reduce}>reduce</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Num);