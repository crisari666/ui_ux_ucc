import { formatDateShort } from '../../data/mockTimeSlots';

export default function TimeSlotList({ date, slots, selectedSlot, onSelect }) {
  if (!date) {
    return (
      <p className="text-sm text-eps-muted">Selecciona una fecha en el calendario para ver horarios.</p>
    );
  }

  return (
    <div>
      <p className="mb-3 text-[15px] font-bold text-eps-primary">
        {formatDateShort(date)} · Horas disponibles
      </p>
      <ul className="flex flex-col gap-2" role="listbox" aria-label="Horarios disponibles">
        {slots.map((slot) => {
          const selected = selectedSlot?.id === slot.id;
          const disabled = !slot.available;
          return (
            <li key={slot.id}>
              <button
                type="button"
                role="option"
                aria-selected={selected}
                disabled={disabled}
                onClick={() => onSelect(slot)}
                className={`flex w-full items-center justify-between rounded-md border-[1.5px] px-3.5 py-2.5 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-eps-primary ${
                  disabled
                    ? 'cursor-not-allowed border-[#E8E8E8] bg-[#FAFAFA]'
                    : selected
                      ? 'border-eps-primary bg-eps-highlight'
                      : 'border-eps-border hover:border-eps-primary'
                }`}
              >
                <span
                  className={`text-[15px] ${selected ? 'font-bold text-eps-primary' : disabled ? 'text-[#CCC]' : 'font-semibold'}`}
                >
                  {slot.time}
                  {selected ? ' ✓ Seleccionado' : ''}
                </span>
                <span
                  className={`text-[13px] font-semibold ${
                    disabled ? 'text-[#CCC]' : selected ? 'text-eps-primary' : 'text-eps-success'
                  }`}
                >
                  {disabled ? 'No disponible' : selected ? slot.doctor : '● Disponible'}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
