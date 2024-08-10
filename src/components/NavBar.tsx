"use client";
import { useEffect, useState } from "react";
import LightModeIcon from "../../public/icons/LightModeIcon.svg";
import DarkModeIcon from "../../public/icons/DarkModeIcon.svg";

export default function Header({ className }: { className?: string }) {
	const [menuOpen, setMenuOpen] = useState(false);

	// Функция для установки темы
	const setTheme = (theme: "light" | "dark") => {
		if (typeof document !== "undefined") {
			const root = window.document.documentElement;

			if (theme === "dark") {
				root.classList.add("dark");
			} else {
				root.classList.remove("dark");
			}

			localStorage.setItem("theme", theme);
		}
	};

	// useEffect для начальной установки темы
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
		if (typeof document !== "undefined") {
			const currentTheme = document.documentElement.classList.contains(
				"dark"
			)
				? "dark"
				: "light";
			setTheme(currentTheme === "dark" ? "light" : "dark");
		}
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav
			className={`dark:bg-white bg-black bg-opacity-40 dark:bg-opacity-40 backdrop-blur-sm fixed w-full z-50 top-0 start-0 text-white text-xl shadow-xl ${className}`}
		>
			<div className="max-w-screen-xl flex items-center justify-between mx-auto p-5 font-semibold">
				<div className="text-2xl">Кованый дракон</div>
				<div className="hidden md:flex flex-row space-x-8">
					<a href="#our-works" className="hover:text-red-400">
						Наши работы
					</a>
					<a href="#reviews" className="hover:text-red-400">
						Отзывы
					</a>
					<a href="#about" className="hover:text-red-400">
						О компании
					</a>
					<a href="#contacts" className="hover:text-red-400">
						Контакты
					</a>
				</div>
				<button type="button" onClick={toggleTheme} className="ml-4">
					{typeof document !== "undefined" &&
					document.documentElement.classList.contains("dark") ? (
						<LightModeIcon />
					) : (
						<DarkModeIcon />
					)}
				</button>
				{/* Бургер-меню для мобильных устройств */}
				<button
					type="button"
					className="block md:hidden ml-4"
					onClick={toggleMenu}
				>
					☰
				</button>
			</div>
			{/* Мобильное меню */}
			{menuOpen && (
				<div className="md:hidden flex flex-col items-center space-y-4 dark:bg-white bg-black bg-opacity-40 dark:bg-opacity-40 backdrop-blur-sm p-5">
					<a href="#our-works" className="hover:text-red-400">
						Наши работы
					</a>
					<a href="#reviews" className="hover:text-red-400">
						Отзывы
					</a>
					<a href="#about" className="hover:text-red-400">
						О компании
					</a>
					<a href="#contacts" className="hover:text-red-400">
						Контакты
					</a>
				</div>
			)}
		</nav>
	);
}
