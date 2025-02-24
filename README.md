##__Задание__

Сделайте ToDo-приложение, позволяющее управлять текущим списком дел

__Что должно быть в интерфейсе:__
-Поле для ввода новой задачи
-Списки задач:
    -общий
    -невыполненных задач
    -выполненных задач
-Количество оставшихся задач
-Очистка выполненных

__Требования к коду:__
-Приложение создано с использованием TypeScript, React и React Hooks
-Библиотеки компонент – на ваше усмотрение
-Ключевая на ваш взгляд функциональность обязательно покрыта тестами
-Проект должен запускаться командой npm i && npm run start
-Проект доступен на GitHub Pages/Vercel/etc.

__Структура проекта:__

todo-app/
├── public/                  # Публичные статические файлы
│   ├── index.html          # Главный HTML файл
│   ├── manifest.json       # Манифест веб-приложения
│   └── robots.txt          # Настройки для поисковых роботов
│
├── src/                    # Исходный код приложения
│   ├── components/         # React компоненты
│   │   ├── TodoInput.tsx        # Компонент ввода новой задачи
│   │   ├── TodoInput.test.tsx   # Тесты для TodoInput
│   │   ├── TodoList.tsx         # Компонент списка задач
│   │   ├── TodoList.test.tsx    # Тесты для TodoList
│   │   └── TodoFilters.tsx      # Компонент фильтрации задач
│   │
│   ├── types/             # TypeScript типы
│   │   └── todo.ts        # Определения типов для задач
│   │
│   ├── App.tsx            # Главный компонент приложения
│   ├── App.test.tsx       # Тесты для главного компонента
│   ├── index.tsx          # Точка входа React приложения
│   ├── index.css          # Глобальные стили
│   ├── setupTests.ts      # Настройка тестового окружения
│   └── react-app-env.d.ts # Определения типов для CRA
│
├── package.json           # Зависимости и скрипты npm
├── package-lock.json      # Фиксация версий зависимостей
├── tsconfig.json         # Конфигурация TypeScript
├── .gitignore           # Игнорируемые Git файлы
└── README.md            # Документация проекта

__Основные компоненты структуры:__
1. Корневая директория:
  Конфигурационные файлы (package.json, tsconfig.json)
  Документация (README.md)
  Файлы Git (.gitignore)

2. Исходный код (src/):
  Компоненты в отдельной директории (components/)
  Типы TypeScript в отдельной директории (types/)
  Главный компонент и точка входа
  Стили и тесты

3. Компоненты (components/):
   Каждый компонент имеет свой файл
  Тесты расположены рядом с компонентами
  Логическое разделение на ввод, список и фильтры

4. Типы (types/):
  Отдельный файл для определения типов задач
  Четкая типизация для TypeScript

5. Публичные файлы (public/):
  Статические файлы
  HTML шаблон
  Манифест приложения

__Старт проекта:__
Команды, которые создают начальную структуру проекта.

npx create-react-app todo-app --template typescript
cd todo-app
npm install uuid react-icons styled-components @testing-library/jest-dom @testing-library/react @testing-library/user-event

__Инструкция по развертыванию React-приложения на GitHub Pages. Предполагается, что уже есть репозиторий на GitHub с кодом ToDo-приложения.__

Шаг 1: Установка gh-pages

gh-pages – это пакет npm, который упрощает развертывание статических сайтов на GitHub Pages. 

Установи его как dev-зависимость:

npm install gh-pages --save-dev

bash

Шаг 2: Добавление свойства homepage в package.json

В файле package.json добавь свойство homepage. Значение должно быть URL GitHub Pages сайта. 
Формат URL: https://<your-github-username>.github.io/<your-repo-name>

<your-github-username>: Твой никнейм на GitHub.
<your-repo-name>: Название репозитория с твоим проектом.
Пример:

{
  "name": "todo-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    // ...
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    // ...
  },
  "browserslist": {
    // ...
  },
  "homepage": "https://yourusername.github.io/todo-app"
}

json
Шаг 3: Добавление скриптов развертывания в package.json

В секцию scripts в package.json добавь две команды: predeploy и deploy.

predeploy: Эта команда запускается перед развертыванием. Она запускает команду build, которая создает оптимизированную сборку приложения в папке build.
deploy: Эта команда использует пакет gh-pages для загрузки содержимого папки build на ветку gh-pages репозитория.
{
  "name": "todo-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    // ...
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "eslintConfig": {
    // ...
  },
  "browserslist": {
    // ...
  },
  "homepage": "https://yourusername.github.io/todo-app"
}

json
Шаг 4: Развертывание на GitHub Pages

Убедись, что сохранил изменения в файле package.json.

Закоммить и запушь все изменения в свой репозиторий на GitHub.

В терминале (в корневой папке проекта) выполни команду:

npm run deploy

bash
Эта команда запустит процесс сборки и развертывания твоего приложения на GitHub Pages.

Шаг 5: Включение GitHub Pages в настройках репозитория

Перейди в репозиторий на GitHub.
Перейди во вкладку “Settings”.
В левом меню выбери “Pages”.
В секции “Source” выбери:
“Deploy from a branch”
Branch: “gh-pages”
/ (root)
Нажми “Save”.
Шаг 6: Ожидание и проверка

Развертывание на GitHub Pages может занять несколько минут. После завершения процесса ты увидишь сообщение “Your site is live at .github.io/”. Перейди по указанному URL, чтобы проверить свой сайт.

Рекомендации и устранение проблем:

-Правильный URL в homepage: Убедись, что URL в свойстве homepage указан правильно (с учетом имени пользователя и имени репозитория).

-Ветка gh-pages: После развертывания проверь, что в репозитории появилась ветка gh-pages. В ней должны быть статические файлы твоего приложения.

-Кэширование: Если ты вносишь изменения в приложение, но они не отображаются на GitHub Pages, попробуй очистить кэш браузера.

-404 ошибка: Если ты видишь ошибку 404, возможно, GitHub Pages еще не завершил развертывание. Подожди несколько минут и обнови страницу. Также проверь правильность пути в homepage.

-Базовый URL: Если твое приложение использует маршруты (например, react-router-dom), тебе может потребоваться настроить basename для роутера.
Эта инструкция должна помочь тебе успешно развернуть твое ToDo-приложение на GitHub Pages.
