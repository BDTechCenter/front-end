import Image from 'next/image'
import Link from 'next/link';

interface NavBarProps {
  variant: "black" | "white";
}

export default function NavBar({variant}: NavBarProps) {
  return (
    <nav className={`flex flex-col ${variant === "black" ? 'bg-bddarkgray' : 'bg-white'}`}>
      <Image
				alt="Bosch Supergraphic"
				src="/supergraphic.svg"
				width="1000"
				height="1000"
				className="w-screen"
			/>
      <Link href="/home" className='w-fit'>
        {variant === "black" ? (
          <Image
          alt="Bosch Logo White"
          src="/bsh_logo_white.svg"
          width="0"
          height="0"
          className="h-12 w-fit"
        />
        ) : (
          <Image
          alt="Bosch Logo Color"
          src="/bsh_logo_black_red.svg"
          width="0"
          height="0"
          className="h-12 w-fit"
        />
        )}
      </Link>
    </nav>
  )
}
