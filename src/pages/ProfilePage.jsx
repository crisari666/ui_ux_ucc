import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import AppointmentCard from '../components/profile/AppointmentCard';
import { BtnPrimary } from '../components/layout/ActionBar';
import { loadAppointments } from '../data/appointmentsStorage';

export default function ProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Mis citas');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setAppointments(loadAppointments());
  }, [location.key]);

  return (
    <PageShell
      navProps={{ backLink: { to: '/', label: '← Inicio' }, showUser: true }}
      showFooter={false}
    >
      <div className="grid min-h-[calc(100vh-52px)] md:grid-cols-[220px_1fr]">
        <ProfileSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <section className="p-6 md:p-7">
          {activeTab === 'Mis citas' ? (
            <>
              <h1 className="mb-4 text-[17px] font-bold text-eps-primary">Mis citas</h1>
              <ul className="flex flex-col gap-2.5">
                {appointments.map((apt) => (
                  <li key={apt.id}>
                    <AppointmentCard appointment={apt} />
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <BtnPrimary type="button" onClick={() => navigate('/citas/nueva')}>
                  + Agendar nueva cita
                </BtnPrimary>
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <p className="text-sm text-eps-muted">
                La sección <strong>{activeTab}</strong> estará disponible en una versión futura
                del portal.
              </p>
            </div>
          )}
        </section>
      </div>
    </PageShell>
  );
}
