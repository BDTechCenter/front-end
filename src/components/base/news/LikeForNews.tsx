import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { msalInstance } from "@/lib/sso/msalInstance";
import { useState } from 'react';
import { useMutationPostNewsUpvote } from '@/api/hooks/news/queries';

interface LikeForNewsProps{
  id: string
}

export default function LikeForNews({id}: LikeForNewsProps) {
  const user = msalInstance.getActiveAccount()
  const token = user ? user.idToken : ''
  const { mutate } = useMutationPostNewsUpvote()
  const [like, setLike] = useState(false)

  console.log(token)

  const likePress = () =>{
    const formData = new FormData()
    formData.append("id", "id");

    mutate({id, formData, token}, {
      onSuccess: (data) => {
        console.log(data)
        console.log("CERTO")
      },
      onError: (error) =>{
        console.log(error)
        console.log("ERRO")
      }
    })
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