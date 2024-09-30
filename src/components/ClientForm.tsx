import React, { useState } from "react";
import InputMask from "react-input-mask";
import toast, { Toaster } from "react-hot-toast";

const ClientForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		message: "",
	});

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

	const validatePhoneNumber = (phoneNumber: string) => {
		const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
		return phoneRegex.test(phoneNumber);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validatePhoneNumber(formData.phoneNumber)) {
			toast.error("Пожалуйста, введите корректный номер телефона.");
			return;
		}

		try {
			const response = await fetch(
				"http://forgeddragon.ru/sendmail.php",
				{
					// Укажите правильный путь к вашему PHP-скрипту
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams({
						name: formData.name,
						phoneNumber: formData.phoneNumber,
						message: formData.message,
					}),
				}
			);

			const result = await response.json();
			if (result.success) {
				toast.success("Заявка успешно отправлена!");
				setFormData({ name: "", phoneNumber: "", message: "" });
			} else {
				toast.error(result.message || "Ошибка при отправке");
			}
		} catch (error) {
			console.error("Error: " + error);
			toast.error("Произошла ошибка при отправке. Попробуйте позже.");
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
						className="text-dark-text text-md sm:text-xl"
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
						className="p-2 border-2 border-accent"
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="phoneNumber"
						className="text-dark-text text-md sm:text-xl"
					>
						Номер телефона:
					</label>
					<InputMask
						id="phoneNumber"
						name="phoneNumber"
						mask="+7 (999) 999-99-99"
						value={formData.phoneNumber}
						onChange={handleChange}
						className="p-2 border-2 border-accent"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="message"
						className="text-dark-text text-md sm:text-xl"
					>
						Комментарий к заявке:
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						className="p-2 border-2 border-accent"
					/>
				</div>

				<button
					type="submit"
					className="px-2 py-3 bg-dark-text text-light-text transition-opacity duration-300 disabled:opacity-50"
				>
					Отправить
				</button>
			</form>
		</>
	);
};

export default ClientForm;
