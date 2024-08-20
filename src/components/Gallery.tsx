import { ContentType } from "@/types/ContentType";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({ tabs, imagesByTab }: ContentType) {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	return (
		<div className="flex flex-col">
			<ul className="bg-light-primary dark:bg-dark-primary p-1 sm:p-3  w-fit self-center flex flex-wrap justify-center sm:gap-3 text-sm sm:text-xl font-medium text-center dark:text-light-text text-dark-text">
				{tabs.map((tab) => (
					<li key={tab}>
						<button
							onClick={() => setActiveTab(tab)}
							className={`inline-block px-4 py-3 transition-colors duration-300 ${
								activeTab === tab
									? "bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text"
									: "hover:bg-light-primary dark:hover:bg-dark-primary hover:text-light-subtext dark:hover:text-dark-subtext"
							}`}
						>
							{tab}
						</button>
					</li>
				))}
			</ul>

			<div className="mt-6">
				<ImageGallery
					items={
						imagesByTab
							.find((tabItem) => tabItem.tab === activeTab)
							?.images.map((src) => {
								return { original: src, thumbnail: src };
							}) || [{ original: "" }]
					}
					showPlayButton={false}
					showFullscreenButton={false}
					thumbnailPosition="left"
					renderItem={(item) => (
						<div className="relative flex justify-center">
							{/* Блюр-фон для изображения */}
							<Image
								src={item.original.replaceAll(/\\/g, "/")}
								alt={item.original}
								fill
								className="absolute blur-xl -z-10 h-[300px] sm:h-[500px] w-full object-cover"
							/>
							{/* Основное изображение */}
							<Image
								src={item.original.replaceAll(/\\/g, "/")}
								alt={item.original}
								width={400}
								height={400}
								className="w-full h-[300px] sm:h-[500px] object-contain"
							/>
						</div>
					)}
				/>
			</div>
		</div>
	);
}
