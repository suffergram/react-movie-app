import '../style.css';

export const metadata = {
  title: 'Netflixroulette',
  description:
    'A web application for searching and managing movies, made for educational purposes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
