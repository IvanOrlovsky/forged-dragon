"use client";

import NavBar from "@/components/NavBar";
import path from "path";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import { ContentType } from "@/types/ContentType";
import HeroSection from "@/components/HeroSection";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";

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
		<main className="relative h-screen w-full space-y-12">
			<NavBar />
			<HeroSection />
			<div id="our-works">
				<h2 className="pl-4 sm:pl-8 text-accent-light dark:text-accent-dark  text-4xl sm:text-6xl  font-bold mb-8">
					Наши работы
				</h2>
				<Gallery tabs={tabs} imagesByTab={imagesByTab} />
			</div>
			{/* <div id="reviews">
				<h2 className="pl-4 sm:pl-8 text-accent-light dark:text-accent-dark text-4xl sm:text-6xl  font-bold mb-8">
					Отзывы
				</h2>
				<Reviews />
			</div> */}
			<div
				id="contacts"
				className="bg-accent-light dark:bg-accent-dark p-10"
			>
				<Contacts />
			</div>
		</main>
	);
}
