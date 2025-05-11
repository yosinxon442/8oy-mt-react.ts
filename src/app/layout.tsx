import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer'

export const metadata = {
  title: 'My Website',
  description: 'Portfolio sayti',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        <Header />
        <main style={{ padding: '0' }}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
