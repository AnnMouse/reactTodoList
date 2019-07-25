### 代码目录简介

- serviceWorker.js 用于WPA，即断网以后用户仍可访问之前缓存的页面
- manifest.json 用于访问页面中的图标的配置
- favicon.ico 访问页面路径中的图标
- App.test.js 用于页面自动化测试
- jsx中组件名称开头必须大写
- Fragment，占位符，将组件中最外层div隐藏掉

### react中的响应式设计思想和事件绑定

- react中的immutable概念：性能角度考虑，修改state中数据一般需要先拷贝一份出来，再用setstate复制。
- 注意jsx中的注释，花括号内注释
- htmlFor="insertArea"，设置光标聚焦的位置
- react面向数据开发，声明式开发，减少dom操作，提高页面相应效率。
- react可与其他框架并存，例如jquery
- react单向数据流，父组件可向子组件传值，但子组件不能直接修改父组件。props的只读属性。
- react是视图层框架，只解决数据与页面渲染问题，其他数据层问题由其他架构完成。
- react函数式编程，维护方便，自动化测试方便。

### react高级内容

- 使用propTypes对接收的属性做强校验
- 使用defaultProps在没有传值的情况下，可以使用默认值。默认值的类型必须与propTypes的类型一致
- 当数据state或者props发生变化时，render函数会被出发一次。当父组件的render函数被运行时，它的子组件的render都将被重新运行。
- 虚拟dom，减少操作真实DOM的性能损耗
1. 获取state数据
2. 获取jsx模板
4. 生成虚拟DOM（虚拟DOM就是一个JS对象，用来描述真实的DOM）
如：['div',{'id':'abc'},['span',{},'helloWorld']]
3. 用虚拟DOM的结构，生成真实DOM显示
5. state发生变化
6. 生成新的虚拟DOM（提高性能）
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别中内容（提高性能）
8. 直接操作DOM，修改span中的内容
- 深入了解虚拟DOM
JSX -> JS 对象 -> 真实的DOM
优点：性能提升，使得跨度安应用得以实现
- Diff算法，用于以上第7步  key值主要用于diff算法。某一节点出现不一致，该节点往后全部不进行比对，直接替换新DOM
- React中ref的使用，获取元素对应的DOM，e.target是一种，另一种为ref。ref表示直接操作DOM，尽量操作数据触发改变。

### react生命周期函数

- 指在某一个时刻组件会自动执行的函数
1. 初始化过程 setup props and state
2. 挂载过程  componentWillMount -> render -> componentDidMount
3. 组件更新流程
1).props componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
2).states shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
4. 取消挂载过程  componentWillUnmount
- 性能优化有以下几个方面
1.this.xx=this.xx.bind(this)将作用域的修改放到constructor，保证作用域的改变只执行一次，避免子组件无用的渲染
2.setState,异步函数，内置提升性能。将多次数据改变合并为一次，降低虚拟DOM的比对频率
3.虚拟DOM同层比对的概念，利用key值提升比对速率，提升性能。
4.shouldComponentUpdate 将改变之前的props和改变后的props做对比，判断是否需要更新，提高性能。
- 使用CSS的渐变效果
```
.hide {
    opacity: 0;
    transition: all 1s ease-in;
}
```
- css动画效果，使用@keyframes定义css动画
@keyframes 样式名称 定义动画效果，使用animation响应动画效果。最后添加forwards，保留最后一帧动画效果。
- react-transition-group(Css transition使用方法)

### redux 

- Redux = Reducer + Flux 数据层框架，所有的数据都存在store中
- Redux 工作流程
1. store 存储所有的公共数据
2. ![avatar](./redux-flow.png)
- 创建store
1. 引用createStore方法，创建store时需要将创建好的reducer传递进去。reducer必须传回函数。
2. 整个流程
1).react要改变store中的数据，先派发action。action通过dispatch方法传递给store,store将之前的数据和action传给reducer。reducer经过处理之后返回新的store。
2).actionTypes用于创建action type常量，减少拼写错误问题
3).统一使用createaction创建action，避免业务逻辑中出现action
- 知识点补充
1. store 是唯一值
2. store中的数据只有store可以改变，reducer只是复制原store内容处理后返回给store
3. reducer 必须是纯函数。纯函数：给定固定的输入，就一定会有固定的输出，不会有任何副作用
4. createStore用于创建一个store，store.dispatch帮助派发action,传递给store。store.getState帮助获取所有store中的数据内容，store.subscribe帮助订阅store的改变，只要store改变，subscribe的灰调函数就会被执行。

### redux进阶

- ui组件负责渲染，容器组件负责逻辑
- 无状态组件：表示一个函数，接收一个props，返回一个jsx。当普通组件只有一个render函数时，可用无状态组件进行替换。无状态组件，减少执行生命周期或者其他的方法的时间，性能比较高。
- 用axio获取数据，赋值给初始store
- 通过reducer创建store的时候使用中间件redux-thunk
1. 安装redux-thunk，
2. 创建store的时候，配置reducer中的redux-thunk。通过enhancer启用多个中间件。
3. action 必须是对象，但添加了redux-thunk后，返回的对象可以是一个函数，且可以将函数派发给store。store接收到函数时，自动执行函数。

### redux 中间件
- 中间件原理：view 派发action，action 通过dispatch方法派发给store，store接收到action连同之前的state一起传给reducer,reducer返回新的数据给store。store改变自己的state,触发组件重新渲染。
- 中间件则存在于action与store之间。action通过dispatch传递一个对象给store。如果action传递的是函数，dispatch会将函数先执行一遍，生成的对象结果返回给store。因此，dispatch根据参数不同进行不同的操作，redux-thunk升级了dispatch方法。
- redux-thunk将异步操作放入了action中操作
- redux-saga将异步操作单独分离出来放入另一个文件进行管理
1. 在组件生命周期里派发action,因为安装了redux-saga,所以不仅仅是reducer可以接收到,sagas文件中也可以接收到,通过takeEvery声明接收哪个type类型的action,一旦接收到,开始执行第二个参数的方法.
2. 执行完方法后会生成新的action,通过put方法,将action派发给store,store接收到action后传给reducer,reducer返回新的数据给store。

### react-redux
- Provider为提供器,链接了store以后,<Provider>里所有的组件全部都可以访问到store的内容
- connect方法做链接,需要三个参数,第三个参数为组件,前两者为链接规则.
- 规则一:mapStateToProps将store与组件关联
- 规则二:props中如何对store进行修改和store中的dispatch做关联












# 以上内容来自：www.dell-lee.com