import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SettingsIcon from '../assets/machine-learning.svg?react';
import IntegrationIcon from '../assets/puzzle-piece-integration.svg?react';
import TimeIcon from '../assets/time-twenty-four.svg?react';

const steps = [
  {
    id: 1,
    title: 'Настройка',
    description:
      'Вы рассказываете нам о своём бизнесе, и мы настраиваем искусственный интеллект под ваши продукты и услуги.',
    Icon: SettingsIcon,
  },
  {
    id: 2,
    title: 'Интеграция',
    description:
      'Подключаем менеджера к сайту, соцсетям или мессенджерам — туда, где приходят ваши клиенты.',
    Icon: IntegrationIcon,
  },
  {
    id: 3,
    title: 'Общение с клиентами',
    description:
      'ИИ-менеджер отвечает на вопросы, собирает заказы, записывает и помогает продавать 24/7.',
    Icon: TimeIcon,
  },
];
const StepCard = ({
  title,
  description,
  Icon,
  delay = 0,
}: {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  delay?: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative text-left"
    >
      

      {/* Контент поверх */}
      <div className="flex gap-6">
        <div className="opacity-20 min-w-16 h-16 z-0">
          <Icon className="w-full h-full" />
        </div>
        <div className='lg-50 lg:w-70'>
          <h3 className="text-3xl font-bold mb-2 text-white/80">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const HowItWorks = () => {
  return (
    <section className="bg-[linear-gradient(180deg,_#262d5f,_#131727)] py-10 lg:py-24 px-6 md:px-24 text-white">
      <h2 className="text-5xl font-semibold mb-16 text-center">
        Как работает <span className="text-[#0ce3b3]">ИИ-менеджер</span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <StepCard key={step.id} {...step} delay={index * 0.1} />
        ))}
      </div>

      <div className="flex justify-center mt-14 max-w-7xl mx-auto">
        <a
          href="#feedback"
          className="bg-main text-white py-4 px-8 rounded-full text-xl hover:opacity-80 transition"
        >
          Хочу подключить ИИ-менеджера
        </a>
      </div>
    </section>
  );
};

