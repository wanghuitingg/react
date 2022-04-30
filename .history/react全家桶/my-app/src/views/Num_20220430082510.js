import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count:state.number
    };
}

function mapDispatchToProps(dispatch) {
    return {
        return{
            reduce:()=>{
                dispatch(RE)
            }
        }
    };
}

class Num extends Component {
    render() {
        return (
            <div>
                <h1>计数器2</h1>
                <p>count:{this.props.count}</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Num);