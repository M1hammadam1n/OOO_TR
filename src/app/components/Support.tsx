import React from "react";

const supportBlocks = [
    {
        title: "Индивидуальный подход ",
        icon: "🛠️",
        description: "Мы разрабатываем ПО с применением искуственного интеллекта. соптоетствующие вашим уникальным гребованиям и бизнес-потребностям ",
    },
    {
        title: "Безопасность ",
        icon: "💼",
        description: "Наша команда обеспечивает зезату вашей конфиденциальной информации и безопасность данных ",
    },
    {
        title: "Оперативность ",
        icon: "📚",
        description: "Мы ценим время наших клиентов и гарантируем выполнение задач в срок, согласованный с заказчиком. ",
    },
    {
        title: "Эффективность ",
        icon: "🔄",
        description: "Решения в области ИТ с применением искуственного интеллекта помогают увеличить прибыль бизнеса и повысить эффективность работы",
    },
];

export default function Support() {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                {/* Левая колонка */}
                <div style={styles.leftColumn}>
                    <h1 style={styles.mainTitle}>7+</h1>
                    <p style={styles.subtitle}>
                        Проектов в работе
                    </p>
                    <button style={styles.button}>Оставить заявку </button>
                </div>

                {/* Правая колонка */}
                <div style={styles.rightColumn}>
                    <small style={styles.smallTitle}>#поддержка</small>
                    <p style={styles.description}>
                        Мы предоставляем сопровождение наших решений и поддержку:
                    </p>

                    <div style={styles.blocksWrapper}>
                        {supportBlocks.map(({ title, icon, description }, i) => (
                            <div key={i} style={styles.block}>
                                <div style={styles.blockHeader}>
                                    <h4 style={styles.blockTitle}>{title}</h4>
                                    <span style={styles.blockIcon}>{icon}</span>
                                </div>
                                <p style={styles.blockDescription}>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    //      block: {
    //     backgroundColor: 'rgba(60, 57, 58, 0.5)',
    //     borderRadius: '30px',
    //     padding: '12px 20px',
    //     display: 'flex',
    //     alignItems: 'center',
    //     backdropFilter: 'blur(6px)',
    //   },
    section: {
        padding: "100px 20px",  // сверху и снизу 40px, слева и справа 20px
        boxSizing: "border-box",
    },
    container: {
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        gap: 40,
        flexWrap: "wrap",
        alignItems: "center", // <-- выравнивание по вертикали (центру)
    },

    leftColumn: {
        flex: "1 1 400px",
        minWidth: 280,
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },
    mainTitle: {
        color: '#fdfdfb',
        fontSize: '90px',
        fontWeight: 'bold',
        margin: 0,           // убираем margin сверху и снизу
        padding: 0,
    },

    subtitle: {
        fontSize: 25,
        color: "#555",
        fontWeight: 'bold',
        margin: 0,           // убираем margin сверху и снизу
        marginBottom: '5px',
        padding: 0,
    },

    button: {
        padding: "12px 24px",
        fontSize: 16,
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        maxWidth: 200,
        borderRadius: '30px',
        alignSelf: "flex-start",
    },
    rightColumn: {
        backgroundColor: 'rgba(60, 57, 58, 0.5)',
        flex: "1 1 400px",
        padding: 24,
        borderRadius: '30px',
        display: "flex",
        flexDirection: "column",
        minWidth: 280,
    },
    smallTitle: {
        fontSize: 12,
        fontWeight: 600,
        textTransform: "uppercase",
        color: "#7a6364",
        // marginBottom: 8,

    },
    description: {
        fontSize: '30px',
        color: "#fffbff",
        fontWeight: 600,
        // marginBottom: 24,

    },
    blocksWrapper: {

        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 20,
    },
    block: {
        backgroundColor: 'rgba(60, 57, 58, 0.5)',
        padding: 12,
        borderRadius: 6,
    },
    blockHeader: {

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    blockTitle: {
        color: '#fefefc',
        fontSize: 16,
        fontWeight: 600,
        margin: 0,
    },
    blockIcon: {
        fontSize: 20,
    },
    blockDescription: {
        fontSize: 12,
        color: "#999",
        maxWidth: '300px',
        lineHeight: 1.2,
        margin: 0,
    },
};
