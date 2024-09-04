import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import StickyCursor from "@/app/components/stickycursor/StickyCursor";

export const metadata = {
    title: "Lautaro Velez | Portfolio",
    description: "Lautaro Velez Portfolio",
};

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={'bg-[#171717]'}>
        <NextUIProvider>
            <Navbar/>
            <StickyCursor/>
            {children}
            <Footer/>
        </NextUIProvider>
        </body>
        </html>
    );
}
