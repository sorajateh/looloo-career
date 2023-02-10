<template>
  <div>
    <Navbar/>
    <div id="content" class="relative">
        <Banner title="Our Application<br/>Process" pic="illustration-process.png"/>
        <Backdrop />
        <div class="pb-40 bg-gradient-to-t from-transparent via-dim to-transparent">
            <div class="container mx-auto">

                <section>
                    <header>
                        <div>
                            <h4>1 |</h4>
                        </div>
                        <div>
                            <h4>Submit Application</h4>
                            <hr />
                        </div>
                    </header>
                    <article>
                        <p>Your application process begins here! Submit your application through the link below. We will review your application and get back to you shortly with your first technical test.</p>
                        <p><strong><em>Note:</em></strong> The application form varies for ‘tech’ and ‘non-tech’ roles, so please make sure that you are applying using the correct form.</p>
                    </article>
                    <div class="text-center">
                        <Button type="normal" path="/job-list" label="VIEW OPEN JOBS" />
                    </div>
                </section>

                <section>
                    <header>
                        <div>
                            <h4>2 |</h4>
                        </div>
                        <div>
                            <h4>Technical Test 1</h4>
                            <h5>Technical tests vary based on the position that you apply for.</h5>
                            <hr />
                        </div>
                    </header>
                    <article>
                        <ul>
                            <li>
                                <h6>For Tech Roles</h6>
                                <p>Candidates applying to roles that require programming skills will be required to take a programming assessment on <em>Job Passcard</em> platform. The candidate will receive an instruction email within 5 - 10 minutes of submitting their application form and will have up to <span class="text-red-500">7 days</span> to take the assessment.</p>
                                <div>
                                    <h6>JPC Process</h6>
                                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-7">
                                        <div v-for="(process, index) in JPCProcess" :key="index" class="relative">
                                            <div class="flex items-center space-x-3 sm:space-x-0 w-full sm:w-44 md:w-48 lg:w-60 h-auto sm:h-[284px] lg:h-auto p-5 mx-auto bg-white rounded-2xl shadow">
                                                <div class="h-14 w-14 rounded-full bg-primary flex flex-none sm:hidden justify-center items-center">
                                                    <svg class="w-9 h-auto fill-white" :viewBox="process.icon.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="process.icon.path"></svg>
                                                </div>
                                                <div class="text-left sm:text-center">
                                                    <div class="font-normal sm:font-bold text-xs sm:text-lg leading-normal sm:leading-normal text-secondary uppercase">STEP {{ index+1 }}</div>
                                                    <div class="h-14 w-14 rounded-full bg-primary mx-auto hidden sm:flex justify-center items-center my-3">
                                                        <svg class="w-9 h-auto fill-white" :viewBox="process.icon.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="process.icon.path"></svg>
                                                    </div>
                                                    <div class="font-bold uppercase sm:normal-case text-[10px] sm:text-lg lg:text-xl text-primary sm:text-slate leading-normal mb-0.5 sm:mb-1">{{ process.title }}</div>
                                                    <div class="text-[8px] sm:text-xs text-slate">{{ process.caption }}</div>
                                                    <div class="text-[8px] sm:text-xs text-secondary mt-1.5 sm:mt-3">{{ process.timing }}</div>
                                                </div>
                                            </div>
                                            <div v-if="index < JPCProcess.length - 1" class="hidden md:block absolute top-1/2 -right-5 lg:-right-7 -translate-y-1/2">
                                                <svg viewBox="0 0 39 38" class="w-7 h-7 lg:w-9 lg:h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.5 19H36.5M36.5 19L22.3182 3M36.5 19L22.3182 35" stroke="#5E7094" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h6>For Other Roles</h6>
                                <p>Candidates applying to other roles will be asked to schedule a time for a take-home assessment that focuses on evaluating job-specific skills.</p>
                            </li>
                        </ul>
                        <p>After your submission, our recruitment team will contact you with the result as soon as possible.</p>
                        <p><strong><em>Note:</em></strong> We make every effort to ensure that these emails are delivered. However, if you do not see the email in a few minutes, please check your <strong>“junk mail”</strong> folder or <strong>“spam”</strong> folder.</p>
                    </article>
                </section>

                <section>
                    <header>
                        <div>
                            <h4>3 |</h4>
                        </div>
                        <div>
                            <h4>Technical Test 2</h4>
                            <h5>Live Proctored and Dynamic Review</h5>
                            <hr />
                        </div>
                    </header>
                    <article>
                        <ul>
                            <li>
                                <h6>For Tech Roles</h6>
                                <p>The second technical test will assess your technical knowledge of programming  (or Machine Learning) in greater depth.  Candidates will be given coding/ML-related questions on Google Docs in a timed and live-proctored session. Our senior programmers will then grade your performance, and comment or ask questions; the candidates will then reply to the comments and questions accordingly.</p>
                                <p>The senior programmer and candidate may engage in this back-and-forth dynamic review for up to 1 week depending on how many questions or responses are required to assess your technical expertise</p>
                            </li>
                            <li>
                                <h6>For Other Roles</h6>
                                <p>After passing the first take-home assessment, candidates will be asked to schedule their live technical test via email. The technical test will be conducted in the form of an interview with their direct manager and another employee in a similar role. The purpose of this interview is for the team to <strong>assess both hard and soft skills relevant</strong> for the role that is required.</p>
                            </li>
                        </ul>
                    </article>
                </section>

                <section>
                    <header>
                        <div>
                            <h4>4 |</h4>
                        </div>
                        <div>
                            <h4>Partner Interview</h4>
                            <hr />
                        </div>
                    </header>
                    <article>
                        <ul>
                            <li>
                                <h6>For All Roles</h6>
                                <p>After passing the 2 technical tests, candidates will be interviewed by up to 2 - 3 of our co-founders. The purpose of this interview is to help co-founders assess your character and your cultural fit with Looloo, but it is also an opportunity for you to get to know Looloo better at the highest level of leadership.</p>
                            </li>
                            <li>
                                <h6>For Other Roles</h6>
                                <p>The interview may include additional technical aspects that will assess you on your ability to perform under pressure.</p>
                            </li>
                        </ul>
                        <p><strong><em>Note:</em></strong> For some roles, we may require candidates to take a short general test that will evaluate their IQ, EQ, and general logic before the partner interview stage.</p>
                    </article>
                </section>

                <section>
                    <header>
                        <div>
                            <h4>5 |</h4>
                        </div>
                        <div>
                            <h4>Final Decision</h4>
                            <hr />
                        </div>
                    </header>
                    <article>
                       <p>Once you have gone through all the process, we will contact you again with the final decision via email. Our HR may also contact you via phone to confirm your result.</p>
                        <div class="text-center">
                            <Button type="normal" path="/job-list" label="VIEW OPEN JOBS" />
                        </div>
                    </article>
                </section>

            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
    data() {
        return {
            JPCProcess: [
                {
                    title: 'Sign in with password',
                    caption: 'Application Review',
                    timing: '5 - 10 mins After submit form',
                    icon: {
                        viewBox: '0 0 35 28',
                        path: '<path d="M30.9336 0.666626H4.26693C2.43359 0.666626 0.95026 2.16663 0.95026 3.99996L0.933594 24C0.933594 25.8333 2.43359 27.3333 4.26693 27.3333H30.9336C32.7669 27.3333 34.2669 25.8333 34.2669 24V3.99996C34.2669 2.16663 32.7669 0.666626 30.9336 0.666626ZM30.9336 24H4.26693V7.33329L17.6003 15.6666L30.9336 7.33329V24ZM17.6003 12.3333L4.26693 3.99996H30.9336L17.6003 12.3333Z" />'
                    }
                },
                {
                    title: 'Programming Test!',
                    caption: 'Pre-Screening Test',
                    timing: '90 mins',
                    icon: {
                        viewBox: '0 0 40 27',
                        path: '<path d="M21.2079 25.7451C22.0008 26.6374 23.2955 26.8815 24.3325 26.2907C25.2624 25.7602 25.9994 24.901 26.6084 23.9334C27.7041 22.191 36.6044 7.30557 39.8178 1.92775C40.3257 1.07767 39.7123 0 38.7235 0H25.4493C25.0017 0 24.5872 0.235126 24.3566 0.619471L15.6025 15.2095H17.8543C18.2658 15.2095 18.5899 15.5532 18.5718 15.9646C18.3924 19.9859 19.2425 23.534 21.2079 25.7451Z" fill="white"/><path d="M15.6039 17.4509C12.9783 17.4509 3.49024 17.4509 0.719942 17.4509C0.297916 17.4509 -0.0321652 17.8112 0.00250116 18.2317C0.141167 19.974 0.542089 22.0706 1.40423 23.7587C2.30103 25.5146 3.65302 26.5818 5.81741 26.841C5.84756 26.844 5.87921 26.847 5.91086 26.847H22.2207C18.0381 26.847 16.5956 21.638 16.3228 18.1141C16.2927 17.7403 15.9807 17.4509 15.6039 17.4509Z" />'
                    }
                },
                {
                    title: 'Wait for our contact',
                    caption: 'Live Proctored',
                    timing: 'Process 1 - 2 days',
                    icon: {
                        viewBox: '0 0 35 34',
                        path: '<path d="M17.3834 0.333374C8.1834 0.333374 0.733398 7.80004 0.733398 17C0.733398 26.2 8.1834 33.6667 17.3834 33.6667C26.6001 33.6667 34.0667 26.2 34.0667 17C34.0667 7.80004 26.6001 0.333374 17.3834 0.333374ZM17.4001 30.3334C10.0334 30.3334 4.06673 24.3667 4.06673 17C4.06673 9.63337 10.0334 3.66671 17.4001 3.66671C24.7667 3.66671 30.7334 9.63337 30.7334 17C30.7334 24.3667 24.7667 30.3334 17.4001 30.3334ZM18.2334 8.66671H15.7334V18.6667L24.4834 23.9167L25.7334 21.8667L18.2334 17.4167V8.66671Z" />'
                    }
                }
            ]
        }
    },
}
</script>

<style scoped>
    header {
        @apply flex mb-7
    }
    article {
        @apply ml-11 sm:ml-16
    }
    section {
        @apply py-10 px-7 sm:px-0
    }
    header > div:first-child {
        @apply flex-none w-11 sm:w-16
    }
    h5, h6, p {
        @apply text-slate leading-normal
    }
    p, li {
        @apply text-xs sm:text-base lg:text-lg leading-relaxed
    }
    h4 {
        @apply font-bold text-2xl sm:text-3xl lg:text-4xl text-primary leading-normal
    }
    h5, h6 {
        @apply text-sm sm:text-lg lg:text-xl
    }
    h6 {
        @apply font-bold
    }
    p {
        @apply mb-7
    }
    hr {
        @apply w-60 mt-3 sm:mt-7 border-blinded
    }
    em {
        @apply not-italic text-secondary
    }
    li > h6 {
        @apply sm:-ml-7 mb-1
    }
    li {
        @apply pl-0 sm:pl-7
    }
</style>