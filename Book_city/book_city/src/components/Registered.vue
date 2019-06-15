<template>
  <div class="login">
    <div class="login_body">
      <el-row>
        <el-col :span="10" class="login-left">
          <div class="grid-content bg-purple">
            <div class="monkey">
              <img src="../assets/monkey.png"/>
            </div>
          </div>
        </el-col> 
        <el-col :span="14" class="login-right">
          <div class="grid-content bg-purple-light">
            <div class="login_box">
              用户名：
              <el-input class="input_box" v-model="input" placeholder="请输入账号"></el-input>
              用户密码：
              <el-input class="input_box" placeholder="请输入密码" v-model="password" show-password></el-input>
              确认密码：
              <el-input class="input_box" placeholder="请输入密码" v-model="confirmpassword" show-password></el-input>              
             <div class=""></div>
              用户：
              <el-select v-model="value" placeholder="请选择您的角色">
                <el-option
                  v-for="item in options"
                  :key="item.value" 
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <div style="margin-bottom:20px"></div>
               <el-button type="danger" style="float:left; margin-left:90px; margin-top: 50px;" size="medium">Registered</el-button>
               <router-link to="/">
               <el-button type="text" style="float:right; margin-top: 50px; color: rgba(80, 80, 80, 1)">已有账号，点击这里登录</el-button>
               </router-link>
            </div>

            </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: '',
      password: '',
      confirmpassword:'',
      radio: '',
       options: [{
          value: '选项1',
          label: '一般用户'
        }, {
          value: '选项2',
          label: '图书销售商'
        }],
        value: ''     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .login{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(114, 192, 178, 1)
} */
.login{
  background-color: rgba(114, 192, 178, 1);
  height: 100%;
}
.login-left{
  height: 500px;
}
.login-right{
  height: 500px;
}
.login_box_title{
  width: 83px;
	height: 36px;
  color: rgba(80, 80, 80, 1);
	font-size: 20px;
	line-height: 150%;
	text-align: left;
  margin-bottom: 17px;
  margin-top: 23px;
}
.monkey{
  padding-top: 200px;
  padding-left:200px ;
}
.login_box{
  margin-top: 220px;
  width: 500px;
  height: 300px;
}
/* .name{
 padding-bottom: 10px;
} */
.input_box{
  margin-top: 10px;
  margin-bottom: 10px;
}
.isRemenber{
  margin-bottom: 20px;
}
</style>
