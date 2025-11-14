export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-bold tracking-wide">Bruno Ricieri</a>
        <ul className="flex gap-6 text-sm">
          <li><a className="link" href="#sobre">Sobre</a></li>
          <li><a className="link" href="#solucoes">Soluções</a></li>
          <li><a className="link" href="#trajetoria">Trajetória</a></li>
          <li><a className="link" href="#depoimentos">Depoimentos</a></li>
          <li><a className="link" href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
