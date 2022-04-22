import './App.css';
import { Router,Link } from 'react-router-dom'

// 导入对应组件
import { Home } from './view/Home'
import { About }from './view/About'

function App() {
  return (
    <div className="App">
      
      <Link to='/'>首页</Link>
      <Link to='/about'>关于我们</Link>

      <Router path='/' component={Home}></Router> |
      <Router path=''></Router>
    </div>
  );
}

export default App;
