import { createContext, useContext, useMemo, useState } from 'react';

const defaultBooking = {
  consultType: 'Medicina general',
  ips: 'IPS Primaria asignada (Ibagué Centro)',
  reason: '',
  affiliate: 'Yo mismo (Carlos Mendoza)',
  date: null,
  timeSlot: null,
  notifications: ['sms', 'email'],
  authNumber: null,
};

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState(defaultBooking);

  const updateBooking = (patch) => {
    setBooking((prev) => ({ ...prev, ...patch }));
  };

  const resetBooking = () => setBooking({ ...defaultBooking });

  const isStep1Complete = Boolean(booking.consultType && booking.ips && booking.affiliate);
  const isStep2Complete = Boolean(booking.date && booking.timeSlot);

  const value = useMemo(
    () => ({
      booking,
      updateBooking,
      resetBooking,
      isStep1Complete,
      isStep2Complete,
    }),
    [booking, isStep1Complete, isStep2Complete],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
