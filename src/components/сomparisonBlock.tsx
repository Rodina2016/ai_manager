import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: '⏱ Скорость ответа',
    ai: 'Мгновенно (24/7)',
    human: 'От 5 минут до нескольких часов',
  },
  {
    title: '🕒 График работы',
    ai: 'Круглосуточно, без выходных',
    human: 'Ограничен рабочими часами',
  },
  {
    title: '💬 Одновременные диалоги',
    ai: 'Неограниченно',
    human: '1–2 максимум',
  },
  {
    title: '💰 Стоимость',
    ai: 'Фиксированная от X₽ в месяц',
    human: 'От 30 000₽ + налоги',
  },
  {
    title: '📈 Масштабируемость',
    ai: 'Легко',
    human: 'Трудозатратно',
  },
  {
    title: '📚 Обучение продукту',
    ai: 'Один раз + самообучение',
    human: 'Постоянное обучение',
  },
  {
    title: '😡 Эмоциональная стабильность',
    ai: 'Всегда спокоен',
    human: 'Усталость и выгорание',
  },
  {
    title: '🎯 Конверсия',
    ai: 'Оптимизируется алгоритмами',
    human: 'Зависит от опыта и мотивации',
  },
  {
    title: '🧠 Интеграция с CRM',
    ai: 'Мгновенно через API',
    human: 'Ручной ввод, ошибки',
  },
  {
    title: '⚙️ Адаптация под скрипты',
    ai: 'По кнопке или команде',
    human: 'Через обучение, не всегда стабильно',
  },
];

export const ComparisonBlock: React.FC = () => {
  return (
    <section className="bg-[linear-gradient(180deg,_#4d4d91,_#0F0F0F)] text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          <span className="text-[#0ce3b3]">AI-менеджер</span> vs Человек-менеджер
        </h2>
        <div className="space-y-4">
          {features.map((item, idx) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                ref={ref}
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#292947] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 border border-gray-700"
              >
                <div className="sm:w-1/3 font-semibold text-white/90">{item.title}</div>
                <div className="sm:w-1/3">
                  <span className="block text-sm text-gray-400 mb-1">AI-менеджер</span>
                  <p className="text-white/95">{item.ai}</p>
                </div>
                <div className="sm:w-1/3">
                  <span className="block text-sm text-gray-400 mb-1">Человек</span>
                  <p className="text-white/95">{item.human}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
