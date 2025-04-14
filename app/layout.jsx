export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={{ backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
