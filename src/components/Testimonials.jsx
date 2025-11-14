export default function Testimonials() {
  return (
    <section id="depoimentos" className="section">
      <h2 className="text-3xl font-bold">Depoimentos</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <blockquote className="hcard">
          <p className="text-slate-200">“Fica o meu agradecimento, por tudo o que você me ajudou a ser, um profissional com conhecimentos novos e proporcionando resultados significativos à organização e a todos os colaboradores.”</p>
          <footer className="mt-3 text-sm text-slate-400">Robson Azevedo — Coordenador Operacional</footer>
        </blockquote>
        <blockquote className="hcard">
          <p className="text-slate-200">“Quero deixar registrado o empenho, dedicação e profissionalismo no qual dedicou à nossa empresa, ajudando a melhorar nossos processos e no atingimento das metas propostas que, sem dúvida, não teríamos atingido sem sua ajuda.”</p>
          <footer className="mt-3 text-sm text-slate-400">Marcelo Moscardini — Gerente Industrial e Qualidade</footer>
        </blockquote>
      </div>
    </section>
  )
}
