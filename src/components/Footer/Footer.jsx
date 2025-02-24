// src/components/Footer/Footer.jsx

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}> {new Date().getFullYear()} sebaMate 🧉 Thank you for the visit. Keep creating!! </p>
        <nav style={styles.nav}>
          <a href="/terms" style={styles.link}>Terms of Service</a>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
          <a href="/contact" style={styles.link}>Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '20px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  text: {
    margin: '0',
    fontSize: '14px',
    color: '#6c757d',
  },
  nav: {
    marginTop: '10px',
  },
  link: {
    margin: '0 10px',
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export {Footer};