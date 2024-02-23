import { Feature } from "@/api/introduction/types"
import CardFeature from "./CardFeature"

interface AllCardFeatureProps {
  data?: Feature[]
}

export default function AllCardFeature({ data }: AllCardFeatureProps) {
  return (
    <div>
      <div className="flex w-full justify-center items-center my-12">
        <h1 className="font-semibold text-4xl">
          Our Features
        </h1>
      </div>
      {data?.map((feature) => (
        <CardFeature
          data={feature}
        />
      ))}
    </div>
  )
}
