declare module 'highlight.js/lib/core' {
  import hljs from 'highlight.js'
  export default hljs
}

declare module 'highlight.js/lib/languages/*' {
  export default function (hljs?: hljs.HLJSStatic): hljs.IModeBase
}
