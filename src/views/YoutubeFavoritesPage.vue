<template>
    <div class="favorites-container">
    <FavoriteVideos v-for="i in filteredFavoriteVideos" :key="i.id" :favoriteVideo="i"> </FavoriteVideos>
    </div>
</template>

<script>

import FavoriteVideos from '../components/FavoriteVideos.vue'
import {mapGetters} from 'vuex'

export default {
    name: "YoutubeFavoritesPage",
    components : {
        FavoriteVideos
    },
    computed: mapGetters([
    'filteredFavoriteVideos'
    ]),
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