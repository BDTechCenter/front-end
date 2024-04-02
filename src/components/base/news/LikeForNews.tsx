import React from 'react'
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useState } from 'react';
import {  useMutationPatchNewsUpvote } from '@/api/hooks/news/queries';
import { toast } from 'react-toastify';

interface LikeForNewsProps {
  id: string
  alreadyUpVoted: boolean
}

export default function LikeForNews({ id, alreadyUpVoted }: LikeForNewsProps) {
  const { mutate } = useMutationPatchNewsUpvote()
  
  const user = msalInstance.getActiveAccount()
  const token = user ? user.idToken : ''
  const [like, setLike] = useState(alreadyUpVoted)

  const useLikePress = async () => {
    mutate(
      { id: id, token: token },
      {
        onSuccess: (data) => {
          toast.success("upvote successfully", {
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
    setLike(true);
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