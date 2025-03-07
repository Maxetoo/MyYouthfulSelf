import StyledComponentsRegistry from './registry'
import { Sigmar, Lora} from "next/font/google";
import {Header} from '@/components/globals'
import ScrollToTop from '@/utils/ScrollToTop'
import { AppWrapper } from '../context/AppContext'
import "./globals.css"; 

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"], 
// });

const lora = Lora({
  weight: ["400"],
  variable: "--font-lora",
  subsets: ["latin"], 
});


const sigmar = Sigmar({
  weight: ["400"],
  variable: "--font-sigmar",
  subsets: ["latin"], 
});



export const metadata = {
  title: "MyYouthfulSelf", 
  description: "A safe space where we discuss the life of a youth; the ups and downs, the norms and shocks, the good and bad aspects of being a youth. We aim to grow a community of like-minded youths striving towards a, not just positive, but an excellent future, with the knowledge that we are not alone in this world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${sigmar.variable}`}>
        <ScrollToTop/>
        <StyledComponentsRegistry>
          <AppWrapper>
            <Header/>
           {children}
          </AppWrapper>
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}