import { useEffect } from 'react';
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

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SidebarNav({ activeTab, onTabChange, onItemSelect }) {
  return (
    <>
      <div
        className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#5DADE2] text-2xl font-bold text-white"
        aria-hidden
      >
        {mockUser.initials}
      </div>
      <p className="text-center text-[15px] font-semibold text-white">{mockUser.name}</p>
      <p className="mb-5 text-center text-[13px] text-white/50">
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
                  onClick={() => {
                    onTabChange(item);
                    onItemSelect?.();
                  }}
                  aria-current={active ? 'page' : undefined}
                  className={`flex min-h-11 w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
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
    </>
  );
}

export function ProfileMenuButton({ onClick, expanded }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={expanded ? 'Cerrar menú de perfil' : 'Abrir menú de perfil'}
      aria-expanded={expanded}
      aria-controls="profile-sidebar-drawer"
      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-md border border-eps-border text-eps-primary transition-colors duration-200 hover:border-eps-primary hover:bg-eps-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eps-primary md:hidden"
    >
      <MenuIcon />
    </button>
  );
}

export default function ProfileSidebar({
  activeTab,
  onTabChange,
  mobileOpen = false,
  onMobileClose,
}) {
  useEffect(() => {
    if (!mobileOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onMobileClose?.();
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen, onMobileClose]);

  return (
    <>
      <aside className="hidden bg-eps-nav p-4 md:block md:p-6">
        <SidebarNav activeTab={activeTab} onTabChange={onTabChange} />
      </aside>

      <div className="contents md:hidden">
        <div
          className={`fixed inset-0 top-[52px] z-40 bg-black/40 transition-opacity duration-200 motion-reduce:transition-none ${
            mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={!mobileOpen}
          onClick={onMobileClose}
        />

        <aside
          id="profile-sidebar-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de perfil"
          aria-hidden={!mobileOpen}
          className={`fixed top-[52px] left-0 z-50 flex h-[calc(100vh-52px)] w-[min(280px,85vw)] flex-col bg-eps-nav p-4 shadow-xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Mi perfil</p>
            <button
              type="button"
              onClick={onMobileClose}
              aria-label="Cerrar menú de perfil"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <SidebarNav
              activeTab={activeTab}
              onTabChange={onTabChange}
              onItemSelect={onMobileClose}
            />
          </div>
        </aside>
      </div>
    </>
  );
}
