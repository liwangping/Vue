- el: #root 根挂载节点
- App component + vue-router + vuex 混合而一起的应用


new Vue({
    el: '#app',
    render: h => h(App)
})

- vue 的难点是 数据管理
组件状态，data() {},
两兄弟组件共享状态，登陆
props 传递过去
应用状态？

- 当页面上多个组件间要共享状态时，
将共享状态，放置在这些组件的共同的父组件data来管理
状态要唯一，放在一个地方（共同的父组件）方便管理
如果不统一，状态有可能不同步
父子组件通信，v-on:increment = "incrementCount"
porp:   this.$emit();

- 麻烦, 找父节点有麻烦，this.$emit()
很多状态要共享，很多组件，组件关系也错综复杂，
App全局数据管理 Vuex 应用状态管理
