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
  const ogtag = `
    <!-- Open Graph Metadata -->
    <meta property="og:title" content="Baseline.CSS >> Modern CSS Reset">
    <meta property="og:description" content="Baseline.css is a foundational CSS reset for consistent styling across modern browsers. Minified for superior Performance.">
    <meta property="og:url" content="https://baseline-css.pages.dev/">
    <meta property="og:image" content="https://baseline-css.pages.dev/images/og-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_GB">

    <!-- Twitter Metadata -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Baseline.CSS >> Modern CSS Reset">
    <meta name="twitter:description" content="Baseline.css is a foundational CSS reset for consistent styling across modern browsers. Minified for superior Performance.">
    <meta name="twitter:image" content="https://baseline-css.pages.dev/images/og-image.png">
    <meta name="twitter:site" content="@kernamon">
  `

  return new HTMLRewriter().on('head', new ElementHandler(ogtag)).transform(res)
}
