<template>
  <div class="w-screen shadow lg:shadow-md bg-white sticky top-0 lg:relative z-50">
    <div class="h-14 sm:h-[72px] w-full lg:w-auto lg:container flex justify-between lg:justify-start items-center">
      <div class="block lg:hidden ml-4 cursor-pointer" @click="toggleMobileMenu">
        <svg v-show="!isMobileMenuOpened" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 stroke-2 stroke-[#9FAABF]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-show="isMobileMenuOpened" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 stroke-2 stroke-[#9FAABF]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <a :href="baseUrl" class="block mx-auto lg:mx-0">
        <svg width="129" height="40" viewBox="0 0 129 40" fill="currentColor" class="h-7 sm:h-auto fill-secondary" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.71105 40H0.540707C0.397229 39.9998 0.259699 39.9426 0.15832 39.8411C0.0569418 39.7396 -1.61737e-07 39.602 0 39.4585V0.540705C0 0.397301 0.0569681 0.259769 0.15837 0.158368C0.259772 0.0569657 0.397303 0 0.540707 0C1.79015 0 2.98842 0.49634 3.87192 1.37983C4.75541 2.26333 5.25176 3.4616 5.25176 4.71105V39.4585C5.25187 39.5296 5.23795 39.6 5.21083 39.6656C5.1837 39.7313 5.1439 39.791 5.09368 39.8413C5.04346 39.8916 4.98381 39.9315 4.91816 39.9588C4.8525 39.986 4.78213 40 4.71105 40Z" />
          <path d="M70.8532 40H66.5536C66.4273 40 66.3061 39.9498 66.2167 39.8604C66.1273 39.7711 66.0771 39.6499 66.0771 39.5235V0.475659C66.0771 0.413126 66.0895 0.351206 66.1134 0.293443C66.1374 0.235681 66.1725 0.183208 66.2167 0.139029C66.261 0.094849 66.3135 0.0598291 66.3713 0.0359729C66.4291 0.0121167 66.4911 -0.000106199 66.5536 6.95095e-07C67.1807 -0.000106114 67.8018 0.123336 68.3812 0.363279C68.9606 0.603221 69.487 0.954961 69.9305 1.39841C70.3739 1.84186 70.7257 2.36832 70.9656 2.94773C71.2056 3.52715 71.329 4.14815 71.3289 4.77528V39.5235C71.3289 39.6497 71.2788 39.7708 71.1896 39.8602C71.1005 39.9495 70.9795 39.9998 70.8532 40Z" />
          <path d="M21.4667 20.2898C22.8886 20.2898 24.2786 20.7114 25.4608 21.5014C26.6431 22.2914 27.5646 23.4142 28.1088 24.7279C28.6529 26.0415 28.7953 27.4871 28.5179 28.8817C28.2405 30.2763 27.5557 31.5573 26.5503 32.5627C25.5448 33.5682 24.2638 34.2529 22.8692 34.5303C21.4746 34.8077 20.0291 34.6653 18.7154 34.1212C17.4017 33.5771 16.2789 32.6556 15.4889 31.4733C14.699 30.291 14.2773 28.901 14.2773 27.4791C14.2792 25.573 15.0373 23.7455 16.3852 22.3976C17.733 21.0498 19.5605 20.2917 21.4667 20.2898ZM21.4667 15.0364C19.0062 15.0364 16.601 15.766 14.5552 17.1329C12.5094 18.4999 10.9149 20.4428 9.97334 22.716C9.03176 24.9891 8.7854 27.4905 9.26541 29.9036C9.74542 32.3168 10.9302 34.5335 12.67 36.2733C14.4099 38.0131 16.6265 39.1979 19.0397 39.6779C21.4529 40.1579 23.9542 39.9116 26.2274 38.97C28.5005 38.0284 30.4434 36.4339 31.8104 34.3881C33.1773 32.3423 33.9069 29.9371 33.9069 27.4767C33.9069 24.1773 32.5963 21.0131 30.2633 18.6801C27.9303 16.347 24.766 15.0364 21.4667 15.0364Z" />
          <path d="M49.1918 20.2898C50.6137 20.2898 52.0037 20.7114 53.1859 21.5014C54.3682 22.2914 55.2897 23.4142 55.8339 24.7279C56.378 26.0415 56.5204 27.4871 56.243 28.8817C55.9656 30.2763 55.2809 31.5573 54.2754 32.5627C53.27 33.5682 51.9889 34.2529 50.5943 34.5303C49.1997 34.8077 47.7542 34.6653 46.4405 34.1212C45.1268 33.5771 44.004 32.6556 43.214 31.4733C42.4241 30.291 42.0024 28.901 42.0024 27.4791C42.0044 25.573 42.7624 23.7455 44.1103 22.3976C45.4581 21.0498 47.2856 20.2917 49.1918 20.2898ZM49.1918 15.0364C46.7313 15.0364 44.3261 15.766 42.2803 17.1329C40.2345 18.4999 38.64 20.4428 37.6984 22.716C36.7569 24.9891 36.5105 27.4905 36.9905 29.9036C37.4705 32.3168 38.6553 34.5335 40.3952 36.2733C42.135 38.0131 44.3516 39.1979 46.7648 39.6779C49.178 40.1579 51.6793 39.9116 53.9524 38.97C56.2256 38.0284 58.1685 36.4339 59.5355 34.3881C60.9024 32.3423 61.632 29.9371 61.632 27.4767C61.632 24.1773 60.3214 21.0131 57.9884 18.6801C55.6554 16.347 52.4911 15.0364 49.1918 15.0364Z" />
          <path d="M88.0047 20.2898C89.4267 20.2898 90.8166 20.7114 91.9989 21.5014C93.1812 22.2914 94.1027 23.4142 94.6468 24.7279C95.191 26.0415 95.3334 27.4871 95.056 28.8817C94.7786 30.2763 94.0938 31.5573 93.0884 32.5627C92.0829 33.5682 90.8019 34.2529 89.4073 34.5303C88.0127 34.8077 86.5672 34.6653 85.2535 34.1212C83.9398 33.5771 82.817 32.6556 82.027 31.4733C81.237 30.291 80.8154 28.901 80.8154 27.4791C80.8173 25.573 81.5754 23.7455 82.9232 22.3976C84.2711 21.0498 86.0986 20.2917 88.0047 20.2898ZM88.0047 15.0364C85.5443 15.0364 83.1391 15.766 81.0933 17.1329C79.0475 18.4999 77.453 20.4428 76.5114 22.716C75.5698 24.9891 75.3235 27.4905 75.8035 29.9036C76.2835 32.3168 77.4683 34.5335 79.2081 36.2733C80.9479 38.0131 83.1646 39.1979 85.5778 39.6779C87.9909 40.1579 90.4923 39.9116 92.7654 38.97C95.0386 38.0284 96.9815 36.4339 98.3485 34.3881C99.7154 32.3423 100.445 29.9371 100.445 27.4767C100.445 24.1773 99.1344 21.0131 96.8014 18.6801C94.4684 16.347 91.3041 15.0364 88.0047 15.0364Z" />
          <path d="M115.73 20.2898C117.152 20.2898 118.542 20.7114 119.724 21.5014C120.906 22.2914 121.828 23.4142 122.372 24.7279C122.916 26.0415 123.058 27.4871 122.781 28.8817C122.504 30.2763 121.819 31.5573 120.813 32.5627C119.808 33.5682 118.527 34.2529 117.132 34.5303C115.738 34.8077 114.292 34.6653 112.979 34.1212C111.665 33.5771 110.542 32.6556 109.752 31.4733C108.962 30.291 108.54 28.901 108.54 27.4791C108.543 25.573 109.301 23.7456 110.649 22.3978C111.996 21.05 113.824 20.2919 115.73 20.2898ZM115.73 15.0364C113.269 15.0364 110.864 15.766 108.818 17.1329C106.773 18.4999 105.178 20.4428 104.237 22.716C103.295 24.9891 103.049 27.4905 103.529 29.9036C104.009 32.3168 105.193 34.5335 106.933 36.2733C108.673 38.0131 110.89 39.1979 113.303 39.6779C115.716 40.1579 118.217 39.9116 120.491 38.97C122.764 38.0284 124.707 36.4339 126.074 34.3881C127.441 32.3423 128.17 29.9371 128.17 27.4767C128.17 24.1773 126.859 21.0131 124.526 18.6801C122.193 16.347 119.029 15.0364 115.73 15.0364Z" />
          <path d="M50.1522 8.73053L60.5273 0.267073C60.6347 0.180164 60.7646 0.125455 60.9018 0.109279C61.0391 0.0931026 61.1781 0.116121 61.3028 0.175668C61.4275 0.235215 61.5328 0.328857 61.6065 0.445758C61.6802 0.56266 61.7193 0.698041 61.7192 0.836237L61.7241 14.2522C61.7239 14.3149 61.707 14.3763 61.6752 14.4303C61.6434 14.4843 61.5979 14.5289 61.5432 14.5595C61.4885 14.5901 61.4267 14.6056 61.3641 14.6045C61.3014 14.6034 61.2402 14.5856 61.1867 14.5531C58.7791 13.0724 58.9913 10.6104 56.8122 9.57208C54.0721 8.26463 52.894 10.2705 50.249 9.33222C50.1915 9.30998 50.1408 9.27306 50.102 9.22515C50.0633 9.17724 50.0377 9.12001 50.0279 9.05915C50.0181 8.99829 50.0245 8.93593 50.0463 8.87827C50.0681 8.82062 50.1046 8.76968 50.1522 8.73053Z" />
        </svg>
      </a>
      <div class="block lg:hidden pr-4">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5C17 10.4869 16.3183 12.3146 15.1759 13.7619L19.7069 18.2929C20.0974 18.6835 20.0974 19.3166 19.7069 19.7072C19.3164 20.0977 18.6832 20.0977 18.2927 19.7072L13.7617 15.1761C12.3144 16.3183 10.4868 17 8.5 17C3.80558 17 0 13.1944 0 8.5ZM13.1603 13.0311C13.1371 13.0505 13.1145 13.0711 13.0927 13.0929C13.0709 13.1148 13.0503 13.1373 13.0309 13.1606C11.8602 14.2989 10.262 15 8.5 15C4.91015 15 2 12.0899 2 8.5C2 4.91015 4.91015 2 8.5 2C12.0899 2 15 4.91015 15 8.5C15 10.2621 14.2989 11.8604 13.1603 13.0311Z" fill="#9FAABF"/>
        </svg>
      </div>
      <div class="hidden lg:block ml-7">
        <ul class="flex space-x-7 xl:space-x-10">
          <li class="relative" v-for="(menu, index) in menus" :key="index">
            <a v-if="menu.localPath === undefined" class="flex justify-between items-center font-semibold text-slate hover:text-primary fill-slate hover:fill-primary" :href="menu.path ? baseUrl + menu.path : 'javascript:void(0)'" @mouseenter="toggleSubmenu(index)">
              <span>{{ menu.title }}</span>
              <svg v-if="menu.submenus.length" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 ml-4">
                <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </a>
            <NuxtLink v-else :to="menu.path" class="font-semibold text-slate hover:text-primary">{{ menu.title }}</NuxtLink>
            <nav class="w-60 absolute top-8 backdrop-blur-sm bg-white/90 py-2 shadow-xl rounded-lg z-50 border border-mid" v-if="menu.submenus.length" v-show="index === isSubmenu" :ref="index" @mouseleave="isSubmenu = null">
              <a class="block px-5 py-1.5 font-medium hover:font-semibold text-slate hover:text-primary" v-for="(submenu, index) in menu.submenus" :key="index" :href="baseUrl + submenu.path">{{ submenu.title }}</a>
            </nav>
          </li>
        </ul>
      </div>
    </div> 
    <div ref="mobileMenu" v-show="isMobileMenuOpened" class="block lg:hidden">
      <ul class="px-7 py-5 divide-y">
        <li v-for="(menu, index) in menus" :key="index">
          <a v-if="menu.localPath === undefined" class="flex justify-between items-center" :href="menu.path ? baseUrl + menu.path : 'javascript:void(0)'" @click="toggleMobileSubmenu(index)">
            <span class="grow block py-2 font-semibold text-slate">{{ menu.title }}</span>
            <svg v-if="menu.submenus.length" width="12" height="12" viewBox="0 0 12 12" class="flex-none stroke-secondary" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M11 6L1 6" stroke-width="2" stroke-linecap="round" />
            </svg>
          </a>
          <NuxtLink v-else :to="menu.path" class="block py-2 font-semibold text-slate">{{ menu.title }}</NuxtLink>
          <nav class="pb-3" v-if="menu.submenus.length" v-show="index === isSubmenu" :ref="index">
            <a class="block pl-5 py-1 font-medium text-slate" v-for="(submenu, index) in menu.submenus" :key="index" :href="baseUrl + submenu.path">{{ submenu.title }}</a>
          </nav>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMobileMenuOpened: false,
      isSubmenu: null,
      baseUrl: 'https://loolootech.com',
      menus: [
        {
          title: 'About Us',
          path: '/about-us',
          submenus: []
        },
        {
          title: 'Our Products',
          path: null,
          submenus: [
            {
              title: 'Predictive Analytics',
              path: '/predictive-analytics'
            },
            {
              title: 'Generative AI',
              path: '/generative-ai'
            },
            {
              title: 'Wordsense OCR',
              path: '/wordsense-ocr'
            },
            {
              title: 'WordSense Speech-to-Text',
              path: '/wordsense-speech-to-text'
            }
          ]
        },
        {
          title: 'Industry Solutions',
          path: '/industry-solutions',
          submenus: []
        },
        {
          title: 'News',
          path: '/news',
          submenus: []
        },
        {
          localPath: true,
          title: 'Careers',
          path: '/',
          submenus: []
        },
        {
          title: 'Contact Us',
          path: '/contact-us',
          submenus: []
        }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpened = !this.isMobileMenuOpened
    },
    toggleSubmenu(i) {
      this.isSubmenu = i
    },
    toggleMobileSubmenu(i) {
      this.isSubmenu !== null ? this.isSubmenu = null : this.isSubmenu = i
    }
  }
}
</script>
