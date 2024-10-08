import { ContentType } from "@/types/ContentType";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({ tabs, imagesByTab }: ContentType) {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	return (
		<section id="our-works">
			<h2 className="pt-6 pl-4 sm:pl-8 text-accent  text-4xl sm:text-6xl font-bold mb-8">
				Наши работы
			</h2>
			<div className="flex flex-col">
				<ul className="border-2 sm:border-4 border-accent bg-transparent p-1 sm:p-2 w-fit self-center flex flex-wrap justify-center sm:gap-3 text-sm sm:text-xl font-medium text-center text-light-text ">
					{tabs.map((tab) => (
						<li key={tab}>
							<button
								onClick={() => setActiveTab(tab)}
								className={`inline-block px-4 py-3 transition-colors duration-300 ${
									activeTab === tab
										? "bg-accent text-dark-text"
										: "hover:bg-primary hover:text-subtext"
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
							imagesByTab.find(
								(tabItem) => tabItem.tab === activeTab
							)?.images || []
						}
						showPlayButton={false}
						lazyLoad
						showFullscreenButton={false}
						thumbnailPosition="left"
						renderItem={(item) => (
							<div className="relative flex justify-center">
								<Image
									src={item.original.replaceAll(/\\/g, "/")}
									alt={item.original}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="absolute blur-xl -z-10 h-[300px] sm:h-[500px] w-full object-cover"
								/>
								<Image
									src={item.original.replaceAll(/\\/g, "/")}
									alt={item.original}
									width={400}
									height={400}
									sizes="(max-width: 768px) 100vw, 50vw"
									className="w-full h-[300px] sm:h-[500px] object-contain"
								/>
							</div>
						)}
					/>
				</div>
			</div>
		</section>
	);
}
