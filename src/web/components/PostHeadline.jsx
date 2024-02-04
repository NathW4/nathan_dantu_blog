import React from "react"
import Link from "@/web/components/ui/Link"

const PostHeadline = ({ id, name, description, author }) => (
  <article className="flex flex-col gap-4">
    <h1 className="text-2xl">
      <Link href={`/posts/${id}`}>{name}</Link>
    </h1>
    <p>{description.split(/\s+/u).slice(0, 7).join(" ")}...</p>
    {author && <p>Author: {author.username}</p>}
  </article>
)

export default PostHeadline
