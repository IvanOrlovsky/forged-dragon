import ClientForm from "./ClientForm";
import Telegram from "../../public/icons/Telegram.svg";
import WhatsApp from "../../public/icons/WhatsApp.svg";
import Phone from "../../public/icons/Phone.svg";

export default function Contacts() {
	return (
		<div className="flex flex-col sm:flex-row items-center sm:p-10 gap-8 sm:gap-12">
			<div>
				<h2 className="pl-4 sm:pl-8 dark:text-text-light text-text-dark text-4xl sm:text-6xl  font-bold mb-8 h-full">
					Как с нами связаться?
				</h2>
			</div>
			<div className="flex flex-col gap-6 w-full sm:w-1/2 sm:p-10">
				<div className="border-l-8 dark:border-text-light border-text-dark pl-5">
					<h2 className="text-2xl sm:text-3xl dark:text-text-light text-text-dark font-bold mb-5">
						Оставьте заявку здесь:
					</h2>
					<ClientForm />
				</div>
			</div>

			<div className="flex flex-col gap-5 w-full sm:w-1/2">
				<YandexMap />
				{/* <div className="flex flex-col sm:flex-row justify-center gap-4">
					<TelegramLink />
					<WhatsAppLink />
					<PhoneLink />
				</div> */}
			</div>
		</div>
	);
}

function TelegramLink() {
	return (
		<a
			href="https://t.me/drillisawesome"
			target="_blank"
			className="flex items-center gap-2 p-2 text-lg sm:text-xl font-semibold bg-[#2AABEE] hover:bg-[#229ED9] rounded-lg text-white"
		>
			<Telegram className="w-6 h-6 sm:w-8 sm:h-8" />
			Телеграм
		</a>
	);
}

function WhatsAppLink() {
	return (
		<a
			href="https://wa.me/79158952780"
			target="_blank"
			className="flex items-center gap-2 p-2 text-lg sm:text-xl font-semibold bg-[#25d366] hover:bg-[#075e54] rounded-lg text-white"
		>
			<WhatsApp className="w-6 h-6 sm:w-8 sm:h-8" />
			WhatsApp
		</a>
	);
}

function PhoneLink() {
	return (
		<a
			href="tel: +7 (915) 895-27-80"
			className="flex items-center gap-2 p-2 text-lg sm:text-xl font-semibold bg-accent-light hover:bg-[#075e54] rounded-lg text-white"
		>
			<Phone className="w-6 h-6 sm:w-8 sm:h-8" />
			+7 123 456 78 90
		</a>
	);
}

function YandexMap() {
	return (
		<div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden">
			<iframe
				src="https://yandex.ru/map-widget/v1/org/zhelezny_drakon/122849766947/reviews/?ll=36.626416%2C55.090318&z=16"
				className="absolute top-0 left-0 w-full h-full border-none"
				allowFullScreen
				loading="lazy"
			></iframe>
		</div>
	);
}
