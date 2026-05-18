import { useState } from 'react';

export default function HeroSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <section className="bg-gradient-to-br from-eps-primary to-[#21618C] px-6 py-12 text-center text-white md:py-14">
      <h1 className="mb-2 text-2xl font-bold md:text-[30px]">¿Qué necesitas hoy?</h1>
      <p className="mb-6 text-[15px] opacity-80">
        Gestiona tus servicios de salud sin filas, sin esperas.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-md overflow-hidden rounded-lg bg-white shadow-md"
        role="search"
      >
        <label htmlFor="hero-search" className="sr-only">
          Buscar servicios
        </label>
        <input
          id="hero-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca una cita, autorización, certificado..."
          className="flex-1 border-none px-4 py-3 text-[15px] text-[#333] outline-none"
        />
        <button
          type="submit"
          className="bg-eps-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Buscar
        </button>
      </form>
    </section>
  );
}
