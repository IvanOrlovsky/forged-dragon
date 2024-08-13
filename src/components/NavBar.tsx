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

	return (
		<nav
			className={`bg-white dark:bg-black md:bg-opacity-80 md:dark:bg-opacity-80 md:backdrop-blur-md fixed w-full z-[100] top-0 left-0 text-black dark:text-white shadow-md transition-colors duration-300 ease-in-out ${className}`}
		>
			<div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
				<a href="#" className="text-2xl flex items-center space-x-2">
					<Logo className="text-black dark:text-white w-8 h-8" />
					<span className="font-bold">Кованый дракон</span>
				</a>
				<div className="hidden md:flex items-center space-x-6">
					<a
						href="#our-works"
						className="hover:text-red-400 transition-colors duration-200"
					>
						Наши работы
					</a>
					<a
						href="#reviews"
						className="hover:text-red-400 transition-colors duration-200"
					>
						Отзывы
					</a>
					<a
						href="#about"
						className="hover:text-red-400 transition-colors duration-200"
					>
						О компании
					</a>
					<a
						href="#contacts"
						className="hover:text-red-400 transition-colors duration-200"
					>
						Контакты
					</a>
					<ToggleThemeButton />
				</div>

				{/* Бургер-меню для мобильных устройств */}
				<div className="block md:hidden -mr-16 text-3xl focus:outline-none">
					<ToggleThemeButton />
				</div>
				<button
					type="button"
					className="block md:hidden ml-4 text-3xl focus:outline-none"
					onClick={toggleMenu}
				>
					☰
				</button>
			</div>
			{/* Мобильное меню */}
			{menuOpen && (
				<div className="md:hidden flex flex-col items-center space-y-4 p-5 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md transition-colors duration-300 ease-in-out">
					<a
						href="#our-works"
						className="hover:text-red-400 transition-colors duration-200"
					>
						Наши работы
					</a>
					<a
						href="#reviews"
						className="hover:text-red-400 transition-colors duration-200"
					>
						Отзывы
					</a>
					<a
						href="#about"
						className="hover:text-red-400 transition-colors duration-200"
					>
						О компании
					</a>
					<a
						href="#contacts"
						className="hover:text-red-400 transition-colors duration-200"
					>
						Контакты
					</a>
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
		<button type="button" onClick={toggleTheme} className="ml-4">
			{isDarkMode ? (
				<LightModeIcon className="w-6 h-6" />
			) : (
				<DarkModeIcon className="w-6 h-6" />
			)}
		</button>
	);
}
