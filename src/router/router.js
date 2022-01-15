import Vue from "vue"
import VueRouter from "vue-router"
import YoutubeFavoritesPage from '@/views/YoutubeFavoritesPage'
import YoutubeHomePage from '@/views/YoutubeHomePage'
import YoutubeWatchPage from '@/views/YoutubeWatchPage'

const router = new VueRouter ({
    mode:"history",
    routes: [
        {path: "*", component: YoutubeHomePage},
        {path: "/home", component: YoutubeHomePage},
        {path: "/favorites/:userid", component: YoutubeFavoritesPage, name : 'YoutubeFavoritesPage'},
        {path: "/watch" , component: YoutubeWatchPage}
    ]
})

Vue.use(VueRouter)

export default router;