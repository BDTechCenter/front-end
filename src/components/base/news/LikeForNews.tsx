import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useState } from 'react';
import { useFetchNewsUpvote, useMutationPostNewsUpvote } from '@/api/hooks/news/queries';

interface LikeForNewsProps {
  id: string
}

export default function LikeForNews({ id }: LikeForNewsProps) {
  const user = msalInstance.getActiveAccount()
  const token = user ? user.idToken : ''
  const { data, isError, refetch } = useFetchNewsUpvote(id, token)
  // const { mutate } = useMutationPostNewsUpvote()
  
  const [like, setLike] = useState(false)

  console.log(token)

  const useLikePress = async () => {
    refetch()
    if (isError) (error: any) => {
      console.log(error);
      
    }
    setLike(true)
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