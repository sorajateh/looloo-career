<template>
  <div class="px-4 sm:px-7 bg-white rounded-2xl shadow-[4px_2px_8px_rgba(0,0,0,0.15)]">
    <header class="pt-3 sm:pt-5 pb-5 border-none xs:border-b">
      <div class="min-h-[48px] sm:min-h-[64px]">
        <h4 class="font-bold text-xl md:text-2xl leading-snug md:leading-snug text-primary">{{ title }}</h4>
      </div>
    </header>
    <div>
        <div class="flex flex-row xs:flex-col space-x-1 xs:space-x-0">
            <template v-for="(value, key) in features">
              <dl v-if="key !== 'apply_form_url'" :key="key" class="flex flex-col xs:flex-row flex-wrap items-center space-y-1 xs:space-y-3 text-primary w-1/3 xs:w-full">
                  <dt class="w-full xs:w-2/5 capitalize text-[8px] xs:text-xs text-[#9FAABF] xs:text-primary">{{ key }}</dt>
                  <dd class="w-full xs:w-3/5">
                      <div class="rounded-full bg-teal-100 text-center py-1 text-xs">{{ value }}</div>
                  </dd>
              </dl>
            </template>
        </div>
    </div>
    <footer class="py-4 sm:py-7">
        <div class="flex flex-row xs:flex-col xs:space-y-3">
          <div class="grow">
            <NuxtLink v-if="!$route.params.id" :to="`/job/${id}`" class="inline-block w-auto xs:w-full py-1.5 font-bold xs:font-normal uppercase xs:normal-case text-[10px] xs:text-xs text-center text-[#9FAABF] xs:text-primary border-0 xs:border border-primary rounded-lg">View Job Description</NuxtLink>
          </div>
          <div class="w-28 xs:w-full flex-none xs:flex-auto">
            <ApplyButton full :href="features['apply_form_url']" />
          </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    features: Object
  }
}
</script>
