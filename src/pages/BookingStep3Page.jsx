import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import StepIndicator from '../components/layout/StepIndicator';
import ActionBar, { BtnPrimary, BtnSecondary } from '../components/layout/ActionBar';
import ConfirmSummary from '../components/booking/ConfirmSummary';
import NotificationOptions from '../components/booking/NotificationOptions';
import { useBooking } from '../context/BookingContext';
import { addAppointment, generateAuthNumber } from '../data/appointmentsStorage';
import { formatDateLong } from '../data/mockTimeSlots';

export default function BookingStep3Page() {
  const navigate = useNavigate();
  const { booking, updateBooking } = useBooking();

  const toggleNotification = (id) => {
    const current = booking.notifications || [];
    const next = current.includes(id)
      ? current.filter((n) => n !== id)
      : [...current, id];
    updateBooking({ notifications: next });
  };

  const handleConfirm = () => {
    const auth = generateAuthNumber();
    const title = `${booking.consultType} – ${booking.timeSlot?.doctor}`;
    const detail = `${formatDateLong(booking.date)} · ${booking.timeSlot?.time} · ${booking.ips}`;

    addAppointment({
      title,
      detail,
      status: 'Confirmada',
      date: booking.date?.toISOString().slice(0, 10),
      isPast: false,
    });

    navigate('/citas/confirmada', { state: { authNumber: auth } });
  };

  return (
    <PageShell
      navProps={{
        backLink: { to: '/citas/nueva/fecha', label: '← Paso anterior' },
        showUser: true,
      }}
      showFooter={false}
    >
      <StepIndicator currentStep={3} />
      <section className="px-6 pt-7 md:px-8">
        <h1 className="mb-4 text-[17px] font-bold text-eps-primary">Resumen de tu cita</h1>
      </section>
      <ConfirmSummary booking={booking} />
      <section className="px-6 pb-2 md:px-8">
        <h2 className="text-[17px] font-bold text-eps-primary">
          ¿Cómo quieres recibir el recordatorio?
        </h2>
      </section>
      <NotificationOptions
        selected={booking.notifications || []}
        onToggle={toggleNotification}
      />
      <ActionBar
        left={null}
        right={
          <>
            <BtnSecondary type="button" onClick={() => navigate('/citas/nueva/fecha')}>
              ← Cambiar fecha
            </BtnSecondary>
            <BtnPrimary
              type="button"
              onClick={handleConfirm}
              className="!bg-eps-success hover:!bg-[#196F3D]"
            >
              ✓ Confirmar cita
            </BtnPrimary>
          </>
        }
      />
    </PageShell>
  );
}
