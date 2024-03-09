import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokedex",
  description: "Pokedex is an application where users can traverse through the list of Pokemon available, view information about them and also search for them.",
  icons: {
    icon: './assets/images/pokedex-logo.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
