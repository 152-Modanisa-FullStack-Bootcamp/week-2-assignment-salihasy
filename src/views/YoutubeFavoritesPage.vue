<template>
    <div class="favorites-container">
    <FavoriteVideos v-for="i in filteredVideos" :key="i.id" :favoriteVideo="i"> </FavoriteVideos>
    </div>
</template>

<script>

import FavoriteVideos from '../components/FavoriteVideos.vue'

export default {
    name: "YoutubeFavoritesPage",
    components : {
        FavoriteVideos
    },
    props: ["videoprops"],
    computed: {
        filteredVideos() {
            return this.videoprops.filter(video => video.favorite === true)
        }
    }
}
</script>


<style>

.favorites-container {
    margin-top: 35px;
    width: 120vh;
    display: flex;
    flex-direction: column;
}


</style>