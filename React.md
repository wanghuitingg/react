#  React

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
  - 方法二：写在html里（不推荐）![image-20220412211951333](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220412211951333.png)
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



## 五. 生命周期

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