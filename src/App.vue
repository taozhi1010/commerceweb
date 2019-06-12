<template>
  <div id="app">
  <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#242424"
  text-color="#fff"
  active-text-color="#ffd04b">
    <el-menu-item index="1">
       发现音乐
    </el-menu-item>
  <el-menu-item index="2">民谣 </el-menu-item>
  <el-menu-item index="3">国际</el-menu-item>
  <el-menu-item index="4"> 流行</el-menu-item>
  <el-menu-item index="5" >摇滚</el-menu-item>
  <el-menu-item index="6">我的收藏</el-menu-item>
</el-menu>
<div class="body">
 <router-view></router-view>
</div>
   

 <div class="footer">
   <p> 关于我们</p>
    <p> 技术支持</p>
     <p> 商务合作</p>
      <p> 联系我们</p>
 </div>
  </div>
</template>

<script>
// import navBar from "./modules/main";
export default {
    name: "app",

    data() {
        return {
            activeIndex: "1"
        };
    },
    created() {
        if (this.$route.query.index) {
            this.activeIndex = this.$route.query.index;
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key == "1") {
                this.$router.push({ name: "page1", query: { index: 1 } });
            } else if (key == "2") {
                this.$router.push({ name: "page2", query: { index: 2 } });
            } else if (key == "3") {
                this.$router.push({ name: "page3", query: { index: 3 } });
            } else if (key == "4") {
                this.$router.push({ name: "page4", query: { index: 4 } });
            }
            console.log(this.activeIndex, this.$route.query.index);
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}
.el-menu-demo {
    display: flex;
    justify-content: center;
    z-index: 999;
}
.router-link {
    width: 100%;
    height: 100%;
    /* background-color: #fff; */
}
.body {
    display: flex;
    justify-content: center;
}
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
}
.footer > p {
    margin-right: 10px;
    color: #2c3e50;
}
.footer > p:hover {
    color: #000;
}
</style>
