import React,{ useState } from 'react';

function Main(props) {
    const [count,setCount] = useState(1)
    return (
        <div>
            <h1>性能优化</h1>
            <button>点击++</button>

        </div>
    );
}

export default Main;