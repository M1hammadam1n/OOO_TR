'use client';
import React from 'react';

const Product = () => {
  return (
    <section style={styles.section}>
      <div style={styles.innerContainer}>
        <div style={styles.wrapper}>
          <div style={styles.left}>
            <div style={styles.smallText}>#Продукт</div>
            <div style={styles.titleText}>Описание процесса </div>
            <div style={styles.description}>
              Процесс программирования и создания приложения включает в себи множество аспектов,
              таких к разработка пользовательского интерфейса, создание базы данных, написание
              логики приложени др Создание приложения на основе искроственного интеллекта начинается с
              определения его целой и функций, после чего соодается прототип и выбирается технологический процесс для разработки
            </div>
            <button style={styles.ctaButton}>Обратиться за консультацией</button>
          </div>
          <div style={styles.right}>
            <button style={styles.iconButton}>1 Понимание задачи </button>
            <button style={styles.iconButton}>2 Сбор данных </button>
            <button style={styles.iconButton}>3 Обучение нейросети </button>
            <button style={styles.iconButton}>4 Тестирование </button>
            <button style={styles.iconButton}>5 Внедрение</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    width: '100%',
    padding: '100px 0',
    boxSizing: 'border-box',
  },

  innerContainer: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
    boxSizing: 'border-box',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '40px',
    flexWrap: 'wrap',
  },

  left: {
    flex: 1,
    minWidth: '300px',
  },
  smallText: {
    fontSize: '8px',
    color: '#999',
    marginBottom: '10px',
  },
  titleText: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '25px',
  },
  description: {
    fontSize: '14px',
    color: '#ccc',
    lineHeight: '1.6',
    maxWidth: '480px',
    marginBottom: '25px',
  },
  ctaButton: {
    backgroundColor: '#c61f95',
    color: '#fff',
    border: 'none',
    fontSize: '14px',
    padding: '10px 20px',
    borderRadius: '30px',
    cursor: 'pointer',
  },
  right: {
    flex: 1,
    minWidth: '300px',
    backgroundColor: 'rgba(60, 60, 60, 0.4)',
    borderRadius: '30px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  iconButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid gray',
    backgroundColor: 'transparent',
    color: '#4d4b4c',
    padding: '20px 15px',
    borderRadius: '30px',
    fontWeight: 600,
    fontSize: '18px',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '18px',
  },
};

export default Product;
