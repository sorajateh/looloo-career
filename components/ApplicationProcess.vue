<template>
    <div class="py-7">
        <div class="container">
            <div class="px-7">
                <h5 class="font-bold text-xl sm:text-2xl text-primary">Application Process</h5>
            </div>
        </div>
        <div class="hidden sm:block">
            <div class="container">
                <ul class="grid grid-cols-3 lg:grid-cols-5 gap-4 py-7">
                    <li v-for="(process, index) in content" :key="index" class="text-center">
                        <div class="font-bold uppercase text-lg text-secondary">STEP {{ index+1 }}</div>
                        <div class="h-14 w-14 rounded-full bg-primary mx-auto flex justify-center items-center my-5">
                            <svg class="w-9 h-auto fill-white" :viewBox="process.icon.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="process.icon.path"></svg>
                        </div>
                        <h5 class="font-bold text-2xl text-primary mb-2" v-html="process.title"></h5>
                        <p class="text-xs text-slate">{{ process.caption }}</p>
                        <div class="text-xs text-secondary mt-3">{{ process.timing }}</div>
                    </li>
                </ul>
                <div class="text-right">
                    <Button type="bordered" path="/application-process" label="Read more about the process" />
                </div>
            </div>
        </div>
        <div class="block sm:hidden">
            <div class="swiper swiper-application-process">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(process, index) in content" :key="index">
                        <div class="flex items-center space-x-5 p-7 bg-white rounded-xl shadow-md m-3">
                            <div class="w-14 flex-none">
                                <div class="h-14 w-14 rounded-full bg-primary mx-auto flex justify-center items-center">
                                    <svg class="w-9 h-auto fill-white" :viewBox="process.icon.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="process.icon.path"></svg>
                                </div>
                            </div>
                            <div>
                                <h5 class="font-bold text-xl text-primary mb-1">{{ getTitle(process.title) }}</h5>
                                <p class="text-xs text-slate">{{ process.caption }}</p>
                                <div class="text-xs text-secondary mt-3">{{ process.timing }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-application-process-pagination flex sm:hidden justify-center space-x-2 sm:space-x-3 mt-1"></div>
            </div>
            <div class="py-10 text-center">
                <Button type="bordered" path="/application-process" label="Read more about the process" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slider: null,
            content: [
                {
                    title: 'Submit<br/>Application',
                    caption: 'Application Review',
                    timing: '5 minutes',
                    icon: {
                        viewBox: '0 0 35 28',
                        path: '<path d="M30.9336 0.666626H4.26693C2.43359 0.666626 0.95026 2.16663 0.95026 3.99996L0.933594 24C0.933594 25.8333 2.43359 27.3333 4.26693 27.3333H30.9336C32.7669 27.3333 34.2669 25.8333 34.2669 24V3.99996C34.2669 2.16663 32.7669 0.666626 30.9336 0.666626ZM30.9336 24H4.26693V7.33329L17.6003 15.6666L30.9336 7.33329V24ZM17.6003 12.3333L4.26693 3.99996H30.9336L17.6003 12.3333Z" />'
                    }
                },
                {
                    title: 'Technical<br/>Test 1',
                    caption: 'Pre-Screening Test',
                    timing: '90 minutes',
                    icon: {
                        viewBox: '0 0 36.33 22.66',
                        path: '<path d="M12.33,19l-7.67-7.67L12.33,3.67l-2.33-2.33L0,11.33l10,10,2.33-2.33Zm11.67,0l7.67-7.67-7.67-7.67,2.33-2.33,10,10-10,10-2.33-2.33Zm-9.46,3L19.54,0l2.93,.66-5,22-2.93-.66Z"/>'
                    }
                },
                {
                    title: 'Technical<br/>Test 2',
                    caption: 'Live Proctored',
                    timing: '120 minutes',
                    icon: {
                        viewBox: '0 0 36.33 22.66',
                        path: '<path d="M12.33,19l-7.67-7.67L12.33,3.67l-2.33-2.33L0,11.33l10,10,2.33-2.33Zm11.67,0l7.67-7.67-7.67-7.67,2.33-2.33,10,10-10,10-2.33-2.33Zm-9.46,3L19.54,0l2.93,.66-5,22-2.93-.66Z" />'
                    }
                },
                {
                    title: 'Partner<br/>Interview',
                    caption: 'Talking with co-founders',
                    timing: '60 minutes',
                    icon: {
                        viewBox: '0 0 35 35',
                        path: '<path d="M0,17.5C0,7.84,7.84,0,17.5,0s17.5,7.84,17.5,17.5-7.84,17.5-17.5,17.5H3.26c-1.98,0-3.03-2.33-1.73-3.82l2.35-2.69c-2.43-3-3.89-6.83-3.89-11ZM17.5,3C9.49,3,3,9.49,3,17.5c0,3.86,1.51,7.37,3.97,9.97,.53,.56,.55,1.44,.04,2.02l-2.2,2.51h12.69c8.01,0,14.5-6.49,14.5-14.5S25.51,3,17.5,3ZM3.79,33.16s0,0,0,0ZM8,12.7c0-.83,.67-1.5,1.5-1.5h16c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5H9.5c-.83,0-1.5-.67-1.5-1.5Zm0,6.4c0-.83,.67-1.5,1.5-1.5h6.4c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5h-6.4c-.83,0-1.5-.67-1.5-1.5Z" />'
                    }
                },
                {
                    title: 'Final<br/>Decision',
                    caption: 'Wait for our contact',
                    timing: '3 - 7 days',
                    icon: {
                        viewBox: '0 0 35 34',
                        path: '<path d="M17.3834 0.333374C8.1834 0.333374 0.733398 7.80004 0.733398 17C0.733398 26.2 8.1834 33.6667 17.3834 33.6667C26.6001 33.6667 34.0667 26.2 34.0667 17C34.0667 7.80004 26.6001 0.333374 17.3834 0.333374ZM17.4001 30.3334C10.0334 30.3334 4.06673 24.3667 4.06673 17C4.06673 9.63337 10.0334 3.66671 17.4001 3.66671C24.7667 3.66671 30.7334 9.63337 30.7334 17C30.7334 24.3667 24.7667 30.3334 17.4001 30.3334ZM18.2334 8.66671H15.7334V18.6667L24.4834 23.9167L25.7334 21.8667L18.2334 17.4167V8.66671Z" />'
                    }
                }
            ]
        }
    },
    methods: {
        getTitle(string) {
            return string.replace(/(<([^>]+)>)/ig, " ")
        }
    },
    mounted() {
        this.slider = new this.$swiper('.swiper-application-process', {
            slidesPerView: 1,
            pagination: {
                el: ".swiper-application-process-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' inline-block w-2 h-2 sm:h-3.5 sm:w-3.5 rounded-full border sm:border-2 border-slate sm:border-primary bg-white"></span>';
                },
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
</style>