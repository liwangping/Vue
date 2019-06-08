<template>
    <div class="page">
      <div class="list_table">
              <div class="table">
                <div>
                    <Table border :columns="columns7" :data="data6"></Table>
                    <!-- <Button @click="handleSelectAll(true)">Set all selected</Button>
                    <Button @click="handleSelectAll(false)">Cancel all selected</Button> -->
                </div>
              </div>
      </div>
      <div class="page_number">
         <Page :total="100" />
      </div>
    </div> 
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        columns7: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '地址',
                        width: 250,
                        align: 'center',
                        key: 'address'
                    },
                    {
                        title: '年龄',
                        align: 'center',
                        key: 'age'
                    },
                    {
                        title: '生日',
                        align: 'center',
                        key: 'birth'
                    },
                    {
                        title: '性别',
                        align: 'center',
                        key: 'sex'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '段芳',
                        address: '海口省 海口市 龙华区',
                        age: 18,
                        birth:'2007-07-25',
                        sex: '男'
                    },
                    {
                        name: '段芳',
                        address: '海口省 海口市 龙华区',
                        age: 18,
                        birth:'2007-07-25',
                        sex: '男'
                    },
                    {
                        name: '段芳',
                        address: '海口省 海口市 龙华区',
                        age: 18,
                        birth:'2007-07-25',
                        sex: '男'
                    },
                    {
                        name: '段芳',
                        address: '海口省 海口市 龙华区',
                        age: 18,
                        birth:'2007-07-25',
                        sex: '男'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style scope>
.list_table .table{
  padding-top: 30px;
}
.home, .layout{
  width: 100%;
  height: 100%;
}
.ivu-row-flex{
  height: 100%;
}
.layout-menu-left{
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
.page_number{
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
