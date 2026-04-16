import { Open_Sans, Raleway, Poppins } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Erioluwa Morakinyo | Full-Stack Developer Portfolio",
  description: "Explore Erioluwa Morakinyo's full-stack developer portfolio featuring web apps, mobile apps, custom platforms, and client projects.",
  keywords: "full-stack developer, web developer, portfolio, Erioluwa Morakinyo, React, Django, Python, JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${raleway.variable} ${poppins.variable}`}>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
