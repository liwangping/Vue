<template>
    <div class="container">
        <child @wn = 'getWn' ></child>
    </div>
</template>

<script>
import child from './child'

export default {
    name: 'demoChild2',
    data() {
        // return {
        //     message: '我很帅',
        //     date: '2019-6-11',
        //     age: '18'
        // }
    },    
    components:{
        child
    },
    methods: {
        getWn (data){
            this.msg = data
        }
    },
}
</script>

