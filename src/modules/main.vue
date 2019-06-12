<template>
<div>


</div>
</template>

<script>
export default {
    name: "index",
    props: {
        msg: String
    },
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1"
        };
    },
    methods() {
        // handleSelect(key,keyPath){
        //     console.log(key, keyPath)
        // }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-demo {
    display: flex;
    justify-content: center;
}
</style>
