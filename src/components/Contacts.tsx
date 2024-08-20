import ClientForm from "./ClientForm";
import Telegram from "../../public/icons/Telegram.svg";
import WhatsApp from "../../public/icons/WhatsApp.svg";
import Phone from "../../public/icons/Phone.svg";

export default function Contacts() {
	return (
		<>
			<section
				id="contacts"
				className="flex flex-col xl:flex-row items-center justify-center p-4 xl:p-10"
			>
				<div className="xl:w-1/2 ">
					<h2 className="  text-light-text dark:text-dark-text text-4xl xl:text-6xl font-bold mb-8 ">
						Как с нами связаться?
					</h2>
				</div>
				{/* <div className="h-[8px] sm:w-[8px] sm:h-auto bg-dark-text self-stretch"></div> */}
				<div className="flex flex-col w-full xl:w-1/2 xl:pr-10">
					<div className="border-l-4 sm:border-l-8 border-light-text dark:border-dark-text pl-2 sm:pl-5">
						<h2 className="text-center text-2xl xl:text-3xl text-light-text dark:text-dark-text font-bold mb-5">
							Оставить заявку:
						</h2>
						<ClientForm />
					</div>
				</div>
				{/* <div className="flex flex-row gap-5 w-full xl:w-1/2">
					
				</div> */}
			</section>
		</>
	);
}

function Social() {
	return (
		<div className="flex flex-row gap-3 items-center w-full">
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
