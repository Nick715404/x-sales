import '../styles/styles.scss';

import { Metadata } from 'next';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  description: "30XSales - интернет магазин для нее и для них",
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="page">
          <Header />
          <main className='main'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
