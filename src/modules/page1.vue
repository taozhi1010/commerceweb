<template>
<div class="main">
 <div class="block">
    <el-carousel trigger="click" height="360px" >
      <el-carousel-item v-for="(item,index) in imgSrc" :key="item" :style="bgColor(index)"> 
        <img :src="item" class="img-banner"></img>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="content">
     <div>赵雷</div>
     <div>宋冬夜</div>
  </div>
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            imgSrc: [
                "http://p1.music.126.net/ftH-xPfuregxpeM-Ns-ZXA==/109951164138092434.jpg",
                "https://p1.music.126.net/8XCqcLQ4Tgp06D7YUcVY6w==/109951164140076837.jpg",
                "https://p1.music.126.net/PxrSnAf8BmbrGp-M7rTrjw==/109951164138132820.jpg"
            ]
        };
    },
    methods: {
        bgColor(index) {
            if (index == 0) {
                return { backgroundColor: "#D0D0CE" };
            } else if (index == 1) {
                return { backgroundColor: "#FEE931" };
            } else if (index == 2) {
                return { backgroundColor: "#6F31FB" };
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.block {
    width: 100%;
    margin-top: -10px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
.img-banner {
    height: 100%;
    /* width: 100%; */
    /* display: flex;
    align-items: center; */
}
.content {
    width: 782px;
    height: 200px;
    background-color: pink;
    display: flex;
    flex-direction: row;
}
.content > div {
    flex: 1;
}
</style>
