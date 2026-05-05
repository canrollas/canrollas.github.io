import localFont from "next/font/local";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
    weight: ["400", "500", "600", "700"],
});

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Can Rollas — ML Engineer & Computer Vision Researcher",
    description: "Academic page of Can Rollas. Machine Learning Engineer at Amatis, MSc researcher at IZTECH. Research: Medical Image Synthesis, Diffusion Models, Computer Vision.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} ${lora.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}