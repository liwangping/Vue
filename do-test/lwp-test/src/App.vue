<template>
  
</template>

<script>
import  MoorSwicth from './components/MoorSwitch'
export default {
  name: 'app',
  data () {
    return {
      lightSwitch:false
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关:', newValue)
  },
  components:{
    'moor-switch':MoorSwicth
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
