<template>
  <a :href="href ? href : 'javascript:void(0)'" :class="['block py-2 sm:py-1.5 font-bold uppercase text-xs sm:text-sm text-center text-white bg-primary rounded-md', { 'w-full': full}]">APPLY NOW</a>
</template>

<script>
export default {
  props: {
    full: Boolean,
    href: String
  }
}
</script>
