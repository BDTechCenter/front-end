import { Input } from "@/components/ui/input";
import InputTextEdit from './InputTextEdit'
import { Button } from "@/components/ui/button";


export default function ModalCreateComment() {
  return (
    <div className="flex justify-center items-center w-full">
    <div className="w-[45rem] border p-10">
      <h1 className="font-semibold text-md">Comment</h1>
      <InputTextEdit/>
      <div className="flex justify-end items-center">
      <Button
        variant="bdpurple"
        className="rounded-md text-xl font-medium py-6"
      >
        teste			
      </Button>
      </div>
    </div>
  </div>
 )
}
