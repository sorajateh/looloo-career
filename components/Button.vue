<template>
  <NuxtLink :to="path" :class="['inline-flex justify-center items-center space-x-4 py-1.5 xs:py-2.5 px-7 rounded-full', { 'bg-secondary' : type === 'dark', 'bg-primary' : type === 'normal', 'border-[1.5px] border-slate' : type === 'bordered' }]">
    <span :class="['font-bold uppercase text-xs sm:text-sm', { 'text-primary': type === 'dark', 'text-secondary' : type === 'normal', 'text-slate' : type === 'bordered' }]">{{ label }}</span>
    <svg v-if="type !== 'bordered'" viewBox="0 0 23 20" :class="['w-5 h-auto', { 'fill-primary' : type === 'dark', 'fill-secondary' : type === 'normal' }]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8.75C1.30964 8.75 0.75 9.30964 0.75 10C0.75 10.6904 1.30964 11.25 2 11.25V8.75ZM21.8839 10.8839C22.372 10.3957 22.372 9.60427 21.8839 9.11612L13.9289 1.16117C13.4408 0.67301 12.6493 0.67301 12.1612 1.16117C11.673 1.64932 11.673 2.44078 12.1612 2.92893L19.2322 10L12.1612 17.0711C11.673 17.5592 11.673 18.3507 12.1612 18.8388C12.6493 19.327 13.4408 19.327 13.9289 18.8388L21.8839 10.8839ZM2 11.25H21V8.75H2V11.25Z" />
    </svg>
  </NuxtLink>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true,
            default: 'normal'
        },
        label: {
            type: String,
            default: 'This is button'
        },
        path: {
            type: String,
            default: '/'
        },
        dark: {
            type: Boolean,
            default: false
        }
    }
}
</script>
