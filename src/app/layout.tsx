import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// src/app/layout.tsx
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
      <body className="font-[Poppins]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}