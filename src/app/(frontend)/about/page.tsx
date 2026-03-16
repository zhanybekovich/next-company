import { getAboutPage } from '@/services/api'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'

async function AboutPage() {
  const about = await getAboutPage()
  return (
    <section>
      <div className="h-100 relative">
        <Image src={about.image.url} alt={about.title} fill className="object-cover" />
        <div className="bg-slate-900/70 absolute top-[50%] translate-y-[-50%] w-full min-h-25 text-center flex flex-col justify-center items-center py-16">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{about.title}</h1>
        </div>
      </div>

      <div className="max-w-200 mx-auto px-4 py-8">
        <article className="prose prose-slate prose-lg mx-auto">
          <RichText data={about.content} />
        </article>
      </div>
    </section>
  )
}

export default AboutPage
