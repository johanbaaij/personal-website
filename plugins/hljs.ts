import Vue from 'vue'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

Vue.directive('highlightjs', {
  inserted(el) {
    el.querySelectorAll('pre code').forEach((codeBlock) => {
      hljs.highlightBlock(codeBlock)
    })
  }
})
