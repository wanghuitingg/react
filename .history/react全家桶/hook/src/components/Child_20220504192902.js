import React,{ useContext} from 'react';
// useContext 解决多组件传值的问题
import myContext from '.'

function Child(props) {
    return (
        <div>
            <h4>子组件</h4>
        </div>
    );
}

export default Child;