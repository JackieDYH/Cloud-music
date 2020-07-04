// flux 官方状态管理器
// 1 引入派发器
import {Dispatcher} from 'flux'
// 4 引入事件监听器
import EventEmitter from 'events'

// 2 定义初始状态
// let state = {
//     name:'flux dyh',
//     age:22
// }

// 5 将状态改写成类
class State extends EventEmitter{
    name = 'flux dyh';
    age = 20;
}
// 7 实例化状态类
let state = new State();

// 3 实例化派发器
const dispatcher = new Dispatcher();
// 通过派发器来派发具体的数据修改操作
dispatcher.register(action=>{
    console.log(action,11)
    switch(action.type){
        case 'changeName':
            state.name = action.params;
            break;
        case 'changeAge':
            state.age = action.params;
            break;
        default:break;
    }
    console.log(state,2222)
    // 通过监听器告诉页面更新
    state.emit('change')
})



export default {state,dispatcher}