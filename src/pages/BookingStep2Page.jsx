import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import StepIndicator from '../components/layout/StepIndicator';
import ActionBar, { BtnPrimary, BtnSecondary } from '../components/layout/ActionBar';
import CalendarPicker from '../components/booking/CalendarPicker';
import TimeSlotList from '../components/booking/TimeSlotList';
import { useBooking } from '../context/BookingContext';
import { getSlotsForDate } from '../data/mockTimeSlots';

export default function BookingStep2Page() {
  const navigate = useNavigate();
  const { booking, updateBooking } = useBooking();
  const [viewDate, setViewDate] = useState(() => booking.date || new Date(2025, 4, 1));

  const slots = getSlotsForDate(booking.date);

  const handleMonthChange = (delta) => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + delta, 1));
  };

  const handleDateSelect = (date) => {
    updateBooking({ date, timeSlot: null });
  };

  const handleContinue = () => {
    if (booking.date && booking.timeSlot) {
      navigate('/citas/nueva/confirmar');
    }
  };

  return (
    <PageShell
      navProps={{
        backLink: { to: '/citas/nueva', label: '← Paso anterior' },
        showUser: true,
      }}
      showFooter={false}
    >
      <StepIndicator currentStep={2} />
      <section className="px-6 py-7 md:px-8">
        <h1 className="mb-5 text-[17px] font-bold text-eps-primary">
          Elige una fecha disponible
        </h1>
        <div className="grid gap-5 lg:grid-cols-2">
          <CalendarPicker
            viewDate={viewDate}
            selectedDate={booking.date}
            onSelectDate={handleDateSelect}
            onChangeMonth={handleMonthChange}
          />
          <TimeSlotList
            date={booking.date}
            slots={slots}
            selectedSlot={booking.timeSlot}
            onSelect={(slot) => updateBooking({ timeSlot: slot })}
          />
        </div>
      </section>
      <ActionBar
        left={null}
        right={
          <>
            <BtnSecondary type="button" onClick={() => navigate('/citas/nueva')}>
              ← Volver
            </BtnSecondary>
            <BtnPrimary
              type="button"
              onClick={handleContinue}
              disabled={!booking.date || !booking.timeSlot}
            >
              Continuar → Confirmar cita
            </BtnPrimary>
          </>
        }
      />
    </PageShell>
  );
}
