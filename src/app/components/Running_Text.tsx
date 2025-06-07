'use client';

import React, { useEffect, useRef } from 'react';

export default function RunningText() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Пример кода, работающего с document
    const textEl = textRef.current;
    if (textEl) {
      // любая логика
    }
  }, []);

  return (
    <div
      style={{
        height: '300px',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#3c393a',
        color: '#777576',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        ref={textRef}
        style={{
          whiteSpace: 'nowrap',
          fontSize: '80px',
          animation: 'scroll-left 20s linear infinite',
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quas modi facere aut tenetur. Cumque quis dolorum commodi illo veniam suscipit sed sapiente dolorem, id nesciunt maiores aspernatur ducimus ipsam?
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
