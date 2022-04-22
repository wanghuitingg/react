import './App.css';
import { Router,Link } from 'react-router-dom'

// 导入对应组件
import { Home } from './view/Home'
import { About }from './view/About'

function App() {
  return (
    <div className="App">
      
      <Link to='/'>首页</Link>
      <Link></Link>
    </div>
  );
}

export default App;
