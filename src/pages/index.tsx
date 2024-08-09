"use client";

import Gallery from "@/components/Gallery";
import NavBar from "@/components/NavBar";
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
	return (
		<main className={`relative h-screen w-screen`}>
			<NavBar />
			<MainHead />
			<div id="our-works" className="my-12">
				<Gallery tabs={tabs} imagesByTab={imagesByTab} />
			</div>
			<div id="reviews">
				<Reviews />
			</div>
		</main>
	);
}
