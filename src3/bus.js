// 创建一个公共容器，用来实现父子组件通讯
const EventEmitter = require('events');//引入events模块
const MyEvent = new EventEmitter();//实例化eventEmitter
export default MyEvent;