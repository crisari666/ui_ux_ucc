export function BtnPrimary({ children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`rounded-md bg-eps-primary px-6 py-2.5 text-[15px] font-semibold text-white hover:bg-[#154360] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eps-primary disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function BtnSecondary({ children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`rounded-md border-[1.5px] border-eps-primary bg-white px-6 py-2.5 text-[15px] font-semibold text-eps-primary hover:bg-eps-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eps-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function ActionBar({ left, right, className = '' }) {
  return (
    <div
      className={`flex flex-col gap-3 border-t border-[#E8E8E8] bg-[#F8F9FA] px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8 ${className}`}
    >
      <div className="text-sm text-[#666]">{left}</div>
      <div className="flex flex-wrap gap-3">{right}</div>
    </div>
  );
}
