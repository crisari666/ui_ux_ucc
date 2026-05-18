import { useNavigate } from 'react-router-dom';

const cards = [
  {
    id: 'citas',
    icon: '📅',
    iconBg: 'bg-eps-light-blue',
    title: 'Agendar cita',
    desc: 'Médico general o especialista',
    route: '/citas/nueva',
    keywords: ['cita', 'agendar', 'médico', 'especialista'],
  },
  {
    id: 'auth',
    icon: '✅',
    iconBg: 'bg-[#D5F5E3]',
    title: 'Mis autorizaciones',
    desc: 'Consulta el estado de tus trámites',
    route: null,
    keywords: ['autorización', 'trámite', 'estado'],
  },
  {
    id: 'cert',
    icon: '📄',
    iconBg: 'bg-[#FDEBD0]',
    title: 'Mis certificados',
    desc: 'Descarga tu certificado de afiliación',
    route: null,
    keywords: ['certificado', 'afiliación', 'descarga'],
  },
  {
    id: 'ips',
    icon: '📍',
    iconBg: 'bg-[#E8DAEF]',
    title: 'Encontrar IPS',
    desc: 'IPS, farmacias y urgencias cerca',
    route: '/encontrar-atencion',
    keywords: ['ips', 'farmacia', 'urgencias', 'mapa', 'cerca'],
  },
];

export default function QuickAccessGrid({ highlightQuery, onComingSoon }) {
  const navigate = useNavigate();
  const q = (highlightQuery || '').toLowerCase();

  const handleClick = (card) => {
    if (card.route) {
      navigate(card.route);
    } else {
      onComingSoon(card.title);
    }
  };

  return (
    <section className="grid grid-cols-2 gap-4 bg-[#F8F9FA] px-6 py-7 md:grid-cols-4 md:px-8">
      {cards.map((card) => {
        const matches =
          !q ||
          card.title.toLowerCase().includes(q) ||
          card.desc.toLowerCase().includes(q) ||
          card.keywords.some((k) => k.includes(q));

        return (
          <button
            key={card.id}
            type="button"
            onClick={() => handleClick(card)}
            className={`rounded-[10px] border-[1.5px] bg-white p-4 text-center transition-colors hover:border-eps-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-eps-primary ${
              matches && q ? 'border-eps-primary ring-2 ring-eps-primary/20' : 'border-eps-border'
            } ${!matches && q ? 'opacity-40' : ''}`}
          >
            <div
              className={`mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-full text-xl ${card.iconBg}`}
              aria-hidden
            >
              {card.icon}
            </div>
            <h2 className="mb-1 text-sm font-bold text-eps-text">{card.title}</h2>
            <p className="text-[17px] text-eps-muted">{card.desc}</p>
          </button>
        );
      })}
    </section>
  );
}
