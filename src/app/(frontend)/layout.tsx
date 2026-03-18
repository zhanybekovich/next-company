import React from 'react'

import './globals.css'
import Header from '@/components/Header'
import { getCompany } from '@/services/companyService'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const company = await getCompany()

  return {
    title: company?.name || 'Главная страница',
    description: company?.description || 'Это официальный сайт компании Next Company.',
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const company = await getCompany()

  return (
    <html lang="en">
      <body>
        <Header company={company} />
        <main>{children}</main>
        <Footer company={company} />
      </body>
    </html>
  )
}
