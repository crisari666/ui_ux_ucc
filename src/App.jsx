import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { RequireStep1, RequireStep2 } from './components/layout/BookingRouteGuard';
import HomePage from './pages/HomePage';
import LocatorPage from './pages/LocatorPage';
import ProfilePage from './pages/ProfilePage';
import BookingStep1Page from './pages/BookingStep1Page';
import BookingStep2Page from './pages/BookingStep2Page';
import BookingStep3Page from './pages/BookingStep3Page';
import BookingSuccessPage from './pages/BookingSuccessPage';

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/encontrar-atencion" element={<LocatorPage />} />
          <Route path="/mi-perfil" element={<ProfilePage />} />
          <Route path="/citas/nueva" element={<BookingStep1Page />} />
          <Route
            path="/citas/nueva/fecha"
            element={
              <RequireStep1>
                <BookingStep2Page />
              </RequireStep1>
            }
          />
          <Route
            path="/citas/nueva/confirmar"
            element={
              <RequireStep1>
                <RequireStep2>
                  <BookingStep3Page />
                </RequireStep2>
              </RequireStep1>
            }
          />
          <Route path="/citas/confirmada" element={<BookingSuccessPage />} />
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}
