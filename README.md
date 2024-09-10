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
