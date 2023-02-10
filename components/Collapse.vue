<template>
  <div class="border-b-[1.5px] border-denim">
        <div class="flex justify-between items-center py-3 cursor-pointer">
            <div :class="['uppercase text-xs sm:text-base', { 'font-semibold text-white/100' : collapsed, 'text-[#9FAABF]' : !collapsed }]">{{ question }}</div>
            <div class="flex-none">
                <svg width="12" height="12" viewBox="0 0 12 12" class="stroke-secondary" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V11M11 6L1 6" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
        </div>
        <div ref="answerBox" :class="['answer-box overflow-hidden transition-[height] duration-300 ease-in-out']" :style="{ height: addHeight + 'px' }">
            <div class="font-light text-xs sm:text-base leading-normal sm:leading-normal text-white py-7" v-html="answer"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            height: null
        }
    },
    watch: {
        // collapsed(e) {
        //     this.isOpen = e
        // },
        // isOpen(e) {
        //     this.$emit('collapse', e)
        // }
    },
    computed: {
        addHeight() {
            return this.collapsed ? this.height : 0
        }
    },
    // methods: {
    //     toggle() {
    //         this.isOpen = !this.isOpen
    //     }
    // },
    props: {
        question: String,
        answer: String,
        collapsed: Boolean
    },
    mounted() {
        // console.log(this.$refs.answerBox.clientHeight)
        this.height = this.$refs.answerBox.clientHeight
        // this.isOpen = false
    }
}
</script>

<style scoped>
.answer-box:deep(p) {
    @apply mb-5
}
.answer-box:deep(strong) {
    @apply font-semibold
}
.answer-box:deep(a) {
    @apply text-secondary
}
</style>