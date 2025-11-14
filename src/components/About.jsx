export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold">Quem sou</h2>
          <p className="mt-4 text-slate-300">
            Engenheiro de Produção com especializações em Gestão de Negócios e Lean Manufacturing. 
            Atuação em projetos de melhoria, transformação digital e inovação em áreas administrativas e industriais, 
            com experiência em Gestão de CAPEX e OPEX.
          </p>
          <p className="mt-4 text-slate-300">
            Valorizo profundamente minha família e a coerência entre discurso e prática. 
            Acredito que “o certo é certo, mesmo que ninguém esteja fazendo”.
          </p>
        </div>
        <div className="hcard">
          <h3 className="font-semibold">Missão, Filosofia e Valores</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li><span className="font-medium text-slate-100">Missão:</span> Contribuir para que entidades públicas e privadas elevem seus resultados financeiros e sociais por meio da gestão de processos e projetos com base na filosofia Lean.</li>
            <li><span className="font-medium text-slate-100">Filosofia:</span> O certo é certo, mesmo que ninguém esteja fazendo.</li>
            <li><span className="font-medium text-slate-100">Valores:</span> Família, Coerência e Disposição em Servir.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
