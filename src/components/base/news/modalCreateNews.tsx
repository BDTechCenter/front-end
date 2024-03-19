import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import InputTextEdit from "../common/InputTextEdit"
import ImageButton from "./ImageButton"
import InputTags from "../common/InputTags"
export function ModalCreateNews() {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState<string | null>('')

  const print = () => {
    console.log(title)
    console.log(tag)
    console.log(content)
    console.log(image)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-sm w-48 p-5 font-semibold text-lg" variant={"bdlight"}>Add News</Button>
      </DialogTrigger>
      <DialogContent className="w-[80%] 2xl:w-[55%] h-[80%] 2xl:h-[60%]">
        <DialogHeader>
          <DialogTitle className="text-bdpurple">Create a News</DialogTitle>
        </DialogHeader>
        <div className="flex gap-1 flex-row w-full overflow-hidden justify-between">
          <div className="w-[40%]">
            <h1 className="font-semibold text-md">Poster</h1>
            <ImageButton value={image} onChange={setImage} />
            <h1 className="font-semibold text-md">Title</h1>
            <Input value={title} onChange={setTitle} className="h-10 pl-7 mb-2 text-sm" maxLength={150} />
            <h1 className="font-semibold text-md">Tag</h1>
            <InputTags variant="row"/>
          </div>
          <div className="flex gap-1 flex-col w-[58%]">
            <h1 className="font-semibold text-md w-full text-start">Content</h1>
            <div className="w-full">
              <InputTextEdit onChange={setContent} />
            </div>
            <DialogFooter className="flex w-full justify-end items-end">
              <DialogClose asChild>
                <Button onClick={print} className="rounded-sm shadow-md p-5 font-semibold text-lg " variant={"bdlight"}>
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

