import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

interface StatCardProps {
  value: string;
  description: string;
  delay?: number;
}

const stats = [
  {
    value: '25–30%',
    description:
      'лидов не получают ответа вовремя или остаются без ответа по данным Rusbase, Retail.ru и iTrack',
  },
  {
    value: 'Только 7%',
    description: 'компаний отвечают лиду в течение 5 минут',
  },
  {
    value: '5 минут',
    description: 'достаточно клиенту, чтобы не получить ответ и уйти к конкурентам',
  },
  {
    value: '24/7',
    description: 'Менеджеры не успевают и не могут обрабатывать входящие',
  },
];

export const StatCard: React.FC<StatCardProps> = ({ value, description, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-5xl font-bold mb-2 text-[#0ce3b3]">{value}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};


export const StatsSection = () => {
  return (
    <section className="bg-[linear-gradient(180deg,_#131727,_#232455)] py-24 px-6 md:px-24 text-white relative">
      <h2 className="text-5xl font-semibold text-center mb-4">
        Вы теряете клиентов 
      </h2>
      <p className='text-3xl text-center mb-16'>ещё до начала разговора</p>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 0.15} />
        ))}
      </div>
    </section>
  );
};