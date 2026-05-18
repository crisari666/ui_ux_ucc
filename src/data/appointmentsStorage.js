const STORAGE_KEY = 'nueva-eps-appointments';

export const seedAppointments = [
  {
    id: 'seed-1',
    title: 'Medicina General – Dra. María Torres',
    detail: 'Lunes 12 de mayo · 9:00 AM · IPS Ibagué Centro',
    status: 'Confirmada',
    date: '2025-05-12',
    isPast: false,
  },
  {
    id: 'seed-2',
    title: 'Control Cardiología – Dr. José Ruiz',
    detail: 'Viernes 23 de mayo · 2:30 PM · Clínica Tolima',
    status: 'Pendiente',
    date: '2025-05-23',
    isPast: false,
  },
  {
    id: 'seed-3',
    title: 'Medicina General',
    detail: '10 de abril 2025 (pasada)',
    status: 'Pasada',
    date: '2025-04-10',
    isPast: true,
  },
];

export function loadAppointments() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    /* ignore */
  }
  return [...seedAppointments];
}

export function saveAppointments(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function addAppointment(appointment) {
  const list = loadAppointments();
  const next = [{ ...appointment, id: `apt-${Date.now()}` }, ...list.filter((a) => a.id !== appointment.id)];
  saveAppointments(next);
  return next;
}

export function generateAuthNumber() {
  return `AUT-${Math.floor(100000 + Math.random() * 900000)}`;
}
