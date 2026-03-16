import { getCompany } from '@/services/companyService'
import { getContactPage } from '@/services/api'
import { FaPhone, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa'

async function ContactPage() {
  const company = await getCompany()
  const contact = await getContactPage()

  return (
    <article className="my-20">
      <div className="wrapper">
        <h1 className="text-5xl font-bold text-center mb-8 max-w-[80%] mx-auto">{contact.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="leading-8">
            <p className="mb-4">{contact.description}</p>
            <p className="flex items-center gap-2">
              <FaPhone />
              {company.phone}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt />
              {company.address}
            </p>
            <div className="my-4">
              <a href={company.facebook} target="_blank" className="flex items-center gap-2">
                <FaFacebook />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </article>
  )
}

export default ContactPage
