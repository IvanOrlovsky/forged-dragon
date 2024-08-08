"use client";

import Gallery from "@/components/Gallery";
import NavBar from "@/components/NavBar";
import { ImagesSlider } from "@/components/ui/images-slider";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useState } from "react";
import path from "path";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import { ContentType } from "@/types/ContentType";

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

const testimonials = [
	{
		quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
		name: "Charles Dickens",
		title: "A Tale of Two Cities",
	},
	{
		quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
		name: "William Shakespeare",
		title: "Hamlet",
	},
	{
		quote: "All that we see or seem is but a dream within a dream.",
		name: "Edgar Allan Poe",
		title: "A Dream Within a Dream",
	},
	{
		quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
		name: "Jane Austen",
		title: "Pride and Prejudice",
	},
	{
		quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
		name: "Herman Melville",
		title: "Moby-Dick",
	},
];

export default function Home({
	tabs,
	imagesByTab,
}: InferGetStaticPropsType<GetStaticProps<ContentType>>) {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	const images = [
		"/main-images/main1.jpg",
		"/main-images/main2.jpg",
		"/main-images/main3.jpg",
	];

	return (
		<main
			className={`${
				theme === "dark" && "dark"
			} relative h-screen w-screen bg-gray-200`}
		>
			<NavBar theme={theme} setTheme={setTheme} />
			{/* ImagesSlider as background */}
			<ImagesSlider
				images={images}
				direction="left"
				className="absolute inset-0"
			>
				<></>
			</ImagesSlider>
			{/* Content on top of the slider */}
			<div className="relative z-40 flex flex-col justify-center h-full pl-8">
				<h2 className="text-white text-2xl font-semibold">
					Мастерская художественной ковки
				</h2>
				<h1 className="text-white text-8xl font-bold mt-2">
					Кованый Дракон
				</h1>
				{/* Вы можете добавлять другие элементы сюда */}
			</div>
			<div id="our-works">
				<Gallery tabs={tabs} imagesByTab={imagesByTab}></Gallery>
			</div>
			<div
				id="reviews"
				className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
			>
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>
			</div>
		</main>
	);
}
