import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count:state.
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Num extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Num);