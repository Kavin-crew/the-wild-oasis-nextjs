import Image from "next/image";
import Link from "next/link";
import BackgroundImg from "@/public/bg.png";

export default function HomePage() {
  return (
    <main className="mt-24 h-full">
      <Image
        src={BackgroundImg}
        alt="Mountains and forests with two cabins"
        fill
        placeholder="blur"
        className="object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
