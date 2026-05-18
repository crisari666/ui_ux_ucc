const items = [
  {
    title: 'Régimen Contributivo',
    text: 'Gestiona citas, autorizaciones, incapacidades y certificados si cotizas al sistema de salud.',
  },
  {
    title: 'Régimen Subsidiado',
    text: 'Consulta tus beneficios, red de atención y trámites disponibles para afiliados subsidiados.',
  },
  {
    title: 'Urgencias 24/7',
    text: 'Encuentra el punto de atención de urgencias más cercano disponible ahora mismo.',
  },
  {
    title: 'Líneas de atención',
    text: 'Contributivo: 01 8000 954400 · Subsidiado: 01 8000 952000 · Whatsapp: EVA',
  },
];

export default function InfoGrid() {
  return (
    <section className="grid md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="border-t border-[#E8E8E8] p-7 odd:md:border-r odd:md:border-[#E8E8E8] md:px-8"
        >
          <h2 className="mb-2 text-base font-bold text-eps-primary">{item.title}</h2>
          <p className="text-[15px] leading-relaxed text-[#666]">{item.text}</p>
        </article>
      ))}
    </section>
  );
}
