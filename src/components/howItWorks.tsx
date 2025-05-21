import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SettingsIcon from '../assets/machine-learning.svg?react';
import IntegrationIcon from '../assets/puzzle-piece-integration.svg?react';
import TimeIcon from '../assets/time-twenty-four.svg?react';

const steps = [
  {
    id: 1,
    title: '1. Настройка',
    description:
      'Вы рассказываете нам о своём бизнесе, и мы настраиваем бота под ваши продукты и услуги.',
    Icon: SettingsIcon,
  },
  {
    id: 2,
    title: '2. Интеграция',
    description:
      'Подключаем менеджера к сайту, соцсетям или мессенджерам — туда, где приходят ваши клиенты.',
    Icon: IntegrationIcon,
  },
  {
    id: 3,
    title: '3. Общение с клиентами',
    description:
      'AI-менеджер отвечает на вопросы, собирает заказы, записывает и помогает продавать 24/7.',
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
    >
      <div className="text-5xl text-[#4cfec8] mb-4 flex justify-center">
        <Icon />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white/80">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

export const HowItWorks = () => {
  return (
    <section className="bg-[linear-gradient(180deg,_#262d5f,_#4d4d91)] py-24 px-6 md:px-24 text-white">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Как работает <span className="text-[#0ce3b3]">AI-менеджер</span>
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        {steps.map((step, index) => (
          <StepCard key={step.id} {...step} delay={index * 0.1} />
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <button className="bg-[#10b590] text-white py-3 px-8 rounded-full text-lg hover:opacity-80 transition">
          Бесплатная консультация
        </button>
      </div>
    </section>
  );
};
