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

  if (!(pathname === '/index.html' || pathname === '/')) {
    return res
  }

  // Metatags Variables (edit these!)

  
  let name = searchParams.get('myQuery')
  let ogtag

  // these are the metatags we want to inject into the site
  

  return new HTMLRewriter().on('head', new ElementHandler(ogtag)).transform(res)
}
