"use client";

import Gallery from "@/components/Gallery";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import path from "path";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import { ContentType } from "@/types/ContentType";
import MainHead from "@/components/MainHead";
import Reviews from "@/components/Reviews";

export const getStaticProps: GetStaticProps<ContentType> = async () => {
	const categoryDir = path.join(process.cwd(), "public", "category");
	const folders = fs.readdirSync(categoryDir);

	const imagesByTab = folders.map((folder) => {
		const folderPath = path.join(categoryDir, folder);
		const images = fs
			.readdirSync(folderPath)
			.map((file) => path.join("/category", folder, file));
		return {
			tab: folder,
			images,
		};
	});

	return {
		props: {
			tabs: folders,
			imagesByTab,
		},
	};
};

export default function Home({
	tabs,
	imagesByTab,
}: InferGetStaticPropsType<GetStaticProps<ContentType>>) {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<main
			className={`${
				theme === "dark" && "dark"
			} relative h-screen w-screen bg-gray-200`}
		>
			<NavBar theme={theme} setTheme={setTheme} />
			<MainHead />
			<div id="our-works">
				<Gallery tabs={tabs} imagesByTab={imagesByTab}></Gallery>
			</div>
			<div
				id="reviews"
				className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
			>
				<Reviews />
			</div>
		</main>
	);
}
