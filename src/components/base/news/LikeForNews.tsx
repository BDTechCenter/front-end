import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useState } from 'react';

export default function LikeForNews() {
  const token = msalInstance.acquireTokenByCode
  const [like, setLike] = useState(false)

  const likePress = () =>{
    console.log(token)
    setLike(true)
  }

  return (
    <div className="w-full items-center bg-transparent">
        { !like ? 
            <BiLike size={22} color="#262626" onClick={likePress} className='cursor-pointer'/> 
          :
            <BiSolidLike size={22} color="#262626" className='cursor-pointer'/>
        }
    </div>
  )
}
