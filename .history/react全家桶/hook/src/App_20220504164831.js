import './App.css';
import Com from './components/Com'
import Count from ''

import { useState } from "react";

function App() {
  const [isShow, changeShow] = useState(false)

  const changeFun = () => {
    changeShow(!isShow)
  }
  return (
    <div className="App">
      <button onClick={changeFun}>切换isShow</button>
      {
        isShow ? <Com /> : null
      }

    </div>
  );
}

export default App;
