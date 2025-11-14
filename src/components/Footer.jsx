export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-lg">Consultoria em Gestão Empresarial</div>
          <p className="text-slate-400 mt-2">Alavancando resultados por meio de Gestão de Processos e Projetos.</p>
        </div>
        <div>
          <div className="font-semibold">Links</div>
          <ul className="mt-2 space-y-2 text-slate-400">
            <li><a href="#solucoes" className="link">Soluções</a></li>
            <li><a href="#trajetoria" className="link">Trajetória</a></li>
            <li><a href="#depoimentos" className="link">Depoimentos</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contato</div>
          <ul className="mt-2 space-y-2 text-slate-400">
            <li><a href="mailto:bmricieri@gmail.com" className="link">bmricieri@gmail.com</a></li>
            <li><a href="tel:+5527999570679" className="link">+55 (27) 99957-0679</a></li>
            <li><a href="https://www.linkedin.com/in/bruno-ricieri-de-miranda" target="_blank" rel="noopener" className="link">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 pb-6">© {year} Bruno Ricieri. Todos os direitos reservados.</div>
    </footer>
  )
}
