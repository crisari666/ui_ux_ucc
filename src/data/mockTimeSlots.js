// Available days in May 2025 (matches wireframe calendar)
export const availableDaysMay2025 = [4, 5, 9, 10, 11, 12, 15, 16, 18, 19];

export const defaultSlots = [
  { id: '730', time: '7:30 AM', doctor: 'Dr. Luis Páez', available: true },
  { id: '900', time: '9:00 AM', doctor: 'Dra. María Torres', available: true },
  { id: '1030', time: '10:30 AM', doctor: 'Dr. Luis Páez', available: true },
  { id: '1400', time: '2:00 PM', doctor: 'Dra. María Torres', available: false },
];

export function getSlotsForDate(date) {
  if (!date) return [];
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  if (year === 2025 && month === 4 && availableDaysMay2025.includes(day)) {
    return defaultSlots;
  }
  return defaultSlots.filter((s) => s.available).slice(0, 2);
}

export function isDayAvailable(year, month, day) {
  if (year === 2025 && month === 4) {
    return availableDaysMay2025.includes(day);
  }
  const d = new Date(year, month, day);
  return d.getDay() !== 0 && d.getDay() !== 6 && day % 3 !== 0;
}

export function formatDateLong(date) {
  if (!date) return '';
  return date.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatDateShort(date) {
  if (!date) return '';
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const str = date.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
  return cap(str);
}
