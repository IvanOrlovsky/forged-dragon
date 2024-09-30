"use client";
import { useState } from "react";
import Logo1 from "../../public/Logo1.svg";
import Location from "../../public/icons/Location.svg";

export default function Header({ className }: { className?: string }) {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
	const phoneNumberText = process.env.NEXT_PUBLIC_PHONE_NUMBER_TEXT;
	const email = process.env.NEXT_PUBLIC_EMAIL;

	return (
		<header>
			<nav
				className={`bg-primary lg:bg-opacity-80 fixed w-full z-[100] top-0 left-0 text-light-text  shadow-lg transition-colors duration-300 ease-in-out ${className}`}
			>
				<PretopBar />
				<div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
					<a
						href="#"
						className="text-2xl flex items-center space-x-2"
					>
						<Logo1 className="w-8 h-8 sm:w-12 sm:h-12" />
						<span className="flex font-bold">Кованый дракон</span>
					</a>
					<div className="hidden lg:flex items-center space-x-6">
						<a
							href="#about"
							className="hover:text-accent  transition-colors duration-200"
						>
							О мастерской
						</a>
						<a
							href="#our-works"
							className="hover:text-accent  transition-colors duration-200"
						>
							Наши работы
						</a>
						<a
							href="#work-stages"
							className="hover:text-accent  transition-colors duration-200"
						>
							Этапы работы
						</a>
						<a
							href="#reviews"
							className="hover:text-accent  transition-colors duration-200"
						>
							Отзывы
						</a>
						<a
							href="#contacts"
							className="hover:text-accent  transition-colors duration-200"
						>
							Контакты
						</a>
					</div>
					<div className="lg:hidden flex flex-row gap-2 items-center">
						<button
							type="button"
							className="text-3xl focus:outline-none"
							onClick={toggleMenu}
						>
							☰
						</button>
					</div>
				</div>
				{menuOpen && (
					<div className="lg:hidden flex flex-col items-center space-y-4 p-5 bg-primary bg-opacity-80 backdrop-blur-lg transition-colors duration-300 ease-in-out">
						<a
							href="#about"
							className="hover:text-accent transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							О компании
						</a>
						<a
							href="#our-works"
							className="hover:text-accent  transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							Наши работы
						</a>
						<a
							href="#work-stages"
							className="hover:text-accent ent transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							Этапы работы
						</a>
						<a
							href="#reviews"
							className="hover:text-accent  transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							Отзывы
						</a>
						<a
							href="#contacts"
							className="hover:text-accent transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							Контакты
						</a>
						<div className="flex flex-col items-center space-y-2">
							<a
								href={`tel:${phoneNumber}`}
								className="font-bold hover:text-accent transition-colors duration-200"
							>
								Позвоните сейчас: {phoneNumberText}
							</a>
							{email && (
								<a
									href={`mailto:${email}`}
									className="hover:text-accent transition-colors duration-200"
								>
									Напишите на почту: {email}
								</a>
							)}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}

function PretopBar() {
	const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
	const phoneNumberText = process.env.NEXT_PUBLIC_PHONE_NUMBER_TEXT;

	return (
		<div className="bg-dark-text text-gray-300 py-2 text-sm">
			<div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
				<a
					href={process.env.NEXT_PUBLIC_LOCATION_HREF}
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:text-accent flex flex-row gap-1 items-center"
				>
					<Location className="w-4 h-4" />
					<span>{process.env.NEXT_PUBLIC_LOCATION_TEXT}</span>
				</a>
				<div>
					<a
						href={`tel:${phoneNumber}`}
						className="font-extrabold underline hover:text-accent transition-colors duration-200"
					>
						{phoneNumberText}
					</a>
				</div>
			</div>
		</div>
	);
}
