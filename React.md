#  React- [React](#react)
  - [一、概述](#一概述)
    - [1. React生态圈](#1-react生态圈)
    - [2. JSX一点特别的语法](#2-jsx一点特别的语法)
    - [3.  引入文件](#3--引入文件)
    - [4. 需要注意的点](#4-需要注意的点)
    - [5.vscode 扩展](#5vscode-扩展)
  - [二. 组件&props](#二-组件props)
    - [1. 组件](#1-组件)
      - [1.1 函数组件（无状态组件）](#11-函数组件无状态组件)
      - [1.2 class组件（有状态组件）](#12-class组件有状态组件)
    - [2.组件传参](#2组件传参)
    - [3. 组件定义](#3-组件定义)
    - [4. 组件的引用](#4-组件的引用)
    - [5. 组件通信](#5-组件通信)
    - [6. 组件的重新渲染](#6-组件的重新渲染)
  - [三. 事件&状态](#三-事件状态)
    - [1. 事件](#1-事件)
    - [2. state状态](#2-state状态)
  - [四. 条件渲染&列表渲染](#四-条件渲染列表渲染)
    - [1. 条件渲染](#1-条件渲染)
    - [2.列表渲染](#2列表渲染)
  - [五. React脚手架](#五-react脚手架)
  - [六. 生命周期](#六-生命周期)
    - [1.React中每个class组件都有生命周期（钩子函数）：](#1react中每个class组件都有生命周期钩子函数)
  - [七. React全家桶](#七-react全家桶)
    - [1. 严格模式](#1-严格模式)
    - [2. 目录结构](#2-目录结构)
    - [3. React-Router & 路由三大对象](#3-react-router--路由三大对象)
      - [3.1 react-router](#31-react-router)
      - [3.2 路由三大对象](#32-路由三大对象)
      - [3.3 路由匹配模式](#33-路由匹配模式)
      - [3.4 路由跳转](#34-路由跳转)
      - [3.5 路由跳转传参](#35-路由跳转传参)
      - [3.6 编程式导航](#36-编程式导航)
  - [八. Redux](#八-redux)
    - [1. 适用场景](#1-适用场景)
    - [2. Redux参数](#2-redux参数)
    - [3. 单向数据流](#3-单向数据流)
    - [4. 安装Redux&React Redux](#4-安装reduxreact-redux)
    - [5. React Redux](#5-react-redux)
  - [九. hook](#九-hook)
    - [1. 介绍](#1-介绍)
    - [2. useState](#2-usestate)
    - [3. useEffect](#3-useeffect)
    - [4. useRef](#4-useref)
    - [5. useReducer](#5-usereducer)
    - [6. useContext](#6-usecontext)
    - [7. useMemo](#7-usememo)
    - [8. useCallback](#8-usecallback)

## 一、概述

### 1. React生态圈

React不是双向数据绑定的，但可以通过一些方法进行修改。

1. JSX：扩展了JS自身的语法，是React的基础，是一门独立的语言
2. Flux：React的数据流组件，可以实现组件间的相互通信和数据共享
3. Redux：比Flux更加简单易用
4. React-Router：为单页应用提供了路由功能，用URL控制页面显示状态
5. React-Native：为React编写原生移动应用
6. React-Native：服务端渲染React组件

### 2. JSX一点特别的语法

React运用JSX语法，JSX不会真正的创建DOM元素，JSX只是解析模板语法，创建虚拟DOM节点。需经由ReactDOM渲染才会成为真正的DOM元素。

- 两个特殊属性：

  - class：要写为  `className`
  - for属性：要写为  `htmlFor`
  - checked（复选框勾选）：要写为`defaultChecked`

- 必须有唯一父元素

- 单标签必须闭合

- 标签名全部小写

- 组件名首字母大写

- `<script>`需要添加type属性

  ```jsx
  <script type="text/babel">
  </script>
  ```

- 表达式/变量需要用{ }，注意style写法    eg：

  ```jsx
  `<p style={{
  	fontSize:'40px',
  	background:'green'
  }}></p>`
  ```

  (其中，第一个｛｝表示“插入一段表达式”，第二个｛｝表示“插入一个对象”)
  
  - **tips：（js属性）在js中，所有通过连接符表示的属性都需要转成驼峰式写法**

### 3.  引入文件

- **tips：每个页面都需要引入，且顺序不可更改**

 	1. babel.min.js：用于编译JSX
 	2. react.development.js：react核心库，用来管理组件和状态
 	3. react-dom.development.js：用于渲染组件，依赖react.js

### 4. 需要注意的点

​	1. ![image-20220412090234056](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220412090234056.png)

`ReactDOM.render(一段html代码片段，挂载的元素【使用js原生方法获取】 )`

	2. 

### 5.vscode 扩展

![image-20220501163411955](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220501163411955.png)

快捷键：

- rcc：创建class组件![image-20220501163727985](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220501163727985.png)
- rrdc：redux 创建组件（包含`mapStateToProps`，`mapDispatchToProps`）![image-20220501163940213](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220501163940213.png)
- rsf：创建函数组件![image-20220501163812415](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220501163812415.png)



## 二. 组件&props

### 1. 组件

#### 1.1 函数组件（无状态组件）

- 组件名首字母必须大写
- 组件内部必须有return(一段html代码)
- 函数组件里没有状态，没有钩子函数，只能用于展示

#### 1.2 class组件（有状态组件）

- 通过class关键字定义 组件首字母大写
- 运用ES6类的语法
- 需要继承React.Component
- class组建可以定义状态，有一系列的钩子函数

### 2.组件传参

- 函数组件可以接受一个形参（props），用来接收组件引用时传的参数 
  - 字符串类型：`age="18"`
  - num类型：`age={18}`
  - 对象：`obj={{height:'',weight=''}}`
- class组件通过this.props获取引用组件传的参数

### 3. 组件定义

- 所有的组件都应该显示在页面中
- 组件名首字母必须大写（否则会被认为是html标签）
- class组件必须继承自React.Component
- class组件必须有constructor做状态初始化
- class组件必须有render 

### 4. 组件的引用

- ref：需要引用的组件，给组件/元素起名，**ref不允许重复**（重复后面会覆盖前面）
- refs：父级中引用所有的ref组件

### 5. 组件通信

 1. 父组件向子组件传值：props（ref+refs属性）（ref表示引用）

    - 

    ```jsx
    <script type="text/babel">
        class Parent extends React.Component{
            constructor(){
                super()
                this.addFun = this.addFun.bind(this)
            }
            addFun(){
                let {childCom,myInput} = this.refs
                childCom.add(myInput.value*1)
            }
            render() {
                return(
                    <div>
                        <h1>父组件</h1>
                        <input ref="myInput" type="text" />
                        <button onClick={this.addFun}>点击后子组件count+1</button>
                        <Child ref="childCom"/>
                    </div>
                )
            }
        }
    
        class Child extends React.Component{
            constructor(){
                super()
                this.state={
                    count:0
                }
                this.add = this.add.bind(this)
            }
            add(data){
                this.setState({
                    count: this.state.count +data
                })
            }
            render(){
                return(
                    <div>
                        <h3>子组件</h3>  
                        <p>count:{this.state.count}</p>
                        <button onClick={this.add}>点击count+1</button>  
                    </div>
                )
            }
        }
    
        ReactDOM.render(
            <Parent />,
            document.querySelector("#app")
        )
    </script>
    ```

    - ![image-20220415223751017](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220415223751017.png)

 2. 子组件想父组件传值：在父级中定义相关的数据操作方法，把该方法传递给子级

    ```jsx
    <script type="text/babel">
        class Parent extends React.Component{
            constructor(){
                super()
                this.state={
                    count:0
                }
                this.change = this.change.bind(this)
            }
            change(){
                this.setState({
                    count:this.state.count+1
                })
            }
            render() {
                return(
                    <div>
                        <h1>父组件</h1>
                        <p>count:{this.state.count}</p>
                        <Child parent={this} fun={this.change}/>
                    </div>
                )
            }
        }
    
        class Child extends React.Component{
            constructor(){
                super()
                this.changeFun = this.changeFun.bind(this)
            }
            changeFun(){
                let { parent } = this.props
                // 方法一：全传
                // parent.change()
                // 方法二：只传方法
                this.props.fun()
            }
            render(){
                return(
                    <div>
                        <h3>子组件</h3>
                        <button onClick={this.changeFun}>点击后父组件count+1</button>
                    </div>
                )
            }
        }
        ReactDOM.render(
            <Parent />,
            document.getElementById("app")
        )
    </script>
    ```

 3. 非父子组件

    - 同页面内：公共对象、共同父级中转
    - 跨页面：localStorage、服务器中转
    - redux

### 6. 组件的重新渲染

​	1. setState  （可以让render()重新渲染）

​	2. props的改变

 3. `this.forceUpdate()` 强制渲染  （render方法会重新执行）

    

## 三. 事件&状态

### 1. 事件

-  使用JSX语法时，需要传入一个函数作为事件的处理函数而不能是一个字符串
-  需要注意自定义事件中的this指向问题，通过bind()方法修改this
  - 方法一：写在构造函数中（推荐）![image-20220412212321697](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220412212321697.png)
  - 方法二：写在html里（不推荐）（需要**传参**的话，must）![image-20220412211951333](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220412211951333.png)
-  react中阻止浏览器的默认行为需要使用`preventDefault()`方法，**不能**使用return false

### 2. state状态

state是组件对象最重要的属性，值是对象（可以包含多个数据），用于改变组件内容状态的值

- state只能定义在class组件中
- 需要在构造函数constructor中对state进行初始化（state是一个对象）
- 在html中通过`this.state.xxx`引用
- 修改状态时不可以直接修改，需要调用setState()方法  方法接受一个参数，是一个obj![image-20220412211450342](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220412211450342.png)
- 状态一旦变化，组件就会重新渲染



## 四. 条件渲染&列表渲染

### 1. 条件渲染

- if 语句![image-20220413232552284](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220413232552284.png)
- 三目运算符![image-20220413232648822](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220413232648822.png)

### 2.列表渲染

列表渲染使用`map`方法对列表进行遍历，遍历时一定要绑定**key**属性（react中，数组里的key属性得手动添加）

- for 循环（不推荐）![image-20220413232820789](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220413232820789.png)
- map 方法![image-20220413232911374](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220413232911374.png)

tips：基本数据类型可以通过setState方法修改，引用数据类型（数组、对象）不可以（会直接更改原数据），可以通过**深拷贝**解决。



## 五. React脚手架

![image-20220501125010464](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220501125010464.png)

- 创建项目：`npx creat-react-app `<u><react-app></u>



## 六. 生命周期

### 1.React中每个class组件都有生命周期（钩子函数）：

(只有class里有生命周期能使用钩子函数)

- **`render()` ：是class组件中唯一必须实现的方法；**
- **`constructor(props)` ：通过给`this.state`赋值对象来初始化内部state，为事件处理函数绑定实例；**
- **`componentDidMount()` ：会在组件挂载后（插入DOM树中）立即调用；**
- **`componentDidUpdate(prevProps,prevState,snapshot)` ：会在更新后会被立即调用，首次渲染不会执行此方法；**
- `shouldComponentUpdate(nextProps,nextState)` ：询问组件是否更新（boolean）
- **`componentWillUnmount()` ：会在组件卸载及销毁之前直接调用；**
- `static getDerivedStateFromProps(nextProps,nextState)` ：会在每次调用render方法前调用，并且在初始挂载及后续更新时都会被调用。他应该返回一个对象来更新state，如果返回null则不更新任何内容；
- `getSnapshotBeforeUpdate()` ：在最近一次渲染输出（提交到DOM节点）之前调用。它使得组件能在发生更改之前从DOM中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给`componentDidUpdate()`。

![image-20220416221857677](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220416221857677.png)

![img](https://www.runoob.com/wp-content/uploads/2016/02/ogimage.png)



## 七. React全家桶

### 1. 严格模式

![image-20220422183657204](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220422183657204.png)

`<React.StrictMode>`（仅在开发模式下运行）：是一个用来突出显示应用程序中潜在问题的工具，它为其后代元素触发额外的检查和警告。

- 识别不安全的生命周期
- 关于使用过时字符串ref API的警告
- 关于使用废弃的`findDOMNode`方法的警告
- 检测意外的副作用
- 检测过时的context API



### 2. 目录结构

![image-20220422184448636](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220422184448636.png)

- public 项目中使用的公共文件
  - `manif.json` 移动端配置文件
  - `robots.txt` 告诉爬虫者不可爬的页面，只起警告作用，没实质性作用
- src 项目开发中的源代码
  - `reportWebVitals.js` 谷歌新出的关于浏览器性能优化的库
  - `setupTests.js` 针对 index.js 的单元测试文件



### 3. React-Router & 路由三大对象

#### 3.1 react-router 

- react-router 相关的四大组件

  - `react-router` ：核心库

  - **`react-router-dom` ：react-router的DOM绑定版**

  - `react-router-native` ：react-native用

  - `react-router-config` ：静态配置辅助库

- 路由安装

  - `npm install react-router-dom -D`



#### 3.2 路由三大对象

1. Router：路由对象，包裹在所有路由逻辑（链接、配置）之外
   - 路由的三种模式：![image-20220422171424286](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220422171424286.png)
     - `BrowserRouter` ：基于HTM5的history API，直接以path形式呈现
       - `BrowserRouter`路由传参：h5中的history  /nav
     - `HashRouter` ：基于location.hash，页面不刷新
       - `HashRouter`路由传参：location.has  /#nav
     - `MemoryRouter` ：路由状态保存在内存，刷新页面会消失
2. Route ：路由配置，非常类似于Vue的路由表
3. Link ：路由跳转，类似于Vue的Link



#### 3.3 路由匹配模式

- exact 精确匹配
  - 给需要进行精确匹配的路由添加exact属性
- `<Switch>` 
  - 仅渲染与当前位置匹配的第一位置，但注意需要把首页（/）放在最后



#### 3.4 路由跳转

- 路由跳转 ：本质上路由都是通过history（或近似原理）实现的，而history本质上是一个 **栈** ，所以总共有两种方法来操作：
  - push/pop ：向栈尾添加，从栈尾取出
  - replace ：直接替换掉当前的级别
- 路由的跳转方式
  - `<Link>` ：类似于a链接
  - `<Redirect>` ：相当于replace操作 类似于重定向（无历史记录）



#### 3.5 路由跳转传参

`this.props.match.params`  接收路由跳转时url传参

`this.props.history.location / this.props.location`  获取页面路径

![image-20220429162430613](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220429162430613.png)

- URL传参：`/course/:id`

- 获取参数：`this.props.match`

- 参数说明：（配置路由跳转（类似于Vue中的Link））

  - to（字符串）：跳转地址

  - to = ｛（对象）

    - pathname：跳转的路径
    - **search**：查询的参数（字符串类型），多个参数间用 **&** 连接
      - search属性在路由跳转的时候通过search传递的参数是一个字符串
    - hash：URL中的hash
    - state：{}（给一个对象），如果使用HashRouter模式刷新页面，state参数会丢失
    - ~~query：传递参数刷新页面会丢失（非官方提供的参数）~~

  - }

    

#### 3.6 编程式导航

`this.props.history ` 属性提供了路由跳转的方法

- ` go()`
  - `go(1)`去前一个页面，`go(-1)`去后一个页面
- `goForward()` 向前移动一个位置，相当于go(1)
- `goBack()` 向后移动一个位置，相当于go(-1)
- `push()` 进入到某一个页面（有历史记录）
  - 参数：
    - 1.字符串
    - 2.对象
      - path：跳转路径
      - search：查询的参数
      - hash：URL的hash
      - state：｛｝如果使用HashRouter模式刷新页面，state参数会丢失
- `replace()`
  - 使用方式同push，区别是replace不会在history中增加记录



## 八. Redux

### 1. 适用场景

- 某个组件的状态需要共享
- 某个状态需要在任何地方都能拿到
- 一个组件需要改变全局状态
- 一个组件需要改变另一个组件的状态



### 2. Redux参数

- Action：是把数据从应用传到store的有效载荷，本质上是 JavaScript **普通对象**
- Action Creator：是生成 action 的方法，只是简单的返回一个 **action**
- Reducers：指定了应用状态的变化如何响应 actions 并发送到 store 的，actions 只是**描述了有事情发生**这一事实，并没有描述应用如何更新 state
  - reducer纯函数，负责更新state的，接收一个旧的state和action，**返回一个新的state**![image-20220429123559667](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220429123559667.png)
- **Store**：对象包含所有数据，是 redux 核心，**所有的状态数据都会存在 store 上**



### 3. 单向数据流 

![image-20220429121614101](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220429121614101.png)



### 4. 安装Redux&React Redux

![image-20220429121927865](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220429121927865.png)



### 5. React Redux

- <Provide>容器
  - 能够让它下面所有的组件都能获取到store中的状态，而不用像之前那样需要通过store提供的getState方法获取
- `connect(mapStateToProps,mapDispatchToProps)`
  - 将组件与store关联起来，然后可以通过直接访问props的方式访问store
- `mapStateToProps`
  - 声明将state与props对应的映射关系，建立一个从state对象到props对象的映射关系。`mapStateToProps`会订阅Store，每当state更新的时候就会自动执行，重新计算UI组件的参数，从而触发UI组件的重新渲染。
- `mapDispatchToProps`
  - 将需要对store修改的操作声明在这个对象中，用来建立UI组件的参数到store，dispatch方法的映射。



## 九. hook

### 1. 介绍

- 函数组件没有实例，没有生命周期函数，只有类组件才有
- Hooks是React16.8新增的特性，可以在不编写class的情况下使用state以及其他React属性
- 凡是use开头的React API都是hooks



### 2. useState

- useState是react自带的一个hook函数，它的作用就是用来声明状态变量
- `useState()`函数
  - 接收的参数是我们状态的初始值
  - 返回一个数组，数组的第0项是当前的状态值，第一项是可以改变状态值得方法函数
  - ![image-20220502220350458](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220502220350458.png)



### 3. useEffect

- 在函数组件里面使用class的生命周期函数，还是所有函数的合体，useEffect就是一个Effect Hook，给函数组件增加了操作副作用的能力。
- 它是class组件中componentDidMount，componentDidUpdate，componentWillUnmount的集合API。
- `useEffect(callback,array)`    （同一个组件里可以重复调用多次）
  - 通过array来控制当前useEffect方法的执行
  - 默认不传array 会在componentDidMount，componentDidUpdate时执行
  - [] 会在componentDidMount时执行
  - 第二个参数([]) 里传了某个属性 就代表只有这个属性发生变化才会执行这个办法
  - return后在卸载前执行componentWillUnmount
  - ![image-20220502225549803](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220502225549803.png)



### 4. useRef

- 类组件、React元素用`React.createRef`，函数组件使用`useRef`
- `useRef`返回一个可变的ref对象，其current属性被初始化为传入的参数，useRef返回的ref对象在组件的整个生命周期函数内保持不变，也就是说每次重新渲染函数组件时，返回的ref对象都是同一个
- ![image-20220504195015925](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220504195015925.png)



### 5. useReducer

- `useReducer`和redux中的`reducer`很像，用来管理状态
- `useReducer()`接收一个reducer函数和一个初始的state，返回state和dispatch函数

- ![image-20220504195837537](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220504195837537.png)



### 6. useContext

- `useContext` 解决多组件传值的问题，实现共享
- `useContext(myContext)` 只是让你能够读取context的值以及订阅context的变化，仍需要在上层组件树中使用`<myContext.Provider>`来为下层组件提供context
- ![image-20220504200525704](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220504200525704.png)![image-20220504200727250](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220504200727250.png)![image-20220504200752934](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220504200752934.png)



### 7. useMemo

- 用于性能优化，通过记忆值来避免在每个渲染在每个渲染上执行高开销计算
- `useMemo(callback,array)`
  - callback 是一个函数用于处理逻辑
  - array 控制useMemo重新执行的数组，只有array内容发生变化，才会重新执行
    - 不传数组，每次更新都会重新计算
    - 空数组只会计算一次
    - 依赖对应的值，当对应的值发生变化时才会重新计算
- ![image-20220505114622130](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220505114622130.png)![image-20220505114701597](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220505114701597.png)



### 8. useCallback

- 用于性能优化，只有在依赖项发生变化的时候才会更新（返回一个新的函数）
- `useCallback(callback,array)`
  - callback是一个函数，用于处理逻辑
  - array控制useCallback重新执行的数组，array改变时才会重新执行useCallback
    - 不传数组，每次更新都会重新计算
    - 空数组只会计算一次
    - 依赖对应的值，当对应的值发生变化时才会重新计算
- ![image-20220505115318731](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220505115318731.png)
