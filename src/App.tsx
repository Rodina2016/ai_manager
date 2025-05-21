import { AiDemo } from './components/aiDemo';

import Logo from './assets/logo.svg?react';
import BgImage from './assets/main-bg.svg?react';

import { BusinessBenefitsSection } from './components/businessBenefitsSection';
import { HowItWorks } from './components/howItWorks';
import { WhereCanUse } from './components/whereCanUse';
import { StatsSection } from './components/statsSection';

function App() {
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
          <div className="relative max-w-8xl mx-auto flex flex-wrap justify-between items-center gap-y-4 text-white/80 text-sm md:text-base">
            {/* ЛОГО */}
            <Logo />

            {/* НАВИГАЦИЯ (центр — скрыть на мобилке) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-6 xl:gap-8">
              <a href="#benefits" className="hover:text-white transition">
                Преимущества
              </a>
              <a href="#stats" className="hover:text-white transition">
                Я теряю клиентов
              </a>
              <a href="#usecases" className="hover:text-white transition">
                Где использовать
              </a>
              <a href="#how" className="hover:text-white transition">
                Как работает
              </a>
            </div>

            {/* Кнопка */}
            <button className="bg-[#10b590] text-white py-2 px-4 sm:px-5 rounded-full text-sm hover:opacity-80 transition">
              Оставить заявку
            </button>
          </div>
        </nav>

        {/* Контент */}
        <div className="relative z-10 max-w-8xl flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-24 lg:gap-40 xl:gap-60 mt-32 sm:mt-0 px-2 sm:px-4">
          <div className="text-center lg:text-left">
            <h1 className="text-[#0ce3b3] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              AI-менеджер
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
            <button className="bg-[#10b590] text-white py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg hover:opacity-80 transition">
              Попробовать сейчас
            </button>
          </div>

          <div className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[550px]">
            <AiDemo />
          </div>
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
    </>
  );
}

export default App;
