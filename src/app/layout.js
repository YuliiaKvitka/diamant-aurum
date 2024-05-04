import { Inter } from "next/font/google";
import "./globals.css";
import './base.css';
import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Діамант Аурум",
  description: "Діамант Аурум",
  icons: {
    icon: './../../public/favicon/favicon.ico',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
       
         <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"></link> 
      </Head>
     
      <body className={inter.className}>
        <div className="container">
        <Header />
        {children}
          <Footer />
          </div>
      </body>
    </html>
  );
}
