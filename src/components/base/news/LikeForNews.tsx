import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useState } from 'react';
import { getNewsUpvote, patchNewsUpvote, patchNewsUpvoteF } from '@/api/hooks/news/queries';

interface LikeForNewsProps {
  id: string
}

export default function LikeForNews({ id }: LikeForNewsProps) {
  const user = msalInstance.getActiveAccount()
  const token = user ? user.idToken : ''
  const [like, setLike] = useState(false)

  const useLikePress = async () => {
    patchNewsUpvote(id, token)
  }

  return (
    <div className="w-full items-center bg-transparent">
      {!like ?
        <BiLike size={22} color="#262626" onClick={useLikePress} className='cursor-pointer' />
        :
        <BiSolidLike size={22} color="#262626" className='cursor-pointer' />
      }
    </div>
  )
}