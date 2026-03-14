import Image from 'next/image'
import Link from 'next/link'

function PostCard({ post }) {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <div className="aspect-video relative">
        <Link href={`/posts/${post.slug}`}>
          <Image src={post.image.url} alt={post.title} fill />
        </Link>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-slate-500 hover:text-slate-900 transition-all">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h3>
      </div>
    </div>
  )
}

export default PostCard
