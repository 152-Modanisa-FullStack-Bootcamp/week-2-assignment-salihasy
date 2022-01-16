<template>
    <div class="home-container">
        <Video v-for="i in videoprops" :key="i.id" :video="i"> </Video>
    </div>
</template>

<script>

import Video from '../components/Video.vue'

export default {
    name: "YoutubeHomePage",
    components : {
        Video
    },
    props : ["videoprops"],
}
</script>


<style>

.home-container {
    padding-top: 5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

</style>