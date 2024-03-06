import Comment from "./Comment"
import ImageError from "../common/ImageError"
import { dataNewsPage } from "@/data/news"

interface CommentList{
  data: Comment[] | undefined
}

export default function CommentList({data}: CommentList) {

  return (
    <div className="w-full">
      {data?.length === 0 ?(
          <ImageError data={dataNewsPage.newsError.noCommentError} />
      ):(
        <div className="flex flex-col w-full h-full gap-4">
          {data?.map((comment) => (
            <Comment data={comment}/>
          ))}
        </div>
      )}
    </div>
  )
}



