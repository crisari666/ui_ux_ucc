const OPTIONS = [
  { id: 'sms', label: '📱 SMS al celular registrado' },
  { id: 'email', label: '📧 Correo electrónico' },
  { id: 'whatsapp', label: '📲 Notificación WhatsApp' },
];

export default function NotificationOptions({ selected, onToggle }) {
  return (
    <div className="flex flex-col gap-3 px-6 pb-6 sm:flex-row md:px-8">
      {OPTIONS.map((opt) => {
        const on = selected.includes(opt.id);
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onToggle(opt.id)}
            className={`flex flex-1 items-center gap-2.5 rounded-lg border-[1.5px] px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-eps-primary ${
              on ? 'border-eps-primary bg-eps-highlight' : 'border-eps-border hover:border-eps-primary/50'
            }`}
            aria-pressed={on}
          >
            <span
              className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 border-eps-primary ${
                on ? 'after:block after:h-2 after:w-2 after:rounded-full after:bg-eps-primary after:content-[""]' : ''
              }`}
              aria-hidden
            />
            <span className="text-sm font-semibold text-eps-primary">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
