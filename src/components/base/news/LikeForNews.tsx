import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { useState } from 'react';

export default function LikeForNews() {
  const [like, setLike] = useState(false)

  return (
    <div className="w-full items-center bg-transparent">
        { !like ? 
            <BiLike size={22} color="#262626" onClick={()=>{setLike(true)}} className='cursor-pointer'/> 
          :
            <BiSolidLike size={22} color="#262626" className='cursor-pointer'/>
        }
    </div>
  )
}
