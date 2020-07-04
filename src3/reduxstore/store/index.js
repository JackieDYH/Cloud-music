// 基于flux 衍生的 非官方版本状态管理 redux
// 单一数据元 state只读  使用函数修改state
// 1 引入createStore
import {createStore} from 'redux'
// 2 定义初始状态
const initalState = {
    name:'小代 redux',
    age:22
}
// 3 定义纯函数
// state上一次修改完成的状态
// action 是组件dipatch的动作
// reducer 自定义函数 一定要返回一个新的state,否则就检测不到state的变化
function reducer(state = initalState,action){
    console.log(state,11)
    console.log(action,22)
    switch(action.type){
        case 'changeName':
            return{//返回新对象
                ...state,
                name:action.params
            }
        case 'changeAge':
            return{
                ...state,
                age:action.params
            }
        default:
            return state//返回默认状态
    }
}
// 4 创建仓库
const store = createStore(reducer);
export default store;