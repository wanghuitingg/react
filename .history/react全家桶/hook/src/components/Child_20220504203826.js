import React,{ useContext} from 'react';
// useContext 解决多组件传值的问题
import myContext from '../context/myContext'
import Test from './Test'

function Child(props) {
    const data = useContext(myContext)
    console.log(data);
    return (
        <div>
            <h4>子组件</h4>
            <p>number:{data}</p>
        </div>
        <Test />
    );
}
export default Child;