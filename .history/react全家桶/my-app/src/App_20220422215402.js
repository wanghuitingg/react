import './App.css';
import { Route, Link, Switch } from 'react-router-dom'

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
      <Link to='/test'>测试</Link>


      {/**
       * 配置路由信息（类似于Vue中的router.js）
       *  path='当前页面路径'
       *  component={<配置当前页面的组件 />}
       */}

      {/**路由匹配默认是： 模糊匹配
         * exact 精确匹配  只有路径完全相同才会被匹配到
         */}
      {/* <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/test' component={Test} /> */}

      <Switch>
        
        <Route path='/about' component={About} />
      </Switch>



    </div>
  );
}

export default App;
