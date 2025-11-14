export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Consultoria em Gestão Empresarial</h1>
          <p className="mt-4 text-slate-300 text-lg">
            Implementação de melhorias significativas com Lean Manufacturing e Lean Six Sigma. 
            Gestão de Projetos (CAPEX/OPEX), Transformação Digital e Inovação — em áreas administrativas e industriais.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#contato" className="cta">Seja meu parceiro estratégico</a>
            <a href="#solucoes" className="inline-flex items-center px-5 py-3 rounded-xl border border-white/10 hover:border-white/30 transition">Ver soluções</a>
          </div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-300 text-sm">
            <li>Lean Manufacturing & Six Sigma</li>
            <li>Gestão de Projetos (CAPEX/OPEX)</li>
            <li>Transformação Digital & Inovação</li>
            <li>Mapeamento e Melhoria de Processos</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 p-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 rounded-xl bg-black/20">
              <div className="text-3xl font-bold">Lean</div>
              <div className="text-xs text-slate-400">Filosofia</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20">
              <div className="text-3xl font-bold">6σ</div>
              <div className="text-xs text-slate-400">Metodologia</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20">
              <div className="text-3xl font-bold">PDCA/SDCA</div>
              <div className="text-xs text-slate-400">Ciclos</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20">
              <div className="text-3xl font-bold">SMED</div>
              <div className="text-xs text-slate-400">Troca Rápida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
