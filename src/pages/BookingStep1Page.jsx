import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import StepIndicator from '../components/layout/StepIndicator';
import ActionBar, { BtnPrimary } from '../components/layout/ActionBar';
import { useBooking } from '../context/BookingContext';
import { consultTypes, ipsOptions, affiliateOptions } from '../data/mockUser';

const labelClass = 'text-sm font-semibold text-[#444]';
const inputClass =
  'rounded-md border-[1.5px] border-eps-border px-3 py-2.5 text-[17px] text-[#333] outline-none focus:border-eps-primary';

export default function BookingStep1Page() {
  const navigate = useNavigate();
  const { booking, updateBooking, isStep1Complete } = useBooking();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isStep1Complete) navigate('/citas/nueva/fecha');
  };

  return (
    <PageShell
      navProps={{
        backLink: { to: '/', label: '← Volver al inicio' },
        showUser: true,
      }}
      showFooter={false}
    >
      <StepIndicator currentStep={1} />
      <form id="booking-step1" onSubmit={handleSubmit} className="px-6 py-7 md:px-8">
        <h1 className="mb-5 text-[17px] font-bold text-eps-primary">
          ¿Qué tipo de cita necesitas?
        </h1>
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <Field label="Tipo de consulta" htmlFor="consultType">
            <select
              id="consultType"
              className={inputClass}
              value={booking.consultType}
              onChange={(e) => updateBooking({ consultType: e.target.value })}
              required
            >
              {consultTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
          <Field label="IPS donde quieres ser atendido" htmlFor="ips">
            <select
              id="ips"
              className={inputClass}
              value={booking.ips}
              onChange={(e) => updateBooking({ ips: e.target.value })}
              required
            >
              {ipsOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Motivo de consulta (opcional)" htmlFor="reason">
            <input
              id="reason"
              type="text"
              className={inputClass}
              placeholder="Ej: dolor de espalda, control de tensión..."
              value={booking.reason}
              onChange={(e) => updateBooking({ reason: e.target.value })}
            />
          </Field>
          <Field label="Afiliado que recibirá la cita" htmlFor="affiliate">
            <select
              id="affiliate"
              className={inputClass}
              value={booking.affiliate}
              onChange={(e) => updateBooking({ affiliate: e.target.value })}
              required
            >
              {affiliateOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </form>
      <ActionBar
        left="Todos tus datos están cifrados y protegidos"
        right={
          <BtnPrimary type="submit" form="booking-step1">
            Continuar → Seleccionar fecha
          </BtnPrimary>
        }
      />
    </PageShell>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}
