"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import InputTextEdit from "./InputTextEdit"

export function ModalCreateNews() {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [content, setContent] = useState('')

  const print = () =>{
    console.log(title)
    console.log(tag)
    console.log(content)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-lg w-48 p-5 font-semibold text-lg" variant={"bdlight"}>Add News</Button>
      </DialogTrigger>
      <DialogContent className="w-[80%] 2xl:w-[55%] h-[80%] 2xl:h-[65%]">
      <DialogHeader>
        <DialogTitle className="text-bdpurple">Create a News</DialogTitle>
      </DialogHeader>
      <div className="flex flex-row w-full overflow-hidden justify-between">
        <div className="w-[40%]">
          
          <h1 className="font-semibold text-md">Title</h1>
          <Input value={title} onChange={setTitle} className="h-10 pl-7 mb-2 text-sm" maxLength={150} />
          <h1 className="font-semibold text-md">Tag</h1>
          <Input value={tag} onChange={setTag} className="h-10 pl-7 mb-2 text-sm" maxLength={150} />
        </div>
        <div className="flex flex-col w-[58%]">
          <h1 className="font-semibold text-md w-full text-start">Content</h1>
          <div className="w-full">
            <InputTextEdit onChange={setContent} />
          </div>
        <DialogFooter className="flex w-full justify-end items-end">
          <DialogClose asChild>
            <Button onClick={print} className="rounded-lg shadow-md p-5 font-semibold text-lg " variant={"bdlight"}>
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
        </div>
      </div>
      </DialogContent>
    </Dialog>
  )
}

