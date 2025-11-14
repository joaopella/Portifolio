export default function Contact() {
  return (
    <section id="contato" className="section">
      <h2 className="text-3xl font-bold">Contato</h2>
      <p className="mt-4 text-slate-300">Vamos conversar sobre seus desafios e metas.</p>
      <ul className="mt-4 space-y-2 text-slate-300">
        <li><a className="link" href="mailto:bmricieri@gmail.com">bmricieri@gmail.com</a></li>
        <li><a className="link" href="tel:+5527999570679">+55 (27) 99957-0679</a></li>
        <li><a className="link" href="https://www.linkedin.com/in/bruno-ricieri-de-miranda" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
      <div className="mt-6">
        <a href="mailto:bmricieri@gmail.com" className="cta">Solicitar proposta</a>
      </div>
    </section>
  )
}
