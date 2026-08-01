import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import PageBodyEffects from "@/components/PageBodyEffects";
import { siteConfig } from "@/site.config";
import { fontVariables, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${fontVariables}`}>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <ThemeProvider>
          <PageBodyEffects />
          <Navbar />
          {children}
        </ThemeProvider>

        {siteConfig.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
