import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const fontVariables = `${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`;
