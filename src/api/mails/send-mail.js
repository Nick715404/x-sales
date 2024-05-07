import nodemailer from "nodemailer"

async function sendMail(data) {
  const email = data?.email
  const name = data?.name
  const description = data?.description

  const formattedBody = `
    <html>
      <body>
        <p>---</p>
        <p>${name}</p>
        <p>${email}</p>
        <p>${description}</p>
      </body>
    </html>
  `

  const transporter = nodemailer.createTransport({
    service: "gmail", // С помощью этой настройки можно менять тип почты, например gmail
    auth: {
      user: process.env.HOTMAIL_USER,
      pass: process.env.HOTMAIL_PASS,
    },
  })

  return await transporter.sendMail({
    from: process.env.HOTMAIL_FROM,
    to: process.env.HOTMAIL_TO,
    subject: "Тестовое сообщение",
    html: formattedBody,
  })
}

export default async function lead(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ message: "Разрешены только POST-запросы" })
  }

  const r2 = await sendMail({ ...req.body })
  if (r2?.messageId) {
    res.json({ ok: true })
  } else {
    res.json({ ok: false, message: "Сообщение не отправлено" })
  }
}