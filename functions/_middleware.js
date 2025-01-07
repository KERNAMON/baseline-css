// Source and credits to: https://github.com/pew/cloudflare-pages-social-preview
class ElementHandler {
  constructor(ogtag) {
    this.ogtag = ogtag;
  }
  element(element) {
    element.append(this.ogtag, { html: true });
  }
}

export async function onRequest(context) {
  const { request, next } = context;
  const res = await next();
  const { pathname } = new URL(request.url);

  // Only process for HTML responses
  if (!res.headers.get('content-type')?.includes('text/html')) {
    return res;
  }

  // Prevent metadata injection for any page
  return res;
}
