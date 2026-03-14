import React from 'react'

import './globals.css'
import Header from '@/components/Header'
import { getCompany } from '@/services/companyService'
import Footer from '@/components/Footer'

export const metadata = {
  description: 'Это официальный сайт компании Next Company.',
  title: 'Маркетинговая компания Next Company',
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
