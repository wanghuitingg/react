import './App.css';
import { Route, Link, Routes } from 'react-router-dom'

// 导入对应组件
import Home from './views/Home'
import About from './views/About'
import Test from './views/Test'

function App() {
  return (
    <div className="App">

    {/* 配置路由跳转（类似于Vue中的Link） */}
    {/**
     * to:跳转地址
     */}
      <Link to='/'>首页</Link>  |
      <Link to='/about'>关于我们</Link> |
      <Link to='/ est'>测试</Link>


      {/**
       * 配置路由信息（类似于Vue中的router.js）
       *  path='当前页面路径'
       *  element={<配置当前页面的组件 />}
       */}
      <Routes>
        {/**路由匹配默认是： 模糊匹配
         * exact 精确匹配  只有路径完全相同才会被匹配到
         */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      
    </div>
  );
}

export default App;
