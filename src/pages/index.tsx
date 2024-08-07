"use client";

import NavBar from "@/components/NavBar";
import { useState } from "react";
export default function Home() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<div className={`${theme === "dark" && "dark"}`}>
			<NavBar theme={theme} setTheme={setTheme} />
			<main></main>
		</div>
	);
}
