import { AiDemo } from './components/aiDemo';
import { motion } from 'framer-motion';


import Logo from './assets/logo.svg?react';
import BgImage from './assets/main-bg.svg?react';

import { BusinessBenefitsSection } from './components/businessBenefitsSection';
import { HowItWorks } from './components/howItWorks';
import { WhereCanUse } from './components/whereCanUse';
import { StatsSection } from './components/statsSection';
import { ComparisonBlock } from './components/сomparisonBlock';
import { useInView } from 'react-intersection-observer';
import { Footer } from './components/footer';
import { FeedbackForm } from './components/feedbackForm';
import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

function App() {

  const [refText, inViewText] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refDemo, inViewDemo] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="relative min-h-[calc(100vh+90px)] text-white flex items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Фон — градиент */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_#489c94,_#0f152b,_#6871d0)]"></div>

        {/* Фон — картинка */}
        <div className="absolute inset-0 z-0 opacity-20">
          <BgImage className="w-full h-full object-cover" />
        </div>

        {/* Навигация */}
        <nav className="absolute top-4 sm:top-6 inset-x-0 z-20 px-4 sm:px-6 md:px-12">
          <div className="relative max-w-8xl mx-auto flex items-center justify-between text-white/80 text-sm md:text-base">
            {/* ЛОГО */}
            <div className="w-28 sm:w-36">
              <Logo />
            </div>

            {/* МЕНЮ центр — только на десктопе */}
            <div className="hidden lg:flex flex-1 justify-center gap-6 xl:gap-8">
              <a href="#benefits" className="hover:text-white transition">Преимущества</a>
              <a href="#stats" className="hover:text-white transition">Я теряю клиентов</a>
              <a href="#usecases" className="hover:text-white transition">Где использовать</a>
              <a href="#how" className="hover:text-white transition">Как работает</a>
              <a href="#comparison" className="hover:text-white transition">Сравнение с человеком</a>
            </div>

            {/* Справа: кнопка (десктоп) и бургер (мобилка) */}
            <div className="flex items-center gap-4">
              <a href="#feedback" className="hidden lg:block bg-[#10b590] text-white py-2 px-4 rounded-full text-sm hover:opacity-80 transition">
                Оставить заявку
              </a>

              {/* Бургер — мобилка */}
              <button
                className="lg:hidden text-white"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Мобильное меню */}
          {isOpen && (
            <div className="lg:hidden mt-4 px-4 py-4 bg-[#17213f] rounded-xl shadow-md border border-white/10 flex flex-col gap-4 text-white/90">
              <a href="#benefits" className="hover:text-white transition">Преимущества</a>
              <a href="#stats" className="hover:text-white transition">Я теряю клиентов</a>
              <a href="#usecases" className="hover:text-white transition">Где использовать</a>
              <a href="#how" className="hover:text-white transition">Как работает</a>
              <a href="#comparison" className="hover:text-white transition">Сравнение с человеком</a>
              <a href="#feedback" className="mt-2 bg-[#10b590] text-white py-2 px-4 rounded-full text-sm hover:opacity-80 transition">
                Оставить заявку
              </a>
            </div>
          )}
        </nav>

        {/* Контент */}
        <div className="relative z-10 max-w-8xl flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-24 lg:gap-40 xl:gap-60 mt-32 sm:mt-0 px-2 sm:px-4">
          <motion.div
            ref={refText}
            initial={{ opacity: 0, y: 30 }}
            animate={inViewText ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-[#0ce3b3] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              ИИ-менеджер
              <div className="text-white font-light">для вашего бизнеса</div>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-xl text-white/80 mb-6 sm:mb-8">
              Менеджер на основе искусственного интеллекта,
              <br className="hidden sm:block" />
              который знает всё о вашей услуге
              <br />
              Работает <span className="text-[#0ce3b3]">24/7</span>. Реагирует мгновенно
            </p>
            <p className="text-xl sm:text-2xl text-white/80 mb-8">
              Не болеет, не уходит в отпуск и не требует зарплату
            </p>
            <a href="#feedback" className="bg-[#10b590] text-white py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg hover:opacity-80 transition">
              Попробовать сейчас
            </a>
          </motion.div>

          <motion.div
            ref={refDemo}
            initial={{ opacity: 0, y: 30 }}
            animate={inViewDemo ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[400px] sm:w-[480px] md:w-[550px]"
          >
            <AiDemo />
          </motion.div>
        </div>
      </section>

      <div id="stats">
        <StatsSection />
      </div>

      <div id="benefits">
        <BusinessBenefitsSection />
      </div>

      <div id="usecases">
        <WhereCanUse />
      </div>

      <div id="how">
        <HowItWorks />
      </div>

      <div id="comparison">
        <ComparisonBlock />
      </div>
      <div id="feedback">
        <FeedbackForm />
      </div>
      <Footer />
    </>
    
  );
}

export default App;
