<template>
    <div class="container">
        <child :send-msg = "message"
        :send-age = "age"
        :send-data = "date" ></child>
    </div>
</template>

<script>
import child from './child'

export default {
    name: 'demoChild1',
    props:{
        sendMsg: {
            type: String,
            require: true
        },
        sendAge: {
            type: String,
            require: true
        },
        sendData: {
            type: String,
            require: true
        }
    },
    data() {
        return {
            message: '我很帅',
            date: '2019-6-11',
            age: '18'
        }
    },    
    components:{
        child
    }
}
</script>

