import React from 'react'
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useState } from 'react';
import {  useMutationPatchUpvote } from '@/api/hooks/news/queries';
import { toast } from 'react-toastify';

interface LikeForNewsProps {
  id: string | number
  alreadyUpVoted: boolean
  method: "comments" | "news"
  sizeIcon?: number
}

export default function LikeForNews({ id, alreadyUpVoted, method, sizeIcon }: LikeForNewsProps) {
  const { mutate } = useMutationPatchUpvote()
  
  const user = msalInstance.getActiveAccount()
  const token = user ? user.idToken : ''
  const [like, setLike] = useState(alreadyUpVoted)

  const useLikePress = async () => {
      mutate(
        { id: id, token: token, method: method },
        {
          onSuccess: (data) => {
            toast.success(!like ? "upvote successfully": "upvote removed", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
  
              progress: undefined,
              theme: "light",
            });
          },
          onError: (error) => {
            toast.error(error.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
        }
      );
      setLike(!like)
  }

  return (
    <div className="w-full items-center bg-transparent">
      {!like ?
        <BiUpvote size={sizeIcon} color="#262626" onClick={useLikePress} className='cursor-pointer' />
        :
        <BiSolidUpvote size={sizeIcon} onClick={useLikePress} color="#262626" className='cursor-pointer' />
      }
    </div>
  )
}