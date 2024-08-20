"use client";
import { useEffect, useState } from "react";
import LightModeIcon from "../../public/icons/LightModeIcon.svg";
import DarkModeIcon from "../../public/icons/DarkModeIcon.svg";
import Logo from "../../public/Logo.svg";
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
				className={`bg-light-primary dark:bg-dark-primary lg:bg-opacity-80 fixed w-full z-[100] top-0 left-0 dark:text-light-text text-dark-text shadow-lg transition-colors duration-300 ease-in-out ${className}`}
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

						<ToggleThemeButton />
					</div>
					<div className="lg:hidden flex flex-row gap-2 items-center">
						<ToggleThemeButton />
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
					<div className="lg:hidden flex flex-col items-center space-y-4 p-5 bg-light-primary dark:bg-dark-primary bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg transition-colors duration-300 ease-in-out">
						<a
							href="#our-works"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							Наши работы
						</a>
						<a
							href="#reviews"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							Отзывы
						</a>
						<a
							href="#about"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							О компании
						</a>
						<a
							href="#work-stages"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							Этапы работы
						</a>
						<a
							href="#contacts"
							className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
							onClick={() => setMenuOpen(false)}
						>
							Контакты
						</a>
						<div className="flex flex-col items-center space-y-2">
							<a
								href={`tel:${phoneNumber}`}
								className="font-bold hover:text-light-accent dark:hover:text-dark-accenttransition-colors duration-200"
							>
								Позвоните сейчас: {phoneNumberText}
							</a>
							{email && (
								<a
									href={`mailto:${email}`}
									className="hover:text-light-accent dark:hover:text-dark-accenttransition-colors duration-200"
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
		<div className="bg-light-text dark:bg-dark-text text-gray-700 dark:text-gray-300 py-2 text-sm">
			<div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
				<a
					href="https://yandex.ru/maps/-/CDgxyKoj"
					className="hover:underline flex flex-row gap-1 items-center"
				>
					<Location className="w-4 h-4" />
					<span>Московская улица, 53А</span>
				</a>
				<div>
					<a
						href={`tel:${phoneNumber}`}
						className="font-extrabold hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
					>
						{phoneNumberText}
					</a>
				</div>
			</div>
		</div>
	);
}

function ToggleThemeButton() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const setTheme = (theme: "light" | "dark") => {
		if (typeof document !== "undefined") {
			const root = window.document.documentElement;

			if (theme === "dark") {
				root.classList.add("dark");
			} else {
				root.classList.remove("dark");
			}

			localStorage.setItem("theme", theme);
			setIsDarkMode(theme === "dark");
		}
	};

	useEffect(() => {
		if (typeof document !== "undefined") {
			const savedTheme = localStorage.getItem("theme");
			if (savedTheme) {
				setTheme(savedTheme as "light" | "dark");
			} else {
				const prefersDark = window.matchMedia(
					"(prefers-color-scheme: dark)"
				).matches;
				setTheme(prefersDark ? "dark" : "light");
			}
		}
	}, []);

	const toggleTheme = () => {
		setTheme(isDarkMode ? "light" : "dark");
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="p-2 rounded-full focus:outline-none hover:bg-light-subtext dark:hover:bg-dark-subtext transition"
			aria-label="Toggle theme"
		>
			{isDarkMode ? (
				<LightModeIcon className="w-6 h-6" />
			) : (
				<DarkModeIcon className="w-6 h-6" />
			)}
		</button>
	);
}
