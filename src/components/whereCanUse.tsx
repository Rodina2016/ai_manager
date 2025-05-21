const industries = [
  {
    title: 'Интернет-магазины',
    description:
      'Отвечает на вопросы о товарах, доставке, наличии и помогает оформить заказ прямо в чате.',
    cls: 'row-span-2'
  },
  {
    title: 'Медицинские центры',
    description: 'Записывает пациентов, даёт информацию о процедурах, ценах и графике работы',
    cls: 'col-span-2'
  },
  {
    title: 'Образовательные проекты',
    description: 'Консультирует по курсам и программам, помогает выбрать подходящее направление'
  },
  {
    title: 'Сервисы и услуги',
    description:
      'Принимает заявки на ремонт, монтаж, уборку и другие услуги, уточняет детали заказов',
    cls: 'row-span-2'
  },
  {
    title: 'Бьюти-индустрия',
    description: 'Записывает клиентов на процедуры, отвечает на вопросы, предлагает свободные окна'
  },
  {
    title: 'Недвижимость',
    description: 'Показывает доступные объекты, отвечает на вопросы по условиям аренды или покупки'
  }
];

export const WhereCanUse = () => {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,_#17213f,_#262d5f)] py-24 px-6 md:px-24 text-white">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Где использовать <span className="text-[#0ce3b3]">AI-менеджера</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[200px]">
          {industries.map(({ title, description, cls }, index) => (
            <div
              key={index}
              className={`
        bg-[radial-gradient(ellipse_at_top_left,_#192243,_#404280)] text-white/90 rounded-2xl p-6 border-l-4 border-[#1c7a2f]
        ${cls}
       
      `}
            >
              <h3 className="text-2xl font-bold mb-2 text-white/80">{title}</h3>
              <p className="text-white/75 text-lg">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center max-w-4xl mx-auto text-white/80 text-lg">
          Благодаря гибкой архитектуре и обучению на базе вашего контента{' '}
          <span className="text-[#0ce3b3]">AI-менеджера</span> легко адаптируется под любые
          бизнес-задачи — от продаж и поддержки до консультаций и приёма заявок.
        </div>
        <div className="flex justify-center mt-14">
          <button className="bg-[#10b590] text-white py-3 px-8 rounded-full text-lg hover:opacity-80 transition">
            Подключить AI-менеджера
          </button>
        </div>
      </section>
    </>
  );
};
