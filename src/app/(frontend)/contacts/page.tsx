import { getCompany } from '@/services/companyService'
import { getContactPage } from '@/services/api'
import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa'

async function ContactPage() {
  const company = await getCompany()
  const contact = await getContactPage()

  return (
    <article className="my-20">
      <div className="wrapper">
        <h1 className="text-5xl font-bold text-center mb-8 max-w-[80%] mx-auto">{contact.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
            <div className="my-4 flex gap-3">
              <a
                href={company.socials.facebook}
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href={company.socials.instagram}
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href={company.socials.telegram}
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
              <a
                href={company.socials.whatsapp}
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="w-full shadow-lg h-100 rounded-lg overflow-hidden">
            <div className="map" dangerouslySetInnerHTML={{ __html: contact.mapCode }}></div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ContactPage
