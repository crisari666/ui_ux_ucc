const STEPS = [
  { id: 1, label: 'Tipo de cita' },
  { id: 2, label: 'Fecha y hora' },
  { id: 3, label: 'Confirmación' },
];

function circleClass(status) {
  const base = 'flex h-9 w-9 items-center justify-center rounded-full text-[15px] font-bold';
  if (status === 'active') return `${base} bg-eps-primary text-white`;
  if (status === 'done') return `${base} bg-eps-success text-white`;
  return `${base} bg-[#E8E8E8] text-[#999]`;
}

export default function StepIndicator({ currentStep }) {
  return (
    <ol
      className="flex items-center justify-center gap-0 px-4 py-6 md:px-8"
      aria-label="Pasos del agendamiento"
    >
      {STEPS.map((step, index) => {
        const status =
          step.id < currentStep ? 'done' : step.id === currentStep ? 'active' : 'pending';
        const lineDone = step.id < currentStep;

        return (
          <li key={step.id} className="flex items-center">
            <div
              className="flex flex-col items-center gap-1.5"
              aria-current={status === 'active' ? 'step' : undefined}
            >
              <div className={circleClass(status)}>
                {status === 'done' ? '✓' : step.id}
              </div>
              <span
                className={`text-[13px] ${
                  status === 'active' ? 'font-semibold text-eps-primary' : 'text-[#666]'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < STEPS.length - 1 && (
              <div
                className={`mb-5 h-0.5 w-12 md:w-20 ${lineDone ? 'bg-eps-success' : 'bg-[#E8E8E8]'}`}
                aria-hidden
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
