<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="app">
        <el-container style="height:100%">
            <el-aside width="400px" >
                <Aside class="demo" :song-list="SongList" style="height: 100%"> </Aside>
            </el-aside>
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main style="padding: 0">
                    <transition name="fade">
                    <router-view :song-list.sync="SongList"></router-view>
                    </transition>
                </el-main>
                <el-footer>
                    <AudioPlayer :song-player-list="$store.state.playerList" :index="$store.state.playerIndex" ></AudioPlayer>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Aside from './components/Aside.vue'
    import Header from './components/Header'
    import  AudioPlayer from './components/AudioPlayer'

    export default {
        name: 'app',
        data() {
            return {
                m: {
                    a : 15
                },
                SongList: null,
                ab: null
            }
        },
        methods: {

        },
        components: {
            Aside,
            Header,
            AudioPlayer
        },
        watch: {

        },
    }
</script>

<style>
    #app {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        min-height: 600px;
    }

    .el-header, .el-footer {
        background-color: #fff;
        color: #333;
        text-align: center;
    }
    .bg-purple{
        background-color: #d3cfdd;
        height: 50px;
    }
    .el-aside {
        background-color: #fff;
        color: #333;
        padding-top: 15px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
        padding: 0;
    }

</style>
