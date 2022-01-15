<template>
    <div id="favorite-video-container">
        <router-link :to="{ path: '/watch', query: {id: favoriteVideo.id} }">
            <img id="favorite-video-image"
             @mouseover="isHover=true" @mouseleave="isHover=false" 
             :src="isHover ? favoriteVideo.hoverImage : favoriteVideo.coverImage"/>
        </router-link>
        <div class="information-of-favorite-video">
                <span id="video-title-text"> <strong> {{favoriteVideo.title}} </strong> </span>
                <span class="grey-font"> {{favoriteVideo.viewCount}} views • {{favoriteVideo.publishDateInMonth}} months ago </span>
                <div>
                        <img class="favorite-own-image" :src="favoriteVideo.ownerImage"/>
                        <span class="grey-font"> {{favoriteVideo.ownerName}} </span>
                </div>
                <span class="grey-font"> {{favoriteVideo.description}} </span>
        </div>
    </div>
</template>

<script>

export default{
    name: "FavoriteVideos",
    data() {
        return {
            isHover:false
        }
    },
    props: ["favoriteVideo"]
}
</script>

<style>

#favorite-video-container{
    height: 210px;
    background: white;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
}

#favorite-video-image {
    height: 200px;
    width: 360px

}

.information-of-favorite-video {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
}

.favorite-own-image {
  vertical-align: middle;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

#video-title-text {
    font-size: 20px;
}
</style>