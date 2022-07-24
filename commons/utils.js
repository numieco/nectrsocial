import jqueryLib from 'jquery'

// InitWebflow
export const initWebflow = () => {
  setTimeout(() => {
    jqueryLib(document).ready(function () {
      if (window.Webflow !== undefined) {
        window.Webflow.destroy()
        window.Webflow.ready()
        window.Webflow.require('ix2').init()
        window.Webflow.require('lottie').init()
        window.Webflow.require('slider').redraw()
        document.dispatchEvent(new Event('readystatechange'))
      }
    })
  }, 1000)
}

// Append link with https
export const withHttp = (url, { https = true } = {}) => {
  if (typeof url !== 'string') {
    throw new TypeError(
      `Expected \`url\` to be of type \`string\`, got \`${typeof url}\``
    )
  }
  url = url.trim()

  if (url.includes('http://') || url.includes('https://')) {
    return url
  } else if (url.substring(0, 9) === 'localhost') {
    return 'http://' + url
  } else {
    return 'https://' + url
  }
}
