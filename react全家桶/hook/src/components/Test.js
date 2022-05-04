import React,{ useContext } from 'react';
import myContext from '../context/myContext'

function Test(props) {
    const data = useContext(myContext)
    return (
        <div>
            <h4>小组件</h4>
            <p>number:{data}</p>
        </div>
    );
}

export default Test;