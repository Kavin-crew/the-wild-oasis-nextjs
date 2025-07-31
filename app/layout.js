import { Josefin_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  // title: "The wild oasis", //v1
  title: {
    template: "%s - The wild Oasis",
    default: "Welcome - The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located if the heart of Italian Dolomites, surrounderd by beautiful mountains and dark forest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased text-primary-100 bg-primary-950 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <Toaster position="top-right" />
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
