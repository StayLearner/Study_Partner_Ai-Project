import localFont from "next/font/local";
import "./globals.css";
import { Outfit } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";
import { BackgroundProvider } from "@/components/backgrounds";

export const metadata = {
  title: "Study Partner",
  description: "Your Study Partner : Learn More In Less Time",
};

const outfit = Outfit({subsets:['latin']});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        <BackgroundProvider />
        <div className="relative z-10 min-h-screen">
          <Provider>
            {children}
          </Provider>
        </div>
        
        <Toaster/>

      </body>
    </html>
    </ClerkProvider>
  );
}
