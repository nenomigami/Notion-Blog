const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Hoyoun Jung (Julio)",
    image: "/profile.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "AI researcher",
    bio: "If you can measure it, you can improve it.",
    email: "ghdbsl98@gmail.com",
    linkedin: "hoyoun-jung-0859421b7",
    github: "nenomigami",
    instagram: "nenomigami",
  },
  projects: [
    {
      name: `PromptCompressor`,
      href: "https://promptcompressor.com/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Julio's dev",
    description: "welcome to Julio's blog",
    theme: "light",
  },

  // CONFIG configration (required)
  link: "https://devjulio.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "G-TY7W3ZH73H",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "XQBPD-QFaB8XT9YXWBEBVbMNKglWZzOP_J_Y1PWT0U0",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "nenomigami/notion-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7,
}

module.exports = { CONFIG }
