import CardTeam from "./CardTeam"
import { CardTeamMember } from "@/api/introduction/types"

interface AllCardTeamProps {
  data: CardTeamMember[] | undefined
}

export default function AllCardTeam({ data }: AllCardTeamProps) {
  return (
    <div>
      <div className="flex w-full justify-center items-center my-12">
        <h1 className="font-semibold text-4xl">
          Dev Team
        </h1>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-6 w-full items-center justify-center">
        {data?.map((team) => (
          <CardTeam
            name={team.name}
            img={team.img}
            functionTeam={team.function}
          />
        ))}
      </div>
    </div>

  )
}
