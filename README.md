# Модуль 01-02

## react-21-22

- [Настраиваем линтинг перед коммитом](https://github.com/goitacademy/react-lint-config)
- [Абсолютные импорты](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
- Распыление пропсов на примере `PaintingList` и `Painting`
- Нормализация стилей:
  - [PostCSS Normalize](https://create-react-app.dev/docs/adding-css-reset)
  - [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- Ванильный CSS и препроцессоры
- Инлайн стили
- CSS-модули
  - Композиция с `composes`
  - Переменные
- CSS in JS
- Про библиотеки компонентов

---

# Заняття 2 - Стилізація

- Трішки про вбудовані стилі
  - Проблема маштабування, підтримки ітд
- Трішки про ванільний CSS
  - Файл стилів
  - Імпорт стилів
  - Проблема глобальної області видимості
- Структура папок та файлів
  - Папка компонента
  - Файл компонента
  - Файл стилів
  - Іменування
- CSS-модулі
  - Використання
  - Композиція класів з бібліотекою [clsx](https://www.npmjs.com/package/clsx)
- Нормалізація стилів з
  [modern-normalize](https://www.npmjs.com/package/modern-normalize)
- Імпорт локальних зображень
- Бібліотека [React Icons](https://react-icons.github.io/react-icons/)
- Імпорт кастомних SVG іконок
  - Налаштування `vite-plugin-svgr` у `vite.config.js`
  - Імпорт SVG файлу як компонента
- Властивість `props.children`
- Делой додатка на Vercel

# Настройка pre-commit хуков

## 1 - Установка зависимостей

Установить в проект следующие пакеты.

```bash
npm install --save-dev prettier eslint
```

## 2 - Инициализация lint-staged и husky

Пользователям **MacOS** и **Linux** систем необходимо выполнить в терминале
следующую команду. Она установит и настроит `husky` и `lint-staged` в
зависимости от инструментов качества кода из зависимостей проекта в
`package.json`.

```bash
npx mrm lint-staged
```

Пользователям **Windows** необходимо выполнить следующую команду. Она делает
тоже самое.

```bash
npx mrm@2 lint-staged
```

## 3 - Интерграция плагинов

Ссылки на документацию по интеграции плагинов в популярные редакторы.

- [Prettier editor integration](https://prettier.io/docs/en/editors.html)
- [ESLint editor integration](https://eslint.org/docs/user-guide/integrations)

## 4 - Настройки VSCode

Для комфортной работы, после установки плагинов, нужно добавить несколько
настроек редактора для автосохранения и форматирования файлов.

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

# react-group-33

- [react-icons](https://react-icons.github.io/react-icons/)
- [date-fns](https://date-fns.org/)
- [prop-types](https://www.npmjs.com/package/prop-types)

## Components

### Page title

```html
<h1 class="title">Text</h1>
```

```css
.title {
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
}
```

### EventBoard

```html
<div class="eventBoard">Event cards</div>
```

```css
.eventBoard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
}
```

### Event

```html
<div class="event">
  <h2 class="title">{name}</h2>
  <p class="info">
    <i class="icon"></i>
    Location
  </p>
  <p class="info">
    <i class="icon"></i>
    Speaker
  </p>
  <p class="info">
    <i class="icon"></i>
    Start Date
  </p>
  <p class="info">
    <i class="icon"></i>
    Duration
  </p>
  <span class="chip free|paid|vip">Event type</span>
</div>
```

Icons:

- FaMapMarkerAlt
- FaUserAlt
- FaCalendarAlt
- FaClock

```css
.event {
  position: relative;
  border: 2px dashed black;
  padding: 8px;
  border-radius: 4px;
}

.title {
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.info {
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--color-primary-text);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
}

.icon {
  display: block;
  margin-right: 8px;
  color: var(--color-secondary-text);
}

.chip {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
}

.free {
  background-color: var(--color-green);
}

.paid {
  background-color: var(--color-blue);
}

.vip {
  background-color: var(--color-red);
}
```

## Utils

```js
import { format, formatDistanceStrict } from 'date-fns';

const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};

const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
```

```
import Z from 'common/components/Z'
import X from 'common/components/X'
import Y from 'common/components/Y'

import {Z, X, Y} from 'common/components'

src
  modules
    common
      components
        Z
        X
        Y
        index.js
    courses
      components
        A
        B
        C
    groups
      components
        D
        E
    homeworks
      components
        F

```

[Разбивка на Компоненты](https://whimsical.com/Rv58b3WSYsxL3idxF3GHct)

1. По макету разбить на компоненты
2. Определить Пропсы для компонентов
3. Разработка

[](https://youtu.be/XRs3v6pNOH8?t=3384)
