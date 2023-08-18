'use client';
import './globals.css';
export default function RootLayout({
  children}: {
  children: React.ReactNode;
}) {
 

  return (
    <html lang="en">
      <body className="bg-light font-ibm-plex-sans-arabic">
        {children}

        </body>
    </html>
  );
}
