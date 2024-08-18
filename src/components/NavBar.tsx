"use client";
import { useEffect, useState } from "react";
import LightModeIcon from "../../public/icons/LightModeIcon.svg";
import DarkModeIcon from "../../public/icons/DarkModeIcon.svg";
import Logo from "../../public/Logo.svg";

export default function Header({ className }: { className?: string }) {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
	const email = process.env.NEXT_PUBLIC_EMAIL;

	return (
		<nav
			className={`bg-light-primary dark:bg-dark-primary lg:bg-opacity-80 fixed w-full z-[100] top-0 left-0 dark:text-light-text text-dark-text shadow-lg transition-colors duration-300 ease-in-out ${className}`}
		>
			<div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
				<a href="#" className="text-2xl flex items-center space-x-2">
					<Logo className="w-8 h-8 " />
					<span className="hidden lg:flex font-bold">
						Кованый дракон
					</span>
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
						href="#contacts"
						className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
					>
						Контакты
					</a>
					{/* Блок с контактами */}
					<div className="flex items-center space-x-4">
						<a
							href={`tel:${phoneNumber}`}
							className="font-bold hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
						>
							Позвоните сейчас: {phoneNumber}
						</a>
						{email && (
							<a
								href={`mailto:${email}`}
								className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
							>
								{email}
							</a>
						)}
					</div>
					<ToggleThemeButton />
				</div>
				{/* Мобильные кнопки */}
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
			{/* Мобильное меню */}
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
						href="#contacts"
						className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
						onClick={() => setMenuOpen(false)}
					>
						Контакты
					</a>
					{/* Контакты в мобильном меню */}
					<div className="flex flex-col items-center space-y-2">
						<a
							href={`tel:${phoneNumber}`}
							className="font-bold hover:text-light-accent dark:hover:text-dark-accenttransition-colors duration-200"
						>
							Позвоните сейчас: {phoneNumber}
						</a>
						{email && (
							<a
								href={`mailto:${email}`}
								className="hover:text-light-accent dark:hover:text-dark-accenttransition-colors duration-200"
							>
								{email}
							</a>
						)}
					</div>
				</div>
			)}
		</nav>
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
