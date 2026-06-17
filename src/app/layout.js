import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from '../components/BottomNav'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mobile App Clone",
  description: "Next.js Mobile UI",
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-gray-100 flex justify-center">
        
        {/* This main tag acts as the physical "phone screen" */}
        <main className="w-full max-w-[430px] bg-white min-h-screen shadow-2xl relative overflow-x-hidden">
          {children}
          <BottomNav />
        </main>

      </body>
    </html>
  );
}