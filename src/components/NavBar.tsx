"use client";
import { useEffect } from "react";
import LightModeIcon from "../../public/icons/LightModeIcon.svg";
import DarkModeIcon from "../../public/icons/DarkModeIcon.svg";

export default function Header({ className }: { className?: string }) {
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

	return (
		<nav
			className={`bg-opacity-30 dark:bg-opacity-30 backdrop-blur-xl  fixed w-full z-50 top-0 start-0 dark:text-white text-xl shadow-xl ${className}`}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 font-semibold">
				<div className="grow flex flex-row justify-around">
					<a
						href="#our-works"
						className="min-h-full hover:text-red-400"
					>
						Наши работы
					</a>
					<a
						href="#reviews"
						className="min-h-full hover:text-red-400"
					>
						Отзывы
					</a>
					<a href="#about" className="min-h-full hover:text-red-400">
						О компании
					</a>
					<a
						href="#contacts"
						className="min-h-full hover:text-red-400"
					>
						Контакты
					</a>
				</div>
				<button type="button" onClick={toggleTheme}>
					{typeof document !== "undefined" &&
					document.documentElement.classList.contains("dark") ? (
						<LightModeIcon />
					) : (
						<DarkModeIcon />
					)}
				</button>
			</div>
		</nav>
	);
}
