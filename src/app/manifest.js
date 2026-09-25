const BASE_URL = "https://shamprakash2000.github.io/shamprakashk-portfolio";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Sham Prakash K — Backend Engineer Portfolio",
    short_name: "Sham Prakash K",
    description:
      "Backend Engineer with 4+ years building distributed systems — Java, Spring Boot, GraphQL, REST APIs, Spring AI, and MCP servers.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#c8f135",
    icons: [
      {
        src: `${BASE_URL}/images/app-icon.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
