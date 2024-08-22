import ClientForm from "./ClientForm";
import Telegram from "../../public/icons/Telegram.svg";
import WhatsApp from "../../public/icons/WhatsApp.svg";
import Phone from "../../public/icons/Phone.svg";
import Mail from "../../public/icons/Mail.svg";
import Location from "../../public/icons/Location.svg";

export default function Contacts() {
	return (
		<section
			id="contacts"
			className="py-12 bg-light-accent dark:bg-dark-accent"
		>
			<div className="container mx-auto px-6">
				<div className="flex flex-col lg:flex-row gap-12">
					{/* Контактные данные */}
					<div className="flex flex-col gap-8 lg:w-1/2">
						<h2 className="text-3xl lg:text-5xl font-bold text-light-text dark:text-dark-text">
							Свяжитесь с нами
						</h2>

						{/* Телефон */}
						<div className="flex items-center gap-4">
							<Phone className="w-12 h-12 text-light-text dark:text-dark-text" />
							<a
								href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
								className="text-xl lg:text-2xl font-semibold text-light-text dark:text-dark-text hover:underline"
							>
								{process.env.NEXT_PUBLIC_PHONE_NUMBER_TEXT}
							</a>
						</div>

						{/* Локация */}
						<div className="flex items-start gap-4">
							<a
								href={`https://yandex.ru/maps/-/CDgxyKoj`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800"
							>
								<Location className="w-8 h-8 text-gray-700 dark:text-gray-200" />
							</a>
							<div>
								<h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
									Мы находимся по адресу
								</h4>
								<a
									href={`https://yandex.ru/maps/-/CDgxyKoj`}
									target="_blank"
									rel="noopener noreferrer"
									className="text-md text-light-text dark:text-dark-text hover:underline"
								>
									Московская улица, 53А
								</a>
							</div>
						</div>

						{/* Почта */}
						<div className="flex items-start gap-4">
							<a
								href="mailto:info@yourcompany.com"
								className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800"
							>
								<Mail className="w-8 h-8 text-gray-700 dark:text-gray-200" />
							</a>
							<div>
								<h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
									Напишите нам
								</h4>
								<a
									href="mailto:info@yourcompany.com"
									className="text-md text-light-text dark:text-dark-text hover:underline"
								>
									{process.env.NEXT_PUBLIC_EMAIL}
								</a>
							</div>
						</div>

						{/* Социальные сети */}
						<div className="mt-8">
							<h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
								Мы в социальных сетях:
							</h3>
							<ul className="flex space-x-4">
								<li>
									<a
										href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800"
									>
										<Telegram className="w-6 h-6 text-gray-700 dark:text-gray-200" />
									</a>
								</li>
								<li>
									<a
										href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800"
									>
										<WhatsApp className="w-6 h-6 text-gray-700 dark:text-gray-200" />
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Форма */}
					<div className="lg:w-1/2">
						<h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6 text-center">
							Оставьте заявку
						</h2>
						<ClientForm />
					</div>
				</div>
			</div>
		</section>
	);
}
