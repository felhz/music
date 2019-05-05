<template>
    <div v-if="carousel">
        <el-carousel :interval="4000" type="card" height="300px" indicator-position="none">
            <el-carousel-item v-for="(song ,index) in carousel" :key="index">
                <el-image
                        style="width: 100%; height: 100%"
                        :src="song.pic"
                        fit="cover"></el-image>
                <span>名字</span>: <span>{{song.name}}</span>
            </el-carousel-item>
        </el-carousel>
    </div>

</template>
<style>
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
</style>
<script>

    export default{
        props: ["carousel"],
        data(){
            return{

            }
        },
        watch: {
            carousel (val) {
                console.log(val);
            }
        },

    }
</script>
