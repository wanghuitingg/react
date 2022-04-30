import React, { Component } from 'react';
import { connect } from 'react-redux';
import Add from "../components/Add";
import List from '../components/List'

function mapStateToProps(state) {
    return {
sho
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
                <List />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);