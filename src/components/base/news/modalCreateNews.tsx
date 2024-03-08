import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalCreateNewsProps {
  isOpen?: boolean;
  setIsOpen?: Function;
}

export default function ModalCreateNews({ setIsOpen, isOpen }: ModalCreateNewsProps){
 return (
  <div className="flex justify-center items-center w-full">
    <div className="h-[60rem] w-[45rem] border p-12">
      <h1 className="font-semibold text-md">Title</h1>
      <Input className="h-10 pl-7 mb-5 text-sm" placeholder="Add Title"/>
      <h1 className="font-semibold text-md">Description</h1>
      <Input className="h-20 pl-7 mb-5 text-sm" placeholder="Add Description"/>
      <h1 className="font-semibold text-md">Tag</h1>
      <Input className="h-20 pl-7 mb-5 text-sm" placeholder="Add Description"/>
    </div>
  </div>
 )
};
