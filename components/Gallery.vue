<template>
    <div class="relative">
        <div class="swiper swiper-gallery">
            <div class="swiper-wrapper">
                <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
                    <img :src="require(`~/assets/images/${slide}`)" />
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center items-center space-x-3 py-4">
            <div class="swiper-gallery-prev">
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 5.63636L1.5 5.63636M1.5 5.63636L6.50535 10M1.5 5.63636L6.50535 1.27273" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div>
                <div class="swiper-gallery-pagination flex justify-center space-x-2 sm:space-x-3"></div>
            </div>
            <div class="swiper-gallery-next">
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 5.36364H13.5M13.5 5.36364L8.49465 1M13.5 5.36364L8.49465 9.72727" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            slider: null,
            slides: ['0D4A7918.jpg', '0D4A7588.jpg', '0D4A7519.jpg']
        }
    },
    mounted() {
        const pagination = this.$pagination()
        this.slider = new this.$swiper('.swiper-gallery', {
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-gallery-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' inline-block w-2 h-2 sm:h-3.5 sm:w-3.5 rounded-full border sm:border-2 border-slate sm:border-primary bg-white"></span>';
                },
            },
            navigation: {
                nextEl: '.swiper-gallery-next',
                prevEl: '.swiper-gallery-prev',
            }
        })
    }
}
</script>

<style scoped>
@import '../node_modules/swiper/swiper-bundle.min.css';
:deep(.swiper-pagination-bullet-active) {
    background-color: rgba(94, 112, 148, 0.8)
}
.swiper-gallery-prev, .swiper-gallery-next, :deep(.swiper-pagination-bullet) {
    @apply cursor-pointer
}
.swiper-gallery-prev, .swiper-gallery-next {
    @apply hidden sm:block
}
</style>


