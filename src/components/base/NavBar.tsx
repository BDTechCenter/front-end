import Image from 'next/image'
import React from 'react'

interface NavBarProps {
  variant: "black" | "white";
}

export default function NavBar({variant}: NavBarProps) {
  return (
    <nav className='flex flex-col'>
      <Image
				alt="Bosch Supergraphic"
				src="supergraphic.svg"
				width="1000"
				height="1000"
				className="w-screen"
			/>
      <div>
        {variant === "black" ? (
          <Image
          alt="Bosch Logo White"
          src="bsh_logo_white.svg"
          width="1000"
          height="1000"
          className="w-full"
        />
        ) : (
          <Image
          alt="Bosch Logo Color"
          src="bsh_logo_black_red.svg"
          width="1000"
          height="1000"
          className="w-full"
        />
        )}
      </div>
    </nav>
  )
}
