// Source and credits to: https://github.com/pew/cloudflare-pages-social-preview
class ElementHandler {
  constructor(ogtag) {
    this.ogtag = ogtag
  }
  element(element) {
    element.append(this.ogtag, { html: true })
  }
}

export async function onRequest(context) {
  const { request, next } = context
  const res = await next()
  const { searchParams, pathname } = new URL(request.url)

  // Only process for HTML responses
  if (!res.headers.get('content-type')?.includes('text/html')) {
    return res
  }

  // Only inject metadata for the homepage
  if (!(pathname === '/index.html' || pathname === '/')) {
    return res
  }

  // Metatags Variables
  const metatitle = "Baseline.CSS"
  const metadescription = "Baseline.css is a foundational CSS reset for consistent styling across modern browsers. Minified for superior performance."

  let name = searchParams.get('myQuery') || 'default'

  // Define the metadata
  ogtag = ``
  

  return new HTMLRewriter().on('head', new ElementHandler(ogtag)).transform(res)
}
