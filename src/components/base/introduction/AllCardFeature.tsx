import { DataFeatures } from "../../../../global"
import CardFeature from "./CardFeature"

interface AllCardFeatureProps{
  data?: DataFeatures[]
}

export default function AllCardFeature({data}: AllCardFeatureProps) {
  return (
    <div>
      <div className="flex w-full justify-center items-center my-12">
        <h1 className="font-semibold text-4xl">
          Our Features
        </h1>
      </div>
      {data?.map((feature) => (
      <CardFeature 
        title={feature.title}  
        content={feature.content}
        icon={feature.icon}
        //@ts-ignore
        orientation={feature.orientation}
      />
    ))}
    </div>
  )
}
