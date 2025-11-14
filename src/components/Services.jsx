export default function Services() {
  return (
    <section id="solucoes" className="section">
      <h2 className="text-3xl font-bold">Nossas Soluções</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="hcard">
          <h3 className="font-semibold">Treinamentos</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>Ferramentas da Qualidade & Ferramentas Lean</li>
            <li>Desperdícios Lean & Filosofia 5S</li>
            <li>Metodologia Six Sigma</li>
            <li>Ciclo PDCA (Melhoria) e SDCA (Rotina)</li>
            <li>SMED – Troca Rápida de Ferramentas</li>
          </ul>
        </div>
        <div className="hcard">
          <h3 className="font-semibold">Consultoria</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>Mapeamento e Melhoria de Processos (GRD &amp; GRM)</li>
            <li>Gestão de Mudança (Pessoas e Processos)</li>
            <li>Desdobramento de Metas e Estratégia</li>
            <li>Gestão de Projetos (Estratégica e Operacional)</li>
            <li>Sustentabilidade &amp; Inovação – Mapeamento de Iniciativas</li>
          </ul>
        </div>
        <div className="hcard">
          <h3 className="font-semibold">Assessoria</h3>
          <p className="mt-3 text-slate-300">
            Apoio à tomada de decisão com fatos e dados a partir de modelagem e análise de processos, 
            estruturando diagnósticos e implementações.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/5 p-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <h3 className="font-semibold">Nosso Objetivo</h3>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-300">
          <div className="p-4 rounded-xl bg-black/20">Redução de Custos</div>
          <div className="p-4 rounded-xl bg-black/20">Otimização de Ativos/Processos</div>
          <div className="p-4 rounded-xl bg-black/20">Transformar Perdas em Oportunidades</div>
          <div className="p-4 rounded-xl bg-black/20">Mapear Oportunidades</div>
        </div>
      </div>
    </section>
  )
}
