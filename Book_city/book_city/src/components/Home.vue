<template>
    <div class="home">
        <el-container>
            <!-- 页面的头部部分 -->
            <el-header>
              <div class="home_header">
                <el-row>
                  <!-- 头部左边的登录提示 -->
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                    <span style="float:left">欢迎光临书城，请<a href="">登陆</a></span>
                    </div>
                  </el-col>
                  <!-- 头部中间的搜索框 -->
                  <el-col :span="8" >
                    <div class="grid-content bg-purple-light">                
                      <div >
                      <search ></search>
                      </div>
                    </div>
                  </el-col>
                  <!-- 头部右边的选项 -->
                  <el-col :span="12"><div class="grid-content bg-purple">                
                    <div class="header_top_server" style="float:right">
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        个人中心<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的购物车</el-dropdown-item>
                        <el-dropdown-item>我的订单</el-dropdown-item>
                        <el-dropdown-item>查询物流</el-dropdown-item>
                        <el-dropdown-item>帮助</el-dropdown-item>
                        <el-dropdown-item divided></el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                    </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-header>
        
            <!-- 页面主体内容 -->
            <!-- 首页轮播图 -->
            <div class="home_Slideshow">
               <el-carousel :interval="4000" type="card" height="280px">
                  <el-carousel-item v-for="item in 6" :key="item">
                    <!-- <h3>{{ item }}</h3> -->
                    <div class="home_Slideshow_img">
                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" class="image">
                    </div>
                  </el-carousel-item>
                </el-carousel>
            </div>
            <el-container>
                <!-- <el-aside width="200px">Aside</el-aside> -->
                <el-container>
                  <!-- 首页中间部分 -->
                    <el-main>
                      <div class="home_main">
                        <!-- 首页推荐部分 -->
                        <div class="home_main_title">首页推荐</div>
                        <div class="home_main_content">
                          <ul class="home_main_content_list">
                            <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                             <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                            <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                             <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <!-- 首页最新上架 -->
                        <div class="home_main_title">最新上架</div>
                        <div class="home_main_content">
                          <ul class="home_main_content_list">
                            <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                             <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                            <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                             <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <!-- 首页最新上架 -->
                        <div class="home_main_title">最新上架</div>
                        <div class="home_main_content">
                          <ul class="home_main_content_list">
                            <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                             <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                            <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                             <li>
                              <div class="home_main_content_list_box">
                                  <div class="book_image">
                                     <img src="http://img60.ddimg.cn/upload_img/00478/0609/fhc750x315_wzh_20190612-wy-1560403479.jpg" alt="">
                                  </div>
                                  <div class="book_title">平凡的世界--路遥</div>
                                  <div class="book_price">38元</div>
                                  <div class="buy_button">购买</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import search from "./common/search"
export default {
  name: 'HelloWorld',
  data () {
    return {
     currentDate: new Date()
    }
  },
  components:{
    search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 整体布局样式 */
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .header_top_server{
    float: right;
    color:lightyellow;
  }

  /* 共有样式 */
  .home_main_title{
    height: 23px;
    text-align: left;
    border-bottom: 4px solid rgba(217, 217, 217, 1);
    line-height: 100%;
  }
  .home_main_content{
    padding-top: 20px;
    line-height: 0;
  }
  .home_main_content_list{
    position: relative;
    display: inline-block;

  }

  /* 商品列表中的商品 */
  .home_main_content_list li{
    list-style: none;
    width: 280px;
    float: left;
    margin-left: 20px;
  }
  .home_main_content_list li img{
    height: 100%;
    width: 100%;
    display: inline-block
  }
  .home_main_content_list_box{
    line-height: 100%;
  }
  .home_main_content_list_box .book_image{
  
  }
  .home_main_content_list_box .book_title{
     height: 15px;
     text-align: left;
     /* float: left; */
  }
  .home_main_content_list_box .book_price{
    height: 15px;
    text-align: left;
  }
  .home_main_content_list_box .buy_button{
    height: 15px;
    float: right;
  }
 /* 轮播图样式 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* 首页整体头部容器 */
  .home{
    background-color: rgba(245, 245, 245, 1)
  }
  .home_header{
    
  }
  /* 首页轮播图容器 */
  .home_Slideshow{
    margin-top: 80px;
  }
  .home_Slideshow_img img{
    width: 100%;
    height: 100%;
  }
  /* 首页推荐书籍模块卡片 */
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
