import React, { Component } from 'react';
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

        this.addFun = this.addFun.bi
    }
    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={this.addFun}>ADD</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);