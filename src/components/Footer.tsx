import Logo1 from "../../public/Logo1.svg";
import Telegram from "../../public/icons/Telegram.svg";
import WhatsApp from "../../public/icons/WhatsApp.svg";
import Phone from "../../public/icons/Phone.svg";
import Mail from "../../public/icons/Mail.svg";
import Location from "../../public/icons/Location.svg";

export default function Footer() {
	return (
		<>
			<footer className="w-full bg-[#1F1F1F] text-light-text flex flex-col sm:flex-row gap-8  pt-8 px-10 pb-10 sm:pt-12 sm:px-40 sm:pb-20">
				{/* Логотип и описание */}
				<div className="flex flex-col sm:w-1/4 mb-8 sm:mb-0">
					<div className="flex flex-row gap-4 items-center mb-4">
						<Logo1 className="w-16 h-16" />
						<p className="text-xl sm:text-2xl">Кованый дракон</p>
					</div>
					<p className="text-base sm:text-lg">
						Мы предоставляем лучшие услуги для наших клиентов.
						Свяжитесь с нами для получения дополнительной
						информации.
					</p>
				</div>

				{/* Контактная информация */}
				<div className="flex flex-col sm:w-1/4 mb-8 sm:mb-0">
					<h3 className="text-2xl font-bold mb-4">Контакты</h3>
					<ul className="space-y-4">
						<li className="flex items-start">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600">
								<Location className="w-6 h-6 text-white" />
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-bold">
									Мы находимся по адресу:
								</h4>
								<span>Московская улица, 53А</span>
							</div>
						</li>

						<li className="flex items-start">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600">
								<Phone className="w-6 h-6 text-white" />
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-bold">
									Позвоните нам:
								</h4>
								<a
									href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
									className="hover:underline"
								>
									{process.env.NEXT_PUBLIC_PHONE_NUMBER_TEXT}
								</a>
							</div>
						</li>

						<li className="flex items-start">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600">
								<Mail className="w-6 h-6 text-white" />
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-bold">
									Напишите нам:
								</h4>
								<a
									href="mailto:info@yourcompany.com"
									className="hover:underline"
								>
									{process.env.NEXT_PUBLIC_EMAIL}
								</a>
							</div>
						</li>
					</ul>
				</div>

				{/* Навигация */}
				<div className="flex flex-col sm:w-1/4">
					<h3 className="text-2xl font-bold mb-4">Навигация</h3>
					<div className="flex flex-col gap-2">
						<a
							href="#our-works"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
						>
							Наши работы
						</a>
						<a
							href="#reviews"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
						>
							Отзывы
						</a>
						<a
							href="#about"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
						>
							О мастерской
						</a>
						<a
							href="#work-stages"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
						>
							Этапы работы
						</a>
						<a
							href="#contacts"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
						>
							Контакты
						</a>
					</div>
				</div>
				{/* Социальные сети */}
				<div className="flex flex-col sm:w-1/4">
					<h3 className="text-2xl font-bold mb-4">
						Мы в социальных сетях:
					</h3>
					<ul className="flex flex-col gap-4">
						<li className="flex items-start">
							<a
								href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM}`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600"
							>
								<Telegram className="w-6 h-6 text-white" />
							</a>
							<div className="ml-4">
								<h4 className="text-lg font-bold">Telegram</h4>
								<a
									href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM}`}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-2 hover:underline"
								>
									@{process.env.NEXT_PUBLIC_TELEGRAM}
								</a>
							</div>
						</li>
						<li className="flex items-start">
							<a
								href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600"
							>
								<WhatsApp className="w-6 h-6 text-white" />
							</a>
							<div className="ml-4">
								<h4 className="text-lg font-bold">WhatsApp</h4>
								<a
									href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-2 hover:underline"
								>
									{process.env.NEXT_PUBLIC_WHATSAPP}
								</a>
							</div>
						</li>
					</ul>
				</div>
			</footer>
			{/* Копирайт */}
			<div className="w-full text-center text-sm text-gray-400  border-t border-gray-600 pt-4">
				<p>
					&copy; 2024 Мастерская "Кованый дракон". Все права защищены.
				</p>
				<p>
					Сайт создан{" "}
					<a
						href="https://vk.com/id184273154"
						target="_blank"
						rel="noopener noreferrer"
						title="Создатель сайта"
						className="text-dark-primary-text dark:text-light-text  hover:underline"
					>
						Иваном Орловским
					</a>
				</p>
			</div>
		</>
	);
}
