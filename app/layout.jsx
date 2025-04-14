
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
