import React, { Component } from 'react';

class Active extends Component {
    render() {
        console.log(this.props.match);
        // this.props.match 接收url形参传递的参数
        let {params} = this.props.match;
        console.log();
        return (
            <div>
                <h1>活动列表</h1>
                {this.props}
            </div>
        );
    }
}

export default Active;