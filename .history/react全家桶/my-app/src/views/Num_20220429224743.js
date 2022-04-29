import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count:state.number
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
                <p></p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Num);