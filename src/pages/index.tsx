import NavBar from "@/components/NavBar";
import path from "path";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import { ContentType } from "@/types/ContentType";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";
import About from "@/components/About";
import WorkStages from "@/components/WorkStages";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

export const getStaticProps: GetStaticProps<ContentType> = async () => {
	const categoryDir = path.join(process.cwd(), "public", "category");
	const folders = fs.readdirSync(categoryDir);

	const imagesByTab = folders.map((folder) => {
		const folderPath = path.join(categoryDir, folder);
		const images = fs
			.readdirSync(folderPath)
			.filter((file) => {
				const extname = path.extname(file).toLowerCase();
				return [
					".jpg",
					".jpeg",
					".png",
					".webp",
					".gif",
					".tiff",
					".bmp",
					".heic",
					".svg",
				].includes(extname);
			})
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
		<main className="relative min-h-screen w-full bg-dark-text">
			<NavBar />
			<HeroSection />
			<div className="mb-12">
				<About />
			</div>
			<Gallery tabs={tabs} imagesByTab={imagesByTab} />
			<div className="my-12">
				<WorkStages />
			</div>
			<div className="mb-12">
				<Reviews />
			</div>
			<div className="bg-accent pt-5 sm:pt-10 shadow-lg">
				<Contacts />
			</div>
			<div className=" w-full ">
				<YandexMap />
			</div>
			<Footer />
		</main>
	);
}

function YandexMap() {
	return (
		<div className="relative w-full h-72 xl:h-96 overflow-hidden">
			<iframe
				src="https://yandex.ru/map-widget/v1/org/zhelezny_drakon/122849766947/reviews/?ll=36.626416%2C55.090318&z=16"
				className="absolute top-0 left-0 w-full h-full border-none"
				allowFullScreen
				loading="lazy"
			></iframe>
		</div>
	);
}
