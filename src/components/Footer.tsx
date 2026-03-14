export default function Footer({ company }) {
  return (
    <footer className="py-8 text-center bg-slate-900 text-white">
      <p className="text-sm tracking-wider">
        <span className="font-bold">{company.name}</span>. Все права защищены. &copy;{' '}
        {new Date().getFullYear()}г.
      </p>
    </footer>
  )
}
