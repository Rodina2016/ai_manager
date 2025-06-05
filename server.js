import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch'; // либо можно использовать native fetch в Node 18+

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// API
app.post('/api/sendToTelegram', async (req, res) => {
  const { name, phone } = req.body;
  console.log('Получено с формы:', { name, phone });

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const text = `Имя: ${name?.trim() || '—'}\nНомер: ${phone?.trim() || '—'}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
      // 🟢 Ключевая строка — timeout и только IPv4:
      agent: new (await import('https')).Agent({ family: 4, timeout: 5000 }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Ответ Telegram с ошибкой:', result);
      return res.status(500).json({ error: 'Ошибка отправки в Telegram', details: result });
    }

    console.log('✅ Успешно отправлено:', result);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('❌ Ошибка при отправке в Telegram:', err.message);
    return res.status(500).json({ error: 'Ошибка при подключении к Telegram' });
  }
});

// Статика
app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
