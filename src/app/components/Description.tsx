import React from "react";

const projectButtons = [
  { icon: "📁", label: "Нейроассистент" },
  { icon: "⚙️", label: "Обработка документов " },
  { icon: "🚀", label: "Прием обращений в не рабочее премя " },
  { icon: "🔧", label: "Компьютерное зрение " },
  { icon: "💡", label: "Оценка качества звонков " },
  { icon: "📊", label: "Помощник администратора " },
];

export default function Description() {
  return (
    <section style={styles.section}>
      <div style={styles.innerContainer}>
        <div style={styles.topRow}>
          {/* Левая часть с описанием */}
          <div style={styles.leftSide}>
            <h2 style={styles.title}>Описание наших проектов </h2>
          </div>

          {/* Правая часть с круглой кнопкой */}
          <div style={styles.rightSide}>
            <button style={styles.roundButton}>Обсудить мою задачу</button>
          </div>
        </div>

        {/* Нижний блок с 6 большими кнопками, 3 в ряд, 2 ряда */}
        <div style={styles.buttonsWrapper}>
          {projectButtons.map(({ icon, label }, i) => (
            <button key={i} style={styles.projectButton}>
              <span style={styles.buttonIcon}>{icon}</span>
              <span style={styles.buttonLabel}>{label}</span>
            </button>
          ))}
        </div>

        {/* Кнопка "Задать вопрос" снизу */}
        <div style={styles.askWrapper}>
          <button style={styles.askButton}>Задать вопрос</button>
        </div>
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: "#232120",
    width: "100%",
    margin: 0,
    padding: "100px 0", // только вертикальные отступы, по бокам будет внутренний контейнер
    borderRadius: 0,
    boxSizing: "border-box",
  },

  // Внутренний контейнер — ограничиваем ширину и задаём боковые отступы
  innerContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 20px", // боковые отступы для контента
    boxSizing: "border-box",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    flexWrap: "wrap",
    gap: 20,
  },
  leftSide: {
    flex: "1 1 300px",
    color: "#fff",
  },
  title: {
    fontSize: 28,
    margin: "0 0 12px 0",
  },
  rightSide: {
    flex: "0 0 auto",
  },
  roundButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "16px 32px",
    fontSize: 16,
    border: "none",
    borderRadius: 30,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  buttonsWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 колонки
    gap: 12,
    marginBottom: 30,
  },

  projectButton: {
    backgroundColor: "#302e2d",
    border: "none",
    borderRadius: 30,
    padding: "16px 12px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  buttonIcon: {
    marginRight: 8,
    fontSize: 20,
    display: "flex",
    alignItems: "center",
  },
  buttonLabel: {
    flexGrow: 1,
    color: "#8d8b89",
    textAlign: "center",
  },
  askWrapper: {
    textAlign: "center",
  },
  askButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "14px 40px",
    fontSize: 16,
    border: "none",
    borderRadius: 30,
    cursor: "pointer",
  },
};
