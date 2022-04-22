import './App.css';
import { Route, Link, Switch } from 'react-router-dom'

// 导入对应组件
import Home from './views/Home'
import About from './views/About'
import Test from './views/Test'
import Active from './views/Active'

function App() {
  return (
    <div key className="App">

      {/* 配置路由跳转（类似于Vue中的Link） */}
      {/**
     * to:跳转地址
     */}
      <Link to='/'>首页</Link>  |
      <Link to='/about'>关于我们</Link> |
      <Link to='/test'>路由跳转Redirect</Link>  |
      <Link to='/active/123'>活动列表</Link>

      {/**
       * 配置路由信息（类似于Vue中的router.js）
       *  path='当前页面路径'
       *  component={<配置当前页面的组件 />}
       */}

      {/**路由匹配默认是： 模糊匹配
         * exact 精确匹配  只有路径完全相同才会被匹配到
         */}
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/test' component={Test} />
      <Route path='/active/:id' component={Active} />

      {/* *从上到下匹配，找到就停止，仅渲染与当前位置匹配的第一个元素
       * 所以，path='/'必须放在最后
       */}
      {/* <Switch>
        <Route path='/about' component={About} />
        <Route path='/' exact component={Home} />
      </Switch> */}



    </div>
  );
}

export default App;
