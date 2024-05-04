import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return new Response('No phone number provided', {
        status: 400,
      });
    }

    const counterFilePath = path.join(process.cwd(), 'public', 'request_counter.txt');
    let requestNumber = 1;

    if (fs.existsSync(counterFilePath)) {
      // Считываем текущий номер заявки
      const lastRequestNumber = fs.readFileSync(counterFilePath, 'utf-8');
      requestNumber = parseInt(lastRequestNumber, 10) + 1;
    }

    // Обновляем номер заявки в файле
    fs.writeFileSync(counterFilePath, requestNumber.toString());

    const phoneFilePath = path.join(process.cwd(), 'public', 'phoneNumbers.txt');
    const currentDate = new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' });
    const entry = `${requestNumber}: ${currentDate}: ${phone}\n`;

    fs.appendFileSync(phoneFilePath, entry);

    return new Response(JSON.stringify({ requestNumber }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response('Error writing to file', {
      status: 500,
    });
  }
}

