import { useEffect, useRef, useState } from 'react';

type Message = {
  from: 'user' | 'bot';
  text: string;
};

const messages: Message[] = [
  { from: 'bot', text: 'Привет! Я помогу вам с любыми вопросами о нашей услуге.' },
  { from: 'user', text: 'Сколько стоит интеграция?' },
  { from: 'bot', text: 'Стоимость фиксированная 75 000 ₽ в месяц.' },
  { from: 'user', text: 'На сколько умный ваш менеджер?' },
  { from: 'bot', text: 'Пользователи не отличают его от обычного человека.' },
  { from: 'user', text: 'Есть ли пробный период?' },
  { from: 'bot', text: 'Конечно! 7 дней бесплатно.' },
  { from: 'user', text: 'Я хочу попробовать его' },
  { from: 'bot', text: 'Ловите ссылку на почте!' }
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
      behavior: 'smooth'
    });
  }, [chat, typing]);

  return (
    <div
      ref={containerRef}
      className="bg-white/20 backdrop-blur-md rounded-xl p-4 w-full h-[380px] overflow-hidden"
    >
      <div className="space-y-2 text-sm">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs p-2 rounded-lg ${
              msg.from === 'user'
                ? 'bg-gray-500 text-white ml-auto text-right'
                : 'bg-gray-300 text-black'
            }`}
          >
            <strong>{msg.from === 'user' ? 'Вы' : 'ИИ'}:</strong> {msg.text}
          </div>
        ))}
        {typing && (
          <div
            className={`max-w-xs p-2 rounded-lg italic ${
              typing === 'user'
                ? 'bg-gray-500 text-white ml-auto text-right'
                : 'bg-gray-300 text-black'
            }`}
          >
            <strong>{typing === 'user' ? 'Вы' : 'ИИ-менеджер'}:</strong>{' '}
            <span className="animate-pulse text-xs"> печатает ...</span>
          </div>
        )}
      </div>
    </div>
  );
};
