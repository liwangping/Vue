<template>
    <div class="menu">
    <div class="menu-left">
        <el-row class="tac">
            <el-col :span="5">
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;销售商管理系统</h2>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">销售信息管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">查询</el-menu-item>
                        <el-menu-item index="1-2">添加</el-menu-item>
                        <el-menu-item index="1-3">更新</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>            
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">库存信息管理</span>
                </el-menu-item>
                <el-submenu index="4">
                    <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">留言管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">发布留言</el-menu-item>
                        <el-menu-item index="1-2">查看留言</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>   
                </el-menu>
            </el-col>
        </el-row>
    </div>
    <div class="menu-right">
    
    </div>
    </div>
</template>
<style>
</style>

<script>
  export default {
    data() {
      return {
       
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>