import { motion } from 'framer-motion';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

const industries = [
  {
    title: 'Интернет-магазины',
    description:
      'Отвечает на вопросы о товарах, доставке, наличии и помогает оформить заказ прямо в чате.',
    cls: 'lg:row-span-2',
  },
  {
    title: 'Медицинские центры',
    description: 'Записывает пациентов, даёт информацию о процедурах, ценах и графике работы',
    cls: 'lg:col-span-2',
  },
  {
    title: 'Образовательные проекты',
    description: 'Консультирует по курсам и программам, помогает выбрать подходящее направление',
  },
  {
    title: 'Сервисы и услуги',
    description:
      'Принимает заявки на ремонт, монтаж, уборку и другие услуги, уточняет детали заказов',
    cls: 'lg:row-span-2',
  },
  {
    title: 'Бьюти-индустрия',
    description: 'Записывает клиентов на процедуры, отвечает на вопросы, предлагает свободные окна',
  },
  {
    title: 'Недвижимость',
    description: 'Показывает доступные объекты, отвечает на вопросы по условиям аренды или покупки',
  },
];

// 🔽 Локальный компонент карточки (в этом же файле)
const IndustryCard = ({
  title,
  description,
  cls = '',
  delay = 0,
}: {
  title: string;
  description: string;
  cls?: string;
  delay?: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`
        bg-[radial-gradient(ellipse_at_top_left,_#192243,_#404280)]
        text-white/90 rounded-2xl p-5 
        ${cls}
      `}
    >
      <h3 className="text-2xl font-bold mb-2 text-white/80">{title}</h3>
      <p className="text-white/75 text-base">{description}</p>
    </motion.div>
  );
};

export const WhereCanUse: FC = () => {
  return (
    <section className="bg-[linear-gradient(180deg,_#131727,_#262d5f)] py-10 lg:py-24 px-6 md:px-24 text-white">
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="heading-accent text-4xl lg:text-5xl font-bold mb-6 text-left">
          Ваш бизнес может <span className="text-[#0ce3b3]">продавать больше</span>
        </h2>
        <p className="text-left text-lg lg:text-xl text-white/80 max-w-3xl">
          ИИ-менеджер <span className="text-white font-semibold">быстро обрабатывает обращения</span>,
          мгновенно отвечает, помогает с заказами, консультациями и приёмом заявок.
        </p>
        <p className='mt-4 text-xl'>Подходит для любых сфер.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[180px]">
        {industries.map(({ title, description, cls }, index) => (
          <IndustryCard
            key={index}
            title={title}
            description={description}
            cls={cls}
            delay={index * 0.1}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12 max-w-6xl mx-auto">
        <a
          href="#feedback"
          className="bg-main text-white py-4 px-8 rounded-full text-lg hover:opacity-80 transition"
        >
          Бесплатная консультация
        </a>
      </div>
    </section>
  );
};

