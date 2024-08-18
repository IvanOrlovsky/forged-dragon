import NavBar from "@/components/NavBar";
import path from "path";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import { ContentType } from "@/types/ContentType";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";
import About from "@/components/About";

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
		<main className="relative min-h-screen w-full space-y-12 bg-light-text dark:bg-dark-text">
			<NavBar />
			<HeroSection />
			<div id="our-works" className="py-12">
				<h2 className="pl-4 sm:pl-8 text-light-accent dark:text-dark-accent text-4xl sm:text-6xl font-bold mb-8">
					Наши работы
				</h2>
				<Gallery tabs={tabs} imagesByTab={imagesByTab} />
			</div>
			<About />
			<div
				id="contacts"
				className="bg-light-accent dark:bg-dark-accent p-5 sm:p-10 rounded-lg shadow-lg"
			>
				<Contacts />
			</div>
		</main>
	);
}
