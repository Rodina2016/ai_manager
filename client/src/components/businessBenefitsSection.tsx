import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import WorldIcon from '../assets/world.svg?react';
import PigIcon from '../assets/piggy-bank.svg?react';
import TrendsUpIcon from '../assets/arrow-trend-up.svg?react';
import RocketIcon from '../assets/rocket-lunch.svg?react';
import TemperatureDownIcon from '../assets/temperature-down.svg?react';
import IntroductionIcon from '../assets/introduction.svg?react';
import BGImage from '../assets/main-bg.svg?react';

const benefits = [
  {
    title: 'Повышает конверсию',
    description:
      'Не теряет клиентов в нерабочее время и отвечает так, будто знает ваш продукт изнутри',
    Icon: TrendsUpIcon,
  },
  {
    title: 'Мгновенный ответ',
    description: 'Отвечает за доли секунды, пока человек ещё только формулирует вопрос',
    Icon: RocketIcon,
  },
  {
    title: 'Снижает нагрузку',
    description: 'Автоматизирует рутину, давая команде больше времени на ключевые задачи',
    Icon: TemperatureDownIcon,
  },
  {
    title: 'Экономит ресурсы',
    description: 'Заменяет до 2–3 сотрудников при высоком объёме входящих заявок',
    Icon: PigIcon,
  },
  {
    title: 'Поддерживает естественный диалог',
    description:
      'AI-менеджер понимает суть запроса, даже если клиент пишет неформально — как в чате с живым человеком',
    Icon: IntroductionIcon,
  },
  {
    title: 'Работает везде',
    description: 'Сайт, мессенджеры, соцсети — он там, где ваши клиенты',
    Icon: WorldIcon,
  },
];

const BenefitCard = ({
  Icon,
  title,
  description,
  delay = 0,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  delay?: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4"
    >
      <div className="w-[50px] h-[50px] bg-[radial-gradient(ellipse_at_top_left,_#6871d0,_#489c94)] rounded-[12px] flex items-center justify-center text-white shrink-0">
        <div className="text-4xl text-accent">
          <Icon />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export const BusinessBenefitsSection = () => {
  return (
    <section className="relative bg-[linear-gradient(180deg,_#232455,_#17213f)] text-[#dddddd] py-24 px-6 md:px-24">
      <div className="absolute inset-0 z-0 opacity-10 rotate-x-180">
        <BGImage className="w-full h-full object-cover" />
      </div>
      <div className="flex max-w-7xl gap-2 mx-auto flex-col lg:flex-row">
        <div className="max-w-4xl mx-auto text-left mb-16">
          <h2 className="text-4xl font-semibold mb-6">
            Зачем вашему бизнесу <p className="text-[#0ce3b3]">AI-менеджер</p>
          </h2>
          <p className="text-lg">
            Ваши клиенты не любят ждать. А ваши менеджеры не могут быть на связи 24/7. <br />
            AI-менеджер решает эту задачу.
          </p>
          <div className="flex justify-left mt-14">
            <a href="#feedback" className="relative bg-[#10b590] text-white py-3 px-8 rounded-full text-lg hover:opacity-80 transition">
              Получить AI-менеджера
            </a>
          </div>
        </div>

        <div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {benefits.map(({ title, description, Icon }, index) => (
              <BenefitCard
                key={index}
                title={title}
                description={description}
                Icon={Icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
