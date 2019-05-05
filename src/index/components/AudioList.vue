<template>
    <div>
        <div v-if="songList">
            <div  v-for="(song,index )  in songList.songs" :key="song.name" class="list-item" @click="handleSongItem(index)">
                <el-image
                        style="width: 50px; height: 50px"
                        :src="song.pic"
                        fit="cover"></el-image>
                <span>名字</span>: <span>{{song.name}}</span>
            </div>
        </div>
        <div v-else class="list-empty-icon">
            <i class="el-icon-s-shop"></i><br/>
            播放列表为空,选择歌单亲
        </div>
    </div>
</template>

<script>
    export default {
        name: "AudioList",
        props: ["songList"],
        data () {
            return {

            }
        },
        methods: {
            handleSongItem (songUrl) {
                this.$store.commit("updatePlayerIndex",songUrl);
            }
        },
        watch: {
            songList () {
                this.$store.commit("updateplayerList",this.songList);
            }
        }
    }
</script>

<style scoped>
    .list-item{
        height: 50px;
        line-height: 50px;
        text-align: left;
        padding: 3px 15px;

    }
    .list-empty-icon{
        margin-top: 150px;
    }
    .list-item *{
        cursor: pointer;
    }
    .list-item:hover{
        background-color: #67C23A;
    }
</style>