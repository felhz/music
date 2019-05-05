<template>
    <div style="height: 100%">
        <router-link to="/MusicList" class="music-title">播放列表</router-link >
        <!--<a href="/detail.html/#">详情</a>-->
        <div style="height: calc(100% - 30px)">
            <SongList :song-list="songList" style="height: 100%;overflow: auto"></SongList>
        </div>
    </div>
</template>
<style scope>
    .music-title{
        height: 30px;
    }
    a {
       color: #000;
    }
</style>
<script>
    import SongList from './AudioList'
    export default{
        props: ["songList"],
        data(){
            return{

            }
        },
        components: {
            SongList
        },
        watch: {
            songList () {

            }
        }
    }
</script>
