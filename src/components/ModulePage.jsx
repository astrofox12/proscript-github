import React, { useState, useCallback, useEffect } from "react";
import { ClerkProvider, useAuth, UserButton } from "@clerk/react";
import LangSwitcher from "./LangSwitcher.jsx";
import { ui } from "../i18n/index.js";

const TOTAL_LESSONS = 14;

const SCHEDULE = [
  { date: "14 июл", day: "Пн", event: "Урок 1.1. Введение в Python", type: "lesson" },
  { date: "15 июл", day: "Вт", event: "Урок 1.2. Переменные и типы", type: "lesson" },
  { date: "16 июл", day: "Ср", event: "Урок 1.3. Операторы", type: "lesson" },
  { date: "17 июл", day: "Чт", event: "Урок 1.4. Ввод/вывод", type: "lesson" },
  { date: "18 июл", day: "Пт", event: "Урок 1.5. Основы CLI", type: "lesson" },
  { date: "19 июл", day: "Сб", event: "Вебинар: разбор ДЗ недели 1", type: "webinar" },
  { date: "20 июл", day: "Вс", event: "Дедлайн сдачи ДЗ недели 1", type: "deadline" },
  { date: "21 июл", day: "Пн", event: "Урок 2.1. Условные операторы", type: "lesson" },
  { date: "22 июл", day: "Вт", event: "Урок 2.2. Циклы", type: "lesson" },
  { date: "23 июл", day: "Ср", event: "Урок 2.3. Списки", type: "lesson" },
  { date: "24 июл", day: "Чт", event: "Урок 2.4. Кортежи и множества", type: "lesson" },
  { date: "25 июл", day: "Пт", event: "Урок 2.5. Словари", type: "lesson" },
  { date: "26 июл", day: "Сб", event: "Вебинар: разбор ДЗ недели 2", type: "webinar" },
  { date: "27 июл", day: "Вс", event: "Дедлайн сдачи ДЗ недели 2", type: "deadline" },
  { date: "28 июл", day: "Пн", event: "Урок 3.1. Git и GitHub", type: "lesson" },
  { date: "29 июл", day: "Вт", event: "Урок 3.2. Виртуальные окружения", type: "lesson" },
  { date: "30 июл", day: "Ср", event: "Урок 3.3. PEP 8 и линтинг", type: "lesson" },
  { date: "31 июл", day: "Чт", event: "Урок 3.4. Отладка кода", type: "lesson" },
  { date: "1 авг", day: "Пт", event: "Вебинар: разбор ДЗ недели 3", type: "webinar" },
  { date: "3 авг", day: "Вс", event: "Дедлайн сдачи проекта Mind Games", type: "deadline" },
];

