import { Navigate, useLocation } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';

export function RequireStep1({ children }) {
  const { isStep1Complete } = useBooking();
  const location = useLocation();
  if (!isStep1Complete) {
    return <Navigate to="/citas/nueva" replace state={{ from: location }} />;
  }
  return children;
}

export function RequireStep2({ children }) {
  const { isStep2Complete } = useBooking();
  const location = useLocation();
  if (!isStep2Complete) {
    return <Navigate to="/citas/nueva/fecha" replace state={{ from: location }} />;
  }
  return children;
}
