<template>
    <div class="relative">
        <div class="swiper swiper-team">
            <div class="swiper-wrapper">
                <div v-for="(team, index) in teams" :key="index" class="swiper-slide">
                    <div class="p-7 m-3 bg-white rounded-xl shadow flex flex-row sm:flex-col space-x-3 sm:space-x-0">
                        <div class="w-32 sm:w-full flex-none sm:flex-auto">
                            <div class="w-full bg-gray-100 rounded-2xl overflow-hidden">
                                <img v-if="team.photo" class="object-cover" :src="require(`~/assets/images/${team.photo}`)" />
                            </div>
                        </div>
                        <div class="flex flex-col justify-between">
                            <div class="min-h-0 sm:min-h-[150px] pt-0 sm:pt-3 pb-3">
                                <p class="font-mitr font-light text-xs sm:text-sm text-slate leading-relaxed">{{ team.testimonial }}</p>
                            </div>
                            <div class="min-h-0 sm:min-h-[75px] border-t border-blinded pt-1.5">
                                <h5 class="font-mitr font-light text-xs sm:text-base text-slate">{{ team.name }}</h5>
                                <h6 class="text-xs sm:text-sm text-primary">{{ team.role }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-team-pagination flex sm:hidden justify-center space-x-2 sm:space-x-3 mt-1"></div>
        <div class="swiper-team-prev -left-4 hidden sm:block">
            <svg width="54" height="55" viewBox="0 0 54 55" fill="none" class="fill-secondary" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7322 29.2678C19.7559 28.2915 19.7559 26.7085 20.7322 25.7322L28.2322 18.2322C29.2085 17.2559 30.7915 17.2559 31.7678 18.2322C32.7441 19.2085 32.7441 20.7915 31.7678 21.7678L26.0355 27.5L31.7678 33.2322C32.7441 34.2085 32.7441 35.7915 31.7678 36.7678C30.7915 37.7441 29.2085 37.7441 28.2322 36.7678L20.7322 29.2678ZM5.92651 19.4931C4.69116 24.7596 4.69116 30.2404 5.92651 35.5069C7.44732 41.9903 12.5097 47.0527 18.9932 48.5735C24.2596 49.8088 29.7404 49.8088 35.0069 48.5735C41.4903 47.0527 46.5527 41.9903 48.0735 35.5069C49.3088 30.2404 49.3088 24.7596 48.0735 19.4932C46.5527 13.0097 41.4903 7.94732 35.0069 6.4265C29.7404 5.19117 24.2596 5.19116 18.9931 6.4265C12.5097 7.94732 7.44732 13.0097 5.92651 19.4931ZM17.8513 1.55863C9.51903 3.51311 3.01312 10.019 1.05863 18.3513C-0.352877 24.3688 -0.352878 30.6312 1.05863 36.6487C3.01312 44.981 9.51904 51.4869 17.8513 53.4414C23.8688 54.8529 30.1312 54.8529 36.1487 53.4414C44.481 51.4869 50.9869 44.981 52.9414 36.6487C54.3529 30.6312 54.3529 24.3688 52.9414 18.3513C50.9869 10.019 44.481 3.51312 36.1487 1.55863C30.1312 0.147124 23.8688 0.147122 17.8513 1.55863Z" />
            </svg>
        </div>
        <div class="swiper-team-next -right-4 hidden sm:block">
            <svg width="54" height="55" viewBox="0 0 54 55" fill="none" class="fill-secondary" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2678 25.7322C34.2441 26.7085 34.2441 28.2915 33.2678 29.2678L25.7678 36.7678C24.7915 37.7441 23.2085 37.7441 22.2322 36.7678C21.2559 35.7915 21.2559 34.2085 22.2322 33.2322L27.9645 27.5L22.2322 21.7678C21.2559 20.7915 21.2559 19.2085 22.2322 18.2322C23.2085 17.2559 24.7915 17.2559 25.7678 18.2322L33.2678 25.7322ZM48.0735 35.5069C49.3088 30.2404 49.3088 24.7596 48.0735 19.4931C46.5527 13.0097 41.4903 7.9473 35.0068 6.42649C29.7404 5.19116 24.2596 5.19116 18.9932 6.42649C12.5097 7.9473 7.44732 13.0097 5.9265 19.4931C4.69116 24.7596 4.69116 30.2404 5.9265 35.5068C7.44731 41.9903 12.5097 47.0527 18.9931 48.5735C24.2596 49.8088 29.7404 49.8088 35.0069 48.5735C41.4903 47.0527 46.5527 41.9903 48.0735 35.5069ZM36.1487 53.4414C44.481 51.4869 50.9869 44.981 52.9414 36.6487C54.3529 30.6312 54.3529 24.3688 52.9414 18.3513C50.9869 10.019 44.481 3.5131 36.1487 1.55862C30.1312 0.147112 23.8688 0.147111 17.8513 1.55861C9.51902 3.5131 3.01312 10.019 1.05863 18.3513C-0.352876 24.3688 -0.352876 30.6312 1.05863 36.6487C3.01311 44.981 9.51901 51.4869 17.8513 53.4414C23.8688 54.8529 30.1312 54.8529 36.1487 53.4414Z" />
            </svg>
        </div>
        
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            slider: null,
            teams: [
                {
                    photo: 'om.jpg',
                    testimonial: 'ผมคิดว่าที่นี่ค่อนข้างที่จะให้โอกาสกับคนที่ไม่ได้จบมาตรงสาย แต่ก็มีพื้นฐานที่ทำงานได้และพร้อมที่จะเรียนรู้ครับ',
                    name: 'ออม',
                    role: 'Software Engineer'
                },
                {
                    photo: 'somo.jpg',
                    testimonial: 'สนุกครับ ก็ได้ลองทำอะไรใหม่ๆ จากแต่ก่อนที่เราเขียนได้แค่ไม่กี่ภาษา ตอนนี้ก็เขียนได้หลายภาษาเป็นประสบการณ์ที่ใหม่มากๆ เลยครับ',
                    name: 'ส้มโอ',
                    role: 'Senior Software Engineer'
                },
                {
                    photo: 'jacob.jpg',
                    testimonial: 'เหมือนการทำงานที่นี่ก็เป็นการเปิดโอกาสให้เราได้อยู่ในพื้นที่ๆ ต้องเรียนรู้และพัฒนาอยู่ตลอดเวลา',
                    name: 'เจค็อบ',
                    role: 'Machine Learning Engineer'
                },
                {
                    photo: 'pol.jpg',
                    testimonial: 'I was really lucky that I found this place. Looloo made it easy to transition from the academic world into the corporate world.',
                    name: 'พล',
                    role: 'Project Manager'
                },
                {
                    photo: 'nungning.jpg',
                    testimonial: '“การทำงานที่นี่ให้ความรู้สึกเหมือนมาเรียนไม่ได้มาทำงาน เราไม่ได้รู้สึกเครียดหรือต้องมากดดัน ถ้าอยากเรียนรู้อะไรใหม่ๆ ที่นี่ก็ตอบโจทย์ค่ะ เพราะมีหลายโปรเจกต์ให้ทำ”',
                    name: 'หนุงหนิง',
                    role: 'Software Engineer'
                }
            ]
        }
    },
    mounted() {
        this.slider = new this.$swiper('.swiper-team', {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1536: {
                    slidesPerView: 5,
                },
            },
            pagination: {
                el: ".swiper-team-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' inline-block w-2 h-2 sm:h-3.5 sm:w-3.5 rounded-full border sm:border-2 border-slate sm:border-primary bg-white"></span>';
                },
            },
            navigation: {
                nextEl: '.swiper-team-next',
                prevEl: '.swiper-team-prev',
            }
        })
    }
}
</script>

<style scoped>
@import '../node_modules/swiper/swiper-bundle.min.css';
/* @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap'); */
:deep(.swiper-pagination-bullet-active) {
    background-color: rgba(94, 112, 148, 0.8)
}
.swiper-team-prev, .swiper-team-next {
    @apply absolute top-1/3 cursor-pointer z-20 bg-white rounded-full
}

</style>