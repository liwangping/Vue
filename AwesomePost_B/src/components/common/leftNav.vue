<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-goumai"></i>
                <div class="">收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-dianpu"></i>
                <div class="">店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-hanbao"></i>
                <div class="">商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-huiyuanqia"></i>
                <div class="">会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-liebiao"></i>
                <div class="">统计</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'leftNav',
    data () {
        return {
             
        }
    }
}
</script>

<style>
    .left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       background-color: #1D8ce0;
       float:left;
       width:5%;
    }
    .iconfont{
       font-size:24px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px;
    }
</style>

