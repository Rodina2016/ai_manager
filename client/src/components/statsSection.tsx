import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

interface StatCardProps {
  value: string;
  description: React.ReactNode;
  sub?: string;
  delay?: number;
}

const stats = [
  {
    value: '25–30%',
    description: 'лидов не получают ответа вовремя или остаются без ответа',
    sub: '* по данным Rusbase, Retail.ru и iTrack',
  },
  {
    value: 'Только 7%',
    description: 'компаний отвечают лиду в течение 5 минут',
  },
  {
    value: '5 минут',
    description: (
      <>
        <p>достаточно клиенту, чтобы не получить ответ и уйти к конкурентам</p>
      </>
    ),
  },
  {
    value: '24/7',
    description: 'менеджеры не успевают и не могут обрабатывать входящие',
  },
];

export const StatCard: React.FC<StatCardProps> = ({ value, description, sub, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-[radial-gradient(ellipse_at_top_left,_#192243,_#2f3041)] text-white/90 rounded-2xl p-6 flex flex-col justify-start h-full"
    >
      <h3 className="text-4xl font-bold mb-2 text-[#0ce3b3]">{value}</h3>
      <div className="text-white/80 text-lg">{description}</div>
      {sub && <p className="text-white/60 text-sm mt-4">{sub}</p>}
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section className="bg-[linear-gradient(180deg,_#131727,_#232455)] py-15 lg:py-25 px-6 md:px-10 text-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-accent text-5xl font-semibold mb-4">Вы теряете клиентов</h2>
        <p className="text-3xl mb-8 lg:mb-16">ещё до начала разговора</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 mb-10 lg:mb-20 gap-4 lg:gap-12">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 0.15} />
        ))}
      </div>
      <div>
        <div className="flex w-full justify-center">
          <a
            href="#feedback"
            className="relative bg-main text-white py-4 px-8 text-xl rounded-full hover:opacity-80 transition"
          >
            Не хочу терять клиентов
          </a>
        </div>
      </div>
    </section>
  );
};
