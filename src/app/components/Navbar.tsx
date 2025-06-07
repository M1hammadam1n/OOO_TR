'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navWrapper}>
      <div className="container">
        <div style={styles.innerContainer}>
          {/* Логотип + текст */}
          <div style={styles.block}>
            <div style={styles.logoBlock}>
              <div style={styles.logo}>🧿</div>
              <div>
                <div style={styles.logoTextLarge}>Al 24 </div>
                <div style={styles.logoTextSmall}>Разработка По на основе искусственного интеллекта. </div>
              </div>
            </div>
          </div>

          {/* Навигационные ссылки */}
          <div style={styles.block}>
            <div style={styles.links}>
              <Link href="" style={styles.link}>Главная</Link>
              <Link href="" style={styles.link}>О нас</Link>
              <Link href="" style={styles.link}>Контакты </Link>
              <Link href="" style={styles.link}>Презентация</Link>
            </div>
          </div>

          {/* Контакты */}
          <div style={styles.block}>
            <div style={styles.contact}>
              <div style={styles.phone_block}> <span style={styles.phone}>+998 (99) 123-45-67</span></div>

              <button style={styles.button}>Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  innerContainer: {
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  phone_block: {
    backgroundColor: '#1f1d1b',
    borderRadius: '30px',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(6px)',
  },
  block: {
    backgroundColor: 'rgba(60, 57, 58, 0.5)',
    borderRadius: '30px',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(6px)',
  },
  logoBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    fontSize: '30px',
  },
  logoTextLarge: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '18px',
  },
  logoTextSmall: {
    color: '#ccc',
    fontSize: '10px',
    maxWidth: '150px',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#7c797a',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  phone: {
    color: '#a7a5a3',
  },
  button: {
    backgroundColor: '#c61f95',
    color: '#fff',
    border: 'none',
    fontSize: '15px',
    padding: '6px 12px',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Navbar;
