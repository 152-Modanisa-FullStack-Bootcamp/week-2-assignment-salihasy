<template>
    <div class="home-container">
        <Video v-for="i in videos" :key="i.id" :video="i"> </Video>
    </div>
</template>

<script>

import Video from '../components/Video.vue'
import { mapState } from 'vuex'

export default {
    name: "YoutubeHomePage",
    components : {
        Video
    },
    computed: mapState([
     'videos'
    ]),
    mounted () {
    this.$store.dispatch('loadVideos')
    }
}
</script>


<style>
.home-container {
    padding-top: 1vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

</style>