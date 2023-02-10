<template>
  <div>
    <Navbar/>
    <div id="content" class="relative">
      <div class="py-12">
        <div class="container flex flex-col sm:flex-row justify-between items-center">
          <div class="w-full sm:w-1/2 xl:w-1/3 px-7 sm:px-0">
            <h1 class="font-bold text-4xl leading-tight md:text-5xl md:leading-tight text-primary mb-10">
              Play a part in<br/> <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#0dcec0] to-[#15c5c6]">shaping</span> the <br/>digital future.
            </h1>
            <h3 class="text-lg lg:text-xl leading-relaxed mb-10"><span class="italic text-secondary">Build</span> exceptional products. <span class="italic text-secondary">Redefine</span> industry standards. <span class="italic bg-clip-text text-transparent bg-gradient-to-b from-[#0dcec0] to-[#15c5c6]">Shape</span> the world.</h3>
            <div class="hidden sm:block">
              <Button type="normal" path="/job-list" label="Apply Now" />
            </div>
          </div>
          <div class="w-full sm:w-1/2">
            <Gallery />
            <div class="block sm:hidden text-center mt-10">
              <Button type="normal" path="/job-list" label="Apply Now" />
            </div>
          </div>
        </div>
      </div>
      <div class="py-10">
        <div class="container flex justify-center">
          <div class="text-center w-2/3">
            <h2 class="font-bold uppercase text-2xl sm:text-4xl sm:leading-snug text-primary mb-7"><span class="text-secondary">“</span>WHERE CHALLENGE<br/> MEETS IMPACT<span class="text-secondary">”</span></h2>
            <h3 class="text-xs leading-relaxed sm:text-xl sm:leading-relaxed">At Looloo, we believe in working on projects that matter. We tackle only the most challenging and pressing problems so that we can create meaningful change in the world.</h3>     
          </div>
        </div>
      </div>
      <Backdrop />
      <div>
        <div class="container">
          <div class="w-full h-[280px] sm:h-[480px] lg:h-[704px] bg-black flex justify-center items-center text-white">
            <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/ISKkUvNiGFw?autoplay=1&mute=1&enablejsapi=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <!-- <client-only placeholder="Loading...">
              <vue-youtube-player :player-vars="{ start: 0,autoplay: 1, mute: 1 }" player-height="100%" player-width="100%" video-id="ISKkUvNiGFw"></vue-youtube-player>
            </client-only> -->
          </div>
        </div>
      </div>
      <div class="py-10 bg-gradient-to-t from-dim via-dim to-transparent overflow-hidden">
        <div class="container">
          <div class="relative text-center z-20 mb-7">
            <h5 class="font-medium sm:font-bold uppercase text-sm sm:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-[#0dcec0] to-[#15c5c6]">OUR CORE VALUES</h5>
            <h4 class="font-medium sm:font-bold uppercase text-3xl sm:text-7xl text-primary">GRIT</h4>
          </div>
          <div class="relative z-10">
            <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 py-2 px-7 sm:px-0">
              <li v-for="(value, index) in coreValues" :key="index" class="relative mb-7">
                <div :class="['relative z-20 sm:text-left', { 'text-right': isOdd(index) } ]">
                  <div class="inline-block mb-5">
                    <svg class="w-auto h-16 stroke-primary" :viewBox="value.icon.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="value.icon.path"></svg>
                  </div>
                  <h5 class="font-ubuntu font-bold text-xl sm:text-2xl mb-2">
                    <span class="text-secondary">{{ value.title.charAt(0) }}</span><span class="text-primary">{{ value.title.substring(1) }}</span>
                  </h5>
                  <p class="text-xs text-primary leading-relaxed">
                    {{ value.desc }}
                  </p>
                </div>
                <div :class="['absolute -top-40 md:left-1/2 z-10 md:-translate-x-1/2 font-bold text-[400px] leading-tight text-mid opacity-70', { 'righ-auto left-0 -translate-x-1/3' : isEven(index), 'left-auto right-0 translate-x-1/3' : isOdd(index) }]">{{ value.title.charAt(0) }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="py-10 bg-dim">
        <div class="container">
          <div class="px-7">
            <h2 class="font-bold text-2xl sm:text-5xl text-primary sm:leading-tight mb-3"><span class="text-secondary">Hear directly</span><br/>from our team</h2>
          </div>
          <div>
            <Team />
          </div>
        </div>
      </div>
      <div class="h-[240px] sm:h-[480px] overflow-hidden bg-cover bg-center" :style="{backgroundImage: `url(${require('~/assets/images/keynote.jpg')})`,}">
        <div class="w-2/3 h-full container mx-auto flex flex-col justify-center items-center text-center">
          <h3 class="font-bold text-2xl sm:text-5xl text-white sm:leading-tight mb-0 sm:mb-5"><span class="text-secondary">“</span>Dare to solve the unsolvable<span class="text-secondary">”</span></h3>
          <div class="hidden sm:block">
            <Button type="dark" path="/job-list" label="Apply Now" />
          </div>
        </div>
      </div>
      <div class="bg-gradient-to-tl from-dim via-dim to-transparent sm:bg-none">
        <div class="block sm:hidden py-10 text-center">
          <Button type="dark" path="/job-list" label="Apply Now" />
        </div>
        <div class="py-14">
          <div class="container mx-auto">
            <h2 class="font-medium sm:font-bold text-3xl sm:text-5xl text-primary text-center mb-0 sm:mb-14">Perks and Benefits</h2>
          </div>
        </div>
        <div>
          <Perks />
        </div>
        <ApplicationProcess />
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      coreValues: [
        {
          title: 'Growth Mindset',
          desc: 'Every new challenge is a new opportunity to learn. We provide the necessary safety net so that you may step out of your comfort zone.',
          icon: {
            viewBox: '0 0 78 70',
            path: '<path d="M6.93558 33.4423L27.4719 61.0427C33.382 68.9857 44.618 68.9858 50.5281 61.0427L71.0644 33.4423C76.3119 26.3898 76.3119 16.3687 71.0644 9.31624C63.3829 -1.00759 45.6284 2.05859 39 13.1942C32.3716 2.05859 14.6171 -1.00759 6.93559 9.31624C1.68814 16.3687 1.68813 26.3898 6.93558 33.4423Z" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
          }
        },
        {
          title: 'Rational',
          desc: 'Everyone can openly discuss  ideas based on reason and mutual respect, regardless of seniority, emotions, and personal dispositions.',
          icon: {
            viewBox: '0 0 74 78',
            path: '<path d="M23.7851 27.2317H47.9118M23.7851 41.0564H39.1384M41.4429 66.7071H45.6884C57.2354 66.7071 67.2802 58.3996 69.9906 46.6083C71.3365 40.7529 71.3365 34.6451 69.9906 28.7896L69.6352 27.2435C67.0228 15.8783 58.5081 7.04815 47.6566 4.45057L46.1321 4.08566C40.085 2.63812 33.8053 2.63811 27.7581 4.08565L26.8659 4.29922C15.6271 6.98952 6.80848 16.1349 4.10285 27.9057C2.6234 34.3421 2.63692 41.1147 4.11637 47.5511C6.8643 59.5059 14.9475 69.4552 25.7911 74.0912L26.2637 74.2932C30.9562 76.2994 36.3315 73.8833 38.257 68.9606C38.7869 67.6059 40.0487 66.7071 41.4429 66.7071Z" stroke-width="5" stroke-linecap="round"/>'
          }
        },
        {
          title: 'Initiative',
          desc: 'Dare to think and dare to do; our members are proactive and action-biased. We relentlessly look for new initiatives to take on.',
          icon: {
            viewBox: '0 0 62 62',
            path: '<path d="M52 26.9684C43.5158 29.7965 32.2036 18.4842 35.0316 10M38.5173 6.51427L20.2388 24.7928C12.2924 32.7392 6.65505 42.6958 3.92946 53.5982L3.04624 57.1311C2.77105 58.2318 3.76815 59.2289 4.86894 58.9538L8.40178 58.0705C19.3042 55.3449 29.2608 49.7076 37.2072 41.7612L55.4857 23.4827C57.7359 21.2325 59 18.1807 59 14.9985C59 8.3719 53.6281 3 47.0015 3C43.8193 3 40.7675 4.26412 38.5173 6.51427Z" stroke-width="5"/>'
          }
        },
        {
          title: 'Thrive as one',
          desc: 'Succeeding alone is not as valuable as thriving together. We tackle problems directly and overcome challenges as a team!',
          icon: {
            viewBox: '0 0 68 60',
            path: '<path d="M3 52.1136C3 45.231 7.97074 39.3685 14.7261 38.2838L15.3346 38.1861C20.744 37.3175 26.256 37.3175 31.6654 38.1861L32.2739 38.2838C39.0293 39.3685 44 45.231 44 52.1136C44 55.0884 41.603 57.5 38.6462 57.5H8.3538C5.39698 57.5 3 55.0884 3 52.1136Z" stroke-width="5"/><path d="M35.4583 14.5312C35.4583 21.1759 30.1044 26.5625 23.5 26.5625C16.8956 26.5625 11.5417 21.1759 11.5417 14.5312C11.5417 7.88657 16.8956 2.5 23.5 2.5C30.1044 2.5 35.4583 7.88657 35.4583 14.5312Z" stroke-width="5"/><path d="M44 26.5625C50.7655 26.5625 56.25 21.1759 56.25 14.5312C56.25 7.88657 50.7655 2.5 44 2.5M52.3645 57.5H59.5156C62.5446 57.5 65 55.0884 65 52.1136C65 45.231 59.908 39.3685 52.9879 38.2838V38.2838C52.5729 38.2188 52.1528 38.1861 51.7328 38.1861C50.6134 38.1861 50.266 38.1861 48.3441 38.1861" stroke-width="5" stroke-linecap="round"/>'
          }
        }
      ]
    }
  },
  methods: {
    isEven(n) {
      return n % 2 == 0;
    },
    isOdd(n) {
      return Math.abs(n % 2) == 1;
    }
  }
}
</script>
