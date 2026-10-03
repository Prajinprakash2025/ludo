# Pakidakali search setup

The public game is https://pakidakali.cloud/. The visible name is Pakidakali; the existing forest design and game rules are retained. Hosting account names, backend URLs, and saved player sessions still use their existing identifiers.

## Included in the site

- Descriptive page title and description for the free online Ludo game.
- Canonical URL pointing to https://pakidakali.cloud/ so room query URLs and hosting aliases refer to the same homepage.
- Open Graph and Twitter metadata for shared links.
- WebSite and WebApplication structured data with the actual game name and features. No invented ratings or reviews.
- Crawlable favicon, robots.txt, and a sitemap containing only the public homepage. Room codes are not listed in the sitemap.

## Finish Google Search Console setup

1. Open https://search.google.com/search-console and add a **Domain** property named `pakidakali.cloud`.
2. Copy the unique TXT verification value supplied by Google. In Hostinger DNS add a TXT record with name `@`, that exact value, and the default TTL. Keep the existing website A and CNAME records.
3. Return to Search Console and choose **Verify** after the DNS record becomes available.
4. In **Sitemaps**, submit `https://pakidakali.cloud/sitemap.xml`.
5. Inspect `https://pakidakali.cloud/` using **URL inspection**, run **Test live URL**, and select **Request indexing** if available.

The domain must have working HTTPS and point to the Netlify site. Google decides whether and when to index a page and how to rank it; these changes do not guarantee immediate search results or a particular position. Search Console is the source for the site's indexing status.

## Updates

Push frontend changes to the linked GitHub branch to trigger the Netlify build. The public branding and SEO updates do not require restarting the PythonAnywhere backend. To update that backend's local static copy and log messages later, pull the repository and reload it using the deployment guide.

Official references: https://developers.google.com/search/docs/fundamentals/get-started-developers, https://developers.google.com/search/docs/appearance/site-names, https://support.google.com/webmasters/answer/9008080, https://support.google.com/webmasters/answer/9012289.
