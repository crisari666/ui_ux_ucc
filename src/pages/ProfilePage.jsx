import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import ProfileSidebar, { ProfileMenuButton } from '../components/profile/ProfileSidebar';
import AppointmentCard from '../components/profile/AppointmentCard';
import { BtnPrimary } from '../components/layout/ActionBar';
import { loadAppointments } from '../data/appointmentsStorage';

export default function ProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Mis citas');
  const [appointments, setAppointments] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setAppointments(loadAppointments());
  }, [location.key]);

  const sectionTitle = activeTab;

  return (
    <PageShell
      navProps={{ backLink: { to: '/', label: '← Inicio' }, showUser: true }}
      showFooter={false}
    >
      <div className="flex flex-col overflow-x-hidden md:grid md:min-h-[calc(100vh-52px)] md:grid-cols-[220px_1fr]">
        <ProfileSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          mobileOpen={menuOpen}
          onMobileClose={() => setMenuOpen(false)}
        />
        <section className="min-w-0 px-4 pt-3 pb-4 md:p-7">
          <div className="mb-4 flex items-center gap-3">
            <ProfileMenuButton onClick={() => setMenuOpen(true)} expanded={menuOpen} />
            <h1 className="text-[17px] font-bold text-eps-primary">{sectionTitle}</h1>
          </div>

          {activeTab === 'Mis citas' ? (
            <>
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
              <p className="text-base text-eps-muted">
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
