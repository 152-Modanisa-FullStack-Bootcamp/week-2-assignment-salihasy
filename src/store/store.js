import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.use(Vuex)
Vue.use(VueAxios, axios);

const store = new Vuex.Store({
  state: {
    videos : []
  },
  getters: {
    filteredFavoriteVideos: state => {
        return state.videos.filter(video => video.favorite === true)
    }
  },
  mutations: {
    setVideos (state, data) {
      state.videos = data
    }
  },
  actions: {
    async loadVideos(){
        const response = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos");
        this.commit('setVideos', response.data)
    }
  }
})

export default store;