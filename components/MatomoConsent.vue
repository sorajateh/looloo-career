<template>
    <div v-show="isShow" class="fixed w-full py-5 sm:py-7 bottom-0 bg-secondary/90 backdrop-blur-sm">
        <div class="container">
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between px-7">
                <div class="font-mitr text-xs xs:text-sm text-primary max-w-lg pr-7">
                    เว็บไซต์มีการเก็บคุกกี้และข้อมูลการใช้งานอื่นๆ บนแพลตฟอร์มของเรา โปรดกด<span class="font-extrabold">“ยินยอม”</span>เพื่อช่วยให้เราพัฒนาประสบการณ์ของคุณให้ดียิ่งขึ้น 
                   <a class="text-white underline" href="https://drive.google.com/file/d/1kQyzJpxHsX2Hs9S0KIk25jpBPx9hshJX/view?usp=sharing" target="_blank">เรียนรู้เพิ่มเติมที่นี่</a>
                    <span v-if="isDevMode">(dev mode ไม่ต้องกดยินยอม)</span>
                </div>
                <div class="flex justify-center items-center space-x-3">
                    <button @click="acceptConsent" class="inline-flex justify-center items-center space-x-4 py-1 xs:py-2 px-7 rounded-full border-[1.5px] border-white font-mitr text-sm xs:text-base text-white">ยินยอม</button>
                    <button @click="closeBar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="absolute top-3 right-3 sm:relative sm:top-0 sm:right-0 w-5 h-5 stroke-primary">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        hostname: !process.server ? location.hostname : '',
        paq: [],
        isShow: true
    }
  },
  computed: {
    isDevMode() {
        // return !process.server ? location.hostname : ''
        return this.hostname == "127.0.0.1" || this.hostname == "localhost" ? true : false
    }
  },
  methods: {
    closeBar() {
        this.isShow = false
    },
    consentTrack() {
        this.paq.push(['rememberConsentGiven', (24*30*2)]) //60 days consent
    },
    non_consentTrack() {
        this.paq.push(['forgetConsentGiven'])
    },
    getCookie() {
        let cookieConsentName = " mtm_consent"
        let cookieNonConsentName = " mtm_consent_removed"
        let decodedCookie = decodeURIComponent(document.cookie)
        let cookies_arr = decodedCookie.split(';')
        for (let i = 0; i < cookies_arr.length; i++) {
            let cookie = cookies_arr[i];
            if (cookie.startsWith(cookieConsentName)&& !cookie.startsWith(cookieNonConsentName)) {
                return true
            }
        }
        return false
    },
    acceptConsent(){
        this.consentTrack()
        this.isShow = false
    }
  },
  mounted() {

        this.paq = window._paq = window._paq || []

        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        this.paq.push(['requireConsent'])
        this.paq.push(['trackPageView'])
        this.paq.push(['enableLinkTracking'])
        this.paq.push(['trackAllContentImpressions'])
            
        var u = "https://jobpasscard.matomo.cloud/"
        this.paq.push(['setTrackerUrl', u + 'matomo.php'])
        this.paq.push(['setSiteId', '5'])
        var d = document,
            g = d.createElement('script'), 
            s = d.getElementsByTagName('script')[0]
        g.async = true
        g.src = '//cdn.matomo.cloud/jobpasscard.matomo.cloud/matomo.js'
        s.parentNode.insertBefore(g,s)

        this.$nextTick(function () {
            let matomo_consent = this.getCookie()
            if (matomo_consent) {
                this.consentTrack()
                this.isShow = false
            } else {
                this.non_consentTrack()
                this.isShow = true
            }
        })

    }
}
</script>
