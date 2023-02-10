export default ({ app }, inject) => {
    inject('pagination', className => `<span class="${className} inline-block w-3.5 h-3.5 rounded-full border-2 border-primary bg-white"></span>`)
  }