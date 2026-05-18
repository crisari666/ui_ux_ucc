import { mockUser } from '../../data/mockUser';

const menuItems = [
  'Mis citas',
  'Autorizaciones',
  'Certificados',
  'Incapacidades',
  'Mis PQRS',
  'Datos de afiliación',
  'Grupo familiar',
];

export default function ProfileSidebar({ activeTab, onTabChange }) {
  return (
    <aside className="bg-eps-nav p-4 md:p-6">
      <div
        className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#5DADE2] text-2xl font-bold text-white"
        aria-hidden
      >
        {mockUser.initials}
      </div>
      <p className="text-center text-[17px] font-semibold text-white">{mockUser.name}</p>
      <p className="mb-5 text-center text-[17px] text-white/50">
        {mockUser.id} · {mockUser.regime}
      </p>
      <nav aria-label="Menú de perfil">
        <ul className="flex flex-col gap-0.5">
          {menuItems.map((item) => {
            const active = activeTab === item;
            return (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => onTabChange(item)}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    active
                      ? 'bg-white/15 font-semibold text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${active ? 'bg-[#58D68D]' : 'bg-white/40'}`}
                    aria-hidden
                  />
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
