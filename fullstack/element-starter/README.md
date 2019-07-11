大前端全栈开发思路

在前端vue 项目目录下，建一个server用来做mvc就好了

- 前后端分离 
后端负责提供/api 在server目录下
前端在 src/ 

后端命令行
npm init -y     初始化
yarn add express 
server/index.js 后端入口文件
里面记载建立app 打开端口
api.js 里面记载路由
将相关的记录记录进去

1. 后端在3000，未来等着ngnix 80 -> 3000
/api  API服务 等着前端调用      /  vue 打包好的dist目录 index.html readFile返回
2. 前端一般在8080 vue-router vuex axios
3. 前后端联调，api 数据 -> vue 组件的data
4. 跨域 前端面试最重要的问题
domain 域名,
端口，cross domain
前端不允许 安全问题
前端考虑，页面上显示的要安全
后端考虑，

proxy很重要
- 前端
book.douban.com
www.douban.com
subdomain:domain:port 都一样js
同源机制，相同源是值得信赖的
前后端 8080:3000 跨域
不跨， fetch('/api/user/login') 404
3000 /api/ proxy代理
/api/ 匹配
target: http://localhost:3000/api,
changeOrigin:true
发出去的请求也不跨

