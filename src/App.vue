<template>
  <div id="app">
        <Header> </Header>
        <router-view :videoprops="videos"> </router-view>
  </div>
</template>

<script>

import axios from 'axios'
import Header from './components/Header.vue'

export default {
  name: 'App',
  data() {
      return {
        videos : []
      }
  },
  components: {
    Header
  },
  async mounted() {
         const response = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos");
         this.videos = response.data
         console.log(this.videos)
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

html,body {
  height: 100%;
  width:100%;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.grey-font {
    color:gray
}

</style>
