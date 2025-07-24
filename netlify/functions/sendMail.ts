import { Handler } from '@netlify/functions'
import nodemailer from 'nodemailer'

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const data = JSON.parse(event.body || '{}')

  const { name, email, arrival, departure, guests, phone, message } = data

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const toHost = {
    from: `"Studio Aurora" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Novo povpraševanje od ${name}`,
    html: `
      <p><strong>Ime:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Prihod:</strong> ${arrival}</p>
      <p><strong>Odhod:</strong> ${departure}</p>
      <p><strong>Gostje:</strong> ${guests}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Sporočilo:</strong><br>${message}</p>
    `,
  }

  const toGuest = {
    from: `"Studio Aurora" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Hvala za vaše povpraševanje',
    html: `
      <p>Spoštovani ${name},</p>
      <p>Hvala za vaše povpraševanje! Odgovorimo vam v najkrajšem možnem času.</p>
      <p>Lep pozdrav,<br>Studio Aurora Izola</p>
    `,
  }

  try {
    await transporter.sendMail(toHost)
    await transporter.sendMail(toGuest)
    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (err) {
    console.error('Email error:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Email send failed' }) }
  }
}

export { handler }
