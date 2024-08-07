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
				"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 dark:text-white",
				className
			)}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-semibold">
				<a
					href="#your-works"
					className={cn("min-h-full hover:text-red-400", {
						"": active === "our-works",
					})}
				>
					Наши работы
				</a>
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
