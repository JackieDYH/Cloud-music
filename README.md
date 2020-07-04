# src1 练习文件
* 用户信息收集 事件绑定-text
* 父子组件通讯 非父子通讯-text1
* 生命周期钩子函数-text2
* DOM节点操作 state和props混用-text3
* 路由使用-text4
---
# src2 路由使用
* 路由规则
* history | hash 路由模式
* 动态路由 | 查询参数
---
# src3 状态管理
* flux
* redux
---
# src 网易云音乐
* 配置跨域
配置代理：
1. package.json中添加个配置项
---
{
    {
    ...
    },
    "proxy":"http://127.0.0.1:3000"
}
重启react项目，此时，就可以进行代理转发。

在package.json中添加proxy后，当访问一个react项目不存在的路由地址时，会自动的转发到proxy对应的目标域名地址上。（但是当请求的地址和路由规则一致时就会出问题，并且不能设置多个转发规则）

2. 使用插件
```
npm i http-proxy-middleware --save
```
在src目录下创建一个setupProxy.js文件【名字不要写错】，该文件内容如下：

```js
const proxy = require("http-proxy-middleware")
module.exports = function(app){
    app.use(proxy.createProxyMiddleware(
        "/关键词",{
            target:"目标域名地址",
            changeOrigin:true,
            pathRewrite:{
                "^/关键词":""
            }
        }
    ))
}
```
重启项目，然后就可以进行代理转发。
---