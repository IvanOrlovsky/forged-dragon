"use client";

import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";
import LightModeIcon from "../../public/icons/LightModeIcon.svg";
import DarkModeIcon from "../../public/icons/DarkModeIcon.svg";

export default function Header({
	className,
	theme,
	setTheme,
}: {
	className?: string;
	theme: "light" | "dark";
	setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<nav
			className={cn(
				" bg-white bg-opacity-30 dark:bg-opacity-30 backdrop-blur-xl  dark:bg-gray-900 fixed w-full z-50 top-0 start-0 dark:text-white text-xl shadow-xl",
				className
			)}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-5 font-semibold">
				<div className="grow flex flex-row justify-around">
					<a
						href="#your-works"
						className={cn("min-h-full hover:text-red-400", {
							"": active === "our-works",
						})}
					>
						Наши работы
					</a>
					<a
						href="#reviews"
						className={cn("min-h-full hover:text-red-400", {
							"": active === "reviews",
						})}
					>
						Отзывы
					</a>
					<a
						href="#about"
						className={cn("min-h-full hover:text-red-400", {
							"": active === "about",
						})}
					>
						О компании
					</a>
					<a
						href="#contacts"
						className={cn("min-h-full hover:text-red-400", {
							"": active === "contacts",
						})}
					>
						Контакты
					</a>
				</div>
				<button
					type="button"
					onClick={() => {
						setTheme((prev) =>
							prev === "dark" ? "light" : "dark"
						);
					}}
				>
					{theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
				</button>
			</div>
		</nav>
	);
}
