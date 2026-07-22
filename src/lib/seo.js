import { COURSES } from './courses.js';

const SITE_URL = 'https://proscriptacademy.com';

export const SEO_DATA = {
  en: {
    home: {
      title: 'ProScript Academy — Online Programming Courses',
      description: 'Learn programming from scratch with ProScript Academy. Python, JavaScript, React, and more courses with job guarantee and real-world projects.',
      keywords: 'programming courses, learn to code, online programming school, Python course, JavaScript course, React course, coding bootcamp',
    },
    about: {
      title: 'About Us — ProScript Academy',
      description: 'ProScript Academy is an online programming school founded by practicing developers. Learn programming with real-world projects and job assistance.',
      keywords: 'about ProScript Academy, online programming school, coding education, learn programming online',
    },
    blog: {
      title: 'Blog — ProScript Academy',
      description: 'Read tutorials, guides, and articles about programming, web development, and software engineering from ProScript Academy.',
      keywords: 'programming blog, coding tutorials, web development articles, React tutorial, JavaScript guide',
    },
    contacts: {
      title: 'Contacts — ProScript Academy',
      description: 'Get in touch with ProScript Academy. Contact us for course information, partnerships, or any questions.',
      keywords: 'contact ProScript Academy, programming school contact, course information',
    },
    faq: {
      title: 'FAQ — ProScript Academy',
      description: 'Frequently asked questions about ProScript Academy courses, enrollment, payment, and career support.',
      keywords: 'programming school FAQ, course FAQ, coding bootcamp questions',
    },
    'privacy-policy': {
      title: 'Privacy Policy — ProScript Academy',
      description: 'Privacy Policy for ProScript Academy. Learn how we collect, use, and protect your personal data.',
      keywords: 'privacy policy, data protection, personal data',
    },
    'terms-and-conditions': {
      title: 'Terms and Conditions — ProScript Academy',
      description: 'Terms and Conditions for using ProScript Academy services and enrolling in courses.',
      keywords: 'terms and conditions, terms of service, user agreement',
    },
    'public-offer': {
      title: 'Public Offer — ProScript Academy',
      description: 'Public offer agreement for course enrollment at ProScript Academy.',
      keywords: 'public offer, course agreement, enrollment terms',
    },
    'payment-failed': {
      title: 'Payment Failed — ProScript Academy',
      description: 'Your payment did not go through. Don\'t worry, we\'re here to help.',
      keywords: 'payment failed, payment error, transaction declined',
    },
    'payment-processing': {
      title: 'Payment Processing — ProScript Academy',
      description: 'We are confirming your payment. Thank you for choosing ProScript Academy. Check your email for access details.',
      keywords: 'payment processing, payment confirmation, thank you, order pending',
    },
    'partner-program': {
      title: 'Partner Program — ProScript Academy',
      description: 'Join the ProScript Academy partner program. Earn commissions by referring students to our programming courses.',
      keywords: 'partner program, affiliate, referral program, earn money',
    },
    'blog/zustand-state-management': {
      title: 'Zustand: Lightweight State Management for React — ProScript Academy',
      description: 'Learn how to use Zustand for simple and efficient state management in React applications without boilerplate code.',
      keywords: 'Zustand, React state management, React tutorial, state management library',
    },
    dashboard: {
      title: 'My Courses — ProScript Academy',
      description: 'Your enrolled courses at ProScript Academy.',
      keywords: 'my courses, dashboard, learning, enrolled courses',
    },
  },
  ru: {
    home: {
      title: 'ProScript Academy — Онлайн-курсы программирования',
      description: 'Научитесь программировать с нуля в ProScript Academy. Курсы Python, JavaScript, React и других языков с гарантией трудоустройства и реальными проектами.',
      keywords: 'курсы программирования, научиться программировать, онлайн-школа программирования, курс Python, курс JavaScript, курс React',
    },
    about: {
      title: 'О нас — ProScript Academy',
      description: 'ProScript Academy — онлайн-школа программирования, основанная практикующими разработчиками. Учитесь программировать на реальных проектах.',
      keywords: 'о ProScript Academy, онлайн-школа программирования, образование в IT',
    },
    blog: {
      title: 'Блог — ProScript Academy',
      description: 'Читайте туториалы, гайды и статьи о программировании, веб-разработке и создании ПО от ProScript Academy.',
      keywords: 'блог программирования, туториалы по кодингу, статьи о веб-разработке',
    },
    contacts: {
      title: 'Контакты — ProScript Academy',
      description: 'Свяжитесь с ProScript Academy. Напишите нам для получения информации о курсах, партнёрстве или по любым вопросам.',
      keywords: 'контакты ProScript Academy, связаться с нами, информация о курсах',
    },
    faq: {
      title: 'Вопросы и ответы — ProScript Academy',
      description: 'Часто задаваемые вопросы о курсах, записи, оплате и поддержке по трудоустройству в ProScript Academy.',
      keywords: 'вопросы о курсах программирования, FAQ, часто задаваемые вопросы',
    },
    'privacy-policy': {
      title: 'Политика конфиденциальности — ProScript Academy',
      description: 'Политика конфиденциальности ProScript Academy. Как мы собираем, используем и защищаем ваши персональные данные.',
      keywords: 'политика конфиденциальности, защита данных, персональные данные',
    },
    'terms-and-conditions': {
      title: 'Условия использования — ProScript Academy',
      description: 'Условия использования услуг ProScript Academy и записи на курсы.',
      keywords: 'условия использования, пользовательское соглашение',
    },
    'public-offer': {
      title: 'Публичная оферта — ProScript Academy',
      description: 'Публичная оферта на запись на курсы ProScript Academy.',
      keywords: 'публичная оферта, договор оферты, условия записи',
    },
    'payment-failed': {
      title: 'Оплата не прошла — ProScript Academy',
      description: 'Платёж не прошёл. Не переживайте, мы поможем разобраться.',
      keywords: 'оплата не прошла, ошибка оплаты, платёж отклонён',
    },
    'payment-processing': {
      title: 'Подтверждение платежа — ProScript Academy',
      description: 'Мы подтверждаем ваш платёж. Спасибо, что выбрали ProScript Academy. Проверьте почту для получения доступа.',
      keywords: 'подтверждение платежа, оплата обрабатывается, спасибо за заказ',
    },
    'partner-program': {
      title: 'Партнёрская программа — ProScript Academy',
      description: 'Присоединяйтесь к партнёрской программе ProScript Academy. Зарабатывайте, рекомендуя наши курсы программирования.',
      keywords: 'партнёрская программа, реферальная программа, заработать на курсах',
    },
    'blog/zustand-state-management': {
      title: 'Zustand: Лёгкое управление состоянием в React без лишнего кода — ProScript Academy',
      description: 'Узнайте, как использовать Zustand для простого и эффективного управления состоянием в React-приложениях без шаблонного кода.',
      keywords: 'Zustand, управление состоянием React, туториал React, библиотека состояний',
    },
    dashboard: {
      title: 'Мои курсы — ProScript Academy',
      description: 'Ваши курсы в ProScript Academy.',
      keywords: 'мои курсы, кабинет, обучение, активированные курсы',
    },
  },
};

