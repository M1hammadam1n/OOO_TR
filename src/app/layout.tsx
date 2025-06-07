import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Support from './components/Support';
import './globals.css'; 

export const metadata = {
  title: 'Мой проект',
  description: 'Описание проекта',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Header />
        <Support />
        <Description />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
