import React,{ useContext} from 'react';
// useContext 解决多组件传值的问题
import myContext from '../myContext'

function Child(props) {
    const data = useContext(myContext)
    
    return (
        <div>
            <h4>子组件</h4>
            <p>number:{}</p>
        </div>
    );
}

export default Child;