export function getCourseSEO(course, locale) {
  const title = course.title[locale] || course.title.en;
  const excerpt = course.excerpt[locale] || course.excerpt.en;
  const level = course.level[locale] || course.level.en;

  return {
    title: `${title} — ProScript Academy`,
    description: excerpt,
    keywords: `${title}, ${level}, programming course, курс программирования, ${course.tags.join(', ')}`,
  };
}

export function getJsonLd(type, data, locale) {
  const lang = locale === 'ru' ? 'ru' : 'en';

  switch (type) {
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ProScript Academy',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        description: locale === 'ru'
          ? 'Онлайн-школа программирования. Курсы Python, JavaScript, React с гарантией трудоустройства.'
          : 'Online programming school. Python, JavaScript, React courses with job guarantee.',
        sameAs: [],
      };

    case 'website':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ProScript Academy',
        url: SITE_URL,
        inLanguage: lang,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      };

    case 'course':
      return {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: data.title[lang] || data.title.en,
        description: data.excerpt[lang] || data.excerpt.en,
        provider: {
          '@type': 'Organization',
          name: 'ProScript Academy',
          url: SITE_URL,
        },
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: data.currency,
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/course/${data.slug}`,
        },
        educationalLevel: data.level[lang] || data.level.en,
        inLanguage: lang,
        isAccessibleForFree: false,
      };

    case 'article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Organization',
          name: 'ProScript Academy',
        },
        publisher: {
          '@type': 'Organization',
          name: 'ProScript Academy',
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/favicon.svg`,
          },
        },
        datePublished: data.datePublished || '2026-06-29',
        dateModified: data.dateModified || '2026-06-29',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
      };

    case 'breadcrumb':
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };

    default:
      return null;
  }
}

export { SITE_URL };
