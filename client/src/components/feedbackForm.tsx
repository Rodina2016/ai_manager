import { useState } from 'react';
import { motion } from 'framer-motion';

export function FeedbackForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Разрешаем ввод только цифр
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    setPhone(digitsOnly);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/sendToTelegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setPhone('');
      } else throw new Error();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative bg-[linear-gradient(180deg,_#0F0F0F,_#17213f)] text-[#dddddd] py-10 lg:py-24 px-6 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center">
          Оставить <span className="text-main">заявку</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Ваше имя"
              className="w-full bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 p-4 focus:outline-none focus:ring-2 focus:ring-[#10b590]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Номер телефона</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
              placeholder="Введите свой номер для связи"
              className="w-full bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 p-4 focus:outline-none focus:ring-2 focus:ring-[#10b590]"
            />
          </div>

        
          <div className='flex justify-center'>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-[250px] bg-main hover:opacity-90 text-white font-semibold py-3 rounded-full transition disabled:opacity-60"
            >
              {status === 'loading' ? 'Отправка...' : 'Отправить'}
            </button>
          </div>

          {status === 'success' && (
            <p className="text-center text-green-400">✅ Сообщение успешно отправлено</p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-400">❌ Ошибка при отправке. Попробуйте позже</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
