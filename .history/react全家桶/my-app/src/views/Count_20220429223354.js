import React, { Component } from 'react';
import { connect } from 'react-redux';

// 将store中的state与props做一个映射
function mapStateToProps(state) {
    return {
        num:state.number
    };
}

//  
function mapDispatchToProps(dispatch) {
    return {

    };
}

class Count extends Component {
    render() {
        return (
            <div>
                <h1>计数器</h1>
                <p>num:{this.props.num}</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Count);