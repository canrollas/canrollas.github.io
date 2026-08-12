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
    metadataBase: new URL("https://canrollas.github.io"),
    title: "Can Rollas CV & Portfolio | ML Engineer & Computer Vision Researcher",
    description: "Can Rollas'ın CV ve portfolyo sayfası. Machine Learning Engineer, Computer Vision araştırmacısı, projeler, yayınlar ve deneyim.",
    keywords: [
        "Can Rollas",
        "Can Rollas CV",
        "Can Rollas portfolio",
        "ML Engineer",
        "Computer Vision",
        "İzmir Institute of Technology",
        "Yapay zeka portfolyo",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Can Rollas CV & Portfolio",
        description: "Can Rollas'ın CV, portfolyo, araştırma ve proje sayfası.",
        url: "https://canrollas.github.io",
        siteName: "Can Rollas Portfolio",
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Can Rollas CV & Portfolio",
        description: "Can Rollas'ın CV ve portfolyo sayfası.",
    },
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