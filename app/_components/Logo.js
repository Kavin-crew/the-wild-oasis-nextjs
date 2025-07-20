import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logoImg}
        quality={100}
        height="60"
        width="60"
        priority={true}
        alt="The Wild Oasis logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}
