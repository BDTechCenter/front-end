import { Comment } from "@/api/news/type"

interface CommentProps{
  data: Comment
}

export default function Comment({data}:CommentProps) {
  return (
    <div className="flex flex-col w-full border border-bdlightpurple/20 rounded-md p-4 gap-1">
      <h1 className="text-md 2xl:text-lg font-bold">{data.author}</h1>
      <p className="text-[0.75rem] 2xl:text-sm">{data.comment}</p>
    </div>
  )
}
