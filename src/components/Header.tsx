import Navigation from './Navigation'
import { navLinks } from '@/constants/navLinks'

function Header({ company }) {
  return (
    <header className="py-4">
      <div className="wrapper">
        <Navigation company={company} navLinks={navLinks} />
      </div>
    </header>
  )
}

export default Header
