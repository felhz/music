<template>
    <div class="hello">
        <Carousel :carousel="carousel" ></Carousel>
        <div v-for="songItem  in songList" class="list" :key="songItem.name" @click="clickSongItem(songItem.id)">
            <el-image
                    style="width: 50px; height: 50px"
                    :src="songItem.pic"
                    fit="cover"></el-image>
            <span>名字</span>: <span>{{songItem.name}}</span>
        </div>
    </div>
</template>

<script>
    import Carousel from "./Carousel.vue"
    export default {

        props: {
            msg: String
        },
        data() {
            return {
                songList: null
            }
        },
        methods: {
            clickSongItem (songListId) {
               this.musicApi.songlist(songListId).then(data => {
                   this.$emit("update:song-list",data.data.data);
               })
            }
        },
        computed : {
            carousel () {
                if(this.songList){
                    return this.songList.slice(0,4)
                }

            }
        },
        mounted() {
            var self = this;
            this.musicApi.hotSongList().then(data => {
                self.songList = data.data.data;
            })
        },
        components: {
            Carousel
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        height: 100%;
        overflow: auto;
    }
    .list {
        height: 50px;
        line-height: 50px;
        text-align: left;
        margin: 5px;
        background-color: antiquewhite;
        transition: all 200ms ease-out;
    }
    .list:hover{
        background-color: #67C23A;
    }
</style>
