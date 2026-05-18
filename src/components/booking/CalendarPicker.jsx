import { isDayAvailable } from '../../data/mockTimeSlots';

const WEEKDAYS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

export default function CalendarPicker({ viewDate, selectedDate, onSelectDate, onChangeMonth }) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isSelected = (day) =>
    selectedDate &&
    selectedDate.getFullYear() === year &&
    selectedDate.getMonth() === month &&
    selectedDate.getDate() === day;

  return (
    <div className="rounded-lg border-[1.5px] border-eps-border bg-[#FAFAFA] p-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onChangeMonth(-1)}
          className="rounded px-2 py-1 text-sm hover:bg-eps-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-eps-primary"
          aria-label="Mes anterior"
        >
          ◀
        </button>
        <h3 className="text-[17px] font-bold">
          {MONTHS[month]} {year}
        </h3>
        <button
          type="button"
          onClick={() => onChangeMonth(1)}
          className="rounded px-2 py-1 text-sm hover:bg-eps-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-eps-primary"
          aria-label="Mes siguiente"
        >
          ▶
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center" role="grid" aria-label="Calendario">
        {WEEKDAYS.map((d) => (
          <div key={d} className="py-1 text-[17px] font-semibold text-[#999]" role="columnheader">
            {d}
          </div>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} />;
          const available = isDayAvailable(year, month, day);
          const selected = isSelected(day);
          return (
            <button
              key={day}
              type="button"
              disabled={!available}
              onClick={() => onSelectDate(new Date(year, month, day))}
              className={`rounded py-1.5 text-sm ${
                selected
                  ? 'bg-eps-primary font-bold text-white'
                  : available
                    ? 'bg-eps-light-blue font-semibold text-eps-primary hover:bg-[#AED6F1]'
                    : 'cursor-not-allowed text-[#CCC]'
              }`}
              aria-pressed={selected}
              aria-label={`${day} de ${MONTHS[month]}`}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div className="mt-2.5 flex flex-wrap gap-3 text-[17px] text-[#666]">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm bg-eps-light-blue" />
          Disponible
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm bg-eps-primary" />
          Seleccionado
        </span>
      </div>
    </div>
  );
}
