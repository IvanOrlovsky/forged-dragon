import React, { useState } from "react";
import InputMask from "react-input-mask";
import { SmartCaptcha } from "@yandex/smart-captcha";

const ClientForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");
	const [captchaToken, setCaptchaToken] = useState("");
	const [lastSubmitTime, setLastSubmitTime] = useState(0);

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleCaptchaSuccess = (token: string) => {
		setCaptchaToken(token);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Проверка токена CAPTCHA
		if (!captchaToken) {
			setResponseMessage("Пожалуйста, пройдите проверку CAPTCHA.");
			return;
		}

		// Ограничение по времени (1 минута)
		const currentTime = Date.now();
		if (currentTime - lastSubmitTime < 60000) {
			setResponseMessage(
				"Пожалуйста, подождите минуту перед повторной отправкой."
			);
			return;
		}

		setIsSubmitting(true);
		setResponseMessage("");
		setLastSubmitTime(currentTime);

		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...formData, captchaToken }), // Отправляем данные вместе с CAPTCHA
			});

			const data = await response.json();
			if (data.success) {
				setResponseMessage("Заявка успешно отправлена!");
			} else {
				setResponseMessage(
					"Ошибка при отправке заявки. Попробуйте снова."
				);
			}
		} catch (error) {
			setResponseMessage("Ошибка при отправке заявки. Попробуйте снова.");
		} finally {
			setIsSubmitting(false);
			setCaptchaToken(""); // Сбрасываем значение CAPTCHA после отправки
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-3 font-semibold"
			>
				<div className="flex flex-col">
					<label
						htmlFor="name"
						className="dark:text-text-light text-text-dark text-md sm:text-xl"
					>
						Имя:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="p-2"
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="phoneNumber"
						className="dark:text-text-light text-text-dark text-md sm:text-xl"
					>
						Номер телефона:
					</label>
					<InputMask
						id="phoneNumber"
						name="phoneNumber"
						mask="+7 (999) 999-99-99"
						value={formData.phoneNumber}
						onChange={handleChange}
						className="p-2 text-black"
						required
					></InputMask>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="message"
						className="dark:text-text-light text-text-dark text-md sm:text-xl"
					>
						Комментарий к заявке:
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						className="p-2"
					/>
				</div>
				{/* Добавление Yandex SmartCaptcha */}

				<SmartCaptcha
					sitekey="ysc1_6PL3DlbuFkmyHVxmGWJYJaEvVnZ1AeqG44dpolxO636355da"
					onSuccess={handleCaptchaSuccess}
				/>
				<button
					type="submit"
					disabled={isSubmitting}
					className="p-2 dark:bg-text-light bg-text-dark text-text-light dark:text-text-dark"
				>
					{isSubmitting ? "Отправка..." : "Отправить"}
				</button>
			</form>
			{responseMessage && <p>{responseMessage}</p>}
		</>
	);
};

export default ClientForm;
