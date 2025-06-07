'use client';

import React from 'react';

const infoBlocks = [
    {
        title: 'Сроки',
        icon: '🛠️',
        description: 'Укладываемся в согласованные сроки ',
    },
    {
        title: 'Гибкость ',
        icon: '💼',
        description: 'Подстраиваемся под ваши бизнес-процессы ',
    },
    {
        title: 'Профессионализм ',
        icon: '📚',
        description: 'Разработка уникального програмного продукта осуществляется специалистами высского уровня ',
    },
    {
        title: 'Надежность ',
        icon: '🔄',
        description: 'Осуществляем техническую поддержку до и после проделанных работ',
    },
];

export default function IASection() {
    return (
        <section style={styles.section}>
            <div style={styles.innerContainer}>
                <div style={styles.topLine}></div>

                <div style={styles.content}>
                    <div style={styles.leftBlock}>
                        АІ 24 - программные решения на основе искусственного интеллекта
                    </div>
                    <div style={styles.rightBlock}>
                        <div style={styles.infoBlock}>
                            <div style={styles.infoTop}>
                                <div style={styles.infoTitle}>{infoBlocks[0].title}</div>
                                <div style={styles.infoIcon}>{infoBlocks[0].icon}</div>
                            </div>
                            <div style={styles.infoDescription}>{infoBlocks[0].description}</div>
                        </div>
                        <div style={styles.infoBlock}>
                            <div style={styles.infoTop}>
                                <div style={styles.infoTitle}>{infoBlocks[1].title}</div>
                                <div style={styles.infoIcon}>{infoBlocks[1].icon}</div>
                            </div>
                            <div style={styles.infoDescription}>{infoBlocks[1].description}</div>
                        </div>
                        <div style={styles.infoBlock}>
                            <div style={styles.infoTop}>
                                <div style={styles.infoTitle}>{infoBlocks[2].title}</div>
                                <div style={styles.infoIcon}>{infoBlocks[2].icon}</div>
                            </div>
                            <div style={styles.infoDescription}>{infoBlocks[2].description}</div>
                        </div>
                        <div style={styles.infoBlock}>
                            <div style={styles.infoTop}>
                                <div style={styles.infoTitle}>{infoBlocks[3].title}</div>
                                <div style={styles.infoIcon}>{infoBlocks[3].icon}</div>
                            </div>
                            <div style={styles.infoDescription}>{infoBlocks[3].description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        width: '100%',
        padding: '100px 20px',
        boxSizing: 'border-box',
        marginRight: 'auto',
        // backgroundColor: '#121212',
    },
    innerContainer: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 20px',
        boxSizing: 'border-box',
    },
    topLine: {
        height: '1px',
        width: '100%',
        background:
            'linear-gradient(to right, transparent 10px, #ccc 10px, #ccc calc(100% - 10px), transparent calc(100% - 10px))',
        marginBottom: '20px',
    },
    content: {
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap',
    },

    leftBlock: {
        flex: '0 0 370px',       // увеличили ширину левой колонки
        fontSize: '30px',
        fontWeight: 600,
        color: '#fff',
        lineHeight: '1.3',
        userSelect: 'none',
    },

    rightBlock: {
        flex: '1 1 400px',       // уменьшили ширину правой колонки
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
    },

    infoBlock: {
        backgroundColor: 'rgba(60, 57, 58, 0.5)',
        borderRadius: '25px',
        padding: '12px',
        color: '#eee',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '75px',   // уменьшил с 100px до 75px
    },

    infoTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '6px',
    },
    infoTitle: {
        fontWeight: 600,
        fontSize: '14px',
    },
    infoIcon: {
        fontSize: '16px',
        color: '#ffcc00',
    },
    infoDescription: {
        fontSize: '11px',
        color: '#ccc',
    },
};
