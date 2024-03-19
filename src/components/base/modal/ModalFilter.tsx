import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { MdTune } from "react-icons/md";
import InputTags from "../common/InputTags";


export default function ModalFilter() {
  return (
    <Dialog>
      <DialogTrigger className="flex h-full justify-center items-center"><MdTune color="#7A2572" size={27} /></DialogTrigger>
      <DialogContent className="w-[40%]">
        <DialogHeader>
          <DialogTitle className="text-bdpurple">
            Filters News
          </DialogTitle>
          <DialogDescription>
            Filter news using your preferred tags
          </DialogDescription>
        </DialogHeader>
          <div className="w-full">
            <h1 className="font-semibold text-md">Tags</h1>
            <InputTags variant="wrap"/>
            <DialogFooter className="flex w-full justify-end items-end">
              <DialogClose asChild>
                <Button type="submit" onClick={()=>{}} className="rounded-sm shadow-md p-5 font-semibold text-lg " variant={"bdlight"}>
                  Filter
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
      </DialogContent>
    </Dialog>
  )
}
