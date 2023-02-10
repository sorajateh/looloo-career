<template>
  <div>
    <Navbar/>
    <div id="content">
        <Banner title="Career<br/>Opportunities" pic="illustration-career.png" />
        <Backdrop />
        <div class="bg-gradient-to-t from-dim to-transparent">
            <div v-if="post" class="py-10">
                <div class="container">
                    <div class="flex flex-col sm:flex-row-reverse xl:flex-row xl:justify-between space-x-7 space-x-reverse px-7 sm:px-0">
                        <div class="w-full sm:w-1/2 md:w-3/5">
                            <h2 class="block sm:hidden xl:block font-bold text-2xl sm:text-4xl lg:text-5xl leading-normal sm:leading-snug lg:leading-snug text-primary mb-5 sm:mb-7 lg:mb-10">{{ post.title.rendered }}</h2>
                            <div class="block sm:hidden pb-7">
                                 <div class="flex flex-row space-x-1">
                                    <template v-for="(value, key) in post.acf">
                                        <dl v-if="key !== 'apply_form_url'" :key="key" class="flex flex-col space-y-1 text-primary w-full">
                                            <dt v-if="key !== 'apply_form_url'" class="w-full capitalize text-[8px] text-[#9FAABF]">{{ key }}</dt>
                                            <dd v-if="key !== 'apply_form_url'" class="w-full">
                                                <div class="rounded-full bg-teal-100 text-center py-1 text-xs">{{ value }}</div>
                                            </dd>
                                        </dl>
                                    </template>
                                </div>
                                <div class="mt-3">
                                    <ApplyButton full />
                                </div>
                            </div>
                            <div class="post-content" v-html="post.content.rendered"></div>
                        </div>
                        <div class="hidden sm:block sm:w-1/2 md:w-2/5 xl:w-1/4">
                            <JobCard :id="post.id" :title="post.title.rendered" :features="post.acf" />
                        </div>
                    </div>
                </div>
            </div>
            <ApplicationProcess />
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
    data() {
        return {
            post: ''
        }
    },
    async mounted() {
      this.post = await this.$axios.$get(`/wp-json/wp/v2/job/${this.$route.params.id}`)
    }
}
</script>

<style scoped>
    .post-content:deep(*) {
        @apply text-slate
    }
    .post-content:deep(h5) {
        @apply font-bold text-xl sm:text-2xl text-primary mb-7
    }
    .post-content:deep(p), .post-content:deep(ol), .post-content:deep(ul) {
        @apply mb-10 ml-7 text-xs sm:text-base leading-normal sm:leading-normal
    }
    .post-content:deep(ol), .post-content:deep(ul) {
        @apply pl-5
    }
    .post-content:deep(li) {
        @apply list-disc
    }   
</style>