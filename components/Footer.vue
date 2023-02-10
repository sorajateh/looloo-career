<template>
  <footer class="relative bg-primary pb-14 lg:pb-28 z-50">
    <div class="container">
        <div class="flex justify-between items-end pb-3 sm:pb-7">
            <div class="ml-3 -mt-10">
                <img width="280" height="208" class="hidden sm:block" src="~/assets/images/faqs.svg" />
                <img width="160" height="113" class="block sm:hidden" src="~/assets/images/tiny-faqs.svg" />
            </div>
            <div class="hidden sm:block">
                <Button type="dark" path="/job-list" label="Apply Now" />
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 px-7">
            <div>
                <div v-for="(faq, index) in faqs.slice(0, 8)" :key="index" @click="checkCollapse(index)">
                    <Collapse :question="faq.q" :answer="faq.a" :collapsed="faq.collapsed" />
                </div>
            </div>
            <div>
                <div v-for="(faq, index) in faqs.slice(8, 15)" :key="index" @click="checkCollapse(index+8)">
                    <Collapse :question="faq.q" :answer="faq.a" :collapsed="faq.collapsed" />
                </div>
            </div>
        </div>
        <div class="block sm:hidden px-7 mt-7">
            <div class="flex divide-x items-center">
                <div class="w-1/2">
                    <svg width="129" height="40" viewBox="0 0 129 40" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.71105 40H0.540707C0.397229 39.9998 0.259699 39.9426 0.15832 39.8411C0.0569418 39.7396 -1.61737e-07 39.602 0 39.4585V0.540705C0 0.397301 0.0569681 0.259769 0.15837 0.158368C0.259772 0.0569657 0.397303 0 0.540707 0C1.79015 0 2.98842 0.49634 3.87192 1.37983C4.75541 2.26333 5.25176 3.4616 5.25176 4.71105V39.4585C5.25187 39.5296 5.23795 39.6 5.21083 39.6656C5.1837 39.7313 5.1439 39.791 5.09368 39.8413C5.04346 39.8916 4.98381 39.9315 4.91816 39.9588C4.8525 39.986 4.78213 40 4.71105 40Z" fill="#00DBB6"/>
                        <path d="M70.8532 40H66.5536C66.4273 40 66.3061 39.9498 66.2167 39.8604C66.1273 39.7711 66.0771 39.6499 66.0771 39.5235V0.475659C66.0771 0.413126 66.0895 0.351206 66.1134 0.293443C66.1374 0.235681 66.1725 0.183208 66.2167 0.139029C66.261 0.094849 66.3135 0.0598291 66.3713 0.0359729C66.4291 0.0121167 66.4911 -0.000106199 66.5536 6.95095e-07C67.1807 -0.000106114 67.8018 0.123336 68.3812 0.363279C68.9606 0.603221 69.487 0.954961 69.9305 1.39841C70.3739 1.84186 70.7257 2.36832 70.9656 2.94773C71.2056 3.52715 71.329 4.14815 71.3289 4.77528V39.5235C71.3289 39.6497 71.2788 39.7708 71.1896 39.8602C71.1005 39.9495 70.9795 39.9998 70.8532 40Z" fill="#00DBB6"/>
                        <path d="M21.4667 20.2898C22.8886 20.2898 24.2786 20.7114 25.4608 21.5014C26.6431 22.2914 27.5646 23.4142 28.1088 24.7279C28.6529 26.0415 28.7953 27.4871 28.5179 28.8817C28.2405 30.2763 27.5557 31.5573 26.5503 32.5627C25.5448 33.5682 24.2638 34.2529 22.8692 34.5303C21.4746 34.8077 20.0291 34.6653 18.7154 34.1212C17.4017 33.5771 16.2789 32.6556 15.4889 31.4733C14.699 30.291 14.2773 28.901 14.2773 27.4791C14.2792 25.573 15.0373 23.7455 16.3852 22.3976C17.733 21.0498 19.5605 20.2917 21.4667 20.2898ZM21.4667 15.0364C19.0062 15.0364 16.601 15.766 14.5552 17.1329C12.5094 18.4999 10.9149 20.4428 9.97334 22.716C9.03176 24.9891 8.7854 27.4905 9.26541 29.9036C9.74542 32.3168 10.9302 34.5335 12.67 36.2733C14.4099 38.0131 16.6265 39.1979 19.0397 39.6779C21.4529 40.1579 23.9542 39.9116 26.2274 38.97C28.5005 38.0284 30.4434 36.4339 31.8104 34.3881C33.1773 32.3423 33.9069 29.9371 33.9069 27.4767C33.9069 24.1773 32.5963 21.0131 30.2633 18.6801C27.9303 16.347 24.766 15.0364 21.4667 15.0364Z" fill="#00DBB6"/>
                        <path d="M49.1918 20.2898C50.6137 20.2898 52.0037 20.7114 53.1859 21.5014C54.3682 22.2914 55.2897 23.4142 55.8339 24.7279C56.378 26.0415 56.5204 27.4871 56.243 28.8817C55.9656 30.2763 55.2809 31.5573 54.2754 32.5627C53.27 33.5682 51.9889 34.2529 50.5943 34.5303C49.1997 34.8077 47.7542 34.6653 46.4405 34.1212C45.1268 33.5771 44.004 32.6556 43.214 31.4733C42.4241 30.291 42.0024 28.901 42.0024 27.4791C42.0044 25.573 42.7624 23.7455 44.1103 22.3976C45.4581 21.0498 47.2856 20.2917 49.1918 20.2898ZM49.1918 15.0364C46.7313 15.0364 44.3261 15.766 42.2803 17.1329C40.2345 18.4999 38.64 20.4428 37.6984 22.716C36.7569 24.9891 36.5105 27.4905 36.9905 29.9036C37.4705 32.3168 38.6553 34.5335 40.3952 36.2733C42.135 38.0131 44.3516 39.1979 46.7648 39.6779C49.178 40.1579 51.6793 39.9116 53.9524 38.97C56.2256 38.0284 58.1685 36.4339 59.5355 34.3881C60.9024 32.3423 61.632 29.9371 61.632 27.4767C61.632 24.1773 60.3214 21.0131 57.9884 18.6801C55.6554 16.347 52.4911 15.0364 49.1918 15.0364Z" fill="#00DBB6"/>
                        <path d="M88.0047 20.2898C89.4267 20.2898 90.8166 20.7114 91.9989 21.5014C93.1812 22.2914 94.1027 23.4142 94.6468 24.7279C95.191 26.0415 95.3334 27.4871 95.056 28.8817C94.7786 30.2763 94.0938 31.5573 93.0884 32.5627C92.0829 33.5682 90.8019 34.2529 89.4073 34.5303C88.0127 34.8077 86.5672 34.6653 85.2535 34.1212C83.9398 33.5771 82.817 32.6556 82.027 31.4733C81.237 30.291 80.8154 28.901 80.8154 27.4791C80.8173 25.573 81.5754 23.7455 82.9232 22.3976C84.2711 21.0498 86.0986 20.2917 88.0047 20.2898ZM88.0047 15.0364C85.5443 15.0364 83.1391 15.766 81.0933 17.1329C79.0475 18.4999 77.453 20.4428 76.5114 22.716C75.5698 24.9891 75.3235 27.4905 75.8035 29.9036C76.2835 32.3168 77.4683 34.5335 79.2081 36.2733C80.9479 38.0131 83.1646 39.1979 85.5778 39.6779C87.9909 40.1579 90.4923 39.9116 92.7654 38.97C95.0386 38.0284 96.9815 36.4339 98.3485 34.3881C99.7154 32.3423 100.445 29.9371 100.445 27.4767C100.445 24.1773 99.1344 21.0131 96.8014 18.6801C94.4684 16.347 91.3041 15.0364 88.0047 15.0364Z" fill="#00DBB6"/>
                        <path d="M115.73 20.2898C117.152 20.2898 118.542 20.7114 119.724 21.5014C120.906 22.2914 121.828 23.4142 122.372 24.7279C122.916 26.0415 123.058 27.4871 122.781 28.8817C122.504 30.2763 121.819 31.5573 120.813 32.5627C119.808 33.5682 118.527 34.2529 117.132 34.5303C115.738 34.8077 114.292 34.6653 112.979 34.1212C111.665 33.5771 110.542 32.6556 109.752 31.4733C108.962 30.291 108.54 28.901 108.54 27.4791C108.543 25.573 109.301 23.7456 110.649 22.3978C111.996 21.05 113.824 20.2919 115.73 20.2898ZM115.73 15.0364C113.269 15.0364 110.864 15.766 108.818 17.1329C106.773 18.4999 105.178 20.4428 104.237 22.716C103.295 24.9891 103.049 27.4905 103.529 29.9036C104.009 32.3168 105.193 34.5335 106.933 36.2733C108.673 38.0131 110.89 39.1979 113.303 39.6779C115.716 40.1579 118.217 39.9116 120.491 38.97C122.764 38.0284 124.707 36.4339 126.074 34.3881C127.441 32.3423 128.17 29.9371 128.17 27.4767C128.17 24.1773 126.859 21.0131 124.526 18.6801C122.193 16.347 119.029 15.0364 115.73 15.0364Z" fill="#00DBB6"/>
                        <path d="M50.1522 8.73053L60.5273 0.267073C60.6347 0.180164 60.7646 0.125455 60.9018 0.109279C61.0391 0.0931026 61.1781 0.116121 61.3028 0.175668C61.4275 0.235215 61.5328 0.328857 61.6065 0.445758C61.6802 0.56266 61.7193 0.698041 61.7192 0.836237L61.7241 14.2522C61.7239 14.3149 61.707 14.3763 61.6752 14.4303C61.6434 14.4843 61.5979 14.5289 61.5432 14.5595C61.4885 14.5901 61.4267 14.6056 61.3641 14.6045C61.3014 14.6034 61.2402 14.5856 61.1867 14.5531C58.7791 13.0724 58.9913 10.6104 56.8122 9.57208C54.0721 8.26463 52.894 10.2705 50.249 9.33222C50.1915 9.30998 50.1408 9.27306 50.102 9.22515C50.0633 9.17724 50.0377 9.12001 50.0279 9.05915C50.0181 8.99829 50.0245 8.93593 50.0463 8.87827C50.0681 8.82062 50.1046 8.76968 50.1522 8.73053Z" fill="#00DBB6"/>
                    </svg>
                </div>
                <div class="w-1/2">
                    <ul class="flex justify-end space-x-7">
                        <li v-for="(social, index) in socialLinks" :key="index">
                            <a :href="social.href">
                                <svg v-if="social.icon.path" :viewBox="social.icon.viewBox" class="w-6 h-6 fill-[#9FAABF]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" v-html="social.icon.path"></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <MatomoConsent />
  </footer>
