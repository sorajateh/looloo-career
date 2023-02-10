<template>
    <div>
        <div class="h-[152px] md:h-[200px] lg:h-[368px] container relative bg-right bg-no-repeat bg-[length:auto_80%]" :style="{backgroundImage: `url(${require(`~/assets/images/${pic}`)})`}">
          <div class="absolute bottom-7 lg:bottom-14 left-7 xs:left-0">
            <h2 class="font-bold text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-tight lg:leading-tight text-primary" v-html="title"></h2>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
      title: String,
      pic: String
    }
}
</script>