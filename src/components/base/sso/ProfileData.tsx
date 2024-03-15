export interface GraphData {
  displayName: string,
  jobTitle: string,
  mail: string,
  businessPhones: string[],
  officeLocation: string
};

export default function ProfileData({graphData}:{graphData: GraphData}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-base font-medium">Name: {graphData.displayName}</p>
      <p className="text-base font-medium">Job: {graphData.jobTitle}</p>
      <p className="text-base font-medium">Mail: {graphData.mail}</p>
      <p className="text-base font-medium">Phone: {graphData.businessPhones[0]}</p>
      <p className="text-base font-medium">Location: {graphData.officeLocation}</p>
    </div>
  )
}
