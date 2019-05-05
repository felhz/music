import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.itooi.cn/music/tencent/',
    changeOrigin:true
});

instance.interceptors.request.use(function (config) {
    const  key = '579621905';
    if(config.params){
        config.params.key = key;
    }else{
        if(!config.url.indexOf("key")){
            config.url += `?key=${key}`;
        }
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

const  musicApi = {
    /*
    *
    * 获取热门歌单
    * @param {
            categoryId: null, 分类ID，通过上面的分类接口获取 默认获取全部
            sortId: 3,  排序ID 1 默认 2 最新 3 热门 4 评分
            limit: 20,  获取数量
        }
    * @retrun axios
    * */
    hotSongList (params) {
        params = Object.assign({
            categoryId: null,
            sortId: 3,
            limit: 20,
        },params);

        return instance.get("hotSongList",{
            params: params
        });
    },
    /*
    * 搜索
    * @param
    *       {
    *           s: '',  搜索内容 默认李
    *           type: '', 类型 [song：歌曲 默认, album 专辑,list 歌单 ,mv,user 用户,lrc 歌词]
    *           limit: '', 页大小 默认20
    *           offset: '', 第几页 默认 1
    *       }
    *
    * */
    search (params) {
         params = Object.assign({
            s: 'li',
            type: 'song',
            limit: '20',
            offset: '1'
        },params);
        return instance.get("search",{
            params: params
        })
    },
    /*
    * 获取歌单
    *   @param songListId 必填
    * */
    songlist (songListId) {
        if(!songListId) {
            return ;
        }
        return instance.get('songList',{
            params: {
                id: songListId
            }
        })
    },
    /*
    * 获取音乐详情
    *   @param songid 歌曲id 必填
    * */
    song (songid) {
        if(!songid){
            return
        }
        return instance.get('song',{
            params: songid
        })
    },
    lic (url) {
        return instance.get(url);
    }
}

export default musicApi ;