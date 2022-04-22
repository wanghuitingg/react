import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Test extends Component {
    render() {
        return (
            <div>
                <h1>测试</h1>
                <Redirect to='' />
            </div>
        );
    }
}

export default Test;