"use client";

import Gallery from "@/components/Gallery";
import NavBar from "@/components/NavBar";
import path from "path";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import { ContentType } from "@/types/ContentType";
import MainHead from "@/components/MainHead";
import Reviews from "@/components/Reviews";
import Gallery1 from "@/components/Gallery1";

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
	return (
		<main className={`relative h-screen w-screen`}>
			<NavBar />
			<MainHead />

			<div id="our-works" className="my-12">
				<h2 className="text-accent-light dark:text-accent-dark pl-8 text-6xl font-bold mb-8">
					Наши работы
				</h2>
				<Gallery1 tabs={tabs} imagesByTab={imagesByTab} />
			</div>
			<div id="reviews">
				<h2 className="pl-8 text-accent-light dark:text-accent-dark text-6xl font-bold mb-8">
					Отзывы
				</h2>
				<Reviews />
			</div>
		</main>
	);
}
