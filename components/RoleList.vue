<template>
  <div class="flex items-center mb-3 sm:mb-7 px-7 sm:px-0">
    <svg viewBox="0 0 20 26" class="w-4 h-4 md:w-6 md:h-6 fill-secondary mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.75V25.25L19.25 13L0 0.75Z" />
    </svg>
    <h3 class="font-bold text-2xl md:text-3xl lg:text-4xl"><span class="text-secondary">{{ title }}</span> <span class="text-primary">Roles</span></h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
