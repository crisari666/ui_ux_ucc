const badgeClass = {
  Confirmada: 'bg-[#D5F5E3] text-eps-success',
  Pendiente: 'bg-eps-light-blue text-eps-primary',
  Pasada: 'bg-[#FDEBD0] text-eps-warning',
};

export default function AppointmentCard({ appointment }) {
  const badge = badgeClass[appointment.status] || badgeClass.Pendiente;

  return (
    <article
      className={`flex flex-col gap-2 rounded-lg border-[1.5px] border-eps-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between ${
        appointment.isPast ? 'opacity-60' : ''
      }`}
    >
      <div>
        <h3 className="text-[17px] font-bold text-eps-text">{appointment.title}</h3>
        <p className="text-[17px] text-eps-muted">📅 {appointment.detail}</p>
      </div>
      <span className={`self-start rounded-full px-2 py-0.5 text-[12px] font-bold ${badge}`}>
        {appointment.status}
      </span>
    </article>
  );
}
