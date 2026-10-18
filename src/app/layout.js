
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import site from "@/data/site";

const productionUrl = site.siteUrl
  ? site.siteUrl.replace(/\/+$/, "")
  : undefined;

export const metadata = {
  metadataBase: productionUrl
    ? new URL(productionUrl)
    : undefined,

  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  applicationName: `${site.name} Portfolio`,

  ...(productionUrl
    ? {
        alternates: {
          canonical: "/",
        },
      }
    : {}),

  openGraph: {
    type: "website",
    title: `${site.name} | ${site.title}`,
    description: site.description,
    siteName: `${site.name} Portfolio`,
    ...(productionUrl ? { url: productionUrl } : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",

  other: {
    "color-scheme": "dark",
  },
};

export const viewport = {
  themeColor: "#0b0d0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
