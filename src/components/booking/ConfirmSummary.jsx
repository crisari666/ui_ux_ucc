import { formatDateLong } from '../../data/mockTimeSlots';
import { mockUser } from '../../data/mockUser';

export default function ConfirmSummary({ booking }) {
  const { consultType, ips, date, timeSlot, affiliate } = booking;

  const rows = [
    { label: 'Médico', value: `${timeSlot?.doctor || 'Dra. María Torres'} – ${consultType}` },
    { label: 'IPS', value: `${ips.replace('IPS Primaria asignada (', '').replace(')', '')} – Cra. 5 #14-32` },
    { label: 'Fecha', value: formatDateLong(date) },
    { label: 'Hora', value: timeSlot?.time || '—' },
    { label: 'Afiliado', value: `${affiliate.replace('Yo mismo (', '').replace(')', '')} · ${mockUser.id}` },
    { label: 'No. Autorización', value: 'Se genera automáticamente al confirmar' },
  ];

  return (
    <div className="mx-6 mb-7 overflow-hidden rounded-[10px] border-[1.5px] border-eps-border md:mx-8">
      <div className="flex items-center gap-2 bg-eps-primary px-5 py-3.5 text-sm font-bold text-white">
        📅 Cita médica – {consultType}
      </div>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex justify-between border-b border-[#F0F0F0] px-5 py-3 last:border-b-0"
        >
          <span className="text-sm text-[#666]">{row.label}</span>
          <span className="max-w-[60%] text-right text-sm font-semibold text-eps-text">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
