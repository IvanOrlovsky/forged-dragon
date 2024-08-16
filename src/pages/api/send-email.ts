import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { name, phoneNumber, message } = req.body;

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "iiiaaaiii706@gmail.com",
				pass: "mdrw avdf htlv erqo",
			},
		});

		const mailOptions = {
			from: "iiiaaaiii706@gmail.com",
			to: "iiiaaaiii706@gmail.com",
			subject: "Новая заявка от клиента",
			html: `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>New Client Application</title>
				<style>
					body {
						font-family: Arial, sans-serif;
						background-color: #f4f4f4;
						margin: 0;
						padding: 0;
						color: #333;
					}
					.container {
						width: 100%;
						max-width: 600px;
						margin: 20px auto;
						background-color: #fff;
						padding: 20px;
						border-radius: 10px;
						box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
					}
					h2 {
						color: #0044cc;
						font-size: 24px;
					}
					p {
						font-size: 16px;
						line-height: 1.6;
					}
					strong {
						color: #555;
					}
					.footer {
						margin-top: 20px;
						text-align: center;
						color: #888;
						font-size: 12px;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<h2>Новая заявка от клиента</h2>
					<p><strong>Имя:</strong> ${name}</p>
					<p><strong>номер телефона:</strong> ${phoneNumber}</p>
					<p><strong>Комментарий к заявке:</strong></p>
					<p>${message}</p>
					<div class="footer">
						<p>Это письмо было отправлено автоматически. Пожалуйста, не отвечайте на него.</p>
					</div>
				</div>
			</body>
			</html>
			`,
		};

		try {
			await transporter.sendMail(mailOptions);
			res.status(200).json({ success: true });
		} catch (error) {
			console.error(error);
			res.status(500).json({ success: false });
		}
	} else {
		res.status(405).end();
	}
}
