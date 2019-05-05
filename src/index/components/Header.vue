<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">歌单</el-menu-item>
            <el-menu-item index="3">mv</el-menu-item>
            <el-menu-item index="4">其他</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
            return {
                activeIndex: "1"
            }
        },
        methods: {
            handleSelect () {

            }
        }
    }
</script>

<style scoped>

</style>