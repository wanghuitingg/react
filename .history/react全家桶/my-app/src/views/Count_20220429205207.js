import React, { Component } from 'react';
import { connect } from 'react-redux';

// 将store 
function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Count extends Component {
    render() {
        return (
            <div>
                <h1>计数器</h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Count);