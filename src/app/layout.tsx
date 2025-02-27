import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AzhaG Artic - Futuristic Fashion',
  description: 'Explore the future of fashion with Azhag Artic’s innovative designs.',
  keywords: 'futuristic fashion, Azhak Artic, e-commerce, sustainable clothing',
  openGraph: {
    title: 'Azhak Artic - Futuristic Fashion',
    description: 'Discover cutting-edge fashion at Azhak Artic.',
    url: 'https://azhak-artic.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://azhak-artic.vercel.app/images/hero-poster.jpg',
        width: 1200,
        height: 630,
        alt: 'AzhaG Artic Hero Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Azhak Artic',
    url: 'https://azhak-artic.vercel.app',
    logo: 'https://azhak-artic.vercel.app/images/product-360.png',
    description: 'Futuristic fashion brand offering innovative and sustainable clothing.',
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={String(metadata.openGraph.images[0].width)} />
        <meta property="og:image:height" content={String(metadata.openGraph.images[0].height)} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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