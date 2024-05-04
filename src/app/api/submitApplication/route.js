import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return new Response('Name or phone is missing.', { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public', 'applications.txt');
    const currentDate = new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' });
    const entry = `Name: ${name}, Phone: ${phone}, Date: ${currentDate}\n`;

    fs.appendFileSync(filePath, entry);

    return new Response(JSON.stringify({ message: 'Application received.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response('Error writing to file.', { status: 500 });
  }
}
