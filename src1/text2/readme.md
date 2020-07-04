# React生命周期钩子函数
## 页面渲染期
* constructor                       构造函数 在所有函数执行之前它先执行(数据接收 实现继承super(props))
* UNSAFE_componentWillMount         组件将要挂载(数据挂载之前 可以操作数据 不可以操作dom)
* render                            页面渲染(渲染组件 和 html 标签)
* componentDidMount                 组件挂载完成(数据挂载之后 可以操作数据和dom)

## 页面更新期
* UNSAFE_componentWillReceiveProps   父组件上状态变化时 会自动触发钩子函数 子组件可以由此决定是否接收数据(接收组件传入输入数据)

* shouldComponentUpdate              组件是否要更新数据，需要返回布尔值 true 跟新数据 false 不更新数据(检测组件内的变化 可以用作页面性能的优化(默认值为true))
* UNSAFE_componentWillUpdate         组件更新数据(组件更新之前调用)
* render                             页面从新渲染(组件更新之后渲染组件)
* componentDidUpdate                 组件数据更新完成(组件更新之后调用)

## 页面销毁期
* componentWillUnmount               页面销毁(组件销毁时调用 可以做一些内存的优化 [全局变量,闭包,计时器,事件])