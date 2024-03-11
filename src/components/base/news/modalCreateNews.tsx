import { Input } from "@/components/ui/input";
import InputTextEdit from "./InputTextEdit";
import { Button } from "@/components/ui/button";

interface ModalCreateNewsProps {
  isOpen?: boolean;
  setIsOpen?: Function;
}

export default function ModalCreateNews({ setIsOpen, isOpen }: ModalCreateNewsProps){
 return (
  <div className="flex justify-center items-center w-full">
    <div className="w-[45rem] border p-10">
      <h1 className="font-semibold text-md">Title</h1>
      <Input className="h-10 pl-7 mb-5 text-sm" placeholder="Add Title"/>
      <h1 className="font-semibold text-md">Tag</h1>
      <Input className="h-10 pl-7 mb-5 text-sm" placeholder="Add Description"/>
      <h1 className="font-semibold text-md">Content</h1>
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
};
