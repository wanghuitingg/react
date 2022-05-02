import logo from './logo.svg';
import './App.css';
import Com from './components/Com'
import { useState } from "react";

function App() {
  const [isShow,changeShow] = useState(false)

  const changeFun=()=>{
    chan
  }
  return (
    <div className="App">
      <button onClick={changeFun}>切换isShow</button>
      <Com />
    </div>
  );
}

export default App;
