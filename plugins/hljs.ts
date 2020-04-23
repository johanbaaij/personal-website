import Vue from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import shell from 'highlight.js/lib/languages/shell'
import json from 'highlight.js/lib/languages/json'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('json', json)

Vue.directive('highlightjs', {
  inserted(el) {
    el.querySelectorAll('pre code').forEach((codeBlock) => {
      hljs.highlightBlock(codeBlock)
    })
  }
})