</template>

<script>
export default {
    data() {
        return {
            faqs: [
                {
                    q: 'What is Looloo Technology?',
                    a: '<p>Looloo Technology is a deep technology consultancy founded by experienced professionals who love to solve complex problems using deep technology.  We help clients design and develop tailor-made AI solutions to revolutionize industry standards and deliver higher value to customers.</p>',
                    collapsed: true
                },
                {
                    q: 'Can I work remotely?',
                    a: '<p>Absolutely! We are currently a “Hybrid Office,” which allows our members to enjoy both the conveniences of working-from-home without losing a strong sense of community. We work remotely 3 days a week and in-office 2 days a week.</p>',
                    collapsed: true
                },
                {
                    q: 'Can’t FIND a role you want to apply for?',
                    a: '<p>Do not worry! If you can’t find a role you want to apply for in the career opportunities section, you can quickly submit your application here: Apply for Unlisted Roles (link). Even if it’s not the role we are currently looking for, we are open to exploring potential opportunities to work with passionate, hardworking, and talented people!</p>',
                    collapsed: true
                },
                {
                    q: 'Can I apply for multiple positions at once?',
                    a: '<p>Yes, you can apply for multiple job positions at once. However, we highly recommend you apply for a role that best matches your passion, interests, and skills. Our application process is extremely rigorous. Applying for multiple roles may mean additional tests and interviews, depending on the combination of roles.</p>',
                    collapsed: true
                },
                {
                    q: 'Does Looloo Technology offer internship opportunities?',
                    a: '<p>Yes, we do! You can learn a lot more about our open positions for internships in the <a href="http://looloo.local/job-list">Intern Roles</a> section. You will get a chance to learn from our experts and tackle a lot of real challenges every day! Please note that we highly recommend you to intern with us for a minimum of 2 months (and at least 20 hours per week) to maximize your learning potential. Shorter internships significantly limit the size of projects and tasks that we are able to give you.</p><p><strong>All internship roles are compensated</strong>. Variation in compensation will be based on the candidate’s performance during recruitment screening.</p>',
                    collapsed: true
                },
                {
                    q: 'What are tech and non-tech roles?',
                    a: '<ul><li><p>Tech roles are job positions that require technical and specialized knowledge in programming.</p><p>You can check tech role opportunities at Looloo Technology at <a href="http://looloo.local/job-list">Tech Roles</a></p></li><li><p>Non-tech roles are job positions that do not require technical or specialized knowledge in programming.</p><p>You can check non-tech role opportunities at Looloo Technology at <a href="http://looloo.local/job-list">Non-Tech Roles</a></p></li></ul>',
                    collapsed: true
                },
                {
                    q: 'What are the working hours?',
                    a: '<p>At Looloo Technology, we work 5 days a week from Monday to Friday, for a total of 9 hours a day including 1-hour lunch time.</p><p>Our working hours are quite flexible; we allow our associates to work earlier or later than the standard working hours. Most of our associates start working at 9:00 a.m. and finish their work at 6:00 p.m.</p>',
                    collapsed: true
                },
                {
                    q: 'What supporting documents are required to apply for a job at Looloo Technology?',
                    a: '<ul><li><strong>Required:</strong> Resume/CV (Your picture is not necessary and both the Thai and English documents are acceptable.)</li><li><strong>Optional:</strong> Transcript / Portfolio</li></ul>',
                    collapsed: true
                },
                {
                    q: 'Can I walk in and apply for a job at the office?',
                    a: '<p>Normally, our HR will send an application form and tests to all applicants online to save you time so we would not recommend you to waste your time traveling to our office.</p>',
                    collapsed: true
                },
                {
                    q: 'How long are internships at Looloo Technology?',
                    a: '<p>We highly recommend that our interns stay with us for a minimum of 2 months (at least 40 hours per week). Shorter internships are considered on a case by case basis.</p>',
                    collapsed: true
                },
                {
                    q: 'Do interns at Looloo Technology get paid?',
                    a: '<p>Yes! <strong>All internship roles are compensated.</strong> Variation in compensation will be based on the candidate’s performance during recruitment screening.</p>',
                    collapsed: true
                },
                {
                    q: 'Can I apply for a job without relevant working experience?',
                    a: '<p>If you have no related working experience but are passionate and confident in your abilities, we encourage you to apply anyway. Our application process is designed to help reveal your ability to perform in the role. You will be considered based on this.</p>',
                    collapsed: true
                },
                {
                    q: 'I’m not good at coding at all. Are there any other positions I can apply for a job at Looloo Technology?',
                    a: '<p>Don’t worry! You don’t have to be good at coding to join us; we have many non-tech roles that you can apply for without requiring any coding skills. Check out our career opportunities section for more!</p>',
                    collapsed: true
                },
                {
                    q: 'How long does the hiring process take after taking the tests and interviews?',
                    a: '<p>The final decision takes an average of 5 business days. However, this may vary depending on the role and number of applicants for each position at that time. If you have passed our tests or interview, we will contact you via email as soon as possible.</p>',
                    collapsed: true
                },
                {
                    q: 'How does Looloo Technology help reduce the spread of COVID-19?',
                    a: '<p>We are currently a “Hybrid Office,” working remotely 3 days a week and in-office 2 days a week. Each week, our members are required to come in once (with just their team) and once with the whole office.</p><p>All of our members are required to take an ATK test once a week in the morning before coming in to meet the whole team. All members are required to wear a mask while in the office.</p>',
                    collapsed: true
                }
            ],
            socialLinks: [
                {
                    icon: {
                        viewBox: '0 0 11 23',
                        path: ' <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3147 23H2.43724V11.4985H0V7.53553H2.43724V5.15627C2.43724 1.92344 3.81271 0 7.72302 0H10.9776V3.96447H8.94351C7.42126 3.96447 7.32067 4.51827 7.32067 5.55185L7.31396 7.53553H11L10.5686 11.4985H7.31396V23H7.3147Z" />'
                    },
                    href: '#'
                },
                {
                    icon: {
                        viewBox: '0 0 22 18',
                        path: '<path class="b" d="M19,0H3C1.35,0,0,1.35,0,3V15c0,1.65,1.35,3,3,3H19c1.65,0,3-1.35,3-3V3c0-1.65-1.35-3-3-3ZM3,2H19c.39,0,.72,.23,.88,.56l-8.88,6.22L2.12,2.56c.17-.33,.5-.56,.88-.56Zm16,14H3c-.55,0-1-.45-1-1V4.92l8.43,5.9c.34,.24,.8,.24,1.15,0l8.43-5.9V15c0,.55-.45,1-1,1Z"/>'
                    },
                    href: '#'
                },
                {
                    icon: {
                        viewBox: '0 0 22 21',
                        path: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7521 8.53107C18.0705 8.53107 18.3288 8.79023 18.3288 9.10906C18.3288 9.42736 18.0705 9.68651 17.7521 9.68651H16.1433V10.7203H17.7521C18.0702 10.7203 18.3288 10.9798 18.3288 11.2977C18.3288 11.6173 18.0702 11.8763 17.7521 11.8763H15.5663C15.249 11.8763 14.9899 11.6173 14.9899 11.2977V6.91914C14.9899 6.60084 15.2481 6.34133 15.5663 6.34133H17.7521C18.0705 6.34133 18.3288 6.60084 18.3288 6.91914C18.3288 7.23798 18.0705 7.49748 17.7521 7.49748H16.1433V8.53107H17.7521ZM14.2155 11.2977C14.2155 11.5478 14.0579 11.7681 13.8214 11.8464C13.762 11.8665 13.7001 11.8763 13.6375 11.8763C13.4583 11.8763 13.2857 11.7901 13.1772 11.6448L10.9372 8.58951V11.2977C10.9372 11.6173 10.6789 11.8763 10.3603 11.8763C10.0429 11.8763 9.7839 11.6173 9.7839 11.2977V6.91914C9.7839 6.67029 9.94206 6.45004 10.1775 6.371C10.2371 6.35128 10.2991 6.34133 10.3608 6.34133C10.5406 6.34133 10.7131 6.42766 10.8222 6.57278L13.0618 9.62914V6.91914C13.0618 6.60084 13.3214 6.34133 13.6386 6.34133C13.9574 6.34133 14.2155 6.60084 14.2155 6.91914V11.2977ZM8.9545 11.2977C8.9545 11.6173 8.69564 11.8763 8.37792 11.8763C8.06002 11.8763 7.80117 11.6173 7.80117 11.2977V6.91914C7.80117 6.60084 8.06002 6.34133 8.37792 6.34133C8.69564 6.34133 8.9545 6.60084 8.9545 6.91914V11.2977ZM6.69358 11.8763H4.50837C4.18976 11.8763 3.93108 11.6173 3.93108 11.2977V6.91914C3.93108 6.60084 4.18976 6.34133 4.50837 6.34133C4.82609 6.34133 5.08476 6.60084 5.08476 6.91914V10.7203H6.69358C7.01254 10.7203 7.26998 10.9798 7.26998 11.2977C7.26998 11.6173 7.01254 11.8763 6.69358 11.8763ZM22 8.94245C22 4.0118 17.0647 0 10.9995 0C4.93441 0 0 4.0118 0 8.94245C0 13.3626 3.91335 17.0659 9.19935 17.7662C9.55732 17.843 10.0451 18.0036 10.1681 18.3094C10.2786 18.5876 10.2403 19.0238 10.2032 19.3054C10.2032 19.3054 10.075 20.083 10.047 20.2494C9.9995 20.5278 9.82557 21.3386 10.9995 20.8429C12.1741 20.3476 17.3347 17.106 19.6419 14.4445H19.641C21.2362 12.694 22 10.9162 22 8.94245Z" />'
                    },
                    href: '#'
                }
            ]
        }
    },
    methods: {
        checkCollapse(index) {
            for (let i = 0; i < this.faqs.length; i++) {
                if (i !== index) {
                    this.faqs[i].collapsed = false
                } else {
                    this.faqs[index].collapsed = !this.faqs[index].collapsed
                }
            }
        }
    },
    mounted() {
        for (let i = 0; i < this.faqs.length; i++) {
            this.faqs[i].collapsed = false
        }
    }
}
</script>
