import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { library, IconProp, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

library.add(faGithub);

const inter = Inter({ subsets: ["latin"] });

// @ts-ignore
const githubIcon: IconProp = "fa-brands fa-github";

export const metadata: Metadata = {
    title: "Motorola dataScrubTool",
    description: "Generated by create next app"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Link tag for the favicon */}
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </head>
            <body className={inter.className}>
                {children}
                <footer className="bg-gray-800 p-4 text-white text-center">
                    <div className="flex justify-center items-center space-x-2">
                        <p>&copy; 2024 juic3b0x. All rights reserved.</p>
                        {/* GitHub icon with link to the repository */}
                        <a
                            href="https://github.com/juic3b0x/dataScrubTool"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            {/* GitHub SVG icon */}
                            <FontAwesomeIcon icon={githubIcon} />
                        </a>
                    </div>
                    <p className="mt-2">
                        MOTOROLA, the Stylized M Logo, MOTO, and the MOTO family
                        of marks are trademarks of Motorola Trademark Holdings,
                        LLC. LENOVO is a trademark of Lenovo. All other
                        trademarks are the property of their respective owners.
                    </p>
                </footer>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
