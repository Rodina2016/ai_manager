import { useEffect, useRef, useState } from 'react';
import { User, Bot } from 'lucide-react';

type Message = {
  from: 'user' | 'bot';
  text: string;
};

const messages: Message[] = [
  { from: 'bot', text: 'Привет! Я помогу вам с любыми вопросами о нашей услуге.' },
  { from: 'user', text: 'Ты бот или настоящий человек?' },
  { from: 'bot', text: 'Я искусственный интеллект, но стараюсь быть максимально человечным 😉' },
  { from: 'user', text: 'А что ты умеешь?' },
  {
    from: 'bot',
    text: 'Я общаюсь с клиентами 24/7, отвечаю на вопросы, записываю, уточняю детали и помогаю с заказами.',
  },
  { from: 'user', text: 'Ты ещё и вежливый...' },
  { from: 'bot', text: 'Спасибо 😊 Вежливость — мой встроенный модуль!' },
  { from: 'user', text: 'А как ты понимаешь, что нужно говорить клиентам?' },
  {
    from: 'bot',
    text: 'Я обучаюсь на ваших примерах — типичных вопросах, ответах и материалах. Чем больше данных, тем лучше результат.',
  },
  { from: 'user', text: 'Можно тебя где-то потестировать?' },
  {
    from: 'bot',
    text: 'Конечно! У нас есть демо-чат. Можете пообщаться со мной прямо сейчас по ссылке.',
  },
  { from: 'user', text: 'Класс. Скинь!' },
  { from: 'bot', text: 'Ссылка уже у вас на почте 📩 Приятного теста!' },
];

export const AiDemo = () => {
  const [chat, setChat] = useState<{ from: string; text: string }[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const index = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    const loop = () => {
      if (index.current >= messages.length) {
        setTimeout(() => {
          setChat([]);
          index.current = 0;
          setTimeout(loop, 500);
        }, 1500);
        return;
      }

      const next = messages[index.current];
      setTyping(next.from);

      setTimeout(() => {
        setTyping(null);
        setChat(prev => [...prev, next]);
        index.current++;
        loop();
      }, 3000);
    };

    loop();
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [chat, typing]);

  return (
    <div
      className="relative pt-20 w-100 h-200 bg-no-repeat bg-contain bg-center"
      style={{ backgroundImage: 'url(/phone.png)' }}
    >
      <div
        ref={containerRef}
        className="
        pt-15 px-10
        top-[90px] left-[20px] right-[20px] bottom-[30px] 
        w-full  max-h-150
          overflow-y-auto scrollbar-none flex flex-col space-y-2"
      >
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${
              msg.from === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.from === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white shrink-0">
                <Bot size={16} />
              </div>
            )}

            <div
              className={`max-w-[75%] px-4 py-2 text-sm rounded-2xl break-words shadow-md ${
                msg.from === 'user'
                  ? 'bg-[#229ED9] text-white self-end rounded-br-sm'
                  : 'bg-[#E5E5EA] text-black self-start rounded-bl-sm'
              }`}
            >
              {msg.text}
            </div>

            {msg.from === 'user' && (
              <div className="w-8 h-8 rounded-full bg-[#229ED9] flex items-center justify-center text-white shrink-0">
                <User size={16} />
              </div>
            )}
          </div>
        ))}

        {typing && (
          <div
            className={`flex items-end gap-2 ${
              typing === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {typing === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white shrink-0">
                <Bot size={16} />
              </div>
            )}

            <div
              className={`max-w-[75%] px-4 py-2 text-sm rounded-2xl italic flex gap-1 ${
                typing === 'user'
                  ? 'bg-[#229ED9] text-white self-end rounded-br-sm'
                  : 'bg-[#E5E5EA] text-black self-start rounded-bl-sm'
              }`}
            >
              <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0s]" />
              <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>

            {typing === 'user' && (
              <div className="w-8 h-8 rounded-full bg-[#229ED9] flex items-center justify-center text-white shrink-0">
                <User size={16} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
