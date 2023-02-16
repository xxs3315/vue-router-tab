<template>
  <div>
    <h3>部分 Iframe 页签</h3>

    <page-timer />

    <p>
      <span style="color: red;">页面中部分是iframe页面</span>
      <br />
      <span style="color: green;">页面中部分是iframe页面</span>
      <br />
      <span style="color: blue;">页面中部分是iframe页面</span>
      <br />
      ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓
      <br />
      下面是一个Iframe，
      操作它(即让它处于非初始状态)，然后再打开其他标签或切换至标签，然后再切换回来本标签页，查看嵌入的Iframe页面状态的保持情况。
      <br />
      ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓ ↓↓↓↓
      <br />
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="600"
        height="600"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
      ></iframe>
    </p>
  </div>
</template>

<script>
import PageTimer from '../../components/PageTimer'
export default {
  name: 'PagePartIframe',
  components: { PageTimer },
  data() {
    return {}
  }
}
</script>
