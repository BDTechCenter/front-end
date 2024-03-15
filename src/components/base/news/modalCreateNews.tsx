"use client"
import { Button } from "@/components/ui/button"
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-lg w-48 p-5 font-semibold text-lg" variant={"bdlight"}>Add News</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-bdpurple">Create a News</DialogTitle>
        </DialogHeader>
        <div className="w-[40rem]">
          <h1 className="font-semibold text-md">Title</h1>
          <Input className="h-10 pl-7 mb-2 text-sm" maxLength={150} />
          <h1 className="font-semibold text-md">Tag</h1>
          <Input className="h-10 pl-7 mb-2 text-sm" maxLength={150} />
          <h1 className="font-semibold text-md">Content</h1>
          <div className="w-full">
            <InputTextEdit />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button className="rounded-lg shadow-md p-5 font-semibold text-lg" variant={"bdlight"}>
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

