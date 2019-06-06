- 一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。举个例子，一个 todo 应用的组件树可以是这样的：

根实例
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics

- 只有当实例被创建时 data 中存在的属性才是响应式的

- 唯一的例外是使用Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化

v-html可输出Html结构
你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。

- 每个绑定都只能包含单个表达式，

- 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。

- 对动态参数的值的约束
动态参数预期会求出一个字符串，异常情况下值为 null。这个特殊的 null 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。

- v-bind 缩写
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

- v-on 缩写
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

- 可以对某些不更新的数据，但是计算同时特别麻烦的数据仅从缓存。
      <p>Reversed message: "{{ reversedMessage() }}"</p>
      // 在组件中
      methods: {
      reversedMessage: function () {
      return this.message.split('').reverse().join('')
      }
      }
 以上面的方法进行，直接将计算结果方法输入进去。不建立响应式依赖关系。这样子下次获取
 时会直接获取。
 