const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID as string;

interface ContactPayload {
  name: string;
  email: string;
  businessType: string;
  message: string;
}

export async function sendContactNotification(data: ContactPayload): Promise<void> {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.warn('Telegram env vars not set — notification skipped.');
    return;
  }

  const text = [
    '<b>New contact form submission</b>',
    '',
    `<b>Name:</b> ${data.name}`,
    `<b>Email:</b> ${data.email}`,
    `<b>Business type:</b> ${data.businessType || '—'}`,
    `<b>Message:</b> ${data.message || '—'}`,
  ].join('\n');

  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Telegram notification failed:', err);
    throw new Error('Notification failed');
  }
}