const WEEKS = [
  {
    id: 1,
    title: "Неделя 1. Синтаксис и типы данных",
    lessons: [
      {
        id: "1-1",
        title: "Урок 1.1. Введение в Python и настройка окружения",
        sections: [
          { type: "heading", text: "Что такое Python и почему он так устроен" },
          { type: "text", text: "Python — интерпретируемый язык программирования. Это значит, что ваш код не компилируется в машинный код целиком перед запуском (как в C++ или Go), а построчно выполняется специальной программой — интерпретатором. Это делает разработку быстрее (сразу видно результат), но программы на Python обычно медленнее скомпилированных." },
          { type: "text", text: "Ключевая философия Python зафиксирована в «Дзене Python» — наборе принципов дизайна языка. Наберите в терминале:" },
          { type: "code", language: "python", code: "import this" },
          { type: "text", text: "Вы увидите текст с принципами вроде «Явное лучше неявного» и «Простое лучше сложного». Это не просто красивые слова — весь синтаксис Python построен вокруг читаемости кода." },

          { type: "heading", text: "Установка и проверка" },
          { type: "text", text: "После установки Python откройте терминал и проверьте версию:" },
          { type: "code", language: "bash", code: "python --version\n# или, на некоторых системах:\npython3 --version" },
          { type: "text", text: "Вы должны увидеть что-то вроде Python 3.12.1. Если команда не найдена — Python не добавлен в PATH, переустановите, отметив галочку \"Add Python to PATH\" (Windows) или используйте пакетный менеджер brew install python3 (macOS)." },

          { type: "heading", text: "REPL — интерактивный интерпретатор" },
          { type: "text", text: "Наберите в терминале просто python. Вы попадёте в REPL (Read-Eval-Print Loop) — режим, где можно выполнять код построчно и сразу видеть результат:" },
        ],
      },
      {
        id: "1-2",
        title: "Урок 1.2. Переменные и типы",
        sections: [
          { type: "heading", text: "Переменные" },
          { type: "code", language: "python", code: "name = \"Мария\"     # строка\nage = 25          # целое число\nheight = 1.68     # дробное число\nis_student = True  # логическое (bool)\n\n# Python сам определяет тип по значению\nprint(type(age))  # <class 'int'>" },
          { type: "heading", text: "Именование переменных" },
          { type: "code", language: "python", code: "# Хорошо\ntotal_price = 1500\nuser_email = \"test@mail.com\"\n\n# Плохо (сработает, но нарушает конвенции)\nTotalPrice = 1500\nx = \"test@mail.com\"  # неинформативное имя" },
          { type: "heading", text: "Базовые типы данных" },
          { type: "heading", text: "Преобразование типов" },
          { type: "heading", text: "Упражнения" },
        ],
      },
    ],
    homework: {
      title: "Домашнее задание — Неделя 1",
      tasks: [
        "Калькулятор возраста. Программа спрашивает год рождения, вычисляет и выводит текущий возраст пользователя (текущий год — 2026).",
        "Конвертер температур. Спросить температуру в градусах Цельсия, вывести в Фаренгейтах: F = C * 9/5 + 32.",
        "Разделитель чека. Спросить сумму счёта и количество человек, вывести сумму на каждого, округлённую до 2 знаков после запятой (используйте :.2f в f-строке).",
        "Выполнить все 📝-упражнения из уроков 1.1–1.5, сохранить каждое отдельным файлом в папке week1/.",
      ],
    },
  },
  {
    id: 2,
    title: "Неделя 2. Управляющие конструкции и коллекции",
    lessons: [],
    homework: {
      title: "Домашнее задание — Неделя 2",
      tasks: [
        "Анализатор текста. Дан произвольный абзац текста. Найти: количество слов, количество уникальных слов (через set), самое частое слово (через dict).",
        "Список дел (TODO в консоли). Через список словарей {\"task\": \"...\", \"done\": False} реализовать: добавление задачи, отметку выполненной, вывод списка с пометками [x]/[ ].",
        "Матрица чисел. Дан список списков (матрица чисел). Найти сумму всех элементов и сумму по каждой строке отдельно.",
      ],
    },
  },
  {
    id: 3,
    title: "Неделя 3. Инструменты разработчика и первый проект",
    lessons: [],
    homework: {
      title: "Домашнее задание — Неделя 3",
      tasks: [],
    },
    project: {
      title: "Проект модуля: Mind Games",
      description: "Консольное приложение с несколькими логическими мини-играми. Пользователь видит меню, выбирает игру, играет несколько раундов, видит счёт.",
      requirements: [
        "Главное меню при запуске показывает список игр",
        "Игра «Чётное/нечётное» — угадать, чётное число или нет",
        "Игра «НОД» — вычислить наибольший общий делитель двух чисел",
        "Игра «Простое число» — определить, простое ли число",
        "Игра «Палиндром» — определить, является ли последовательность палиндромом",
        "3 раунда за сессию, итоговый счёт в конце",
        "Каждая игра — отдельный модуль/функция",
        "Обработка некорректного ввода",
        "Код прогнан через black и flake8",
      ],
      criteria: [
        { label: "Все 4 игры реализованы и работают корректно", weight: "40%" },
        { label: "Код разделён на модули, нет дублирования логики", weight: "20%" },
        { label: "Обработка ошибок ввода", weight: "15%" },
        { label: "Стиль кода (PEP 8, проходит flake8)", weight: "15%" },
        { label: "Git-история и README", weight: "10%" },
      ],
    },
    test: {
      title: "Итоговый тест по модулю 1",
      questions: [
        { q: "Что выведет print(type(5 / 2))?", a: "<class 'float'>, / всегда возвращает дробное число." },
        { q: "Чем list отличается от tuple?", a: "list изменяем, tuple — нет." },
        { q: "Что произойдёт при попытке обратиться к несуществующему ключу словаря через dict[\"ключ\"]? А через dict.get(\"ключ\")?", a: "dict[\"ключ\"] выбросит KeyError, dict.get(\"ключ\") вернёт None без ошибки." },
        { q: "Что делает git add . и чем отличается от git commit?", a: "git add . добавляет изменения в staging area, git commit фиксирует их в истории." },
        { q: "Зачем нужны виртуальные окружения?", a: "Чтобы зависимости разных проектов не конфликтовали друг с другом по версиям." },
        { q: "Найдите ошибку: for i in range(5) print(i)", a: "Не хватает : после range(5)." },
      ],
    },
  },
];

