<template>
    <div>
        <transition name="el-fade-in-linear">
            <div v-if="songPlayerList" style="text-align: left">

                <el-image
                        style="width: 50px; height: 50px"
                        :src="currentPlayerInfo.pic"
                        fit="cover"></el-image>
                <span>{{currentPlayerInfo.name}}</span>
                <span >{{playTime}}</span>
                <span @click="nextTrack">下一首</span>
                <audio :src="currentPlayerInfo.url" autoplay controls @ended="ended" @timeupdate="timeupdate($event)" style="display: none"></audio>
                <transition name="el-fade-in-linear">
                    <div style="height: 10px">
                        <div v-if="currentProgress" width="calc(100% - 100px)">
                            <el-progress :percentage="currentProgress" :show-text="showProgressText" ></el-progress>
                        </div>
                        <!--<div style="float: right">{{totalTime}}</div>-->
                    </div>

                </transition>
            </div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "AudioPlayer",
        props: ["songPlayerList","index"],
        data () {
            return {
                currentTime: null,
                duration: null,
                playerIndex: 0,
                showProgressText: false
            }
        },
        mounted () {
            this.playerIndex = this.index;
        },
        methods: {
            ended () {
                this.playerIndex++;
                this.$emit("update:chindex",this.playerIndex);
            },
            timeupdate (e) {
                this.currentTime = e.target.currentTime;
                this.duration = e.target.duration;
            },
            nextTrack () {
                this.playerIndex++;
                this.$emit("update:chindex",this.playerIndex);
            }
        },
        watch: {
            index (){
                this.playerIndex = this.index;
            }
        },
        computed :{
            currentPlayerInfo () {
               //  var str = "https://api.itooi.cn/music/tencent/lrc?id=001VcV9N3fZtrD&key=579621905";
               // this.musicApi.lic(str.replace("https://api.itooi.cn/music/tencent/","")).then(data => {
               //     return data;
               // }).catch((data,err ) => {
               //
               // })
                var playerList = this.songPlayerList.songs;
                var currentPlayerInfo = playerList[this.playerIndex];
                document.querySelector("title").text = currentPlayerInfo.name
               return  currentPlayerInfo;
            },
            playTime () {
                return formatSeconds(this.currentTime);
            },
            currentProgress ( ) {
                return + (this.currentTime / this.duration * 100).toFixed(2);
            },
            totalTime () {
                return formatSeconds(this.duration);
            }
        }
    }
    function formatSeconds(second) {

        var hourTime = 0;
        var minuteTime = 0;
        var secondTime = 0;
        if (second > 60) {  //如果秒数大于60
            minuteTime = Math.floor(second / 60);
            secondTime = Math.floor(second % 60);
            if (minuteTime >= 60) {  //如果分钟大于60
                hourTime = Math.floor(minuteTime / 60);
                minuteTime = Math.floor(minuteTime % 60);
            } else {
                hourTime = 0;
            }
        } else {
            hourTime = 0;
            minuteTime = 0;
            if (second == 60) {  //如果秒数等于60
                minuteTime = 1;
                secondTime = 0;
            } else {
                secondTime = second;
            }
        }
        function  addZero(time) {
            let str = Number(time).toFixed(0);
            if (time < 10) {
                str = '0' + time;
            }
            return str;
        }
        var timeResult = addZero(hourTime) + ':' + addZero(minuteTime) + ':' +  addZero(secondTime);
        return timeResult;
    }
</script>

<style scoped>

</style>