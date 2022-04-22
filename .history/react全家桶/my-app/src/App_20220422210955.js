import './App.css';
import { Route,Link,Routes } from 'react-router-dom'

// 导入对应组件
import Home from './views/Home'
import About from './views/About'

function App() {
  return (
    <div className="App">
      
      <Link to='/'>首页</Link>  |
      <Link to='/about'>关于我们</Link>

      <Routes>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
      </Routes>
    </div>
  );
}

export default App;
