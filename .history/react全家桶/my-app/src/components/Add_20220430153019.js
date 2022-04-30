import React, { Component,createRef } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

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

    }
    render() {
        return (
            <div>
                <input type="text" ref={/>
                <button onClick={this.addFun}>ADD</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);