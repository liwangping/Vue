<template>
  <div id="app">
    <v-header>
      <i class="icon" slot="left-icon">&#xe692;</i>
      <span slot="content">我的音乐</span>
      <router-Link slot="right-icon" to="/user">
        <i class="icon">&#xe63c;</i>
      </router-Link>
    </v-header>
    <v-tab></v-tab>
    <v-searchBox></v-searchBox>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from '../src/components/header'
import tab from '../src/components/tab'
import searchBox from '../src/components/searchBox'
export default {
  name: 'App',
  components:{
    'v-header': header,
    'v-tab' : tab,
    'v-searchBox' : searchBox
  }
}
</script>

<style>
@font-face {
  font-family: "icon";
  /* project id 277165 */
  src: url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot");
  src: url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg");
}

.icon {
  font-family: "icon" !important;
  font-size: 18px;
  font-style: normal;
  color: #ffffff;
}

html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}

</style>
