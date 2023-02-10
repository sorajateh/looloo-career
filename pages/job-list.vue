<template>
  <div>
    <Navbar/>
    <div id="content" class="relative z-10">
      <Banner title="Career<br/>Opportunities" pic="illustration-career.png" />
      <Backdrop />
      <div class="pb-10 bg-gradient-to-t from-dim to-transparent">
        <div>
          <div class="container mx-auto">
            <div v-for="role in roles" :key="role.id" class="py-10">
              <RoleList :title="role.name" />
              <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 px-7 sm:px-0">
                <div v-for="(role, index) in role.jobs" :key="index">
                  <JobCard :id="role.id" :title="role.name" :features="role.features" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-7 px-7 sm:px-0">
          <div class="container mx-auto flex flex-col justify-center items-center">
            <h3 class="font-bold uppercase sm:normal-case text-base sm:text-4xl sm:leading-snug text-primary text-center mb-1.5 sm:mb-3">Don’t see a role you’re looking for?</h3>
            <p class="text-[10px] sm:text-xl text-[#9FAABF] sm:text-slate mb-3 sm:mb-7">Submit your application here!</p>
            <a href="https://www.jobpasscard.com/application_form/4 " class="py-1.5 xs:py-2.5 px-7 rounded-full border-[1.5px] border-slate">
              <span class="font-bold uppercase text-xs sm:text-sm text-slate">Apply for unlisted roles</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'JobListPage',
  data() {
    return {
      roles: [],
      roleJobs: {
        intern: []
      }
    }
  },
  async created() {
    const ip = await this.$axios.$get('/wp-json/wp/v2/job_role')
    
    ip.forEach(element => {
      const obj = {}
      obj['id'] = element.id
      obj['name'] = element.name
      obj['jobs'] = []
      
      const jobs = this.$axios.$get(`/wp-json/wp/v2/job?job_role=${element.id}`).then(elem => {
        elem.forEach(e => {
          const jobObj = {}
          jobObj['id'] = e.id
          jobObj['name'] = e.title.rendered
          jobObj['features'] = e.acf
          obj['jobs'].push(jobObj)
        })
      })

      this.roles.push(obj)
    })
  }
}
</script>
