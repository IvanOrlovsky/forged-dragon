import React, { useState } from "react";
import InputMask from "react-input-mask";
import { SmartCaptcha } from "@yandex/smart-captcha";
import toast, { Toaster } from "react-hot-toast";

const ClientForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
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

	const validatePhoneNumber = (phoneNumber: string) => {
		const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
		return phoneRegex.test(phoneNumber);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!captchaToken) {
			toast.error("Пожалуйста, пройдите проверку CAPTCHA.");
			return;
		}

		if (!validatePhoneNumber(formData.phoneNumber)) {
			toast.error("Пожалуйста, введите корректный номер телефона.");
			return;
		}

		const currentTime = Date.now();
		if (currentTime - lastSubmitTime < 60000) {
			toast.error(
				"Пожалуйста, подождите минуту перед повторной отправкой."
			);
			return;
		}

		setIsSubmitting(true);
		setLastSubmitTime(currentTime);

		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...formData, captchaToken }),
			});

			const data = await response.json();
			if (data.success) {
				toast.success("Заявка успешно отправлена!");
			} else {
				toast.error("Ошибка при отправке заявки. Попробуйте снова.");
			}
		} catch (error) {
			toast.error("Ошибка при отправке заявки. Попробуйте снова.");
		} finally {
			setIsSubmitting(false);
			setCaptchaToken("");
		}
	};

	return (
		<>
			<Toaster position="top-right" reverseOrder={false} />
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-3 font-semibold"
			>
				<div className="flex flex-col">
					<label
						htmlFor="name"
						className="text-light-text dark:text-dark-text text-md sm:text-xl"
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
						className="p-2 border-2 border-light-accent dark:border-dark-accent"
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="phoneNumber"
						className="text-light-text dark:text-dark-text text-md sm:text-xl"
					>
						Номер телефона:
					</label>
					<InputMask
						id="phoneNumber"
						name="phoneNumber"
						mask="+7 (999) 999-99-99"
						value={formData.phoneNumber}
						onChange={handleChange}
						className="p-2 border-2 border-light-accent dark:border-dark-accent"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="message"
						className="text-light-text dark:text-dark-text text-md sm:text-xl"
					>
						Комментарий к заявке:
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						className="p-2 border-2 border-light-accent dark:border-dark-accent "
					/>
				</div>

				<SmartCaptcha
					sitekey="ysc1_6PL3DlbuFkmyHVxmGWJYJaEvVnZ1AeqG44dpolxO636355da"
					onSuccess={handleCaptchaSuccess}
				/>
				<button
					type="submit"
					disabled={isSubmitting}
					className="px-2 py-3 bg-light-text dark:bg-dark-text dark:text-light-text text-dark-text transition-opacity duration-300 disabled:opacity-50"
				>
					{isSubmitting ? "Отправка..." : "Отправить"}
				</button>
			</form>
		</>
	);
};

export default ClientForm;
