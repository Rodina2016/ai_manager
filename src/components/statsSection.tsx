export const StatsSection = () => {
  return (
    <section className="bg-[linear-gradient(180deg,_#454d8f,_#232455)] py-24 px-6 md:px-24 text-white rounded-t-[90px] mt-[-90px] relative">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Вы теряете клиентов ещё до начала разговора
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center">
        <div>
          <h3 className="text-5xl font-bold mb-2 text-[#0ce3b3]">25-30%</h3>
          <p className="text-white/80">
            лидов не получают ответа вовремя или остаются без ответа по данным Rusbase, Retail.ru и
            iTrack
          </p>
        </div>
        <div>
          <h3 className="text-5xl font-bold mb-2 text-[#0ce3b3]">Только 7%</h3>
          <p className="text-white/80">компаний отвечают лиду в течение 5 минут</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold mb-2 text-[#0ce3b3]">5 минут</h3>
          <p className="text-white/80">
            достаточно клиенту, чтобы не&nbsp;получить ответ и уйти к конкурентам
          </p>
        </div>
        <div>
          <h3 className="text-5xl font-bold mb-2 text-[#0ce3b3]">24/7</h3>
          <p className="text-white/80">Менеджеры не успевают и не могут обрабатывать входящие</p>
        </div>
      </div>
    </section>
  );
};
