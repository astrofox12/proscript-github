function slugify(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .replace(/--+/g, '-');
}

const COURSES_DATA = [
  {
    id: 'python-dev',
    title: {
      en: 'Python Developer from Scratch',
      ru: 'Python-разработчик с нуля',
    },
    tags: ['python', 'backend'],
    price: 299,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 5,
    excerpt: {
      en: 'Master Python from zero to Junior level. Build 5 real projects, gain commercial experience, and get job assistance.',
      ru: 'Освойте Python с нуля до уровня Junior. Создайте 5 реальных проектов, получите коммерческий опыт и помощь с трудоустройством.',
    },
    hook: {
      en: 'Python is the #1 programming language in the world (TIOBE, PYPL). Companies like Google, Amazon, Netflix, and Spotify are actively hiring Python developers. Starting salary from $1,500 — master the language, build real projects, gain commercial experience, and launch your career with our job guarantee.',
      ru: 'Python — язык программирования №1 в мире (TIOBE, PYPL). Google, Amazon, Netflix и Spotify активно нанимают Python-разработчиков. Стартовая зарплата от 150 000 ₽ — освойте язык, создайте реальные проекты, получите коммерческий опыт и начните карьеру с нашей гарантией трудоустройства.',
    },
    syllabus: [
      {
        weeks: '1–3',
        title: {
          en: 'Python Fundamentals',
          ru: 'Основы программирования на Python',
        },
        topics: {
          en: 'Syntax, variables, data types, conditional operators, loops, lists, dictionaries, sets. CLI basics, Git version control, environment setup with Poetry. Project: "Mind Games" — a set of 5 console logic games (even number check, arithmetic, progression, GCD, prime numbers).',
          ru: 'Синтаксис, переменные, типы данных, условные операторы, циклы, списки, словари, множества. Основы командной строки, Git, настройка окружения с Poetry. Проект: «Игры разума» — 5 консольных логических игр.',
        },
      },
      {
        weeks: '4–6',
        title: {
          en: 'Application Development in Python',
          ru: 'Разработка приложений на Python',
        },
        topics: {
          en: 'Functions, arguments, scopes. Automated testing with PyTest. Data abstraction, tree structures. OOP: classes, inheritance, encapsulation. Object-oriented design patterns. Continuous Integration with CI/CD. Project: "Difference Calculator" — a CLI utility comparing two files (JSON, YAML) with stylish output.',
          ru: 'Функции, аргументы, области видимости. Автоматическое тестирование PyTest. Абстракция данных, деревья. ООП: классы, наследование, инкапсуляция. Объектно-ориентированный дизайн. CI/CD. Проект: «Вычислитель отличий» — сравнение двух файлов.',
        },
      },
      {
        weeks: '7–9',
        title: {
          en: 'Databases, HTTP & Flask',
          ru: 'Базы данных, HTTP и Flask',
        },
        topics: {
          en: 'How the internet works: DNS, protocols, browser-server interaction. Regular expressions. HTML/CSS basics for backend devs. HTTP protocol, REST API design. SQL, JOINs, database design. Python + SQL integration, async programming with async/await. Project: "Page Analyzer" — a Flask web app that checks website SEO and availability, stores results in a database.',
          ru: 'Устройство интернета: DNS, протоколы, браузер-сервер. Регулярные выражения. Основы HTML/CSS. HTTP, REST API. SQL, JOIN, проектирование БД. Python + SQL, асинхронность. Проект: «Анализатор страниц» на Flask.',
        },
      },
      {
        weeks: '10–13',
        title: {
          en: 'Backend Development with Django',
          ru: 'Backend-разработка на Django',
        },
        topics: {
          en: 'Django architecture: models, views, templates, admin panel. Django ORM, migrations, entity relationships. Polymorphism in practice, deep dive into Python classes, special methods. Project: "Task Manager" — a full-featured task management web app with user registration, auth, CRUD, labels, statuses, and permissions.',
          ru: 'Архитектура Django: модели, представления, шаблоны, админка. Django ORM, миграции, связи сущностей. Полиморфизм, углубленное изучение классов. Проект: «Менеджер задач» — полноценное веб-приложение для управления задачами.',
        },
      },
      {
        weeks: '14–16',
        title: {
          en: 'Career Launch & Commercial Experience',
          ru: 'Старт карьеры и коммерческий опыт',
        },
        topics: {
          en: 'Resume writing, GitHub portfolio setup, job search strategy. Mock technical interviews, CV reviews. Contributing to real commercial open-source projects with real users. Working in cross-functional teams, agile sprints, standups, code reviews. 6 months of post-graduation career support.',
          ru: 'Составление резюме, оформление GitHub и портфолио, стратегия поиска работы. Тренировочные собеседования, ревью резюме. Участие в реальных коммерческих open-source проектах. Работа в кросс-функциональных командах, спринты, стендапы, код-ревью. 6 месяцев поддержки после выпуска.',
        },
      },
    ],
    format: {
      en: 'Interactive browser-based exercises with instant feedback. Live coding webinars with experienced Python developers. Mentor code reviews and project guidance. Self-paced learning with lifetime access to materials. ~12 hours per week commitment. 10 months of structured curriculum.',
      ru: 'Интерактивные упражнения в браузере с мгновенной проверкой. Вебинары с лайвкодингом от опытных Python-разработчиков. Код-ревью от наставников. Обучение в своем темпе с пожизненным доступом к материалам. ~12 часов в неделю. 10 месяцев структурированной программы.',
    },
    bonuses: {
      en: [
        '6 months of career support after graduation',
        'Mock interviews with HR and senior developers',
        'Real commercial experience on open-source projects',
        'Resume and cover letter reviews',
        'Private community with mentors 24/7',
        'Professional retraining diploma',
      ],
      ru: [
        '6 месяцев поддержки в поиске работы после выпуска',
        'Тренировочные собеседования с HR и senior-разработчиками',
        'Реальный коммерческий опыт на open-source проектах',
        'Ревью резюме и сопроводительных писем',
        'Закрытое сообщество с наставниками 24/7',
        'Диплом о профессиональной переподготовке',
      ],
    },
    result: {
      en: '5 portfolio projects, commercial experience on real products, a polished GitHub profile, a job-ready resume, and a solid foundation for a Junior Python Developer position. Skills: Python, SQL, Django, Flask, Git, Docker, CI/CD, Linux, REST APIs, testing, and async programming.',
      ru: '5 проектов в портфолио, коммерческий опыт на реальных продуктах, оформленный GitHub, готовое резюме и уверенная база для позиции Junior Python-разработчика. Навыки: Python, SQL, Django, Flask, Git, Docker, CI/CD, Linux, REST API, тестирование, асинхронное программирование.',
    },
    duration: {
      en: '10 months',
      ru: '10 месяцев',
    },
    theoryHours: 160,
    practiceHours: 240,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '#1', label: 'TIOBE & PYPL Ranking' },
        { value: '$1,500+', label: 'Junior Starting Salary' },
        { value: 'Google', label: 'Amazon • Netflix • Spotify' },
      ],
      ru: [
        { value: '№1', label: 'Рейтинг TIOBE и PYPL' },
        { value: 'от 150 000 ₽', label: 'Стартовая зарплата Junior' },
        { value: 'Google', label: 'Amazon • Netflix • Spotify' },
      ],
    },
    whyFeatures: {
      en: [
        { title: '#1 Popularity', desc: 'Python leads the TIOBE and PYPL rankings. It\'s the most sought-after language in 2024.' },
        { title: 'Easy to Learn', desc: 'Simple, readable syntax close to natural language. Minimum complexity, maximum possibilities.' },
        { title: 'Universal', desc: 'Used in web development, automation, AI, data science, DevOps — endless opportunities.' },
        { title: 'In Demand', desc: 'Google, Amazon, Netflix, Spotify, and thousands more hunt for Python developers daily.' },
      ],
      ru: [
        { title: '№1 в мире', desc: 'Python возглавляет рейтинги TIOBE и PYPL. Это самый востребованный язык программирования в 2024 году.' },
        { title: 'Легко учить', desc: 'Простой и читаемый синтаксис, близкий к естественному языку. Минимум сложностей, максимум возможностей.' },
        { title: 'Универсальность', desc: 'Используется в веб-разработке, автоматизации, AI, data science, DevOps — безграничные возможности.' },
        { title: 'Востребован', desc: 'Google, Amazon, Netflix, Spotify и тысячи других компаний ежедневно ищут Python-разработчиков.' },
      ],
    },
    techStack: [
      { icon: '🐍', name: 'Python', desc: 'Simple, readable language for web, data, and automation.' },
      { icon: '🗄️', name: 'SQL', desc: 'Query and manage relational databases with ease.' },
      { icon: '🎯', name: 'Django', desc: 'High-level framework for rapid web development.' },
      { icon: '🧪', name: 'Flask', desc: 'Lightweight microframework for flexible web apps.' },
      { icon: '🔀', name: 'Git', desc: 'Version control and collaboration for professional teams.' },
      { icon: '🐳', name: 'Docker', desc: 'Containerize apps for consistent deployment everywhere.' },
      { icon: '🔄', name: 'CI/CD', desc: 'Automate testing and deployment pipelines.' },
      { icon: '🐧', name: 'Linux', desc: 'Server administration and command-line mastery.' },
      { icon: '🐘', name: 'PostgreSQL', desc: 'Advanced open-source relational database system.' },
      { icon: '⚡', name: 'Redis', desc: 'In-memory data store for caching and real-time apps.' },
      { icon: '✅', name: 'PyTest', desc: 'Robust testing framework for reliable Python code.' },
      { icon: '📨', name: 'RabbitMQ', desc: 'Message broker for distributed async systems.' },
    ],
  },
  {
    id: 'react-typescript',
    title: {
      en: 'React + TypeScript Frontend',
      ru: 'Фронтенд на React + TypeScript',
    },
    tags: ['frontend', 'typescript'],
    price: 345,
    currency: 'USD',
    level: {
      en: 'Middle',
      ru: 'Middle',
    },
    projects: 4,
    excerpt: {
      en: 'In 10 weeks, you will build a full-fledged online store and gain Middle-level skills. Taught by current team leads from Google and Microsoft.',
      ru: 'За 10 недель вы создадите полноценный интернет-магазин и получите навыки уровня Middle. Вас будут учить действующие тимлиды из Google и Microsoft.',
    },
    hook: {
      en: 'React developers are needed in every second IT company. In 10 weeks, you will build a full-fledged online store and gain Middle-level skills. You will be taught by current team leads from Google and Microsoft.',
      ru: 'React-разработчики нужны каждой второй IT-компании. За 10 недель вы создадите полноценный интернет-магазин и получите навыки уровня Middle. Вас будут учить действующие тимлиды из Google и Microsoft.',
    },
    whoIsThisFor: {
      en: 'For developers with basic JavaScript knowledge who want to level up to Middle and master React + TypeScript.',
      ru: 'Для разработчиков с базовыми знаниями JavaScript, которые хотят прокачаться до Middle и освоить React + TypeScript.',
    },
    syllabus: [
      {
        weeks: '1–2',
        title: {
          en: 'HTML/CSS & JavaScript Refresher',
          ru: 'Повторение HTML/CSS и JavaScript',
        },
        topics: {
          en: 'Closing gaps in HTML5, CSS3 (Flexbox, Grid, responsive design, SASS) and modern JavaScript (ES6+: arrow functions, destructuring, promises, async/await). Task: build a landing page and write a function to interact with an API.',
          ru: 'Закрываем пробелы по HTML5, CSS3 (Flexbox, Grid, адаптивность, SASS) и современному JavaScript (ES6+: стрелки, деструктуризация, промисы, async/await). Задание: свёрстать лендинг и написать функцию для работы с API.',
        },
      },
      {
        weeks: '3–4',
        title: {
          en: 'Introduction to React',
          ru: 'Введение в React',
        },
        topics: {
          en: 'Components, props, state (useState), side effects (useEffect). Event handling, conditional rendering, lists. Forms. Task: To-Do list with filtering.',
          ru: 'Компоненты, пропсы, состояние (useState), побочные эффекты (useEffect). Обработка событий, условный рендеринг, списки. Формы. Задание: To-Do лист с фильтрацией.',
        },
      },
      {
        weeks: '5–6',
        title: {
          en: 'Routing & State Management',
          ru: 'Маршрутизация и управление состоянием',
        },
        topics: {
          en: 'React Router v6, Redux Toolkit (slices, async actions), working with APIs (axios). Task: weather app with search.',
          ru: 'Маршрутизация (React Router v6), Redux Toolkit (слайсы, асинхронные действия), работа с API (axios). Задание: приложение погоды с поиском.',
        },
      },
      {
        weeks: '7–8',
        title: {
          en: 'TypeScript & Testing',
          ru: 'TypeScript и тестирование',
        },
        topics: {
          en: 'TypeScript: typing props, hooks, interfaces, generics. Testing with Jest and React Testing Library.',
          ru: 'TypeScript: типизация пропсов, хуков, интерфейсы, дженерики. Тестирование (Jest + React Testing Library).',
        },
      },
      {
        weeks: '9–10',
        title: {
          en: 'Final Project & Deployment',
          ru: 'Финальный проект и деплой',
        },
        topics: {
          en: 'Final project: online store (catalog, cart, favorites, search, pagination). Vite build, deploy to Vercel/Netlify. Bonus: Formik, React Hook Form, optimization (useMemo, useCallback).',
          ru: 'Финальный проект: интернет-магазин (каталог, корзина, избранное, поиск, пагинация). Сборка Vite, деплой на Vercel/Netlify. Дополнительно: Formik, React Hook Form, оптимизация (useMemo, useCallback).',
        },
      },
    ],
    format: {
      en: 'Daily short videos (15–20 min) + practice in CodeSandbox + group calls on Saturdays.',
      ru: 'Ежедневные короткие видео (15–20 мин) + практика в CodeSandbox + групповые созвоны по субботам.',
    },
    bonuses: {
      en: [
        'Private repository with best practices',
        '3 masterclasses on job interviews',
        'Code review of the final project',
        'Weekly Q&A sessions',
      ],
      ru: [
        'Приватный репозиторий с лучшими практиками',
        '3 мастер-класса по собеседованиям',
        'Код-ревью финального проекта',
        'Еженедельные Q&A',
      ],
    },
    result: {
      en: 'Confident command of React, TypeScript, Redux, 4 projects in your portfolio.',
      ru: 'Уверенное владение React, TypeScript, Redux, 4 проекта в портфолио.',
    },
    duration: {
      en: '10 weeks',
      ru: '10 недель',
    },
    theoryHours: 80,
    practiceHours: 80,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: 'Most demanded', label: 'Frontend framework' },
        { value: '100k+', label: 'Jobs worldwide' },
        { value: 'Meta', label: 'Microsoft • Netflix • Uber' },
      ],
      ru: [
        { value: 'Самый популярный', label: 'Фронтенд-фреймворк' },
        { value: '100 000+', label: 'Вакансий в мире' },
        { value: 'Meta', label: 'Microsoft • Netflix • Uber' },
      ],
    },
    whyFeatures: {
      en: [
        { title: '#1 Frontend Library', desc: 'React is the most popular frontend library worldwide, powering Facebook, Instagram, Airbnb, and Uber.' },
        { title: 'Type-Safe', desc: 'TypeScript catches errors before runtime — fewer bugs, faster development, better code quality.' },
        { title: 'Full Ecosystem', desc: 'From React Native to Next.js — one library for web, mobile, and desktop applications.' },
        { title: 'Hired Everywhere', desc: 'React developers are the #1 hiring priority for startups and FAANG companies alike.' },
      ],
      ru: [
        { title: '#1 в мире фронтенда', desc: 'React — самая популярная библиотека для фронтенда, работает в Facebook, Instagram, Airbnb и Uber.' },
        { title: 'TypeScript — надёжность', desc: 'TypeScript отлавливает ошибки до запуска — меньше багов, быстрее разработка, чище код.' },
        { title: 'Экосистема', desc: 'От React Native до Next.js — одна библиотека для веба, мобильных и десктопных приложений.' },
        { title: 'Везде нужны', desc: 'React-разработчики — приоритет №1 для найма в стартапах и FAANG-компаниях.' },
      ],
    },
    techStack: [
      { icon: '⚛️', name: 'React', desc: 'Component-based UI library for modern web apps.' },
      { icon: '📘', name: 'TypeScript', desc: 'Typed JavaScript for scalable frontend development.' },
      { icon: '🔄', name: 'Redux', desc: 'State management for complex application logic.' },
      { icon: '🌐', name: 'JavaScript (ES6+)', desc: 'Modern JavaScript with promises, async, and modules.' },
      { icon: '🎨', name: 'HTML5 & CSS3', desc: 'Semantic markup and responsive styling.' },
      { icon: '🧪', name: 'Jest', desc: 'Testing framework for reliable React components.' },
      { icon: '⚡', name: 'Vite', desc: 'Fast build tool for modern frontend projects.' },
      { icon: '🧭', name: 'React Router', desc: 'Client-side routing for single-page applications.' },
      { icon: '🔀', name: 'Git', desc: 'Version control for team collaboration.' },
      { icon: '🚀', name: 'Vercel/Netlify', desc: 'Deploy and host frontend applications instantly.' },
    ],
  },
  {
    id: 'java-enterprise',
    title: {
      en: 'Java Developer: Path to Enterprise Development',
      ru: 'Java-разработчик: Путь в корпоративную разработку',
    },
    tags: ['java', 'backend'],
    price: 399,
    currency: 'USD',
    level: {
      en: 'Junior+',
      ru: 'Junior+',
    },
    projects: 3,
    excerpt: {
      en: 'Learn Java for enterprise from scratch. 12 weeks, 96 hours of theory, and a full microservice project. Created with experts from Google and Microsoft.',
      ru: 'Изучите Java для enterprise-разработки с нуля. 12 недель, 96 часов теории и полноценный микросервисный проект. Создан совместно с экспертами из Google и Microsoft.',
    },
    hook: {
      en: 'Java is the #1 language for enterprise solutions. Our course was created with experts from Google and Microsoft. After graduation, you will be ready for a Junior+ interview and get an offer from 200,000 ₽.',
      ru: 'Java — язык №1 для enterprise-решений. Наш курс создан совместно с экспертами из Google и Microsoft. После обучения вы сможете пройти собеседование на Junior+ и получить оффер от 200 000 ₽.',
    },
    whoIsThisFor: {
      en: 'For beginners and junior developers who want to master Java for enterprise development and build a career in large companies.',
      ru: 'Для новичков и Junior-разработчиков, которые хотят освоить Java для корпоративной разработки и построить карьеру в крупных компаниях.',
    },
    syllabus: [
      {
        weeks: '1–3',
        title: {
          en: 'Core Java',
          ru: 'Core Java',
        },
        topics: {
          en: 'Syntax, primitives, objects, strings. Collections (List, Set, Map), iterators, Comparable/Comparator. Multithreading: Thread, Runnable, synchronized, Executors. Exceptions, lambdas, Stream API, Optional. Assignments: implement your own collection, multithreaded task handler.',
          ru: 'Синтаксис, примитивы, объекты, строки. Коллекции (List, Set, Map), итераторы, Comparable/Comparator. Многопоточность: Thread, Runnable, synchronized, Executors. Исключения, лямбды, Stream API, Optional. Задания: реализовать свою коллекцию, многопоточный обработчик задач.',
        },
      },
      {
        weeks: '4–6',
        title: {
          en: 'Working with Databases',
          ru: 'Работа с БД',
        },
        topics: {
          en: 'JDBC, PostgreSQL, CRUD. Hibernate (JPA): mapping, relationships, caching, transactions. Spring Boot: REST controllers, DI, properties. Project: REST API for user management.',
          ru: 'JDBC, PostgreSQL, CRUD. Hibernate (JPA): маппинг, отношения, кеширование, транзакции. Spring Boot: REST-контроллеры, DI, свойства. Задание: REST API для управления пользователями.',
        },
      },
      {
        weeks: '7–9',
        title: {
          en: 'Security & Testing',
          ru: 'Безопасность и тестирование',
        },
        topics: {
          en: 'Spring Security: JWT, Basic Auth, roles. Spring Data JPA (derived queries, @Query). Testing (JUnit, Mockito). Project: secured API with ADMIN/USER roles.',
          ru: 'Spring Security: JWT, Basic Auth, роли. Spring Data JPA (производные запросы, @Query). Тестирование (JUnit, Mockito). Задание: защищённое API с ролями ADMIN/USER.',
        },
      },
      {
        weeks: '10–12',
        title: {
          en: 'Microservices & Deployment',
          ru: 'Микросервисы и деплой',
        },
        topics: {
          en: 'Microservices: Eureka, Gateway, OpenFeign, Resilience4j. RabbitMQ. Docker (images, compose). Final project: task management system with two microservices deployed in containers.',
          ru: 'Микросервисы: Eureka, Gateway, OpenFeign, Resilience4j. RabbitMQ. Docker (образы, compose). Итоговый проект: система управления задачами из двух микросервисов, развёрнутая в контейнерах.',
        },
      },
    ],
    format: {
      en: '2 lectures per week (2 h each) + webinar with homework review. Recordings available forever.',
      ru: '2 лекции в неделю по 2 часа + вебинар с разбором ДЗ. Записи доступны навсегда.',
    },
    bonuses: {
      en: [
        '5 individual mentoring sessions',
        'Interview prep (50 questions)',
        'Knowledge base with cheat-sheets',
        'Certificate',
      ],
      ru: [
        '5 индивидуальных сессий с ментором',
        'Подготовка к собеседованию (50 вопросов)',
        'База знаний с cheat-sheet\'ами',
        'Сертификат',
      ],
    },
    result: {
      en: 'A microservice application and enterprise development skills for a Junior+ position.',
      ru: 'Микросервисное приложение и навыки enterprise-разработки для уровня Junior+.',
    },
    duration: {
      en: '12 weeks',
      ru: '12 недель',
    },
    theoryHours: 96,
    practiceHours: 80,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '#3', label: 'TIOBE Ranking' },
        { value: '200k+', label: 'Enterprise jobs' },
        { value: 'Google', label: 'Microsoft • Oracle • IBM' },
      ],
      ru: [
        { value: '№3', label: 'Рейтинг TIOBE' },
        { value: '200 000+', label: 'Вакансий в enterprise' },
        { value: 'Google', label: 'Microsoft • Oracle • IBM' },
      ],
    },
    whyFeatures: {
      en: [
        { title: '#1 for Enterprise', desc: 'The #1 language for enterprise solutions — used by 90% of Fortune 500 companies.' },
        { title: 'Battle-Tested', desc: '25+ years of reliability, massive ecosystem, and unparalleled community support.' },
        { title: 'Any Scale', desc: 'From startups to banking systems — Java scales from microservices to monolithic giants.' },
        { title: 'Top Salaries', desc: 'Java enterprise developers are among the highest-paid in the industry.' },
      ],
      ru: [
        { title: '#1 для Enterprise', desc: 'Язык №1 для корпоративной разработки — используется в 90% компаний из Fortune 500.' },
        { title: 'Проверен временем', desc: '25+ лет надёжности, огромная экосистема и поддержка сообщества.' },
        { title: 'Любой масштаб', desc: 'От стартапов до банковских систем — Java масштабируется от микросервисов до монолитов.' },
        { title: 'Высокие зарплаты', desc: 'Java-разработчики — одни из самых высокооплачиваемых в индустрии.' },
      ],
    },
    techStack: [
      { icon: '☕', name: 'Java', desc: 'Robust, object-oriented language for enterprise apps.' },
      { icon: '🌱', name: 'Spring Boot', desc: 'Production-ready framework for microservices.' },
      { icon: '🗃️', name: 'Hibernate', desc: 'ORM framework for seamless database interaction.' },
      { icon: '🐘', name: 'PostgreSQL', desc: 'Advanced relational database for enterprise data.' },
      { icon: '🐳', name: 'Docker', desc: 'Containerize and deploy applications consistently.' },
      { icon: '📨', name: 'RabbitMQ', desc: 'Message broker for async communication.' },
      { icon: '🧪', name: 'JUnit', desc: 'Testing framework for reliable Java code.' },
      { icon: '🛡️', name: 'Spring Security', desc: 'Authentication and authorization for web apps.' },
      { icon: '🔀', name: 'Git', desc: 'Version control for team collaboration.' },
      { icon: '📦', name: 'Maven', desc: 'Build automation and dependency management.' },
    ],
  },
  {
    id: 'sql-databases',
    title: {
      en: 'SQL and Databases',
      ru: 'SQL и работа с базами данных',
    },
    tags: ['sql', 'databases'],
    price: 219,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Master SQL in 4 weeks — from basic SELECT to complex analytical queries. Design databases, work with PostgreSQL and MySQL, and add the most stable IT skill to your resume.',
      ru: 'Освойте SQL за 4 недели — от простого SELECT до сложных аналитических запросов. Проектируйте базы данных, работайте с PostgreSQL и MySQL, добавьте самый стабильный IT-навык в резюме.',
    },
    hook: {
      en: 'SQL is the most stable skill in IT. We will teach you to write queries of any complexity in 4 weeks. Add this item to your resume — and your salary will grow by 30%.',
      ru: 'SQL — самый стабильный навык в IT. Мы научим вас писать запросы любой сложности за 4 недели. Добавьте этот пункт в резюме — и ваша зарплата вырастет на 30%.',
    },
    whoIsThisFor: {
      en: 'For beginners who want to master SQL from scratch — analysts, backend developers, and anyone working with data.',
      ru: 'Для новичков, которые хотят освоить SQL с нуля — аналитиков, бэкендеров и всех, кто работает с данными.',
    },
    syllabus: [
      {
        weeks: '1',
        title: {
          en: 'Foundations',
          ru: 'Основы',
        },
        topics: {
          en: 'SELECT, FROM, WHERE, ORDER BY, LIMIT. Aggregates (COUNT, SUM, AVG, MIN, MAX) and GROUP BY. Assignment: analyze sales data.',
          ru: 'SELECT, FROM, WHERE, ORDER BY, LIMIT. Агрегаты (COUNT, SUM, AVG, MIN, MAX) и GROUP BY. Задание: проанализировать данные о продажах.',
        },
      },
      {
        weeks: '2',
        title: {
          en: 'Joins & Subqueries',
          ru: 'JOIN и подзапросы',
        },
        topics: {
          en: 'JOIN (INNER, LEFT, RIGHT, FULL), subqueries (scalar, table). UNION, INTERSECT. Assignment: a query to select orders with customer and product details.',
          ru: 'JOIN (INNER, LEFT, RIGHT, FULL), подзапросы (скалярные, табличные). UNION, INTERSECT. Задание: запрос для выбора заказов с деталями клиентов и товаров.',
        },
      },
      {
        weeks: '3',
        title: {
          en: 'Window Functions & Optimization',
          ru: 'Оконные функции и оптимизация',
        },
        topics: {
          en: 'Window functions (ROW_NUMBER, RANK, LAG/LEAD), CTE. Indexes, EXPLAIN. Assignment: optimize a slow query.',
          ru: 'Оконные функции (ROW_NUMBER, RANK, LAG/LEAD), CTE. Индексы, EXPLAIN. Задание: оптимизировать медленный запрос.',
        },
      },
      {
        weeks: '4',
        title: {
          en: 'Transactions & Database Design',
          ru: 'Транзакции и проектирование БД',
        },
        topics: {
          en: 'Transactions (ACID, isolation levels). Database design: normalization, ER-diagrams. Working with PostgreSQL and MySQL. Final project: design a database for an online store, populate it with data, and run 10 complex analytical queries.',
          ru: 'Транзакции (ACID, уровни изоляции). Проектирование БД: нормализация, ER-диаграммы. Работа с PostgreSQL и MySQL. Итоговый проект: спроектировать БД для интернет-магазина, наполнить данными и выполнить 10 сложных аналитических запросов.',
        },
      },
    ],
    format: {
      en: 'Video lectures + interactive exercises in a web environment (pgAdmin, DBeaver).',
      ru: 'Видеолекции + интерактивные упражнения в веб-среде (pgAdmin, DBeaver).',
    },
    bonuses: {
      en: [
        'Online simulator with 300+ tasks for 3 months',
        'Ready-made backup scripts',
        'Chat with the instructor',
      ],
      ru: [
        'Онлайн-тренажёр с 300+ задачами на 3 месяца',
        'Готовые скрипты бэкапа',
        'Чат с преподавателем',
      ],
    },
    result: {
      en: 'Fluency in SQL at a level sufficient for an analyst or backend developer.',
      ru: 'Свободное владение SQL на уровне, достаточном для аналитика или бэкендера.',
    },
    duration: {
      en: '4 weeks',
      ru: '4 недели',
    },
    theoryHours: 16,
    practiceHours: 16,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '#1', label: 'Most stable IT skill' },
        { value: '+30%', label: 'Salary growth' },
        { value: 'PostgreSQL', label: 'MySQL • BigQuery' },
      ],
      ru: [
        { value: '№1', label: 'Самый стабильный навык в IT' },
        { value: '+30%', label: 'Рост зарплаты' },
        { value: 'PostgreSQL', label: 'MySQL • BigQuery' },
      ],
    },
    whyFeatures: {
      en: [
        { title: '#1 Data Skill', desc: 'SQL is the most universal data skill — used in every company, every role, every day.' },
        { title: 'Easy to Start', desc: 'Simple declarative syntax. Write your first query in minutes, master complex analytics in weeks.' },
        { title: 'Always Relevant', desc: '50 years and still irreplaceable — SQL outlasts every framework and language.' },
        { title: '30% Salary Boost', desc: 'Adding SQL to your resume increases your market value by 30% on average.' },
      ],
      ru: [
        { title: 'Навык №1 в IT', desc: 'SQL — самый универсальный навык в IT. Нужен в каждой компании, каждой роли, каждый день.' },
        { title: 'Просто начать', desc: 'Простой декларативный синтаксис. Первый запрос за минуты, сложная аналитика за недели.' },
        { title: 'Всегда актуален', desc: '50 лет и всё ещё незаменим — SQL переживает любые фреймворки и языки.' },
        { title: '+30% к зарплате', desc: 'Добавление SQL в резюме повышает рыночную стоимость в среднем на 30%.' },
      ],
    },
    techStack: [
      { icon: '🗄️', name: 'SQL', desc: 'Standard language for relational database queries.' },
      { icon: '🐘', name: 'PostgreSQL', desc: 'Advanced open-source relational database.' },
      { icon: '🐬', name: 'MySQL', desc: 'Popular relational database for web applications.' },
      { icon: '🔍', name: 'pgAdmin', desc: 'Admin tool for PostgreSQL management.' },
      { icon: '📊', name: 'DBeaver', desc: 'Universal database tool and SQL client.' },
      { icon: '📈', name: 'Window Functions', desc: 'Analytical queries over partitioned data.' },
      { icon: '🔗', name: 'CTE', desc: 'Common Table Expressions for complex queries.' },
      { icon: '📐', name: 'Normalization', desc: 'Database design for data integrity.' },
      { icon: '⚡', name: 'Indexes', desc: 'Query performance optimization.' },
      { icon: '🔄', name: 'Transactions', desc: 'ACID compliance for data consistency.' },
    ],
  },
  {
    id: 'devops-infrastructure',
    title: {
      en: 'DevOps Engineer: Infrastructure and Clouds',
      ru: 'DevOps инженер: Инфраструктура и облака',
    },
    tags: ['devops'],
    price: 549,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Become a DevOps engineer in 16 weeks. Real experience with clouds, Kubernetes, CI/CD, and infrastructure as code. Taught by practicing SREs from top companies.',
      ru: 'Станьте DevOps-инженером за 16 недель. Реальный опыт с облаками, Kubernetes, CI/CD и инфраструктурой как кодом. Учат практикующие SRE из крупных компаний.',
    },
    hook: {
      en: 'DevOps is one of the highest-paid specialties (up to $5,000/month). We give real experience with clouds and Kubernetes in 4 months. Classes are taught by practicing SREs from large companies.',
      ru: 'DevOps — одна из самых высокооплачиваемых специальностей (до 350 000 ₽). Дадим реальный опыт с облаками и Kubernetes за 4 месяца. Занятия ведут практикующие SRE из крупных компаний.',
    },
    whoIsThisFor: {
      en: 'For system administrators, developers, and anyone who wants to master modern infrastructure and cloud technologies.',
      ru: 'Для системных администраторов, разработчиков и всех, кто хочет освоить современную инфраструктуру и облачные технологии.',
    },
    syllabus: [
      {
        weeks: '1–3',
        title: {
          en: 'Linux for Administrators',
          ru: 'Linux для администраторов',
        },
        topics: {
          en: 'Command line, permissions, network (iptables, SSH). Bash scripting (conditions, loops, functions). Assignment: backup script with rotation.',
          ru: 'Командная строка, права, сеть (iptables, SSH). Bash-скрипты (условия, циклы, функции). Задание: скрипт резервного копирования с ротацией.',
        },
      },
      {
        weeks: '4–6',
        title: {
          en: 'Docker & Containerization',
          ru: 'Docker и контейнеризация',
        },
        topics: {
          en: 'Images, layers, Dockerfile, volumes, networking, docker-compose. Docker Hub. Assignment: containerize a web application with a database.',
          ru: 'Образы, слои, Dockerfile, volume, networking, docker-compose. Docker Hub. Задание: контейнеризировать веб-приложение с БД.',
        },
      },
      {
        weeks: '7–10',
        title: {
          en: 'Kubernetes & Monitoring',
          ru: 'Kubernetes и мониторинг',
        },
        topics: {
          en: 'Architecture, Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, PV. Helm. Monitoring (Prometheus + Grafana), logging (ELK/EFK). Assignment: deploy a microservice application with load balancing and monitoring.',
          ru: 'Архитектура, Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, PV. Helm. Мониторинг (Prometheus + Grafana), логи (ELK/EFK). Задание: развернуть микросервисное приложение с балансировкой и мониторингом.',
        },
      },
      {
        weeks: '11–13',
        title: {
          en: 'CI/CD',
          ru: 'CI/CD',
        },
        topics: {
          en: 'Jenkins (pipelines), GitLab CI, GitHub Actions. Automated tests and deployment.',
          ru: 'Jenkins (пайплайны), GitLab CI, GitHub Actions. Автотесты и деплой.',
        },
      },
      {
        weeks: '14–16',
        title: {
          en: 'Clouds & IaC',
          ru: 'Облака и IaC',
        },
        topics: {
          en: 'Clouds (AWS / Google Cloud): VM, S3, VPC, IAM. Terraform. Final project: a Kubernetes cluster in the cloud with CI/CD and monitoring.',
          ru: 'Облака (AWS / Google Cloud): VM, S3, VPC, IAM. Terraform. Финальный проект: кластер Kubernetes в облаке с CI/CD и мониторингом.',
        },
      },
    ],
    format: {
      en: 'Recorded lectures + hands-on practice in the cloud + group meetings.',
      ru: 'Лекции (запись) + практика в облаке + групповые встречи.',
    },
    bonuses: {
      en: [
        'Cloud account for practice',
        'Lab exercises on incident response',
        'Career track',
      ],
      ru: [
        'Облачный аккаунт для практики',
        'Лабораторные работы по авариям',
        'Карьерный трек',
      ],
    },
    result: {
      en: 'Management of infrastructure at any scale.',
      ru: 'Управление инфраструктурой любого масштаба.',
    },
    duration: {
      en: '16 weeks',
      ru: '16 недель',
    },
    theoryHours: 64,
    practiceHours: 64,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '$5,000+', label: 'Monthly salary' },
        { value: '40%', label: 'Market growth yearly' },
        { value: 'AWS', label: 'Google Cloud • Kubernetes' },
      ],
      ru: [
        { value: 'от 350 000 ₽', label: 'Ежемесячная зарплата' },
        { value: '40%', label: 'Рост рынка ежегодно' },
        { value: 'AWS', label: 'Google Cloud • Kubernetes' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Highest Paid IT', desc: 'DevOps engineers earn $5,000-8,000/month — demand keeps growing.' },
        { title: 'Zero to Hero', desc: 'Start from Linux basics and reach production-ready cloud infrastructure in 16 weeks.' },
        { title: 'Cloud Native', desc: 'AWS, GCP, Kubernetes, Terraform — the tools that power the modern internet.' },
        { title: 'Future-Proof', desc: 'Automation and cloud are non-negotiable. Companies fight for experienced DevOps engineers.' },
      ],
      ru: [
        { title: 'Самая высокая зарплата', desc: 'DevOps-инженеры получают $5,000-8,000/мес — спрос только растёт.' },
        { title: 'С нуля до профи', desc: 'Начните с основ Linux и дойдите до production-инфраструктуры в облаках за 16 недель.' },
        { title: 'Облачные технологии', desc: 'AWS, GCP, Kubernetes, Terraform — инструменты, на которых работает современный интернет.' },
        { title: 'Будущее за автоматизацией', desc: 'Автоматизация и облака — это must-have. Компании борются за опытных DevOps.' },
      ],
    },
    techStack: [
      { icon: '🐳', name: 'Docker', desc: 'Container platform for application packaging.' },
      { icon: '☸️', name: 'Kubernetes', desc: 'Orchestrate containers at scale.' },
      { icon: '🏗️', name: 'Terraform', desc: ' Infrastructure as Code for cloud provisioning.' },
      { icon: '🔧', name: 'Jenkins', desc: 'Automation server for CI/CD pipelines.' },
      { icon: '🔄', name: 'GitLab CI', desc: 'Integrated CI/CD with Git repository.' },
      { icon: '🐙', name: 'GitHub Actions', desc: 'Automate workflows directly from GitHub.' },
      { icon: '📊', name: 'Prometheus', desc: 'Monitoring and alerting toolkit.' },
      { icon: '📈', name: 'Grafana', desc: 'Analytics and monitoring dashboards.' },
      { icon: '🐧', name: 'Linux', desc: 'Server administration and scripting.' },
      { icon: '📝', name: 'Bash', desc: 'Shell scripting for task automation.' },
      { icon: '⛑️', name: 'Helm', desc: 'Kubernetes package manager.' },
      { icon: '☁️', name: 'AWS/GCP', desc: 'Cloud platforms for scalable infrastructure.' },
    ],
  },
  {
    id: 'data-science-ml',
    title: {
      en: 'Data Science and Machine Learning',
      ru: 'Data Science и Machine Learning',
    },
    tags: ['data-science', 'python'],
    price: 659,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Master the full Data Science cycle in 14 weeks — from math and Python to neural networks and model deployment. Taught by leading data scientists.',
      ru: 'Освойте полный цикл Data Science за 14 недель — от математики и Python до нейросетей и деплоя моделей. Преподают ведущие дата-сайентисты.',
    },
    hook: {
      en: 'Artificial intelligence is changing the world — be a part of it. A course from leading data scientists: from math to model deployment.',
      ru: 'Искусственный интеллект меняет мир — станьте его частью. Курс от ведущих дата-сайентистов: от математики до деплоя моделей.',
    },
    whoIsThisFor: {
      en: 'For beginners with basic programming skills who want to become a Data Scientist or ML Engineer.',
      ru: 'Для новичков с базовыми навыками программирования, которые хотят стать дата-сайентистом или ML-инженером.',
    },
    syllabus: [
      {
        weeks: '0 (1 week)',
        title: {
          en: 'Mathematics Foundation',
          ru: 'Математическая база',
        },
        topics: {
          en: 'Linear algebra, statistics (distributions, hypothesis testing).',
          ru: 'Линейная алгебра, статистика (распределения, гипотезы).',
        },
      },
      {
        weeks: '1–2',
        title: {
          en: 'Python for DS',
          ru: 'Python для DS',
        },
        topics: {
          en: 'Pandas (grouping, merge, pivot), NumPy, visualization (Matplotlib, Seaborn, Plotly). EDA. Assignment: analyze a movie dataset.',
          ru: 'Pandas (группировки, merge, pivot), NumPy, визуализация (Matplotlib, Seaborn, Plotly). EDA. Задание: анализ датасета о фильмах.',
        },
      },
      {
        weeks: '3–5',
        title: {
          en: 'Classic Machine Learning',
          ru: 'Классическое ML',
        },
        topics: {
          en: 'Linear regression, logistic regression, decision trees, random forest, gradient boosting (XGBoost, LightGBM). Metrics (MAE, RMSE, AUC-ROC). Cross-validation, hyperparameter tuning (GridSearch, Optuna).',
          ru: 'Линейная регрессия, логистическая, деревья, случайный лес, градиентный бустинг (XGBoost, LightGBM). Метрики (MAE, RMSE, AUC-ROC). Кросс-валидация, подбор гиперпараметров (GridSearch, Optuna).',
        },
      },
      {
        weeks: '6–8',
        title: {
          en: 'Neural Networks',
          ru: 'Нейросети',
        },
        topics: {
          en: 'PyTorch (tensors, gradients), fully connected networks, CNN, RNN (LSTM). Transfer learning.',
          ru: 'PyTorch (тензоры, градиенты), полносвязные сети, CNN, RNN (LSTM). Трансферное обучение.',
        },
      },
      {
        weeks: '9–10',
        title: {
          en: 'NLP & Computer Vision',
          ru: 'NLP и компьютерное зрение',
        },
        topics: {
          en: 'Tokenization, TF-IDF, Word2Vec, BERT. OpenCV.',
          ru: 'Токенизация, TF-IDF, Word2Vec, BERT. OpenCV.',
        },
      },
      {
        weeks: '11–14',
        title: {
          en: 'Feature Engineering & Deployment',
          ru: 'Инженерия признаков и деплой',
        },
        topics: {
          en: 'Feature engineering, handling missing values. Model deployment (Flask/FastAPI, Docker, Streamlit). Final project: real estate price prediction with a web service.',
          ru: 'Инженерия признаков, обработка пропусков. Деплой моделей (Flask/FastAPI, Docker, Streamlit). Финальный проект: предсказание цен на недвижимость с веб-сервисом.',
        },
      },
    ],
    format: {
      en: 'Video lectures, Jupyter notebooks, weekly Q&A sessions.',
      ru: 'Видеолекции, Jupyter-ноутбуки, еженедельные Q&A.',
    },
    bonuses: {
      en: [
        'Access to Kaggle competitions with mentors',
        'Review of top solutions',
        'Portfolio recommendations',
      ],
      ru: [
        'Доступ к Kaggle-соревнованиям с менторами',
        'Разбор лучших решений',
        'Рекомендации по портфолио',
      ],
    },
    result: {
      en: 'Full Data Science cycle — from data to production.',
      ru: 'Полный цикл Data Science — от данных до продакшена.',
    },
    duration: {
      en: '14 weeks',
      ru: '14 недель',
    },
    theoryHours: 56,
    practiceHours: 56,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '#1', label: 'Most promising career' },
        { value: '$3,000+', label: 'Data Scientist salary' },
        { value: 'Google', label: 'Meta • OpenAI • Tesla' },
      ],
      ru: [
        { value: '№1', label: 'Самая перспективная профессия' },
        { value: 'от 250 000 ₽', label: 'Зарплата дата-сайентиста' },
        { value: 'Google', label: 'Meta • OpenAI • Tesla' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Hottest Field in Tech', desc: 'AI/ML is transforming every industry — demand for data scientists has grown 5x in 3 years.' },
        { title: 'Math to Production', desc: 'Full-cycle course: from linear algebra and statistics to deploying neural networks.' },
        { title: 'Endless Applications', desc: 'Healthcare, finance, e-commerce, self-driving cars — AI is everywhere.' },
        { title: 'Salary Skyrockets', desc: 'Data Scientists earn from $3,000 with experience. Senior roles reach $10,000+.' },
      ],
      ru: [
        { title: 'Самое горячее направление', desc: 'AI/ML меняет каждую индустрию — спрос на дата-сайентистов вырос в 5 раз за 3 года.' },
        { title: 'От математики до деплоя', desc: 'Полный цикл: от линейной алгебры и статистики до развёртывания нейросетей.' },
        { title: 'Безграничные применения', desc: 'Медицина, финансы, e-commerce, беспилотные авто — AI повсюду.' },
        { title: 'Зарплаты взлетают', desc: 'Дата-сайентисты зарабатывают от $3,000 с опытом. Senior — от $10,000.' },
      ],
    },
    techStack: [
      { icon: '🐍', name: 'Python', desc: 'Primary language for data science and ML.' },
      { icon: '🐼', name: 'Pandas', desc: 'Data manipulation and analysis library.' },
      { icon: '🔢', name: 'NumPy', desc: 'Numerical computing for large arrays.' },
      { icon: '🤖', name: 'Scikit-learn', desc: 'Classic ML algorithms made simple.' },
      { icon: '🔥', name: 'PyTorch', desc: 'Deep learning framework for neural networks.' },
      { icon: '📓', name: 'Jupyter', desc: 'Interactive notebooks for data exploration.' },
      { icon: '📊', name: 'Matplotlib', desc: 'Data visualization and plotting library.' },
      { icon: '⚡', name: 'XGBoost', desc: 'Gradient boosting for high-performance ML.' },
      { icon: '🧪', name: 'Flask', desc: 'Deploy ML models as web services.' },
      { icon: '🐳', name: 'Docker', desc: 'Package and deploy ML applications.' },
      { icon: '🧠', name: 'BERT', desc: 'NLP model for text understanding.' },
      { icon: '👁️', name: 'OpenCV', desc: 'Computer vision library for image processing.' },
    ],
  },
  {
    id: 'qa-automation',
    title: {
      en: 'Test Automation (QA Automation)',
      ru: 'Автоматизация тестирования (QA Automation)',
    },
    tags: ['qa', 'python'],
    price: 302,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Master QA automation in 8 weeks — from Python basics to full test suites with Selenium, API tests, and CI integration. Boost your salary by 30–40%.',
      ru: 'Освойте QA-автоматизацию за 8 недель — от основ Python до полных наборов тестов с Selenium, API-тестами и интеграцией с CI. Повысьте зарплату на 30–40%.',
    },
    hook: {
      en: 'A QA automation engineer earns 30–40% more than a manual QA. Master Python, Selenium, and accelerate your career in 2 months.',
      ru: 'QA-автоматизатор получает на 30–40% больше ручного коллеги. Освойте Python, Selenium и ускорьте карьеру за 2 месяца.',
    },
    whoIsThisFor: {
      en: 'For manual QA engineers and beginners who want to transition into test automation.',
      ru: 'Для ручных тестировщиков и новичков, которые хотят перейти в автоматизацию тестирования.',
    },
    syllabus: [
      {
        weeks: '1–2',
        title: {
          en: 'Python Basics for Tests',
          ru: 'Основы Python для тестов',
        },
        topics: {
          en: 'Types, conditions, loops, functions, classes. File handling. Writing simple asserts.',
          ru: 'Типы, условия, циклы, функции, классы. Работа с файлами. Написание простых assert.',
        },
      },
      {
        weeks: '3–4',
        title: {
          en: 'Selenium WebDriver',
          ru: 'Selenium WebDriver',
        },
        topics: {
          en: 'Locators (ID, CSS, XPath), form interaction, waits (explicit/implicit). Page Object Model. Assignment: automate login and add-to-cart flow.',
          ru: 'Локаторы (ID, CSS, XPath), взаимодействие с формами, ожидания (явные/неявные). Page Object Model. Задание: автотест авторизации и добавления товара в корзину.',
        },
      },
      {
        weeks: '5',
        title: {
          en: 'API Testing',
          ru: 'API-тестирование',
        },
        topics: {
          en: 'Requests library, status code checks, JSON schema validation. Postman (automated tests, collections).',
          ru: 'Requests, проверка статусов, JSON-схемы. Postman (автотесты, коллекции).',
        },
      },
      {
        weeks: '6–7',
        title: {
          en: 'PyTest & CI',
          ru: 'PyTest и CI',
        },
        topics: {
          en: 'Fixtures, parametrization, marks, Allure reports, screenshots. CI integration (Jenkins, GitLab CI).',
          ru: 'Фикстуры, параметризация, марки, Allure-отчёты, скриншоты. Интеграция с CI (Jenkins, GitLab CI).',
        },
      },
      {
        weeks: '8',
        title: {
          en: 'Final Project',
          ru: 'Финальный проект',
        },
        topics: {
          en: 'Full test suite for an online store (UI + API + DB), nightly run, email reports.',
          ru: 'Полный набор автотестов для интернет-магазина (UI + API + БД), ночной прогон, отчёты на почту.',
        },
      },
    ],
    format: {
      en: 'Video lessons + webinars with homework review + code review.',
      ru: 'Видеоуроки + вебинар с разбором ДЗ + код-ревью.',
    },
    bonuses: {
      en: [
        'Test templates',
        'Test environment with intentional bugs',
        'QA Automation Engineer certificate',
      ],
      ru: [
        'Шаблоны тестов',
        'Тестовый стенд с багами',
        'Сертификат QA Automation Engineer',
      ],
    },
    result: {
      en: 'Automated testing of any web application.',
      ru: 'Автоматизация тестирования любых веб-приложений.',
    },
    duration: {
      en: '8 weeks',
      ru: '8 недель',
    },
    theoryHours: 32,
    practiceHours: 32,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '+40%', label: 'Salary vs manual QA' },
        { value: '2 months', label: 'To automation mastery' },
        { value: 'Selenium', label: 'PyTest • CI/CD' },
      ],
      ru: [
        { value: '+40%', label: 'К зарплате ручного тестировщика' },
        { value: '2 месяца', label: 'До автоматизатора' },
        { value: 'Selenium', label: 'PyTest • CI/CD' },
      ],
    },
    whyFeatures: {
      en: [
        { title: '30-40% More', desc: 'Automation QA earns 30-40% more than manual testing. Faster career growth.' },
        { title: 'Python + Selenium', desc: 'Master the industry-standard stack for test automation from scratch.' },
        { title: 'CI/CD Built-in', desc: 'Integrate tests into pipelines — automatic verification for every code change.' },
        { title: 'Never Boring', desc: 'Write code, find bugs, build frameworks. Every day is a new puzzle.' },
      ],
      ru: [
        { title: '+30-40% к доходу', desc: 'QA-автоматизатор получает на 30-40% больше ручного тестировщика. Быстрый карьерный рост.' },
        { title: 'Python + Selenium', desc: 'Освойте индустриальный стандарт для автоматизации тестирования с нуля.' },
        { title: 'CI/CD из коробки', desc: 'Интегрируйте тесты в пайплайны — автоматическая проверка каждого изменения кода.' },
        { title: 'Никогда не скучно', desc: 'Пишите код, ищите баги, стройте фреймворки. Каждый день — новая задача.' },
      ],
    },
    techStack: [
      { icon: '🐍', name: 'Python', desc: 'Primary language for test automation.' },
      { icon: '🌐', name: 'Selenium', desc: 'Browser automation for web testing.' },
      { icon: '✅', name: 'PyTest', desc: 'Testing framework with fixtures and parametrization.' },
      { icon: '📮', name: 'Requests', desc: 'HTTP library for API test automation.' },
      { icon: '📬', name: 'Postman', desc: 'API testing with automated collections.' },
      { icon: '🔧', name: 'Jenkins', desc: 'CI/CD server for automated test runs.' },
      { icon: '🔄', name: 'GitLab CI', desc: 'Integrated pipelines with test stages.' },
      { icon: '📊', name: 'Allure', desc: 'Rich test reporting and dashboards.' },
      { icon: '🗄️', name: 'SQL', desc: 'Database verification in test scenarios.' },
      { icon: '📐', name: 'Page Object', desc: 'Design pattern for maintainable tests.' },
    ],
  },
  {
    id: 'telegram-bots',
    title: {
      en: 'Telegram Bot Development on Python',
      ru: 'Разработка телеграм-ботов на Python',
    },
    tags: ['python', 'backend'],
    price: 142,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Build Telegram bots from scratch in 4 weeks. Learn async programming with aiogram, create a bot with a shopping cart and payments, and start taking orders from 50,000 ₽.',
      ru: 'Создавайте Telegram-ботов с нуля за 4 недели. Освойте асинхронное программирование на aiogram, создайте бота с корзиной и оплатой, начните брать заказы от 50 000 ₽.',
    },
    hook: {
      en: 'Bots are an easy way to get into IT and start earning. In a month, you\'ll build a bot for an online store with payments — and can take orders from $700.',
      ru: 'Боты — простой способ войти в IT и начать зарабатывать. За месяц вы создадите бота для интернет-магазина с оплатой — и сможете брать заказы от 50 000 ₽.',
    },
    whoIsThisFor: {
      en: 'For beginners who want to learn Python through practice and build real commercial Telegram bots.',
      ru: 'Для новичков, которые хотят изучить Python на практике и создавать реальные коммерческие Telegram-боты.',
    },
    syllabus: [
      {
        weeks: '1',
        title: {
          en: 'Introduction to aiogram',
          ru: 'Основы aiogram',
        },
        topics: {
          en: 'aiogram (async). Command handling, text processing, callback queries. Inline buttons, keyboards. Assignment: quiz bot.',
          ru: 'aiogram (асинхронный). Обработка команд, текста, callback-запросов. Инлайн-кнопки, клавиатуры. Задание: бот-викторина.',
        },
      },
      {
        weeks: '2',
        title: {
          en: 'FSM & Keyboards',
          ru: 'FSM и клавиатуры',
        },
        topics: {
          en: 'State machine (FSM), validation. ReplyKeyboard, InlineKeyboard. File handling (photos, documents).',
          ru: 'Машина состояний (FSM), валидация. ReplyKeyboard, InlineKeyboard. Работа с файлами (фото, документы).',
        },
      },
      {
        weeks: '3',
        title: {
          en: 'Databases & APIs',
          ru: 'Базы данных и API',
        },
        topics: {
          en: 'Connecting a database (SQLite, asyncpg), storing users and orders. Integration with external APIs (weather, exchange rates).',
          ru: 'Подключение БД (SQLite, asyncpg), хранение пользователей и заказов. Интеграция с внешними API (погода, курсы).',
        },
      },
      {
        weeks: '4',
        title: {
          en: 'Payments & Admin Panel',
          ru: 'Платежи и админ-панель',
        },
        topics: {
          en: 'Stripe payments (invoice, status check). Admin panel (mailings, blocking). Final project: a store bot with cart and payments.',
          ru: 'Платежи Stripe (счёт, проверка статуса). Админ-панель (рассылки, блокировка). Финальный проект: бот для магазина с корзиной и оплатой.',
        },
      },
    ],
    format: {
      en: 'Recorded lessons + assignments + live error review sessions.',
      ru: 'Записанные уроки + задания + разбор ошибок в эфире.',
    },
    bonuses: {
      en: [
        'Ready-made code template',
        'Chat with a mentor',
        'Deployment tips',
      ],
      ru: [
        'Готовый код-шаблон',
        'Чат с наставником',
        'Советы по деплою',
      ],
    },
    result: {
      en: 'A production-ready commercial bot and experience with async programming.',
      ru: 'Полноценный коммерческий бот и опыт асинхронного программирования.',
    },
    duration: {
      en: '4 weeks',
      ru: '4 недели',
    },
    theoryHours: 16,
    practiceHours: 16,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '$700+', label: 'Per bot project' },
        { value: '500M+', label: 'Telegram users' },
        { value: 'aiogram', label: 'Stripe • SQLite' },
      ],
      ru: [
        { value: 'от 50 000 ₽', label: 'За проект бота' },
        { value: '500M+', label: 'Пользователей Telegram' },
        { value: 'aiogram', label: 'Stripe • SQLite' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Quick Money', desc: 'Build a Telegram bot in 4 weeks and start freelancing from $700 per project.' },
        { title: 'Python Power', desc: 'Async Python with aiogram — modern, fast, and production-ready bot development.' },
        { title: 'Real Commerce', desc: 'Shopping carts, payment integration, admin panels — build real commercial products.' },
        { title: 'Easy Entry', desc: 'No complex infrastructure needed. Deploy a bot and it works immediately.' },
      ],
      ru: [
        { title: 'Быстрый заработок', desc: 'Создайте Telegram-бота за 4 недели и начните фрилансить от 50 000 ₽ за проект.' },
        { title: 'Python в деле', desc: 'Асинхронный Python на aiogram — современная, быстрая и готовая к продакшену разработка.' },
        { title: 'Реальная коммерция', desc: 'Корзины, интеграция платежей, админ-панели — создавайте настоящие коммерческие продукты.' },
        { title: 'Лёгкий вход', desc: 'Не нужна сложная инфраструктура. Задеплоили бота — и он сразу работает.' },
      ],
    },
    techStack: [
      { icon: '🐍', name: 'Python', desc: 'Simple language for rapid bot development.' },
      { icon: '🤖', name: 'aiogram', desc: 'Async framework for Telegram Bot API.' },
      { icon: '🗃️', name: 'SQLite', desc: 'Lightweight embedded database for bots.' },
      { icon: '🐘', name: 'asyncpg', desc: 'Async PostgreSQL driver for Python.' },
      { icon: '💳', name: 'Stripe API', desc: 'Payment processing for Telegram bots.' },
      { icon: '🔀', name: 'Git', desc: 'Version control for bot projects.' },
      { icon: '🐳', name: 'Docker', desc: 'Deploy bots in containers.' },
      { icon: '⚙️', name: 'FSM', desc: 'Finite State Machine for complex dialogs.' },
    ],
  },
  {
    id: 'algorithms-data-structures',
    title: {
      en: 'Algorithms and Data Structures',
      ru: 'Алгоритмы и структуры данных',
    },
    tags: ['algorithms'],
    price: 198,
    currency: 'USD',
    level: {
      en: 'Junior',
      ru: 'Junior',
    },
    projects: 0,
    excerpt: {
      en: 'Master algorithms and data structures in 8 weeks. Solve 80+ LeetCode-style problems, ace top company interviews, and learn to think like a developer.',
      ru: 'Освойте алгоритмы и структуры данных за 8 недель. Решите 80+ задач уровня LeetCode, пройдите собеседования в топовые компании и научитесь мыслить как разработчик.',
    },
    hook: {
      en: 'Interviews at top companies are won through algorithms. We will cover 80+ LeetCode-level problems and teach you to think like a developer.',
      ru: 'Собеседования в топовые компании решаются за счёт алгоритмов. Разберём 80+ задач уровня LeetCode, научим мыслить как разработчик.',
    },
    whoIsThisFor: {
      en: 'For junior developers preparing for interviews at top tech companies.',
      ru: 'Для Junior-разработчиков, готовящихся к собеседованиям в топовые IT-компании.',
    },
    syllabus: [
      {
        weeks: '1–2',
        title: {
          en: 'Arrays, Strings & Hashing',
          ru: 'Массивы, строки и хеш-таблицы',
        },
        topics: {
          en: 'Sliding window, two pointers, hash tables. Problems: two sum, array intersection.',
          ru: 'Скользящее окно, два указателя, хеш-таблицы. Задачи: сумма двух чисел, пересечение массивов.',
        },
      },
      {
        weeks: '3–4',
        title: {
          en: 'Linked Lists, Stacks & Queues',
          ru: 'Связные списки, стеки и очереди',
        },
        topics: {
          en: 'Singly/doubly linked lists, stacks, queues, deque. Reverse, cycle detection, merge.',
          ru: 'Связные списки (одно/двусвязные), стеки, очереди, дек. Разворот, поиск цикла, слияние.',
        },
      },
      {
        weeks: '5–6',
        title: {
          en: 'Trees & Graphs',
          ru: 'Деревья и графы',
        },
        topics: {
          en: 'Trees (BST, DFS/BFS traversals, AVL), graphs (BFS, DFS, Dijkstra, topological sort).',
          ru: 'Деревья (BST, обходы DFS/BFS, AVL), графы (BFS, DFS, Дейкстра, топологическая сортировка).',
        },
      },
      {
        weeks: '7–8',
        title: {
          en: 'DP, Greedy & Sorting',
          ru: 'Динамическое программирование',
        },
        topics: {
          en: 'Dynamic programming (knapsack, LIS, edit distance). Greedy algorithms. Sorting. Asymptotic analysis (Big O).',
          ru: 'Динамическое программирование (рюкзак, НИП, редакционное расстояние). Жадные алгоритмы. Сортировки. Асимптотический анализ (Big O).',
        },
      },
    ],
    format: {
      en: 'Video lectures + daily problems + webinars.',
      ru: 'Видеолекции + ежедневные задачи + вебинары.',
    },
    bonuses: {
      en: [
        '2 mock interviews',
        'Problem collection with solutions (PDF)',
        'Group review of hard problems',
      ],
      ru: [
        '2 симуляции собеседования',
        'Сборник задач с решениями (PDF)',
        'Групповой разбор сложных задач',
      ],
    },
    result: {
      en: 'Confident solving of Medium/Hard level problems.',
      ru: 'Уверенное решение задач уровня Medium/Hard.',
    },
    duration: {
      en: '8 weeks',
      ru: '8 недель',
    },
    theoryHours: 32,
    practiceHours: 32,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '80+', label: 'LeetCode problems' },
        { value: 'FAANG', label: 'Interview prep' },
        { value: 'Medium/Hard', label: 'Problem mastery' },
      ],
      ru: [
        { value: '80+', label: 'Задач уровня LeetCode' },
        { value: 'FAANG', label: 'Подготовка к собеседованию' },
        { value: 'Medium/Hard', label: 'Уровень решения задач' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Interview Key', desc: '80% of FAANG interviews are algorithms. This course is your cheat code.' },
        { title: '80+ Problems', desc: 'Solve 80+ LeetCode-style problems — from easy to hard with full walkthroughs.' },
        { title: 'Think Like a Dev', desc: 'Learn computational thinking — break down any problem into code.' },
        { title: 'Any Language', desc: 'Language-agnostic. Use Python, Java, JavaScript — whatever you interview in.' },
      ],
      ru: [
        { title: 'Ключ к собеседованию', desc: '80% собеседований в FAANG — это алгоритмы. Этот курс — ваш ключ.' },
        { title: '80+ задач', desc: 'Решите 80+ задач уровня LeetCode — от лёгких до сложных с полным разбором.' },
        { title: 'Мыслить как разработчик', desc: 'Вычислительное мышление — разбивайте любую задачу на код.' },
        { title: 'Любой язык', desc: 'Не зависит от языка. Используйте Python, Java, JavaScript — на чём проходите собес.' },
      ],
    },
    techStack: [
      { icon: '🐍', name: 'Python', desc: 'Primary language for algorithm problems.' },
      { icon: '📊', name: 'Big O', desc: 'Complexity analysis for algorithm efficiency.' },
      { icon: '📦', name: 'Data Structures', desc: 'Arrays, linked lists, trees, graphs, heaps.' },
      { icon: '🔍', name: 'Algorithms', desc: 'Search, sort, and traversal techniques.' },
      { icon: '🧩', name: 'Dynamic Programming', desc: 'Optimize recursive solutions with memoization.' },
      { icon: '🕸️', name: 'Graphs', desc: 'BFS, DFS, Dijkstra, topological sort.' },
      { icon: '🌳', name: 'Trees', desc: 'BST, AVL, tries, and tree traversals.' },
      { icon: '⚡', name: 'Sorting', desc: 'Quick, merge, heap sort and their applications.' },
    ],
  },
  {
    id: 'backend-nestjs',
    title: {
      en: 'Backend on Node.js (NestJS)',
      ru: 'Бэкенд на Node.js (NestJS)',
    },
    tags: ['backend', 'typescript'],
    price: 296,
    currency: 'USD',
    level: {
      en: 'Junior+',
      ru: 'Junior+',
    },
    projects: 1,
    excerpt: {
      en: 'Master backend development with NestJS in 10 weeks. Build an online store with REST, GraphQL, WebSockets, payments, and chat. Double your rate.',
      ru: 'Освойте бэкенд-разработку на NestJS за 10 недель. Создайте интернет-магазин с REST, GraphQL, WebSockets, оплатой и чатом. Увеличьте чек вдвое.',
    },
    hook: {
      en: 'Node.js is fast, scalable, and in demand. NestJS provides Spring-level architecture. Learn in 10 weeks and double your rate.',
      ru: 'Node.js — быстро, масштабируемо и востребовано. NestJS даёт архитектуру на уровне Spring. Научитесь за 10 недель и увеличите чек в два раза.',
    },
    whoIsThisFor: {
      en: 'For JavaScript/TypeScript developers who want to master backend development with NestJS.',
      ru: 'Для JavaScript/TypeScript-разработчиков, которые хотят освоить бэкенд-разработку на NestJS.',
    },
    syllabus: [
      {
        weeks: '1–2',
        title: {
          en: 'TypeScript & Node.js Core',
          ru: 'TypeScript и основы Node.js',
        },
        topics: {
          en: 'Types, interfaces, classes, decorators, generics. Node.js basics (modules, event loop).',
          ru: 'Типы, интерфейсы, классы, декораторы, generics. Основы Node.js (модули, событийный цикл).',
        },
      },
      {
        weeks: '3–4',
        title: {
          en: 'NestJS Core',
          ru: 'NestJS core',
        },
        topics: {
          en: 'Controllers, providers, modules, DI. Request handling, DTO, validation (class-validator).',
          ru: 'Контроллеры, провайдеры, модули, DI. Обработка запросов, DTO, валидация (class-validator).',
        },
      },
      {
        weeks: '5–6',
        title: {
          en: 'Databases with TypeORM',
          ru: 'Работа с БД через TypeORM',
        },
        topics: {
          en: 'TypeORM (entities, relations, migrations), PostgreSQL.',
          ru: 'TypeORM (сущности, связи, миграции), PostgreSQL.',
        },
      },
      {
        weeks: '7–8',
        title: {
          en: 'Authentication & Authorization',
          ru: 'Аутентификация и авторизация',
        },
        topics: {
          en: 'Passport, JWT, roles. Modular architecture.',
          ru: 'Passport, JWT, роли. Разделение на модули.',
        },
      },
      {
        weeks: '9–10',
        title: {
          en: 'GraphQL, WebSockets & Final Project',
          ru: 'GraphQL, WebSockets и финальный проект',
        },
        topics: {
          en: 'GraphQL (Code First), WebSockets (chat). Testing (Jest, Supertest). Final project: online store (REST + GraphQL) with cart, payments, and chat.',
          ru: 'GraphQL (Code First), WebSockets (чат). Тестирование (Jest, Supertest). Финальный проект: интернет-магазин (REST + GraphQL) с корзиной, оплатой и чатом.',
        },
      },
    ],
    format: {
      en: 'Video lectures + assignments + Zoom meetings on Saturdays.',
      ru: 'Видеолекции + задания + Zoom-встречи по субботам.',
    },
    bonuses: {
      en: [
        'Repository with boilerplates',
        'Deployment consultations',
        'Weekly code reviews',
      ],
      ru: [
        'Репозиторий с boilerplate\'ами',
        'Консультации по деплою',
        'Еженедельные код-ревью',
      ],
    },
    result: {
      en: 'Building a backend of any complexity on NestJS.',
      ru: 'Построение бэкенда любой сложности на NestJS.',
    },
    duration: {
      en: '10 weeks',
      ru: '10 недель',
    },
    theoryHours: 40,
    practiceHours: 40,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '#1', label: 'Backend platform' },
        { value: '2x', label: 'Rate increase' },
        { value: 'GraphQL', label: 'REST • WebSockets' },
      ],
      ru: [
        { value: '№1', label: 'Бэкенд-платформа' },
        { value: 'x2', label: 'Увеличение чека' },
        { value: 'GraphQL', label: 'REST • WebSockets' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Modern Backend', desc: 'NestJS provides Spring-level architecture with TypeScript — enterprise-ready from day one.' },
        { title: 'TypeScript Everywhere', desc: 'Full-stack TypeScript — share types between frontend and backend seamlessly.' },
        { title: 'All APIs', desc: 'REST, GraphQL, WebSockets — master every API paradigm in one course.' },
        { title: 'Double Your Rate', desc: 'Backend developers with NestJS earn 2x more than frontend-only developers.' },
      ],
      ru: [
        { title: 'Современный бэкенд', desc: 'NestJS даёт архитектуру уровня Spring на TypeScript — enterprise-ready с первого дня.' },
        { title: 'TypeScript везде', desc: 'Full-stack TypeScript — делите типы между фронтендом и бэкендом без проблем.' },
        { title: 'Все виды API', desc: 'REST, GraphQL, WebSockets — освойте все парадигмы API на одном курсе.' },
        { title: 'Вдвое выше ставка', desc: 'Бэкенд-разработчики на NestJS зарабатывают в 2 раза больше фронтендеров.' },
      ],
    },
    techStack: [
      { icon: '📘', name: 'TypeScript', desc: 'Typed superset of JavaScript for robust apps.' },
      { icon: '🟢', name: 'Node.js', desc: 'JavaScript runtime for server-side development.' },
      { icon: '🏗️', name: 'NestJS', desc: 'Progressive Node.js framework for scalable backends.' },
      { icon: '🗃️', name: 'TypeORM', desc: 'ORM for TypeScript with PostgreSQL support.' },
      { icon: '🐘', name: 'PostgreSQL', desc: 'Relational database for production data.' },
      { icon: '🔮', name: 'GraphQL', desc: 'Flexible API query language for modern apps.' },
      { icon: '🔌', name: 'WebSockets', desc: 'Real-time bidirectional communication.' },
      { icon: '🛡️', name: 'JWT', desc: 'Token-based authentication for APIs.' },
      { icon: '🐳', name: 'Docker', desc: 'Containerization for consistent deployments.' },
      { icon: '🧪', name: 'Jest', desc: 'Testing framework for Node.js applications.' },
    ],
  },
  {
    id: 'figma-web-design',
    title: {
      en: 'Figma: Web Design from Scratch',
      ru: 'Figma: Веб-дизайн с нуля',
    },
    tags: ['design'],
    price: 164,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 2,
    excerpt: {
      en: 'Start your design career in 3 weeks. Learn Figma — the industry standard — and create layouts that clients will buy.',
      ru: 'Начните карьеру в дизайне уже через 3 недели. Figma — стандарт индустрии: научитесь работать так, чтобы ваши макеты покупали.',
    },
    hook: {
      en: 'Start your design career in just 3 weeks. Figma is the industry standard, and we\'ll teach you to create layouts that sell.',
      ru: 'Начните карьеру в дизайне уже через 3 недели. Figma — стандарт индустрии, и мы научим вас работать так, чтобы ваши макеты покупали.',
    },
    whoIsThisFor: {
      en: 'For beginners who want to become a web designer with no prior experience.',
      ru: 'Для новичков без опыта, которые хотят стать веб-дизайнерами.',
    },
    syllabus: [
      {
        weeks: '1',
        title: {
          en: 'Interface & Components',
          ru: 'Интерфейс и компоненты',
        },
        topics: {
          en: 'Interface, frames, layers, shapes, text. Auto layout (properties, spacing). Styles and components (create, publish). Assignment: product card.',
          ru: 'Интерфейс, фреймы, слои, фигуры, текст. Автолейауты (свойства, отступы). Стили и компоненты (создание, публикация). Задание: карточка товара.',
        },
      },
      {
        weeks: '2',
        title: {
          en: 'Prototyping & Grids',
          ru: 'Прототипирование и сетки',
        },
        topics: {
          en: 'Prototyping (transitions, animation, smart animate). Grids (column, modular). Plugins (Unsplash, Iconify). Assignment: mobile delivery app prototype.',
          ru: 'Прототипирование (переходы, анимация, smart animate). Сетки (колоночные, модульные). Плагины (Unsplash, Iconify). Задание: прототип мобильного приложения доставки.',
        },
      },
      {
        weeks: '3',
        title: {
          en: 'Responsive Design & Handoff',
          ru: 'Адаптив и передача разработчикам',
        },
        topics: {
          en: 'Responsive (desktop, tablet, mobile). Building a landing page from scratch. Developer handoff (export, Zeplin/Inspect). Final project: a portfolio of two layouts.',
          ru: 'Адаптив (десктоп, планшет, мобилка). Создание лендинга с нуля. Подготовка к передаче разработчикам (экспорт, Zeplin/Inspect). Финальный проект: портфолио из двух макетов.',
        },
      },
    ],
    format: {
      en: 'Screen-recorded video lessons + practice + chat review.',
      ru: 'Видео-уроки с экраном + практика + проверка в чате.',
    },
    bonuses: {
      en: [
        'UI Kit templates',
        'Access to a designers community',
        'Certificate',
      ],
      ru: [
        'Шаблоны UI Kit\'ов',
        'Доступ к сообществу дизайнеров',
        'Сертификат',
      ],
    },
    result: {
      en: 'Creating beautiful and functional layouts for websites and apps.',
      ru: 'Создание красивых и функциональных макетов для сайтов и приложений.',
    },
    duration: {
      en: '3 weeks',
      ru: '3 недели',
    },
    theoryHours: 12,
    practiceHours: 12,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '3 weeks', label: 'To first layout' },
        { value: '#1', label: 'Design tool' },
        { value: '2 portfolio', label: 'Projects' },
      ],
      ru: [
        { value: '3 недели', label: 'До первого макета' },
        { value: '№1', label: 'Инструмент дизайна' },
        { value: '2 проекта', label: 'В портфолио' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Industry Standard', desc: 'Figma is used by 80%+ of designers worldwide. It is the new Photoshop for UI.' },
        { title: '3 Weeks to First Layout', desc: 'Start from zero and create your first client-ready layout in just 3 weeks.' },
        { title: 'All-in-One', desc: 'Design, prototype, collaborate, hand off — everything in one browser tool.' },
        { title: 'Designers Wanted', desc: 'Companies are desperate for good web designers. Get clients from $500 per project.' },
      ],
      ru: [
        { title: 'Стандарт индустрии', desc: 'Figma используют 80%+ дизайнеров мира. Это новый Photoshop для UI.' },
        { title: '3 недели до макета', desc: 'Начните с нуля и создайте первый готовый макет за 3 недели.' },
        { title: 'Всё в одном', desc: 'Дизайн, прототипирование, коллаборация, передача разработчикам — всё в одном браузерном инструменте.' },
        { title: 'Дизайнеры нужны', desc: 'Компании отчаянно ищут хороших веб-дизайнеров. Заказы от $500 за проект.' },
      ],
    },
    techStack: [
      { icon: '🎨', name: 'Figma', desc: 'Industry-standard interface design tool.' },
      { icon: '📐', name: 'Auto Layout', desc: 'Responsive design with flexible constraints.' },
      { icon: '🧩', name: 'Components', desc: 'Reusable UI elements with variants.' },
      { icon: '🔄', name: 'Prototyping', desc: 'Interactive flows with transitions.' },
      { icon: '📏', name: 'Grids', desc: 'Column and modular grid systems.' },
      { icon: '🔌', name: 'Plugins', desc: 'Extend Figma with community plugins.' },
      { icon: '📱', name: 'Responsive Design', desc: 'Adapt layouts for desktop, tablet, mobile.' },
      { icon: '📤', name: 'Zeplin/Inspect', desc: 'Developer handoff with specs and assets.' },
    ],
  },
  {
    id: 'ui-ux-design',
    title: {
      en: 'UI/UX Interface Design',
      ru: 'UI/UX дизайн интерфейсов',
    },
    tags: ['design'],
    price: 269,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Master the full UX cycle in 6 weeks: research, prototyping, testing, and UI design. Become a full-cycle designer who creates products users love.',
      ru: 'Освойте полный UX-цикл за 6 недель: исследования, прототипирование, тестирование и UI-дизайн. Станьте дизайнером полного цикла, создающим продукты, которые любят пользователи.',
    },
    hook: {
      en: 'Products that users love start with UX. Master research, prototyping, and testing — become a full-cycle designer.',
      ru: 'Продукты, которые любят пользователи, начинаются с UX. Освойте исследования, прототипирование и тестирование — станьте дизайнером полного цикла.',
    },
    whoIsThisFor: {
      en: 'For beginners and graphic designers who want to master UX research and UI design.',
      ru: 'Для новичков и графических дизайнеров, которые хотят освоить UX-исследования и UI-дизайн.',
    },
    syllabus: [
      {
        weeks: '1–2',
        title: {
          en: 'User Research',
          ru: 'Исследование пользователей',
        },
        topics: {
          en: 'In-depth interviews, surveys, competitive usability analysis. CJM and empathy map.',
          ru: 'Глубинные интервью, опросы, юзабилити-анализ конкурентов. CJM и карта эмпатии.',
        },
      },
      {
        weeks: '3–4',
        title: {
          en: 'Information Architecture & Wireframes',
          ru: 'Информационная архитектура и вайрфреймы',
        },
        topics: {
          en: 'Information architecture. Low-fidelity wireframes (Figma/Balsamiq). Card sorting. Mid-fidelity prototyping.',
          ru: 'Информационная архитектура. Вайрфреймы (лоу-фиделити) в Figma/Balsamiq. Карточковая сортировка. Прототипирование средней детализации.',
        },
      },
      {
        weeks: '5',
        title: {
          en: 'UI Design & Guidelines',
          ru: 'UI-дизайн и гайдлайны',
        },
        topics: {
          en: 'UI guidelines (Material, Human Interface). Color, typography, icons, grid. Building a UI Kit.',
          ru: 'Гайдлайны (Material, Human Interface). Цвет, типографика, иконки, сетка. Разработка UI Kit\'а.',
        },
      },
      {
        weeks: '6',
        title: {
          en: 'Usability Testing & Final Project',
          ru: 'Юзабилити-тестирование и финал',
        },
        topics: {
          en: 'Usability testing, analysis of results, iterations. Final project defense — mobile app design (fitness tracker or online school).',
          ru: 'Юзабилити-тестирование, анализ результатов, итерации. Защита финального проекта — дизайн для мобильного приложения (фитнес-трекер или онлайн-школа).',
        },
      },
    ],
    format: {
      en: 'Video lectures, group Zoom sessions, mentor feedback.',
      ru: 'Видеолекции, групповые сессии в Zoom, обратная связь от ментора.',
    },
    bonuses: {
      en: [
        'Interview templates',
        'Article and case study database',
        'Group workshops',
      ],
      ru: [
        'Шаблоны для интервью',
        'База статей и кейсов',
        'Групповые воркшопы',
      ],
    },
    result: {
      en: 'Ability to create user-friendly, user-tested interfaces.',
      ru: 'Умение создавать удобные, проверенные пользователями интерфейсы.',
    },
    duration: {
      en: '6 weeks',
      ru: '6 недель',
    },
    theoryHours: 24,
    practiceHours: 24,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '6 weeks', label: 'Full UX cycle' },
        { value: 'Research', label: 'To usability testing' },
        { value: '1 portfolio', label: 'Project' },
      ],
      ru: [
        { value: '6 недель', label: 'Полный UX-цикл' },
        { value: 'Исследования', label: 'До юзабилити-тестов' },
        { value: '1 проект', label: 'В портфолио' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'User-First', desc: 'Products that users love start with UX research. Master the full cycle in 6 weeks.' },
        { title: 'Research → Design → Test', desc: 'Learn to research user needs, design solutions, and validate with real tests.' },
        { title: 'High Earning', desc: 'Senior UI/UX designers earn $5,000+/month. One of the fastest-growing design fields.' },
        { title: 'Creative + Analytical', desc: 'Combine creativity with psychology and data. Design products that truly matter.' },
      ],
      ru: [
        { title: 'В центре — пользователь', desc: 'Продукты, которые любят, начинаются с UX-исследований. Освойте полный цикл за 6 недель.' },
        { title: 'Исследование → Дизайн → Тест', desc: 'Изучайте потребности, создавайте решения и проверяйте на реальных тестах.' },
        { title: 'Высокий доход', desc: 'Senior UI/UX дизайнеры зарабатывают от $5,000/мес. Одно из самых быстрорастущих направлений.' },
        { title: 'Креатив + аналитика', desc: 'Сочетайте творчество с психологией и данными. Создавайте продукты, которые меняют жизни.' },
      ],
    },
    techStack: [
      { icon: '🎨', name: 'Figma', desc: 'Design tool for wireframes and prototypes.' },
      { icon: '🔍', name: 'User Research', desc: 'Interviews, surveys, and competitive analysis.' },
      { icon: '🗺️', name: 'CJM', desc: 'Customer journey mapping for user experience.' },
      { icon: '📝', name: 'Wireframes', desc: 'Low-fidelity layouts for early validation.' },
      { icon: '🔄', name: 'Prototyping', desc: 'Interactive prototypes for user testing.' },
      { icon: '🧩', name: 'UI Kit', desc: 'Design system with colors, typography, components.' },
      { icon: '✅', name: 'Usability Testing', desc: 'Test interfaces with real users.' },
      { icon: '📐', name: 'Information Architecture', desc: 'Structure content for intuitive navigation.' },
    ],
  },
  {
    id: 'photoshop-pro',
    title: {
      en: 'Adobe Photoshop: From Basics to Pro',
      ru: 'Adobe Photoshop: От основ до Pro',
    },
    tags: ['design'],
    price: 132,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Master Photoshop in 4 weeks — from layers to neural filters. Learn retouching, compositing, and creating professional ad creatives.',
      ru: 'Освойте Photoshop за 4 недели — от слоёв до нейрофильтров. Научитесь ретушировать, создавать коллажи и профессиональные рекламные макеты.',
    },
    hook: {
      en: 'Photoshop is a superpower for designers, marketers, and photographers. Take this course and turn your ideas into professional images in a month.',
      ru: 'Фотошоп — суперсила для дизайнера, маркетолога и фотографа. Пройдите курс и превратите свои идеи в профессиональные изображения за месяц.',
    },
    whoIsThisFor: {
      en: 'For beginners who want to master Photoshop for design, marketing, or photography.',
      ru: 'Для новичков, которые хотят освоить Photoshop для дизайна, маркетинга или фотографии.',
    },
    syllabus: [
      {
        weeks: '1',
        title: {
          en: 'Interface & Layers',
          ru: 'Интерфейс и слои',
        },
        topics: {
          en: 'Interface, settings, layers (types, groups, masks), selection tools. Adjustment layers (levels, curves, color balance). Assignment: enhance a photo.',
          ru: 'Интерфейс, настройки, слои (типы, группы, маски), инструменты выделения. Корректирующие слои (уровни, кривые, цветовой баланс). Задание: улучшить фото.',
        },
      },
      {
        weeks: '2',
        title: {
          en: 'Retouching',
          ru: 'Ретушь',
        },
        topics: {
          en: 'Clone stamp, healing brush, content-aware fill. Dodge & burn.',
          ru: 'Штамп, восстанавливающая кисть, контентно-зависимая заливка. Осветление/затемнение.',
        },
      },
      {
        weeks: '3',
        title: {
          en: 'Compositing',
          ru: 'Монтаж',
        },
        topics: {
          en: 'Collages from multiple images, layer masks, blending modes, filters. Layer styles (shadows, gradients).',
          ru: 'Коллажи из нескольких изображений, маски слоёв, режимы наложения, фильтры. Стили слоёв (тени, градиенты).',
        },
      },
      {
        weeks: '4',
        title: {
          en: 'Text, Vectors & Automation',
          ru: 'Текст, векторы и автоматизация',
        },
        topics: {
          en: 'Working with text, vector shapes. Neural filters, automation (actions). Final project: ad banner or social media cover.',
          ru: 'Работа с текстом, векторными фигурами. Нейросети (нейрофильтры), автоматизация (экшены). Финальный проект: рекламный банер или обложка для соцсетей.',
        },
      },
    ],
    format: {
      en: 'Video demos + homework + result review.',
      ru: 'Видеоуроки с демонстрацией + ДЗ + проверка результата.',
    },
    bonuses: {
      en: [
        'Collection of actions and brushes',
        'Library of source files',
        'Chat with the instructor',
      ],
      ru: [
        'Коллекция экшенов и кистей',
        'Библиотека файлов',
        'Чат с преподавателем',
      ],
    },
    result: {
      en: 'Professional portrait retouching, compositing, and ad layout creation.',
      ru: 'Ретушь портретов, создание коллажей и рекламных макетов профессионально.',
    },
    duration: {
      en: '4 weeks',
      ru: '4 недели',
    },
    theoryHours: 16,
    practiceHours: 16,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '4 weeks', label: 'From basics to pro' },
        { value: '30+ years', label: 'Industry standard' },
        { value: 'Retouching', label: 'Compositing • Design' },
      ],
      ru: [
        { value: '4 недели', label: 'От основ до профи' },
        { value: '30+ лет', label: 'Стандарт индустрии' },
        { value: 'Ретушь', label: 'Коллажи • Дизайн' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Visual Superpower', desc: 'Photoshop is the #1 tool for designers, photographers, and marketers worldwide.' },
        { title: 'From Zero to Pro', desc: 'Start with layers and end with neural filters, retouching, and compositing.' },
        { title: 'Endless Creativity', desc: 'Photo editing, digital art, ad creatives, UI mockups — one tool for everything.' },
        { title: 'Freelance Goldmine', desc: 'Photoshop skills earn from $30/hour on freelance platforms. Always in demand.' },
      ],
      ru: [
        { title: 'Визуальная суперсила', desc: 'Photoshop — инструмент №1 для дизайнеров, фотографов и маркетологов во всём мире.' },
        { title: 'С нуля до Pro', desc: 'Начните со слоёв и дойдите до нейрофильтров, ретуши и композитинга.' },
        { title: 'Безграничное творчество', desc: 'Фотообработка, цифровое искусство, реклама, макеты — один инструмент для всего.' },
        { title: 'Фриланс-золото', desc: 'Навыки Photoshop приносят от $30/час на фрилансе. Всегда в спросе.' },
      ],
    },
    techStack: [
      { icon: '🖌️', name: 'Photoshop', desc: 'Industry-standard image editing software.' },
      { icon: '📑', name: 'Layers', desc: 'Non-destructive editing with layer stacks.' },
      { icon: '🎭', name: 'Masks', desc: 'Precise selections and layer visibility.' },
      { icon: '🔧', name: 'Retouching', desc: 'Clone stamp, healing brush, and dodge & burn.' },
      { icon: '🖼️', name: 'Compositing', desc: 'Blend multiple images into seamless artwork.' },
      { icon: '🌀', name: 'Filters', desc: 'Creative effects and image enhancements.' },
      { icon: '🧠', name: 'Neural Filters', desc: 'AI-powered image editing tools.' },
      { icon: '✏️', name: 'Vector Tools', desc: 'Precision paths and shape creation.' },
      { icon: '⚡', name: 'Automation', desc: 'Actions and batch processing for efficiency.' },
    ],
  },
  {
    id: 'motion-design-ae',
    title: {
      en: 'Motion Design in After Effects',
      ru: 'Motion-дизайн в After Effects',
    },
    tags: ['design'],
    price: 242,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Learn motion design in 6 weeks. Bring graphics to life with animation, effects, and 3D. Create ad spots, intros, and social media content.',
      ru: 'Освойте моушн-дизайн за 6 недель. Оживляйте графику с помощью анимации, эффектов и 3D. Создавайте рекламные ролики, заставки и контент для соцсетей.',
    },
    hook: {
      en: 'Animation is magic. Learn to bring graphics to life — your videos will be watched eagerly. A course for designers, advertisers, and bloggers.',
      ru: 'Анимация — это магия. Научитесь оживлять графику, и ваши ролики будут смотреть взахлёб. Курс для дизайнеров, рекламщиков и блогеров.',
    },
    whoIsThisFor: {
      en: 'For designers, advertisers, and content creators who want to master motion graphics.',
      ru: 'Для дизайнеров, рекламщиков и блогеров, которые хотят освоить моушн-графику.',
    },
    syllabus: [
      {
        weeks: '1',
        title: {
          en: 'Animation Basics',
          ru: 'Основы анимации',
        },
        topics: {
          en: 'Interface, compositions, import. Animation fundamentals: keyframes, paths, easing.',
          ru: 'Интерфейс, композиции, импорт. Основы анимации: ключевые кадры, траектории, easing.',
        },
      },
      {
        weeks: '2',
        title: {
          en: 'Text Animation & Masks',
          ru: 'Анимация текста и маски',
        },
        topics: {
          en: 'Text animators, presets, lower thirds, titles. Masks, track mattes.',
          ru: 'Анимация текста (аниматоры, пресеты), нижняя треть, титры. Маски, трек-маты.',
        },
      },
      {
        weeks: '3',
        title: {
          en: 'Vector Animation & Rigging',
          ru: 'Векторная анимация и риггинг',
        },
        topics: {
          en: 'Shape Layers, plugins (Duik for rigging). Logo and icon animation.',
          ru: 'Векторная анимация (Shape Layers), плагины (Duik для рига). Анимация логотипов и иконок.',
        },
      },
      {
        weeks: '4',
        title: {
          en: 'Effects & Particles',
          ru: 'Эффекты и частицы',
        },
        topics: {
          en: 'Built-in effects and plugins (Particular, Trapcode). Particles, smoke, fire.',
          ru: 'Эффекты (встроенные и плагины: Particular, Trapcode). Частицы, дым, огонь.',
        },
      },
      {
        weeks: '5',
        title: {
          en: '3D & Parallax',
          ru: '3D и параллакс',
        },
        topics: {
          en: '3D layers, cameras, lighting. Parallax effects.',
          ru: '3D-слои, камеры, освещение. Параллакс-эффекты.',
        },
      },
      {
        weeks: '6',
        title: {
          en: 'Final Project',
          ru: 'Финальный проект',
        },
        topics: {
          en: 'Final project: ad spot or YouTube intro. Rendering in Media Encoder.',
          ru: 'Финальный проект: рекламный ролик или заставка для YouTube. Рендеринг в Media Encoder.',
        },
      },
    ],
    format: {
      en: 'Video lessons + practice + group portfolio review with feedback.',
      ru: 'Видеоуроки + практика + групповой просмотр работ с обратной связью.',
    },
    bonuses: {
      en: [
        'Library of presets and projects',
        'Composition consultations',
        'Certificate',
      ],
      ru: [
        'Библиотека пресетов и проектов',
        'Консультации по композиции',
        'Сертификат',
      ],
    },
    result: {
      en: 'Creation of animated graphics of any complexity level.',
      ru: 'Создание анимированной графики любого уровня сложности.',
    },
    duration: {
      en: '6 weeks',
      ru: '6 недель',
    },
    theoryHours: 24,
    practiceHours: 24,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '6 weeks', label: 'To animated content' },
        { value: '#1', label: 'Motion tool' },
        { value: 'Ad spots', label: 'Intros • Social media' },
      ],
      ru: [
        { value: '6 недель', label: 'До анимации' },
        { value: '№1', label: 'Инструмент моушн-дизайна' },
        { value: 'Реклама', label: 'Заставки • Соцсети' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Animation is Magic', desc: 'Animated content gets 3x more engagement. Master After Effects and bring ideas to life.' },
        { title: '6 Weeks to Reel', desc: 'From zero to a professional demo reel in 6 weeks — start taking commercial orders.' },
        { title: 'Everywhere Needed', desc: 'Ads, social media, films, TV, UX motion — motion designers are needed in every medium.' },
        { title: 'Creative Freedom', desc: 'Shape, text, character, 3D animation — endless creative possibilities in one software.' },
      ],
      ru: [
        { title: 'Анимация — это магия', desc: 'Анимированный контент получает в 3 раза больше вовлечения. Освойте After Effects и оживляйте идеи.' },
        { title: '6 недель до рила', desc: 'С нуля до профессионального демо-рила за 6 недель — начинайте брать коммерческие заказы.' },
        { title: 'Нужны везде', desc: 'Реклама, соцсети, кино, ТВ, UX motion — моушн-дизайнеры нужны в каждом медиа.' },
        { title: 'Творческая свобода', desc: 'Shapes, текст, персонажи, 3D — безграничные творческие возможности в одной программе.' },
      ],
    },
    techStack: [
      { icon: '🎬', name: 'After Effects', desc: 'Industry-standard motion graphics software.' },
      { icon: '🔑', name: 'Keyframes', desc: 'Animate properties over time.' },
      { icon: '🔄', name: 'Easing', desc: 'Smooth motion with easing curves.' },
      { icon: '✏️', name: 'Shape Layers', desc: 'Vector-based animated graphics.' },
      { icon: '📝', name: 'Text Animators', desc: 'Dynamic text animations and presets.' },
      { icon: '🎭', name: 'Masks', desc: 'Hide and reveal layers creatively.' },
      { icon: '🧊', name: '3D Layers', desc: '3D space with cameras and lighting.' },
      { icon: '✨', name: 'Particles', desc: 'Particle systems with Particular plugin.' },
      { icon: '🦴', name: 'Duik', desc: 'Rigging and character animation toolkit.' },
    ],
  },
  {
    id: 'blender-3d',
    title: {
      en: '3D Modeling in Blender',
      ru: '3D-моделирование в Blender',
    },
    tags: ['design', '3d'],
    price: 318,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Master 3D modeling in Blender in 8 weeks. From polygon modeling to sculpting, texturing, lighting, and animation. Start creating your own worlds today.',
      ru: 'Освойте 3D-моделирование в Blender за 8 недель. От полигонального моделирования до скульптинга, текстурирования, освещения и анимации. Начните создавать свои миры уже сегодня.',
    },
    hook: {
      en: '3D graphics is everywhere: games, film, advertising. Blender is free and powerful. Start creating your own worlds today.',
      ru: '3D-графика везде: игры, кино, реклама. Blender — бесплатный и мощный. Начните создавать свои миры уже сегодня.',
    },
    whoIsThisFor: {
      en: 'For beginners who want to learn 3D modeling and start freelancing.',
      ru: 'Для новичков, которые хотят научиться 3D-моделированию и начать фрилансить.',
    },
    syllabus: [
      {
        weeks: '1–2',
        title: {
          en: 'Polygon Modeling',
          ru: 'Полигональное моделирование',
        },
        topics: {
          en: 'Interface, navigation. Basic polygonal modeling (extrude, loop cut, edge loops). Modifiers (Subdivision, Mirror, Array). Assignment: mug, table.',
          ru: 'Интерфейс, навигация. Базовое полигональное моделирование (экструзия, лупкат, добавление рёбер). Модификаторы (Subdivision, Mirror, Array). Задание: кружка, стол.',
        },
      },
      {
        weeks: '3–4',
        title: {
          en: 'Sculpting & UV',
          ru: 'Скульптинг и UV',
        },
        topics: {
          en: 'Sculpting (brushes, dynamics). Retopology. UV unwrapping.',
          ru: 'Скульптинг (кисти, динамика). Ретопология. UV-развёртка.',
        },
      },
      {
        weeks: '5–6',
        title: {
          en: 'Materials & Texturing',
          ru: 'Материалы и текстурирование',
        },
        topics: {
          en: 'Materials (Principled BSDF: metal, glass, wood). Texturing: PBR textures, shader nodes.',
          ru: 'Материалы (Principled BSDF: металл, стекло, дерево). Текстурирование: PBR-текстуры, узлы шейдера.',
        },
      },
      {
        weeks: '7',
        title: {
          en: 'Lighting & Rendering',
          ru: 'Освещение и рендеринг',
        },
        topics: {
          en: 'Lighting (sun, point, HDRi). Rendering in Cycles/Eevee. Camera and compositing.',
          ru: 'Освещение (солнце, точечные, HDRi). Рендеринг в Cycles/Eevee. Камера и композитинг.',
        },
      },
      {
        weeks: '8',
        title: {
          en: 'Animation & Final Project',
          ru: 'Анимация и финальный проект',
        },
        topics: {
          en: 'Animation (keyframes, curves). Final project — character or scene (room) with render and animation.',
          ru: 'Анимация (ключи, кривые). Финальный проект — персонаж или сцена (комната) с рендером и анимацией.',
        },
      },
    ],
    format: {
      en: 'Step-by-step videos + assignments with source files + weekly group call.',
      ru: 'Пошаговые видео + задания с исходниками + еженедельный созвон.',
    },
    bonuses: {
      en: [
        'Library of models and textures',
        'Student work reviews',
        'Community chat',
      ],
      ru: [
        'Библиотека моделей и текстур',
        'Разбор работ студентов',
        'Чат сообщества',
      ],
    },
    result: {
      en: 'Full cycle of 3D model creation for freelance.',
      ru: 'Полный цикл создания 3D-моделей для фриланса.',
    },
    duration: {
      en: '8 weeks',
      ru: '8 недель',
    },
    theoryHours: 32,
    practiceHours: 32,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '8 weeks', label: 'To 3D modeling' },
        { value: 'Free', label: 'Powerful tool' },
        { value: 'Games', label: 'Film • Advertising' },
      ],
      ru: [
        { value: '8 недель', label: 'До 3D-моделирования' },
        { value: 'Бесплатно', label: 'Мощный инструмент' },
        { value: 'Игры', label: 'Кино • Реклама' },
      ],
    },
    whyFeatures: {
      en: [
        { title: '3D Revolution', desc: '3D graphics dominate games, film, and advertising. Blender is free and industry-proven.' },
        { title: 'From Zero to Render', desc: 'Start with polygon modeling and end with photorealistic renders and animations.' },
        { title: 'Zero Cost', desc: 'Blender is completely free and open-source — no license fees, unlimited commercial use.' },
        { title: 'Huge Demand', desc: '3D artists earn from $2,000-$6,000/month. Gaming, film, and VR industries are hiring.' },
      ],
      ru: [
        { title: '3D-революция', desc: '3D-графика правит играми, кино и рекламой. Blender бесплатен и проверен индустрией.' },
        { title: 'С нуля до рендера', desc: 'Начните с полигонального моделирования и дойдите до фотореалистичных рендеров и анимации.' },
        { title: 'Бесплатно и мощно', desc: 'Blender полностью бесплатен и с открытым кодом — никаких лицензий, неограниченное коммерческое использование.' },
        { title: 'Огромный спрос', desc: '3D-художники зарабатывают от $2,000-$6,000/мес. Гейминг, кино и VR активно нанимают.' },
      ],
    },
    techStack: [
      { icon: '🧊', name: 'Blender', desc: 'Free, open-source 3D creation suite.' },
      { icon: '🔷', name: 'Polygon Modeling', desc: 'Extrude, loop cut, and edge modeling.' },
      { icon: '🎨', name: 'Sculpting', desc: 'Digital clay with dynamic brushes.' },
      { icon: '🗺️', name: 'UV Mapping', desc: 'Unwrap and texture coordinate layout.' },
      { icon: '🎭', name: 'Texturing', desc: 'PBR materials and shader nodes.' },
      { icon: '💡', name: 'Lighting', desc: 'Sun, point, HDRI lighting setups.' },
      { icon: '🎬', name: 'Rendering', desc: 'Cycles and Eevee render engines.' },
      { icon: '🔄', name: 'Animation', desc: 'Keyframes, curves, and character rigging.' },
      { icon: '🔧', name: 'Modifiers', desc: 'Subdivision, mirror, array for non-destructive editing.' },
    ],
  },
  {
    id: 'tilda-web-design',
    title: {
      en: 'Web Design on Tilda',
      ru: 'Веб-дизайн на Tilda',
    },
    tags: ['frontend', 'no-code'],
    price: 109,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 2,
    excerpt: {
      en: 'Build a website in a day with no coding. Learn Tilda — the constructor that makes money. Perfect for entrepreneurs and freelancers.',
      ru: 'Создайте сайт за день без программирования. Tilda — конструктор, который приносит деньги. Идеально для предпринимателей и фрилансеров.',
    },
    hook: {
      en: 'Create a website in a day without programming — the perfect skill for entrepreneurs and freelancers. Tilda is a constructor that brings in money.',
      ru: 'Создайте сайт за день без программирования — идеальный навык для предпринимателя и фрилансера. Tilda — конструктор, который приносит деньги.',
    },
    whoIsThisFor: {
      en: 'For entrepreneurs, freelancers, and designers who want to build websites quickly without code.',
      ru: 'Для предпринимателей, фрилансеров и дизайнеров, которые хотят быстро создавать сайты без кода.',
    },
    syllabus: [
      {
        weeks: '1',
        title: {
          en: 'Zero Block & Content',
          ru: 'Zero Block и контент',
        },
        topics: {
          en: 'Registration, template selection, Zero Block (grid, columns, spacing). Adding text, images, buttons, video. Animation (fade, rotate).',
          ru: 'Регистрация, выбор шаблона, Zero Block (сетка, колонки, отступы). Добавление текста, изображений, кнопок, видео. Анимация (появление, вращение).',
        },
      },
      {
        weeks: '2',
        title: {
          en: 'Store, SEO & Handoff',
          ru: 'Магазин, SEO и передача',
        },
        topics: {
          en: 'Online store (products, cart, Stripe payments). Subscription forms, popups. Domain setup, SEO (titles, meta tags). Export and client handoff.',
          ru: 'Интернет-магазин (товары, корзина, оплата через Stripe). Формы подписки, всплывающие окна. Подключение домена, SEO (заголовки, мета-теги). Экспорт и передача клиенту.',
        },
      },
    ],
    format: {
      en: 'Video screencasts + assignments (landing page and store).',
      ru: 'Видео-скринкасты + задания (лендинг и магазин).',
    },
    bonuses: {
      en: [
        '30+ ready-made blocks',
        'Video guides for every feature',
        'Telegram support',
      ],
      ru: [
        '30+ готовых блоков',
        'Видео-инструкции по каждой функции',
        'Поддержка в Telegram',
      ],
    },
    result: {
      en: 'Professional website building on your own.',
      ru: 'Самостоятельная сборка профессиональных сайтов.',
    },
    duration: {
      en: '2 weeks',
      ru: '2 недели',
    },
    theoryHours: 8,
    practiceHours: 8,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '1 day', label: 'Website without code' },
        { value: '#1', label: 'No-code builder' },
        { value: '2 projects', label: 'For your portfolio' },
      ],
      ru: [
        { value: '1 день', label: 'Сайт без кода' },
        { value: '№1', label: 'No-code конструктор' },
        { value: '2 проекта', label: 'В портфолио' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'No Code Needed', desc: 'Build a professional website in a day without writing a single line of code.' },
        { title: 'Money Maker', desc: 'Tilda websites sell. Landing pages, online stores, blogs — businesses pay from $500.' },
        { title: 'Fast & Easy', desc: 'Intuitive drag-and-drop builder. Perfect for entrepreneurs, freelancers, and small businesses.' },
        { title: 'Client Magnet', desc: 'Every business needs a website. Tilda skills = unlimited clients and projects.' },
      ],
      ru: [
        { title: 'Без кода', desc: 'Создайте профессиональный сайт за день без единой строки кода.' },
        { title: 'Приносит деньги', desc: 'Сайты на Tilda продают. Лендинги, магазины, блоги — бизнес платит от $500.' },
        { title: 'Быстро и просто', desc: 'Интуитивный drag-and-drop конструктор. Идеально для предпринимателей, фрилансеров и малого бизнеса.' },
        { title: 'Магнит для клиентов', desc: 'Каждому бизнесу нужен сайт. Навыки Tilda = бесконечные клиенты и проекты.' },
      ],
    },
    techStack: [
      { icon: '🏗️', name: 'Tilda', desc: 'Powerful no-code website builder.' },
      { icon: '🔲', name: 'Zero Block', desc: 'Custom design blocks for unique layouts.' },
      { icon: '🔍', name: 'SEO', desc: 'Search engine optimization for websites.' },
      { icon: '🛒', name: 'Online Store', desc: 'E-commerce functionality built-in.' },
      { icon: '💳', name: 'Stripe', desc: 'Payment processing for online stores.' },
      { icon: '🌐', name: 'Domain Setup', desc: 'Custom domains and hosting configuration.' },
      { icon: '🎬', name: 'Animation', desc: 'Fade, rotate, and scroll animations.' },
      { icon: '📋', name: 'Popups', desc: 'Subscription forms and modal windows.' },
    ],
  },
  {
    id: 'smm-manager',
    title: {
      en: 'SMM Manager from Scratch',
      ru: 'SMM-менеджер с нуля',
    },
    tags: ['marketing'],
    price: 208,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Master SMM in 6 weeks: strategy, content, visual design, audience engagement, and analytics. Get real results for your portfolio.',
      ru: 'Освойте SMM за 6 недель: стратегия, контент, визуал, работа с аудиторией и аналитика. Получите реальные результаты в портфолио.',
    },
    hook: {
      en: 'Social media is a powerful sales channel. Learn to run accounts so that followers become customers. Add real results to your portfolio.',
      ru: 'Соцсети — мощный канал продаж. Научитесь вести аккаунты так, чтобы подписчики становились клиентами. Добавьте в портфолио реальные результаты.',
    },
    whoIsThisFor: {
      en: 'For beginners who want to become an SMM specialist and manage brand social media accounts.',
      ru: 'Для новичков, которые хотят стать SMM-специалистом и вести соцсети брендов.',
    },
    syllabus: [
      {
        weeks: '1–2',
        title: {
          en: 'Strategy & Content',
          ru: 'Стратегия и контент',
        },
        topics: {
          en: 'Target audience, positioning, content matrix (rubrics, posts, stories). Monthly content plan.',
          ru: 'ЦА, позиционирование, контент-матрица (рубрики, посты, сторис). Контент-план на месяц.',
        },
      },
      {
        weeks: '3',
        title: {
          en: 'Visual & Copywriting',
          ru: 'Визуал и копирайтинг',
        },
        topics: {
          en: 'Smartphone shooting, editing in Canva/Photoshop, story templates. Storytelling, engaging copy.',
          ru: 'Съёмка на смартфон, обработка в Canva/Photoshop, макеты для сторис. Сторителлинг, вовлекающие тексты.',
        },
      },
      {
        weeks: '4',
        title: {
          en: 'Audience & Promotion',
          ru: 'Аудитория и продвижение',
        },
        topics: {
          en: 'Comments, DMs, contests. Promotion (targeting, cross-promotion).',
          ru: 'Комментарии, директ, конкурсы. Продвижение (таргетинг, взаимопиар).',
        },
      },
      {
        weeks: '5',
        title: {
          en: 'Platforms & Tools',
          ru: 'Платформы и сервисы',
        },
        topics: {
          en: 'Telegram channels, Facebook, Instagram. Tools (SMMplanner, TargetHunter).',
          ru: 'Telegram-каналы, Facebook, Instagram. Сервисы (SMMplanner, TargetHunter).',
        },
      },
      {
        weeks: '6',
        title: {
          en: 'Analytics & Final Project',
          ru: 'Аналитика и финальный проект',
        },
        topics: {
          en: 'Reach, engagement, clicks. Client reports. Final project: SMM promotion of a brand for 3 weeks with a report.',
          ru: 'Охваты, вовлечённость, переходы. Отчёты для клиента. Финальный проект: SMM-продвижение бренда за 3 недели с отчётом.',
        },
      },
    ],
    format: {
      en: 'Video lectures + assignments + mentor review.',
      ru: 'Видеолекции + задания + проверка наставником.',
    },
    bonuses: {
      en: [
        'Content plan templates',
        'Design kits and mockup templates',
        'Idea bank and curator chat',
      ],
      ru: [
        'Шаблоны контент-планов',
        'Дизайн-киты и макеты',
        'База идей и чат с кураторами',
      ],
    },
    result: {
      en: 'Managing social media and increasing sales through organic content.',
      ru: 'Ведение соцсетей и увеличение продаж через органический контент.',
    },
    duration: {
      en: '6 weeks',
      ru: '6 недель',
    },
    theoryHours: 24,
    practiceHours: 24,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '6 weeks', label: 'To SMM pro' },
        { value: 'Brands', label: 'Need SMM experts' },
        { value: 'Organic', label: 'Growth strategy' },
      ],
      ru: [
        { value: '6 недель', label: 'До SMM-профи' },
        { value: 'Бренды', label: 'Ищут SMM-специалистов' },
        { value: 'Органика', label: 'Стратегия роста' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Social Media Gold', desc: 'Businesses spend 30%+ of marketing budgets on social media. SMM managers are in high demand.' },
        { title: 'Full Strategy', desc: 'Content planning, visual design, audience engagement, analytics — master all aspects.' },
        { title: 'Real Results', desc: 'Learn to turn followers into customers with proven engagement and conversion strategies.' },
        { title: 'Remote Friendly', desc: 'SMM is one of the most remote-friendly professions. Work from anywhere in the world.' },
      ],
      ru: [
        { title: 'Соцсети — это золото', desc: 'Бизнес тратит 30%+ маркетингового бюджета на соцсети. SMM-менеджеры очень востребованы.' },
        { title: 'Полная стратегия', desc: 'Контент-план, визуал, работа с аудиторией, аналитика — освойте все аспекты.' },
        { title: 'Реальные результаты', desc: 'Научитесь превращать подписчиков в клиентов с проверенными стратегиями.' },
        { title: 'Работа из любой точки', desc: 'SMM — одна из самых удалённых профессий. Работайте откуда угодно.' },
      ],
    },
    techStack: [
      { icon: '📸', name: 'Instagram', desc: 'Visual content and story marketing.' },
      { icon: '✈️', name: 'Telegram', desc: 'Channel management and audience growth.' },
      { icon: '📘', name: 'Facebook', desc: 'Community building and paid promotion.' },
      { icon: '🎨', name: 'Canva', desc: 'Easy graphic design for social media.' },
      { icon: '📅', name: 'SMMplanner', desc: 'Scheduling and content planning tool.' },
      { icon: '🎯', name: 'TargetHunter', desc: 'Targeted advertising and audience analysis.' },
      { icon: '📊', name: 'Analytics', desc: 'Track reach, engagement, and conversions.' },
      { icon: '✍️', name: 'Copywriting', desc: 'Engaging content and storytelling.' },
    ],
  },
  {
    id: 'ppc-advertising',
    title: {
      en: 'Contextual Advertising (PPC)',
      ru: 'Контекстная реклама (PPC)',
    },
    tags: ['marketing'],
    price: 236,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Manage ad budgets up to 1,000,000 ₽ and hit KPIs. Learn Google Ads and Bing Ads with 20 real case studies across different niches.',
      ru: 'Управляйте рекламными бюджетами до 1 000 000 ₽ и достигайте KPI. Научитесь работать с Google Ads и Bing Ads на 20 реальных кейсах.',
    },
    hook: {
      en: 'Manage ad budgets up to $15,000 and hit KPIs. We\'ll cover 20 real cases from different niches.',
      ru: 'Управляйте рекламными бюджетами до 1 млн ₽ и достигайте KPI. На курсе разберём 20 реальных кейсов из разных ниш.',
    },
    whoIsThisFor: {
      en: 'For beginners who want to master contextual advertising and become a PPC specialist.',
      ru: 'Для новичков, которые хотят освоить контекстную рекламу и стать PPC-специалистом.',
    },
    syllabus: [
      {
        weeks: '1',
        title: {
          en: 'Introduction to PPC',
          ru: 'Введение в PPC',
        },
        topics: {
          en: 'Google Ads, Bing Ads. Campaign types. Semantic collection (Keyword Planner).',
          ru: 'Google Ads, Bing Ads. Типы кампаний. Сбор семантики (Keyword Planner).',
        },
      },
      {
        weeks: '2',
        title: {
          en: 'Ad Creation & Bidding',
          ru: 'Создание объявлений и ставки',
        },
        topics: {
          en: 'Headlines, descriptions, extensions (sitelinks, callouts). Bid management, budget, scheduling.',
          ru: 'Заголовки, тексты, расширения (ссылки, уточнения). Управление ставками, бюджетом, расписанием.',
        },
      },
      {
        weeks: '3',
        title: {
          en: 'Conversions & Testing',
          ru: 'Конверсии и тестирование',
        },
        topics: {
          en: 'Conversion and goal setup in GA4. A/B testing of ads and landing pages. Negative keywords, auction insights.',
          ru: 'Настройка конверсий и целей в GA4. A/B-тестирование объявлений и посадочных страниц. Минус-слова, аукцион.',
        },
      },
      {
        weeks: '4',
        title: {
          en: 'Optimization & Final Case',
          ru: 'Оптимизация и финальный кейс',
        },
        topics: {
          en: 'Report analysis, bid adjustments, removing ineffective queries. Final case: a campaign for an online store with a 50,000 ₽ budget and CPA target.',
          ru: 'Анализ отчётов, корректировка ставок, удаление неэффективных запросов. Финальный кейс: кампания для интернет-магазина с бюджетом 50 000 ₽ и достижение CPA.',
        },
      },
    ],
    format: {
      en: 'Recorded webinars + practice in real accounts + weekly reviews.',
      ru: 'Запись вебинаров + практика в реальных аккаунтах + еженедельные разборы.',
    },
    bonuses: {
      en: [
        'Access to simulators',
        'Launch checklist',
        'Certificate',
      ],
      ru: [
        'Доступ к симуляторам',
        'Чек-лист запуска',
        'Сертификат',
      ],
    },
    result: {
      en: 'Launching and scaling contextual ads of any complexity.',
      ru: 'Запуск и масштабирование контекстной рекламы любой сложности.',
    },
    duration: {
      en: '4 weeks',
      ru: '4 недели',
    },
    theoryHours: 16,
    practiceHours: 16,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '$15,000+', label: 'Ad budget management' },
        { value: '20+', label: 'Real case studies' },
        { value: 'Google Ads', label: 'Bing Ads • GA4' },
      ],
      ru: [
        { value: '1 000 000 ₽', label: 'Управление бюджетом' },
        { value: '20+', label: 'Реальных кейсов' },
        { value: 'Google Ads', label: 'Bing Ads • GA4' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Fast ROI', desc: 'PPC is the fastest way to get customers. Master budgets up to $15,000 and hit KPIs.' },
        { title: '20 Real Cases', desc: 'Learn from 20 real campaigns across different niches — not theory, real practice.' },
        { title: 'Google & Bing', desc: 'Master the two biggest ad platforms — Google Ads and Microsoft Advertising.' },
        { title: 'Unlimited Demand', desc: 'Every business needs traffic. PPC specialists are the most sought-after marketers.' },
      ],
      ru: [
        { title: 'Быстрый ROI', desc: 'PPC — самый быстрый способ получать клиентов. Управляйте бюджетами до 1 млн ₽ и достигайте KPI.' },
        { title: '20 реальных кейсов', desc: 'Учитесь на 20 реальных кампаниях в разных нишах — не теория, а практика.' },
        { title: 'Google и Bing', desc: 'Освойте две крупнейшие рекламные площадки — Google Ads и Microsoft Advertising.' },
        { title: 'Бесконечный спрос', desc: 'Каждому бизнесу нужен трафик. PPC-специалисты — самые востребованные маркетологи.' },
      ],
    },
    techStack: [
      { icon: '📊', name: 'Google Ads', desc: 'Search, display, and shopping campaigns.' },
      { icon: '🔍', name: 'Bing Ads', desc: 'Advertising on Microsoft Search Network.' },
      { icon: '🔑', name: 'Keyword Planner', desc: 'Research keywords and forecast performance.' },
      { icon: '📈', name: 'GA4', desc: 'Google Analytics for conversion tracking.' },
      { icon: '🧪', name: 'A/B Testing', desc: 'Test ad copy and landing page variations.' },
      { icon: '💰', name: 'Bid Management', desc: 'Optimize bids for target CPA and ROAS.' },
      { icon: '📋', name: 'Extensions', desc: 'Sitelinks, callouts, and structured snippets.' },
      { icon: '🎯', name: 'Landing Pages', desc: 'Optimize pages for maximum conversion.' },
    ],
  },
  {
    id: 'copywriting-neurocopywriting',
    title: {
      en: 'Copywriting and Neurocopywriting',
      ru: 'Копирайтинг и нейрокопирайтинг',
    },
    tags: ['marketing'],
    price: 165,
    currency: 'USD',
    level: {
      en: 'From scratch',
      ru: 'С нуля',
    },
    projects: 1,
    excerpt: {
      en: 'Master copywriting in 3 weeks. Learn techniques that make clients say "Yes!" and make your texts highly profitable.',
      ru: 'Освойте копирайтинг за 3 недели. Изучите приёмы, которые заставляют клиентов говорить «Да!» — и ваши тексты будут стоить дорого.',
    },
    hook: {
      en: 'Words sell. Master the techniques that make clients say "Yes!" — and your texts will be worth a lot.',
      ru: 'Слова продают. Освойте приёмы, которые заставляют клиентов говорить «Да!» — и ваши тексты будут стоить дорого.',
    },
    whoIsThisFor: {
      en: 'For beginners, marketers, and entrepreneurs who want to write texts that sell.',
      ru: 'Для новичков, маркетологов и предпринимателей, которые хотят писать продающие тексты.',
    },
    syllabus: [
      {
        weeks: '1',
        title: {
          en: 'Text Structure & Formulas',
          ru: 'Структура и формулы текста',
        },
        topics: {
          en: 'Text structure (headline, subhead, lead, body, CTA). AIDA, 4U, ODC methods. Write a selling post.',
          ru: 'Структура текста (заголовок, подзаголовок, лид, основная часть, CTA). Метод AIDA, 4U, ODC. Пишем продающий пост.',
        },
      },
      {
        weeks: '2',
        title: {
          en: 'Neuromarketing & Triggers',
          ru: 'Нейромаркетинг и триггеры',
        },
        topics: {
          en: 'Triggers (scarcity, authority, social proof), emotions, pain and gain. Texts for social media, landing pages, email.',
          ru: 'Триггеры (дефицит, авторитет, соцдоказательство), эмоции, боль и выгода. Тексты для соцсетей, лендингов, email.',
        },
      },
      {
        weeks: '3',
        title: {
          en: 'Objections & Storytelling',
          ru: 'Возражения и сторителлинг',
        },
        topics: {
          en: 'Handling objections, FAQ, audience adaptation. Storytelling: brand story. Final project: a landing page for a fictional product.',
          ru: 'Работа с возражениями, FAQ, адаптация под ЦА. Сторителлинг: история бренда. Финальное задание — готовый лендинг для вымышленного продукта.',
        },
      },
    ],
    format: {
      en: 'Video lectures + practice + instructor feedback.',
      ru: 'Видеолекции + практика + обратная связь от преподавателя.',
    },
    bonuses: {
      en: [
        'Library of best examples',
        'Self-editing checklist',
        'Group work review',
      ],
      ru: [
        'Библиотека лучших примеров',
        'Чек-лист саморедактуры',
        'Групповой разбор работ',
      ],
    },
    result: {
      en: 'Texts that increase conversion and build trust.',
      ru: 'Тексты, которые увеличивают конверсию и вызывают доверие.',
    },
    duration: {
      en: '3 weeks',
      ru: '3 недели',
    },
    theoryHours: 12,
    practiceHours: 12,
    badge: {
      en: 'Course',
      ru: 'Курс',
    },
    highlights: {
      en: [
        { value: '3 weeks', label: 'To selling texts' },
        { value: 'Neuroscience', label: 'Copywriting' },
        { value: 'Higher', label: 'Conversion rate' },
      ],
      ru: [
        { value: '3 недели', label: 'До продающих текстов' },
        { value: 'Нейронаука', label: 'В копирайтинге' },
        { value: 'Выше', label: 'Конверсия' },
      ],
    },
    whyFeatures: {
      en: [
        { title: 'Words That Sell', desc: 'Good copy can 10x your conversion rate. Master the psychology of persuasion.' },
        { title: '3 Weeks to Pro', desc: 'From blank page to selling text in 3 weeks. Structure, storytelling, neuro-triggers.' },
        { title: 'AIDA to Storytelling', desc: 'Classic formulas + neuromarketing: AIDA, PAS, storytelling, scarcity, social proof.' },
        { title: 'Skyrocket Your Rate', desc: 'Professional copywriters charge from $200 per text. Neurocopywriters — even more.' },
      ],
      ru: [
        { title: 'Слова, которые продают', desc: 'Хороший текст может увеличить конверсию в 10 раз. Освойте психологию убеждения.' },
        { title: '3 недели до Pro', desc: 'От чистого листа до продающего текста за 3 недели. Структура, сторителлинг, нейротриггеры.' },
        { title: 'От AIDA до сторителлинга', desc: 'Классические формулы + нейромаркетинг: AIDA, PAS, сторителлинг, дефицит, соцдоказательство.' },
        { title: 'Рост дохода', desc: 'Профессиональные копирайтеры берут от $200 за текст. Нейрокопирайтеры — ещё больше.' },
      ],
    },
    techStack: [
      { icon: '✍️', name: 'Copywriting', desc: 'Craft compelling headlines and body copy.' },
      { icon: '📋', name: 'AIDA', desc: 'Attention, Interest, Desire, Action formula.' },
      { icon: '🧠', name: 'Neuromarketing', desc: 'Psychological triggers that drive purchases.' },
      { icon: '📖', name: 'Storytelling', desc: 'Brand stories that connect with audiences.' },
      { icon: '🎯', name: 'Triggers', desc: 'Scarcity, authority, and social proof.' },
      { icon: '🔘', name: 'CTA', desc: 'Calls to action that convert.' },
      { icon: '🖥️', name: 'Landing Pages', desc: 'Copywriting for high-converting pages.' },
      { icon: '📧', name: 'Email', desc: 'Sales letters and email sequences.' },
    ],
  },
];

