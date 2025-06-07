// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3 style={styles.title}>О компании</h3>
          <p style={styles.text}>
            Мы — команда профессионалов, создающая лучшие решения для вашего бизнеса.
          </p>
          <p style={styles.text}>© 2025 Все права защищены.</p>
        </div>

        <div style={styles.column}>
          <h3 style={styles.title}>Полезные ссылки</h3>
          <ul style={styles.list}>
            <li><a href="/about" style={styles.link}>О нас</a></li>
            <li><a href="/services" style={styles.link}>Услуги</a></li>
            <li><a href="/contact" style={styles.link}>Контакты</a></li>
            <li><a href="/privacy" style={styles.link}>Политика конфиденциальности</a></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.title}>Мы в соцсетях</h3>
          <div style={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialLink}>Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.socialLink}>Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialLink}>Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={styles.socialLink}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


const styles: { [key: string]: React.CSSProperties } = {

  footer: {
    backgroundColor: '#444', // темно-серый фон
    color: '#eee',
    padding: '40px 20px', // вертикальные и горизонтальные отступы
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  column: {
    flex: '1 1 250px', // адаптивные колонки
    minWidth: '200px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
  },
  text: {
    lineHeight: 1.6,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    transition: 'color 0.3s ease',
  },
  socials: {
    display: 'flex',
    flexDirection: 'column',
  },
  socialLink: {
    color: '#ccc',
    textDecoration: 'none',
    marginBottom: '10px',
    fontWeight: '600',
    transition: 'color 0.3s ease',
  },
};

export default Footer;
