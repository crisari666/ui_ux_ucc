import Nav from './Nav';
import Footer from './Footer';

export default function PageShell({
  children,
  navProps = {},
  showFooter = true,
  className = '',
}) {
  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <Nav {...navProps} />
      <main className="flex-1 bg-white">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}
