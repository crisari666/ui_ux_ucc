import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { BtnPrimary, BtnSecondary } from '../components/layout/ActionBar';
import { useBooking } from '../context/BookingContext';

export default function BookingSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetBooking } = useBooking();
  const authNumber = location.state?.authNumber || 'AUT-000000';

  useEffect(() => {
    resetBooking();
  }, [resetBooking]);

  return (
    <PageShell navProps={{ showUser: true }} showFooter={false}>
      <section className="mx-auto max-w-lg px-6 py-16 text-center">
        <div
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D5F5E3] text-3xl"
          aria-hidden
        >
          ✓
        </div>
        <h1 className="mb-2 text-3xl font-bold text-eps-primary">¡Cita confirmada!</h1>
        <p className="mb-6 text-base text-eps-muted">
          Tu cita ha sido agendada correctamente. Recibirás el recordatorio por los canales
          seleccionados.
        </p>
        <p className="mb-8 rounded-lg bg-eps-highlight px-4 py-3 text-base">
          <span className="text-eps-muted">Número de autorización: </span>
          <strong className="text-eps-primary">{authNumber}</strong>
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <BtnPrimary type="button" onClick={() => navigate('/mi-perfil')}>
            Ver mis citas
          </BtnPrimary>
          <BtnSecondary type="button" onClick={() => navigate('/citas/nueva')}>
            Agendar otra cita
          </BtnSecondary>
        </div>
        <Link to="/" className="mt-6 inline-block text-base text-eps-primary hover:underline">
          Volver al inicio
        </Link>
      </section>
    </PageShell>
  );
}
