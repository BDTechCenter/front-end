import { Input } from '@/components/ui/input'
import { useState, KeyboardEvent } from 'react'
import { IoMdClose } from "react-icons/io"
import { toast } from 'react-toastify'

export interface InputTagsProps{
  variant: "wrap"|"row"
  onChange: (value: string[]) => void
}

export default function InputTags({variant, onChange}: InputTagsProps){
  const [tags, setTags] = useState<string[]>([])
  const MaxTegs = 7

  const errorToast = () =>{
      toast.error('inpussivel add more tags', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }

  const addTags = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim() !== '') {
      if(tags.length < MaxTegs){
        setTags([...tags, event.currentTarget.value.trim()]);
        onChange([...tags, event.currentTarget.value.trim()])
      }
      else{
        errorToast()
      }
      event.currentTarget.value = '';
    }
};

  const removeTags = (index: number) => {
    setTags([...tags.filter((_, i) => i !== index)]);
    onChange([...tags.filter((_, i) => i !== index)])
  };

  return(
    <div>
      <Input onKeyUp={addTags} maxLength={35} onChange={()=>{}}/>
      <div className={`flex ${variant === "wrap"? "flex-wrap": "flex-row"} p-1 gap-2 items-center my-5 overflow-y-hidden overflow-x-scroll`}>
        {tags.map((tag, index) => (
          <span className="flex gap-1 flex-row items-center p-2 rounded-sm border border-bdlightpurple/80" key={index}>
            <p className="font-medium text-sm">{tag}</p>
            <IoMdClose onClick={()=>{removeTags(index)}} className='text-bdlightpurple cursor-pointer' />
          </span>
        ))}
      </div>
    </div>
  )
}