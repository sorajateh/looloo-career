import Vue from 'vue'
import VueYouTubeEmbed, {YouTubePlayer} from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed, { global: true })

Vue.component('vue-youtube-player', YouTubePlayer)