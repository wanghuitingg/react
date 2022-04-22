import './App.css';
import { Route, Link, Routes } from 'react-router-dom'

// 导入对应组件
import Home from './views/Home'
import About from './views/About'

function App() {
  return (
    <div className="App">

    {/* 配置路由跳转（类似于Vue中的Link） */}
    {/**
     * to:跳转地址
     */}
      <Link to='/'>首页</Link>  |
      <Link to='/about'>关于我们</Link>

      {/**
       * 配置路由信息（类似于Vue中的router.js）
       *  path:'当前页面路径'
       *  
       */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
