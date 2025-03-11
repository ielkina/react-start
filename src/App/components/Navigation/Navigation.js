import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

// Функция для определения классов
const getNavLinkClass = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.activeLink}` : styles.link;

const Navigation = () => (
  <nav>
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
  </nav>
);

export default Navigation;
