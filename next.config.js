/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // De twee onboarding-onderwerpen zijn samengevoegd tot /onboarding;
    // oude links (o.a. vanuit GHL) blijven zo werken.
    return [
      {
        source: "/onboarding-stap-een/introductie",
        destination: "/onboarding/welkom-bij-gymops",
        permanent: true,
      },
      {
        source: "/onboarding-stap-een",
        destination: "/onboarding/onboarding-stap-een",
        permanent: true,
      },
      {
        source: "/onboarding-stap-twee",
        destination: "/onboarding/onboarding-stap-twee",
        permanent: true,
      },
      {
        source: "/onboarding-stap-een/:path*",
        destination: "/onboarding/:path*",
        permanent: true,
      },
      {
        source: "/onboarding-stap-twee/:path*",
        destination: "/onboarding/:path*",
        permanent: true,
      },
    ];
  },
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
