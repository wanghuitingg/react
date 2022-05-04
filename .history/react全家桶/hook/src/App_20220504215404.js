import './App.css';
import Com from './components/Com'
import Count from './components/Count'
import Main from './components/Main'

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
      {/* <Count /> */}
      <M
    </div>
  );
}

export default App;
