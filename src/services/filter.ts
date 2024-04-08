import { Filter } from "@/api/types/all/type"

interface filterProps{
  filters: Filter
}

export default function filter({filters}: filterProps){
  let url = []
  if(filters.tags){
    url.push(filters.tags)
  }
  if(filters.title){
    url.push(filters.title)
  }
  return "?"+url.join('&')
}
