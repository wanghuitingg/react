import React, { Component,createRef } from 'react';
import { connect } from 'react-redux';
import {AddListActionCreator} from '../components/List'

function mapStateToProps(state) {
    return {

    };
}

// 在props
function mapDispatchToProps(dispatch) {
    return {

    };
}

class Add extends Component {
    constructor(){
        super()

        this.myInput = createRef()
        this.addFun = this.addFun.bind(this)
    }
    addFun(){
        console.log(this.myInput.current);
        // 调用props中的方法
        this.props.add(this.props.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myInput} />
                <button onClick={this.addFun}>ADD</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);