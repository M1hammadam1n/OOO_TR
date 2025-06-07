export default function Header() {
  return (
    <header>
      <div className="container" style={styles.container}>
        <div style={styles.block}>
          {/* Левая колонка с текстом */}
          <div style={styles.leftColumn}>
            <div style={styles.smallText}>#Главное</div>
            <div style={styles.bigTitle}>Решение, которое приносит порядок</div>
            <div style={styles.paragraph}>
              Качественные программные решения на основе искусственного 
              интеллекта помогают компаниям автоматизировать и оптимизировать 
              бизнес-процессы, увеличить прибыль, исключить человеческий фактор и ошибки, 
              а так же решать сложные задачи на основе базы знаний искусственного интеллекта. 
              Обратитесь сейчас, чтобы узнать больше о том, 
              как мы можем помочь Вашему бизнесу!
            </div>
            <button style={styles.button}>Оставить заявку</button>
          </div>

          {/* Правая колонка с фото */}
          <div style={styles.rightColumn}>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Фото"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    paddingTop: '100px',
    paddingBottom: '20px',
  },
  block: {
    backgroundColor: 'rgba(60, 57, 58, 0.5)',
    borderRadius: '30px',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(6px)',
  },
  leftColumn: {
    flex: '1 1 300px',
    color: '#ccc',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  smallText: {
    fontSize: '8px',
    color: '#999',
  },
  bigTitle: {
    fontSize: '30px',
    fontWeight: '600',
    color: '#fff',
    whiteSpace: 'normal',    
    maxWidth: '350px',      
    lineHeight: '1.2',      
  },
  paragraph: {
    fontSize: '12px',
    color: '#999',
    lineHeight: 1.3,
    maxWidth: '500px',
    marginBottom: '16px',
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#c61f95',
    color: '#fff',
    border: 'none',
    fontSize: '14px',
    padding: '8px 16px',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  rightColumn: {
    padding: '15px',
    flex: '0 0 400px',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  image: {
    display: 'block',
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    objectFit: 'cover',
  },
};
