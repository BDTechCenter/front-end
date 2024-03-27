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
  const { mutate } = useMutationPostNewsUpvote()
  const [like, setLike] = useState(false)

  const likePress = () =>{
    mutate(id, {
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

// mutate(newsFormData, {
//   onSuccess: (data) => {
//     console.log(data);
//     toast.success("News added with success", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   },
//   onError: (error) => {
//     console.log(error);
//     toast.error(error.message, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   },
// });