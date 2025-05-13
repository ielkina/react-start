import{memo} from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

// Функция для определения классов
const getNavLinkClass = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.activeLink}` : styles.link;

const Navigation = () => (
  <nav>
    <NavLink to="/skip-first-render" className={getNavLinkClass}>
      Пропуск первого рендера
    </NavLink>
    <NavLink to="/signup" className={getNavLinkClass}>
      Форма
    </NavLink>
    <NavLink to="/colorpicker" className={getNavLinkClass}>
      Колорпикер
    </NavLink>
    <NavLink to="/counter" className={getNavLinkClass}>
      Счётчик
    </NavLink>
    <NavLink to="/clock" className={getNavLinkClass}>
      Часы
    </NavLink>
    <NavLink to="/pokemon" className={getNavLinkClass}>
      Покемоны
    </NavLink>
    <NavLink
      to="/notes"
      className={getNavLinkClass}
      activeClassName={getNavLinkClass}
    >
      useMemo
    </NavLink>
  </nav>
);

export default memo(Navigation); //memo - мемоизация, не повторять вычисления
// memo - это функция высшего порядка, которая позволяет оптимизировать функциональные компоненты React путем предотвращения их повторного рендера, если их пропсы не изменились. Это может помочь улучшить производительность приложения, особенно если компонент рендерит сложные элементы или выполняет тяжелые вычисления. Использование memo позволяет избежать ненужных перерисовок и повысить общую эффективность приложения.
// Важно отметить, что memo работает только с функциональными компонентами и не применяется к классовым компонентам. Кроме того, memo сравнивает только примитивные типы данных (числа, строки, булевы значения) и ссылки на объекты. Если пропсы компонента являются сложными объектами или массивами, то для их сравнения можно использовать дополнительные функции сравнения, такие как React.memo с кастомной функцией сравнения.  
