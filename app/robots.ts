import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.transdatanexus.com";

  return {
    rules: [
      // Global allow
      { userAgent: "*", allow: "/" },
      // Google
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // ClaudeAI
      { userAgent: "ClaudeBot", allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
