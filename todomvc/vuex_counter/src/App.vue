<template>
  <div id="app">   
    click {{$store.state.count}} times, count is {{evenOrOdd}}
    {{$store.state.count}}
    <button @click="increment"> +</button>
    <button @click="decrement"> -</button>
    <button @click="incrementIfOdd">increment If Odd</button> 
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
  // 借
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'App',
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
  components: {

  },
  computed:
    // 如果有多处要用到奇偶判断怎么办
    mapGetters([
      'evenOrOdd'
  ])
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
