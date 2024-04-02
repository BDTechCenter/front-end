import { Filter } from "@/api/types/all/type";

interface filterProps{
  filters: Filter
}

export default function filter(filters: filterProps){
  return filters.filters.tags
}
