export async function getCompanyServices() {
  const res = await fetch(`${process.env.API_URL}/services`)

  if (!res.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  return res.json()
}

export async function getNews() {
  const res = await fetch(`${process.env.API_URL}/posts`)

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
