import React from 'react'
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useState } from 'react';
import { patchNewsUpvote } from '@/api/hooks/news/queries';

interface LikeForNewsProps {
  id: string
}

export default function LikeForNews({ id }: LikeForNewsProps) {
  const user = msalInstance.getActiveAccount()
  const token = user ? user.idToken : ''
  const [like, setLike] = useState(false)

  const useLikePress = async () => {
    patchNewsUpvote(id, token)
    setLike(true)
  }

  return (
    <div className="w-full items-center bg-transparent">
      {!like ?
        <BiUpvote size={22} color="#262626" onClick={useLikePress} className='cursor-pointer' />
        :
        <BiSolidUpvote size={22} color="#262626" className='cursor-pointer' />
      }
    </div>
  )
}