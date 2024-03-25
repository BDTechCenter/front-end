"use client"
import Image from 'next/image'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname} from 'next/navigation';
import { useState, useEffect } from 'react';

interface NavBarProps {
  variant: "black" | "white";
}

export default function NavBar({variant}: NavBarProps) {
  const [text, setText]= useState('')
  const patch = usePathname()

  useEffect(()=>{
    switch(variant){
      case "black":{
        setText('text-white')
        break
      }
      case 'white':{
        setText('text-foreground/60')
        break
      }
      default:{
        break
      }
    }
  }, [variant, patch])

  return (
    <nav className={`flex flex-col ${variant === "black" ? 'bg-bddarkgray' : 'bg-white'}`}>
      <Image
				alt="Bosch Supergraphic"
				src="/supergraphic.svg"
				width="1000"
				height="1000"
				className="w-screen"
			/>
     <div className='flex flex-row gap-5 items-center'>
      <Link href="/" className='w-fit'>
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
        <Link href={"/"}>
            <h1 className={cn(`text-sm font-medium ${text}`, patch === "/" ? "text-bdlightpurple" : `hover:text-bdlightpurple ${text}`)}>Home</h1>
        </Link>
        <Link href={"/news"}>
            <h1 className={cn(`text-sm font-medium ${text}`, patch === "/news" ? "text-bdlightpurple" : `hover:text-bdlightpurple ${text}`)}>News</h1>
        </Link>
     </div>
    </nav>
  )
}
