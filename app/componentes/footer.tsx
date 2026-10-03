export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '0.875rem' }}>
      <p>&copy; {currentYear} Gonzalo Capelari. All rights reserved.</p>
    </footer>
  );
}