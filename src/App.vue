<template>
  <div id="app">
    <el-container>
        <!--头部-->
      <el-header style="height: auto">
          <herderTag></herderTag>
      </el-header>
        <!--内容-->
      <el-main class="main">
          <router-view/>
      </el-main>
        <!--底部-->
      <el-footer>
          <footerTag></footerTag>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import herderTag from "@/components/header"
import footerTag from "@/components/footer"
export default {
  name: 'app',
  components: {
      herderTag,
      footerTag
  }
}

</script>

<style lang="scss">
    @import "~@/styles/themes.scss";
    body, html{
        height: 100%;
        margin: 0;
        padding: 0;
    }
    p,h1,h2,h3,h4,h5,ul,li{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
    }
    .main{
        width: 1112px;
        margin:auto;
    }
    .el-header, .el-footer {
        //background-color: #B3C0D1;
        color: #333;
        //line-height: 60px;
    }


    .el-main {
        color: #333;
        /*text-align: center;*/
        //line-height: 160px;
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
</style>
