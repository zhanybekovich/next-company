export async function getCompanyServices() {
  const res = await fetch(`${process.env.API_URL}/services`)

  if (!res.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  return res.json()
}

export async function getNewsForHome() {
  const res = await fetch(`${process.env.API_URL}/posts/?where[isPublished][equals]=true&limit=6`)

  if (!res.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  return res.json()
}

export async function getAllNews(page) {
  const res = await fetch(
    `${process.env.API_URL}/posts/?where[isPublished][equals]=true&limit=3&page=${page}`,
  )

  if (!res.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  return res.json()
}

export async function getPost(slug: string) {
  const res = await fetch(`${process.env.API_URL}/posts/?where[slug][equals]=${slug}`)

  if (!res.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  return res.json()
}

export async function getAboutPage() {
  const res = await fetch(`${process.env.API_URL}/globals/about`)

  if (!res.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  return res.json()
}
