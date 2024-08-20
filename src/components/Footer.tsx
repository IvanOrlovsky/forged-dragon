import Logo1 from "../../public/Logo1.svg";
import Telegram from "../../public/icons/Telegram.svg";
import WhatsApp from "../../public/icons/WhatsApp.svg";
import Phone from "../../public/icons/Phone.svg";

export default function Footer() {
	return (
		<footer className="w-full h-[400px] bg-[#1F1F1F] flex flex-col sm:flex-row pt-8 px-10 pb-10 sm:pt-12 sm:px-40 sm:pb-40  justify-start">
			{/* <div className="flex flex-col">
				<a
					href="#"
					className="text-2xl flex items-center space-x-2 text-light-text"
				>
					<Logo1 className="w-8 h-8" />
					<span className="font-bold">Кованый дракон</span>
				</a>
			</div> */}
			<div className="flex flex-col  gap-8">
				<h2 className="text-3xl sm:text-5xl  text-light-text font-bold">
					Заинтересовались?
				</h2>
				<div className="flex flex-row gap-4 items-center">
					<p className="text-sm sm:text-xl text-light-text leading-relaxed">
						Наши социальные сети:
					</p>
					<Social />
				</div>
			</div>
		</footer>
	);
}

function Social() {
	return (
		<div className="flex flex-row gap-2 items-center">
			<TelegramLink />
			<WhatsAppLink />
			<PhoneLink />
		</div>
	);
}
function TelegramLink() {
	return (
		<a
			href="https://t.me/drillisawesome"
			target="_blank"
			className="flex items-center gap-2 p-2 text-lg xl:text-xl font-semibold bg-[#2AABEE] hover:bg-[#229ED9] text-white"
		>
			<Telegram className="w-6 h-6 xl:w-8 xl:h-8" />
		</a>
	);
}

function WhatsAppLink() {
	return (
		<a
			href="https://wa.me/79158952780"
			target="_blank"
			className="flex items-center gap-2 p-2 text-lg xl:text-xl font-semibold bg-[#25d366] hover:bg-[#075e54] text-white"
		>
			<WhatsApp className="w-6 h-6 xl:w-8 xl:h-8" />
		</a>
	);
}

function PhoneLink() {
	return (
		<a
			href="tel: +7 (915) 895-27-80"
			className="flex items-center gap-2 p-2 text-lg xl:text-xl font-semibold bg-slate-400 hover:bg-[#075e54] text-white"
		>
			<Phone className="w-6 h-6 xl:w-8 xl:h-8" />
		</a>
	);
}
