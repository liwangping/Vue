### router 核心
- 单页应用避免了传统后端路由每次跳转都刷新页面，另发起一个新的请求，会给用户带来的白屏、耗时等较差体验。因为前段路由采用的是立即加载的方式，不再向服务器请求，而是加载路由对应的组件；而这种思路的实现主要采用两种方案：hashchange 以及  history    
    - hash
        1. 基於hashchange事件，通過window.location.hash 获取地址上的hash值
        2. 通过构造Router类，构造传参配置routes对象设置hash与组件内容的对应