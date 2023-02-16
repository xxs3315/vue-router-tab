<template>
  <div class="router-tab-part-iframe-fake" />
</template>

<script>
// Iframe 路由元
export const partIframeMeta = {
  key: route => {
    // console.log(route.params)
    return `part-iframe-${route.params.path}`
  },
  title: route => {
    // console.log(route.params)
    return route.params.title
  },
  icon: route => {
    // console.log(route.params)
    return route.params.icon
  }
}
// Iframe 页签页面
export default {
  name: 'PartIframe',
  inject: ['$tabs'],
  meta: partIframeMeta, // Nuxt 页面路由元

  props: {
    path: String,
    title: String,
    icon: String
  },

  async mounted() {
    let { path, $tabs } = this
    let { partIframes } = $tabs

    if (!partIframes.includes(path)) {
      partIframes.push(path)
    }

    $tabs.currentPartIframe = path
    await this.$nextTick()
    // this.$tabs.iframeMounted(url)
  },

  activated() {
    this.$tabs.currentPartIframe = this.path
  },

  deactivated() {
    this.$tabs.currentPartIframe = null
  },

  // 组件销毁后移除 iframe
  destroyed() {
    let { path } = this
    let { partIframes } = this.$tabs
    let index = partIframes.indexOf(path)

    if (index > -1) {
      partIframes.splice(index, 1)
    }
  }
}
</script>
