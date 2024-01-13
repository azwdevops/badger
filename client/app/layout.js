import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Badger",
  description: "Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div class="bg-blue-50 antialiased">
          <div>
            <div>
              <div className="mx-auto">
                <Nav />
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:py-12 min-h-[86vh]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
