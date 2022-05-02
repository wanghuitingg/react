import logo from './logo.svg';
import './App.css';
import Com from './components/Com'
import { useState } from "react";

function App() {
  const [isShow,changeShow] = useState(false)

  
  return (
    <div className="App">
      <Com />
    </div>
  );
}

export default App;
