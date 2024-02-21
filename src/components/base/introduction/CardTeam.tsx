import { introductionData } from "@/api/introduction"

interface Props{
  name: string
  img: string
  functionTeam: string
}

export default function CardTeam({name, img, functionTeam}: Props){
  return(
    <div className="">
      <div className={`h-full w-[2.5rem] bg-bdpurple`}></div>
      <div>
        <div>

        </div>
      </div>
    </div>
  )
}