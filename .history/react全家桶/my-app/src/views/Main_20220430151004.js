import React, { Component } from 'react';
import { connect } from 'react-redux';
import Add from "../components/Add";
import List from '../components'

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Main extends Component {
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <Add />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);