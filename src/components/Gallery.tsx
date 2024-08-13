import { ContentType } from "@/types/ContentType";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({ tabs, imagesByTab }: ContentType) {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	return (
		<div className="flex flex-col">
			<ul className="bg-white p-3 rounded-lg w-fit self-center flex flex-wrap justify-center gap-3 text-sm sm:text-xl  font-medium text-center text-text-light ">
				{tabs.map((tab) => (
					<li key={tab}>
						<button
							onClick={() => setActiveTab(tab)}
							className={`inline-block px-4 py-3 rounded-lg ${
								activeTab === tab
									? " dark:text-text-light bg-accent-light text-text-dark dark:bg-accent-dark"
									: "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white hover:cursor-pointer"
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
							.find((tab) => tab.tab === activeTab)
							?.images.map((src) => {
								return { original: src, thumbnail: src };
							}) || [{ original: "" }]
					}
					showPlayButton={false}
					showFullscreenButton={false}
					thumbnailPosition="left"
					renderItem={(item) => {
						return (
							<div className="relative flex justify-center">
								<img
									src={item.original}
									alt={item.original}
									className="absolute blur-xl -z-10 h-[300px] sm:h-[500px] w-full object-cover"
								/>
								<img
									src={item.original}
									alt={item.original}
									className="w-full h-[300px] sm:h-[500px] object-contain"
								/>
							</div>
						);
					}}
				/>
			</div>
		</div>
	);
}