const TECH_NAMES = {
  'python-dev': { en: 'Python', ru: 'Python' },
  'react-typescript': { en: 'React + TypeScript', ru: 'React + TypeScript' },
  'java-enterprise': { en: 'Java', ru: 'Java' },
  'sql-databases': { en: 'SQL', ru: 'SQL' },
  'devops-infrastructure': { en: 'DevOps', ru: 'DevOps' },
  'data-science-ml': { en: 'Data Science and ML', ru: 'Data Science и ML' },
  'qa-automation': { en: 'QA Automation', ru: 'QA Automation' },
  'telegram-bots': { en: 'Telegram Bots', ru: 'Telegram-ботов' },
  'algorithms-data-structures': { en: 'Algorithms and Data Structures', ru: 'Алгоритмы и структуры данных' },
  'backend-nestjs': { en: 'Node.js (NestJS)', ru: 'Node.js (NestJS)' },
  'figma-web-design': { en: 'Figma', ru: 'Figma' },
  'ui-ux-design': { en: 'UI/UX Design', ru: 'UI/UX-дизайн' },
  'photoshop-pro': { en: 'Photoshop', ru: 'Photoshop' },
  'motion-design-ae': { en: 'Motion Design', ru: 'Motion Design' },
  'blender-3d': { en: 'Blender 3D', ru: 'Blender 3D' },
  'tilda-web-design': { en: 'Tilda', ru: 'Tilda' },
  'smm-manager': { en: 'SMM', ru: 'SMM' },
  'ppc-advertising': { en: 'PPC', ru: 'PPC' },
  'copywriting-neurocopywriting': { en: 'Copywriting', ru: 'Копирайтинг' },
};

export const COURSES = COURSES_DATA.map((course) => ({
  ...course,
  slug: slugify(course.title.en),
  techName: TECH_NAMES[course.id] || { en: 'This Course', ru: 'Этот курс' },
}));
