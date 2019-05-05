import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var store = new  Vuex.Store({
    state: {
        playerIndex: 0,
        playerList: null,
    },
    mutations: {
        updatePlayerIndex (state,playerIndex) {
            state.playerIndex = playerIndex;
        },
        updateplayerList (state,playerList) {
            state.playerList = playerList;
        },
    }
});

export default  store;