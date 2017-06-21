import { TITLE } from '@root/webconfig'

const getTitle = vm => {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

const serverTitleMixin = {
  created() {
    const title = getTitle(this)
    // If getTitle rereturns undefined, you should not set this.$ssrContext.title a value,
    // otherwise, `Cannot read property 'ssrContext' of undefined` error will be throwed.
    if (title) {
      this.$ssrContext.title = `${title} | ${TITLE}`
    }
  }
}

const clientTitleMixin = {
  mounted() {
    const title = getTitle(this)
    if (title) {
      document.title = `${title} | ${TITLE}`
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin
