<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" />

  <xsl:template match="/">
    <html>
      <head>
        <title>OSS Etiquette - SiteMap</title>
        <!-- Favicon for the rendered HTML page,  <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />  could be added for backward compatibility with old browsers (as well as favicon.ico), but .png is the modern standard -->
        <link rel="icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body>
        <h1>Site Map</h1>
        <ul>
          <xsl:for-each select="s:urlset/s:url">
            <li>
              <a href="{s:loc}">
                <xsl:value-of select="s:loc" />
              </a>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
