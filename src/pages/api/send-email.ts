import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import https from "https";
import querystring from "querystring";

const SMARTCAPTCHA_SERVER_KEY =
	"ysc2_6PL3DlbuFkmyHVxmGWJYEEgcOUScqr8JbAeRSP9129dac6c6"; // Ваш серверный ключ Yandex SmartCaptcha

function checkCaptcha(token: string, ip: string): Promise<boolean> {
	return new Promise((resolve, reject) => {
		const options = {
			hostname: "smartcaptcha.yandexcloud.net",
			port: 443,
			path:
				"/validate?" +
				querystring.stringify({
					secret: SMARTCAPTCHA_SERVER_KEY,
					token: token,
					ip: ip,
				}),
			method: "GET",
		};

		const req = https.request(options, (res) => {
			let data = "";
			res.on("data", (chunk) => {
				data += chunk;
			});
			res.on("end", () => {
				if (res.statusCode !== 200) {
					console.error(
						`Ошибка валидации CAPTCHA: код=${res.statusCode}; сообщение=${data}`
					);
					resolve(false);
				} else {
					const result = JSON.parse(data);
					resolve(result.status === "ok");
				}
			});
		});

		req.on("error", (error) => {
			console.error("Ошибка при обращении к сервису CAPTCHA:", error);
			reject(false);
		});

		req.end();
	});
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { name, phoneNumber, message, captchaToken } = req.body;

		// Получаем IP-адрес пользователя
		const userIp =
			req.headers["x-forwarded-for"] || req.socket.remoteAddress;

		// Проверка CAPTCHA
		const isHuman = await checkCaptcha(captchaToken, userIp as string);

		if (!isHuman) {
			return res.status(400).json({
				success: false,
				message:
					"Проверка CAPTCHA не пройдена. Пожалуйста, попробуйте еще раз.",
			});
		}

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: "mdrw avdf htlv erqo",
			},
		});

		const mailOptions = {
			from: process.env.EMAIL,
			to: process.env.EMAIL,
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
