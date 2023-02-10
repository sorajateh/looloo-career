import Vue from 'vue'
import {Swiper, Navigation, Pagination, Zoom} from 'swiper'

Swiper.use([Navigation, Pagination, Zoom])

const swiper = {
    install(Vue, options) {
        Vue.prototype.$swiper = Swiper;
    }
};

Vue.use(swiper);