import { getPost } from '@/services/api'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
async function PostShow({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const postRes = await getPost(slug)

  const post = postRes.docs[0]

  return (
    <article className="py-20">
      <div className="wrapper">
        <h1 className="text-5xl font-bold text-center mb-8 max-w-[80%] mx-auto">{post.title}</h1>
        <div className="max-w-200 mx-auto px-4 py-8">
          <div className="relative aspect-video ">
            <Image
              src={post.image.url}
              alt={post.title}
              fill
              className="object-cover rounded-lg overflow-hidden"
            />
          </div>
          <div className="prose prose-slate prose-lg mx-auto">
            <RichText data={post.content} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostShow
