
import Comment from "./Comment"
import ImageError from "../common/ImageError"

interface CommentList{
  data: Comment[] | undefined
}

export default function CommentList({data}: CommentList) {

  return (
    <div className="w-full">
      {data?.length === 0 ?(
          <ImageError data={error} />
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

const error={
  text: "No comments, write yours",
  img: "/noComment.gif",
}

