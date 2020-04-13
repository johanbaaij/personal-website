import Vue from 'vue'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import hljsDefineVue from 'highlightjs-vue'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

// Takes a while to execute
const defineVue = () => new Promise((resolve) => resolve(hljsDefineVue(hljs)))

Vue.directive('highlightjs', {
  async inserted(el) {
    await defineVue()
    el.querySelectorAll('pre code').forEach((codeBlock) => {
      hljs.highlightBlock(codeBlock)
    })
  }
})
