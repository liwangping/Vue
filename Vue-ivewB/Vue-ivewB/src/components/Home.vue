<template>
  <div class="home">
    <div class="layout">
      <Row type='flex'>
        <Col :span="spanLeft" class="layout-menu-left" >
            <div class="title">Admin 管理系统</div>
            <Menu theme="dark" width = auto>
            <Submenu name="1">
                <template slot="title">
                <Icon type="ios-paper" />
                内容管理
                </template>
                <MenuItem name="1-1" to = "/home_table">表格</MenuItem>
                <MenuItem name="1-2" to = "/form">表单</MenuItem>
                <MenuItem name="1-3" >举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                <Icon type="ios-people" />
                用户管理
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                <Icon type="ios-stats" />
                统计分析
                </template>
                <MenuGroup title="使用">
                <MenuItem name="3-1" to = "/echarts">echars</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            </Menu>
        </Col>
        <Col :span="spanRight" class="viewRight"> 
            <div class="layout-header">
                <Dropdown>
                    <a href="javascript:void(0)">
                        <Icon type="md-menu" size = "32"/>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem>豆汁儿</DropdownItem>
                        <DropdownItem>冰糖葫芦</DropdownItem>
                        <DropdownItem>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div class="userinfo">
                    <div class="username">{{useName}}</div>
                    <div class="user_img"></div>
                </div>
            </div>
            <div class="Breadcrumb_nav">
                <Breadcrumb>
                        <BreadcrumbItem to="/">应用中心</BreadcrumbItem>
                        <BreadcrumbItem to="">{{$route.name}}</BreadcrumbItem>
                </Breadcrumb>
            </div>
             <router-view class="aaa"></router-view>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        width: 'auto',
        spanLeft: 5,
        spanRight: 19,
        useName:'',
        columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
               data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
      }
    },
    created () {
        this.useName = JSON.parse(sessionStorage.getItem('user'))
     }
  } 
</script>

<style scope>
.home{
  background-color: rgba(245, 247, 249, 1)
}
.home, .layout{
  width: 100%;
  height: 100%;
}
.ivu-row-flex{
  height: 100%;
}
.layout-menu-left{
  padding-top: 50px;
  background: #515a6e;
}
.title{
  height: 50px;
  font-size: 25px;
  text-align: center;
  color: #fff;
}
.icon-left{
   
}
.layout-header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
}
.userinfo{
    margin: 10px 20px;
}
.Breadcrumb_nav{
    display: flex
}
.viewRight{
  padding: 20px;
}
</style>
