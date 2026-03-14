import PostCard from '@/components/PostCard'
import { getCompanyServices, getNews } from '@/services/api'
import { getCompany } from '@/services/companyService'
import Image from 'next/image'
import Link from 'next/link'

export default async function HomePage() {
  const company = await getCompany()
  const services = await getCompanyServices()
  const news = await getNews()

  return (
    <>
      <section className="py-20">
        <div className="wrapper grid gap-8 grid-cols-1 md:grid-cols-2 items-center md:gap-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8 md:text-5xl">{company.name}</h1>
            <p className="leading-8 mb-8">{company.description}</p>
            <Link
              className="inline-block py-2 px-8 bg-slate-900 text-white rounded-sm"
              href="/about"
            >
              Подробнее
            </Link>
          </div>
          <Image
            className="rounded-md overflow-hidden"
            src={company.home_banner.url}
            alt={company.name}
            width={800}
            height={400}
          />
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Наши услуги</h2>
        <div className="wrapper grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {services.docs.map((service) => (
            <div key={service.title} className="flex flex-col p-8 shadow-lg items-center">
              <Image
                className="mb-8"
                src={service.icon.url}
                alt={service.title}
                width={100}
                height={100}
              />
              <h3 className="font-bold text-2xl mb-4">{service.title}</h3>
              <p className="leading-7 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Наши новости</h2>
        <div className="wrapper mb-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {news.docs.slice(0, 6).map((post, index) => (
            <PostCard key={`post.title-${index}`} post={post} />
          ))}
        </div>
        <div className="text-center py-8">
          <Link
            href="/posts"
            className="py-2 px-8 bg-slate-700 hover:bg-slate-900 transition-all text-white rounded-sm"
          >
            Все новости
          </Link>
        </div>
      </section>
    </>
  )
}
