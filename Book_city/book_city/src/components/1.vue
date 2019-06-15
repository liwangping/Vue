<template>
 <div>
  <h1>我是父组件！</h1>
  <child message="我是子组件一！"></child> //通过自定义属性传递数据
 </div>
</template>
 
<script>
import Child from './2'
export default {
    name: "father",
    components: {Child},
}
</script>