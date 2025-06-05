export const Footer = () => {
    return (
      <footer className="bg-[linear-gradient(180deg,_#0f0f1f,_#161942)] text-white py-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-[#0ce3b3] mb-4">AI-менеджер</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-[250px]">
              Автоматизируйте обработку входящих запросов, увеличьте конверсию и снизьте нагрузку на
              команду. Работает 24/7, интегрируется с вашим сайтом и мессенджерами.
            </p>
          </div>
  
          <div>
            <h4 className="text-white/80 font-semibold mb-3">Навигация</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#how" className="hover:text-white transition">Как работает</a></li>
              <li><a href="#usecases" className="hover:text-white transition">Где использовать</a></li>
              <li><a href="#benefits" className="hover:text-white transition">Преимущества</a></li>
              <li><a href="#stats" className="hover:text-white transition">Я теряю клиентов</a></li>
              <li><a href="#comparison" className="hover:text-white transition">Сравнение с человеком</a></li>
              <li><a href="#consult" className="hover:text-white transition">Бесплатная консультация</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-white/80 font-semibold mb-3">Контакты</h4>
            <ul className="text-sm text-white/70 space-y-2">
              <li>Email: <a href="mailto:hello@ai-manager.site" className="hover:text-white">hello@ai-manager.site</a></li>
              <li>Telegram: <a href="https://t.me/ai_manager_bot" className="hover:text-white">@ai_manager_bot</a></li>
            </ul>
          </div>
  
          
        </div>
  
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} AI-менеджер. Все права защищены.
        </div>
      </footer>
    );
  };
  