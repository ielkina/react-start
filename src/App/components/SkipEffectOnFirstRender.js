import { useState, useEffect, useRef } from 'react';

const styles = {
  code: {
    display: 'inline-flex',
    padding: 4,
    borderRadius: 4,
    backgroundColor: '#ddd',
    fontWeight: 700,
  },
};

export default function SkipEffectOnFirstRender() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);
//игнорирование первого рендера
  // useRef - это хук, который позволяет сохранять значения между рендерами
  // и не вызывает повторный рендер при изменении значения
  // useRef возвращает объект с полем current, которое можно изменять
  // useRef - это аналог класса, который позволяет сохранять значения между рендерами 
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log(`Выполняется useEffect - ${Date.now()}`);
  });

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <p>
        <code style={styles.code}>useEffect</code> этого компонента не
        выполняется на первом рендере
      </p>
    </div>
  );
}