function renderSection(section, idx) {
  switch (section.type) {
    case "heading":
      return <h3 key={idx} className="lesson-heading">{section.text}</h3>;
    case "text":
      return <p key={idx} className="lesson-text">{section.text}</p>;
    case "code":
      return (
        <div key={idx} className="lesson-code">
          <div className="lesson-code__lang">{section.language}</div>
          <pre><code>{section.code}</code></pre>
        </div>
      );
    case "warning":
      return (
        <div key={idx} className="lesson-warning">
          <span className="lesson-warning__icon">⚠️</span>
          <span>{section.text}</span>
        </div>
      );
    case "exercise":
      return (
        <div key={idx} className="lesson-exercise">
          <div className="lesson-exercise__header">
            <span className="lesson-exercise__icon">📝</span>
            <span className="lesson-exercise__title">{section.title}</span>
          </div>
          <p className="lesson-exercise__text">{section.text}</p>
        </div>
      );
    case "table":
      return (
        <div key={idx} className="lesson-table-wrapper">
          <table className="lesson-table">
            <thead>
              <tr>{section.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

function ModulePageInner({ currentLocale = "en" }) {
  const { isSignedIn, isLoaded } = useAuth();
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [activeView, setActiveView] = useState("lessons");
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { from: "mentor", text: currentLocale === "ru" ? "Привет! Я твой ментор по курсу. Задавай любые вопросы по материалам модуля 😊" : "Hi! I'm your course mentor. Ask me anything about the module materials 😊" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const t = ui[currentLocale] || ui.en;

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/";
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return (
      <div className="dashboard">
        <div className="spinner-wrapper">
          <div className="spinner" />
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null;
  }

  const week = WEEKS[activeWeek];
  const lesson = activeLesson !== null ? week.lessons[activeLesson] : null;
  const completedCount = completedLessons.size;

  const handleLessonClick = useCallback((lessonIdx) => {
    const lessonId = WEEKS[activeWeek].lessons[lessonIdx].id;
    setActiveLesson(lessonIdx);
    setActiveView("lessons");
    setCompletedLessons(prev => {
      const next = new Set(prev);
      next.add(lessonId);
      return next;
    });
  }, [activeWeek]);

  const handleWeekChange = useCallback((weekIdx) => {
    setActiveWeek(weekIdx);
    setActiveLesson(null);
    setActiveView("lessons");
  }, []);

  const handleSendMessage = useCallback(() => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { from: "me", text: chatInput.trim() }]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        from: "mentor",
        text: currentLocale === "ru"
          ? "Отличный вопрос! Разберём на ближайшем вебинаре или в личной встрече. Если срочно — напиши в Telegram @proscript_mentor"
          : "Great question! We'll cover it in the next webinar or a personal meeting. If urgent, write to @proscript_mentor on Telegram"
      }]);
    }, 800);
  }, [chatInput]);

  const nextDeadline = SCHEDULE.find(s => s.type === "deadline");
  const daysUntilDeadline = nextDeadline ? Math.max(0, Math.ceil((new Date(2026, 6, parseInt(nextDeadline.date)) - new Date()) / (1000 * 60 * 60 * 24))) : 0;

  return (
    <div className="dashboard">
      <header className="dashboard__topbar">
        <button className="dashboard__sidebar-toggle" onClick={() => setSidebarOpen(v => !v)} aria-label="Toggle sidebar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {sidebarOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
        <div className="dashboard__logo">
          <span className="dashboard__logo-mark">Pro</span>
          <span className="dashboard__logo-accent">Script</span>
          <span className="dashboard__logo-suffix">Academy</span>
        </div>
        <LangSwitcher currentLocale={currentLocale} />
        <UserButton />
      </header>

      <div className="dashboard__layout">
        <aside className={`dashboard__sidebar${sidebarOpen ? " sidebar--open" : ""}`}>
          <div className="sidebar__module-info">
            <a href="/dashboard" className="sidebar__back-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              {t.dashboard.module} 1
            </a>
            <h2 className="sidebar__module-title">Основы Python</h2>
            <span className="sidebar__module-duration">3 {t.dashboard.weeks}</span>
          </div>

          <div className="sidebar__progress">
            <div className="sidebar__progress-header">
              <span className="sidebar__progress-label">{t.dashboard.progress}</span>
              <span className="sidebar__progress-count">{completedCount}/{TOTAL_LESSONS}</span>
            </div>
            <div className="sidebar__progress-bar">
              <div className="sidebar__progress-fill" style={{ width: `${(completedCount / TOTAL_LESSONS) * 100}%` }} />
            </div>
          </div>

          <div className="sidebar__deadline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div className="sidebar__deadline-info">
              <span className="sidebar__deadline-label">{t.dashboard.deadline}</span>
              <span className="sidebar__deadline-date">{nextDeadline?.date} · {daysUntilDeadline} {t.dashboard.days}</span>
            </div>
          </div>

          <nav className="sidebar__nav">
            {WEEKS.map((w, wi) => (
              <div key={w.id} className="sidebar__week">
                <button
                  className={`sidebar__week-btn ${activeWeek === wi ? "sidebar__week-btn--active" : ""}`}
                  onClick={() => handleWeekChange(wi)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{w.title}</span>
                </button>

                <div className={`sidebar__lessons ${activeWeek === wi ? "sidebar__lessons--open" : ""}`}>
                  {w.lessons.map((l, li) => (
                    <button
                      key={l.id}
                      className={`sidebar__lesson-btn ${activeWeek === wi && activeLesson === li ? "sidebar__lesson-btn--active" : ""}`}
                      onClick={() => {
                        setActiveWeek(wi);
                        handleLessonClick(li);
                      }}
                    >
                      {l.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="sidebar__section">
              <button
                className={`sidebar__section-btn ${activeView === "schedule" ? "sidebar__section-btn--active" : ""}`}
                onClick={() => { setActiveView("schedule"); setActiveLesson(null); }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{t.dashboard.schedule}</span>
              </button>
            </div>

            <div className="sidebar__section">
              <button
                className={`sidebar__section-btn ${activeView === "homework" ? "sidebar__section-btn--active" : ""}`}
                onClick={() => { setActiveView("homework"); setActiveLesson(null); }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <span>{t.dashboard.homework}</span>
              </button>
            </div>

            {activeWeek === 2 && (
              <>
                <div className="sidebar__section">
                  <button
                    className={`sidebar__section-btn ${activeView === "project" ? "sidebar__section-btn--active" : ""}`}
                    onClick={() => { setActiveView("project"); setActiveLesson(null); }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                      <line x1="12" y1="22" x2="12" y2="15.5" />
                      <polyline points="22 8.5 12 15.5 2 8.5" />
                    </svg>
                    <span>{t.dashboard.project}: Mind Games</span>
                  </button>
                </div>

                <div className="sidebar__section">
                  <button
                    className={`sidebar__section-btn ${activeView === "test" ? "sidebar__section-btn--active" : ""}`}
                    onClick={() => { setActiveView("test"); setActiveLesson(null); }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <span>{t.dashboard.test}</span>
                  </button>
                </div>
              </>
            )}
          </nav>
        </aside>

        <main className="dashboard__content">
          {activeView === "lessons" && lesson && (
            <div className="lesson">
              <div className="lesson__header">
                <span className="lesson__week-badge">{t.dashboard.week} {activeWeek + 1}</span>
                <h1 className="lesson__title">{lesson.title}</h1>
              </div>
              <div className="lesson__body">
                {lesson.sections.map((section, idx) => renderSection(section, idx))}
              </div>
              <button
                className={`lesson__done-btn ${completedLessons.has(lesson.id) ? "lesson__done-btn--done" : ""}`}
                onClick={() => {
                  setCompletedLessons(prev => {
                    const next = new Set(prev);
                    if (next.has(lesson.id)) next.delete(lesson.id);
                    else next.add(lesson.id);
                    return next;
                  });
                }}
              >
                {completedLessons.has(lesson.id) ? `✓ ${t.dashboard.lessonCompleted}` : `○ ${t.dashboard.markLearned}`}
              </button>
            </div>
          )}

          {activeView === "schedule" && (
            <div className="lesson">
              <div className="lesson__header">
                <h1 className="lesson__title">{t.dashboard.schedule}</h1>
                <p className="lesson-text" style={{ color: "var(--text-muted)", marginTop: "0.25rem" }}>Июль — Август 2026</p>
              </div>
              <div className="lesson__body">
                {[0, 7, 14].map((start, wi) => {
                  const weekEvents = SCHEDULE.slice(start, start + 7);
                  const hasDeadline = weekEvents.some(e => e.type === "deadline");
                  return (
                    <div key={wi} className="schedule-week">
                      <div className="schedule-week__header">
                        <span className="schedule-week__title">{t.dashboard.week} {wi + 1}</span>
                        {hasDeadline && <span className="schedule-week__deadline">{t.dashboard.deadline}</span>}
                      </div>
                      <div className="schedule-week__body">
                        {weekEvents.map((item, idx) => (
                          <div key={idx} className={`schedule-row schedule-row--${item.type}`}>
                            <span className="schedule-row__date">{item.day}</span>
                            <span className="schedule-row__event">{item.event}</span>
                            {item.type !== "lesson" && (
                              <span className="schedule-row__badge">
                                {item.type === "webinar" ? `🎙 ${t.dashboard.webinar}` : `⏰ ${t.dashboard.deadline}`}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeView === "homework" && week.homework && (
            <div className="lesson">
              <div className="lesson__header">
                <h1 className="lesson__title">{week.homework.title}</h1>
              </div>
              <div className="lesson__body">
                <ol className="hw-list">
                  {week.homework.tasks.map((task, idx) => (
                    <li key={idx} className="hw-list__item">{task}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {activeView === "project" && week.project && (
            <div className="lesson">
              <div className="lesson__header">
                <span className="lesson__week-badge">{t.dashboard.project}</span>
                <h1 className="lesson__title">{week.project.title}</h1>
              </div>
              <div className="lesson__body">
                <p className="lesson-text">{week.project.description}</p>
                <h3 className="lesson-heading">{t.dashboard.projectRequirements}</h3>
                <ul className="lesson-ul">
                  {week.project.requirements.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
                <h3 className="lesson-heading">{t.dashboard.projectCriteria}</h3>
                <div className="project-criteria">
                  {week.project.criteria.map((c, idx) => (
                    <div key={idx} className="project-criteria__item">
                      <div className="project-criteria__info">
                        <span className="project-criteria__label">{c.label}</span>
                        <span className="project-criteria__weight">{c.weight}</span>
                      </div>
                      <div className="project-criteria__bar">
                        <div className="project-criteria__fill" style={{ width: c.weight }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeView === "test" && week.test && (
            <div className="lesson">
              <div className="lesson__header">
                <h1 className="lesson__title">{week.test.title}</h1>
                <p className="lesson-text" style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>{t.dashboard.testSelfCheck}</p>
              </div>
              <div className="lesson__body">
                {week.test.questions.map((item, idx) => (
                  <details key={idx} className="test-question">
                    <summary className="test-question__summary">
                      <span className="test-question__number">{idx + 1}.</span>
                      <span>{item.q}</span>
                      <svg className="test-question__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="test-question__answer">
                      <span className="test-question__answer-label">{t.dashboard.answer}</span> {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      <button className="chat-fab" onClick={() => setChatOpen(v => !v)} aria-label={t.dashboard.chatWithMentor}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {chatOpen && (
        <div className="chat-widget">
          <div className="chat-widget__header">
            <div className="chat-widget__mentor">
              <div className="chat-widget__avatar">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <span className="chat-widget__name">{t.dashboard.mentorName}</span>
                <span className="chat-widget__status">{t.dashboard.online}</span>
              </div>
            </div>
            <button className="chat-widget__close" onClick={() => setChatOpen(false)} aria-label={t.dashboard.close}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="chat-widget__messages">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`chat-msg chat-msg--${msg.from}`}>
                <div className="chat-msg__text">{msg.text}</div>
              </div>
            ))}
          </div>

          <form className="chat-widget__input-row" onSubmit={e => { e.preventDefault(); handleSendMessage(); }}>
            <input
              className="chat-widget__input"
              type="text"
              placeholder={t.dashboard.chatPlaceholder}
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
            />
            <button className="chat-widget__send" type="submit" aria-label={t.dashboard.send}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default function ModulePage(props) {
  return (
    <ClerkProvider publishableKey={import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ModulePageInner {...props} />
    </ClerkProvider>
  );
}
