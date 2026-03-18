import Link from 'next/link'
import PostCard from '@/components/PostCard'
import { getAllNews } from '@/services/api'

import type { Metadata } from 'next'
import { getCompany } from '@/services/companyService'

export async function generateMetadata(): Promise<Metadata> {
  const company = await getCompany()

  return {
    title: `Новости - ${company?.name}` || 'Новости',
    description: company?.description || 'Новости нашей компании',
  }
}

async function PostIndex({ searchParams }) {
  const page = (await Number(searchParams?.page)) || 1
  const news = await getAllNews(page)

  return (
    <section className="py-20">
      <div className="wrapper">
        <h2 className="text-5xl font-bold text-center mb-14">Наши новости</h2>

        <div className="wrapper mb-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
            {news.docs.map((post, index) => (
              <PostCard key={`post.slug-${index}`} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center items-center gap-2">
            {/* Prev */}
            {news.hasPrevPage ? (
              <Link
                href={`?page=${news.prevPage}`}
                className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
              >
                Назад
              </Link>
            ) : (
              <span className="px-4 py-2 rounded-lg border border-slate-200 text-slate-400 cursor-not-allowed">
                Назад
              </span>
            )}

            {/* Page numbers */}
            {Array.from({ length: news.totalPages }, (_, i) => {
              const pageNumber = i + 1

              return (
                <Link
                  key={pageNumber}
                  href={`?page=${pageNumber}`}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium
                  ${
                    news.page === pageNumber
                      ? 'bg-slate-800 text-white border-slate-800'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {pageNumber}
                </Link>
              )
            })}

            {/* Next */}
            {news.hasNextPage ? (
              <Link
                href={`?page=${news.nextPage}`}
                className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
              >
                Вперед
              </Link>
            ) : (
              <span className="px-4 py-2 rounded-lg border border-slate-200 text-slate-400 cursor-not-allowed">
                Вперед
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostIndex
