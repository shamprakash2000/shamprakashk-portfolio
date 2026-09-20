import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BASE_URL = "https://shamprakash2000.github.io/shamprakashk-portfolio";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Sham Prakash K | Backend Engineer",
  description:
    "Backend Engineer with 4+ years building distributed systems — Java, Spring Boot, GraphQL, REST APIs, Spring AI, RAG pipelines, and MCP servers. Currently at American Express Global Business Travel.",
  keywords: [
    "Backend Engineer", "Java Developer", "Spring Boot", "GraphQL", "REST APIs",
    "Microservices", "Distributed Systems", "Spring AI", "RAG", "MCP",
    "PostgreSQL", "GCP", "Pinecone", "American Express Global Business Travel",
    "HashedIn", "Deloitte", "Sham Prakash K",
  ],
  authors: [{ name: "Sham Prakash K", url: BASE_URL }],
  creator: "Sham Prakash K",
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Sham Prakash K | Backend Engineer",
    description:
      "4+ years building distributed systems — Java, Spring Boot, GraphQL, REST APIs, Spring AI, and MCP servers. Currently at American Express Global Business Travel.",
    siteName: "Sham Prakash K — Portfolio",
    images: [
      {
        url: `${BASE_URL}/images/Sham.png`,
        width: 400,
        height: 400,
        alt: "Sham Prakash K — Backend Engineer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sham Prakash K | Backend Engineer",
    description:
      "4+ years building distributed systems — Java, Spring Boot, GraphQL, REST APIs, Spring AI, and MCP servers.",
    images: [`${BASE_URL}/images/Sham.png`],
    creator: "@shamprakash",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sham Prakash K",
  jobTitle: "Backend Engineer",
  url: BASE_URL,
  image: `${BASE_URL}/images/Sham.png`,
  description:
    "Backend Engineer with 4+ years of experience building distributed systems using Java, Spring Boot, GraphQL, and AI engineering with Spring AI, RAG, and MCP.",
  sameAs: [
    "https://github.com/shamprakash2000",
    "https://www.linkedin.com/in/sham-prakash-k",
  ],
  knowsAbout: [
    "Java", "Spring Boot", "GraphQL", "REST APIs", "Microservices",
    "Distributed Systems", "Spring AI", "RAG Pipelines", "MCP Servers",
    "PostgreSQL", "Google Cloud Platform", "Pinecone", "Node.js",
  ],
  worksFor: {
    "@type": "Organization",
    name: "American Express Global Business Travel",
  },
  alumniOf: {
    "@type": "Organization",
    name: "HashedIn by Deloitte",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
};

const GA_ID = "G-TGQGMRSXVD";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/shamprakashk-portfolio/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/shamprakashk-portfolio/favicon.svg" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
