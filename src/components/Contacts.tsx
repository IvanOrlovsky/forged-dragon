import ClientForm from "./ClientForm";
import Telegram from "../../public/icons/Telegram.svg";
import WhatsApp from "../../public/icons/WhatsApp.svg";
import Phone from "../../public/icons/Phone.svg";
import Mail from "../../public/icons/Mail.svg";
import Location from "../../public/icons/Location.svg";

export default function Contacts() {
	return (
		<>
			<section id="contacts" className="pb-6 sm:pb-10">
				<h2 className="pl-4 sm:pl-8 text-light-text dark:text-dark-text text-4xl sm:text-6xl font-bold">
					Свяжитесь с нами
				</h2>
				<div className="flex flex-col xl:flex-row p-4 xl:p-8">
					<div className="self-center flex flex-col gap-2 xl:w-1/2 ">
						<div>
							<h3 className="text-2xl xl:text-3xl text-light-text dark:text-dark-text font-bold mb-5">
								Мы в социальных сетях:
							</h3>
							<ul className="space-y-4">
								<li className="flex items-center">
									<Telegram className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
									<a
										href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM}`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-light-text dark:text-dark-text text-xl sm:text-2xl"
									>
										Telegram
									</a>
								</li>
								<li className="flex items-center">
									<WhatsApp className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
									<a
										href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-light-text dark:text-dark-text text-xl sm:text-2xl"
									>
										WhatsApp
									</a>
								</li>
							</ul>
						</div>
						<div className="mt-8">
							<h3 className="text-2xl xl:text-3xl text-light-text dark:text-dark-text font-bold mb-5">
								Контакты:
							</h3>
							<ul className="space-y-4">
								<li className="flex items-center">
									<Phone className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
									<a
										href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
										className="text-black text-xl sm:text-2xl font-bold hover:underline"
									>
										{
											process.env
												.NEXT_PUBLIC_PHONE_NUMBER_TEXT
										}
									</a>
								</li>
								<li className="flex items-center">
									<Mail className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
									<a
										href="mailto:info@yourcompany.com"
										className="text-light-text dark:text-dark-text text-xl sm:text-2xl hover:underline"
									>
										{process.env.NEXT_PUBLIC_EMAIL}
									</a>
								</li>
								<li className="flex items-center">
									<Location className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
									<span className="text-light-text dark:text-dark-text text-xl sm:text-2xl hover:underline">
										Московская улица, 53А
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="hidden xl:block xl:w-[8px] bg-dark-text mx-8"></div>
					<div className="block xl:hidden h-[8px] bg-dark-text my-8"></div>
					<div className="flex flex-col w-full xl:w-1/2 xl:pr-10">
						<div>
							<h2 className="text-center text-2xl xl:text-3xl text-light-text dark:text-dark-text font-bold mb-5">
								Оставьте заявку:
							</h2>
							<ClientForm />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
