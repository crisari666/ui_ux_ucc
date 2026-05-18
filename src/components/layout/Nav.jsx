import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { mockUser } from '../../data/mockUser';

const mainLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/mi-perfil', label: 'Mis servicios' },
  { to: '/encontrar-atencion', label: 'Encontrar atención' },
];

export default function Nav({ backLink, showUser = false, minimal = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-eps-nav text-white">
      <nav
        className="mx-auto flex h-[52px] max-w-6xl items-center gap-4 px-4 md:px-6"
        aria-label="Principal"
      >
        <Link to="/" className="shrink-0 text-[17px] font-bold">
          NUEVA <span className="text-[#5DADE2]">EPS</span>
        </Link>

        {backLink ? (
          <Link to={backLink.to} className="text-sm text-white/75 hover:text-white">
            {backLink.label}
          </Link>
        ) : !minimal ? (
          <>
            <div className="hidden flex-1 items-center gap-5 md:flex">
              {mainLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm no-underline ${
                    isActive(link.to)
                      ? 'font-semibold text-white'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <span className="text-sm text-white/75">Mis trámites</span>
              <span className="text-sm text-white/75">Ayuda</span>
            </div>
            <button
              type="button"
              className="ml-auto flex h-9 w-9 items-center justify-center rounded md:hidden"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </>
        ) : (
          <div className="flex-1" />
        )}

        <div className="ml-auto hidden md:block">
          {showUser ? (
            <span className="rounded-md bg-white/10 px-3.5 py-1.5 text-sm font-semibold">
              {mockUser.shortName}
            </span>
          ) : (
            <button
              type="button"
              onClick={() => navigate('/mi-perfil')}
              className="rounded-md bg-eps-accent px-3.5 py-1.5 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Iniciar sesión
            </button>
          )}
        </div>

        {!minimal && !backLink && (
          <button
            type="button"
            onClick={() => navigate('/mi-perfil')}
            className="rounded-md bg-eps-accent px-3 py-1.5 text-sm font-semibold md:hidden"
          >
            {showUser ? mockUser.shortName : 'Entrar'}
          </button>
        )}
      </nav>

      {menuOpen && !minimal && !backLink && (
        <div className="border-t border-white/10 px-4 py-3 md:hidden">
          {mainLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-white/90"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
