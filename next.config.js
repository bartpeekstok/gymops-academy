/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Allow embedding inside GoHighLevel (and any GHL custom domain).
          // We avoid setting X-Frame-Options at all (any value would block iframe use),
          // and use Content-Security-Policy frame-ancestors instead. Loosen if GHL
          // serves the parent page from another origin you control.
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://*.gohighlevel.com https://*.msgsndr.com https://*.leadconnectorhq.com https://*.gymops.nl;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
