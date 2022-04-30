import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    render() {
        return (
            <div>
                <h1>计数器2</h1>
                <p>count:{this.props.count}</p>
                <button onClick={this.props.}>reduce</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Num);