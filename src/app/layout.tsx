// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Azhak Artic - Futuristic Fashion',
  description: 'Explore the future of fashion with Azhak Artic.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}