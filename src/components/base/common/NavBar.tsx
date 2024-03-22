import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavBarProps {
  variant: "black" | "white";
}

const textColors = {
  black: {
    text: "text-darkforeground",
    noFocus: "text-darkforeground/60",
    hover: "hover:text-darkforeground/80",
  },
  white: {
    text: "text-foreground",
    noFocus: "text-foreground/60",
    hover: "hover:text-foreground/80",
  },
};

const logoImages = {
  black: "/bsh_logo_white.svg",
  white: "/bsh_logo_black_red.svg",
};

export default function NavBar({ variant }: NavBarProps) {
  const pathname = usePathname();
  const { text, noFocus, hover } = textColors[variant];
  const logoSrc = logoImages[variant];

  return (
    <div
      className={`flex flex-col ${
        variant === "black" ? "bg-bddarkgray" : "bg-white"
      }`}
    >
      <Image
        alt="Bosch Supergraphic"
        src="/supergraphic.svg"
        width="1000"
        height="1000"
        className="w-screen"
      />
      <nav className="flex flex-row gap-5 items-center">
        <Link href="/" className="w-fit">
          <Image
            alt="Bosch Logo White"
            src={logoSrc}
            width="0"
            height="0"
            className="h-12 w-fit"
          />
        </Link>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className={cn(
              "text-sm font-medium transition-colors",
              hover,
              pathname === link.href ? text : noFocus
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "News",
    href: "/news",
  },
];
