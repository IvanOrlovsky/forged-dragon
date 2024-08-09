import { ContentType } from "@/types/ContentType";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery1({ tabs, imagesByTab }: ContentType) {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	return (
		<div className="w-screen">
			<ul className="flex flex-wrap justify-center gap-3 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
				{tabs.map((tab) => (
					<li key={tab} className="me-2">
						<button
							onClick={() => setActiveTab(tab)}
							className={`inline-block px-4 py-3 rounded-lg ${
								activeTab === tab
									? "text-white bg-blue-600"
									: "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white hover:cursor-pointer"
							}`}
						>
							{tab}
						</button>
					</li>
				))}
			</ul>
			<div className="mt-3">
				<ImageGallery
					items={
						imagesByTab
							.find((tab) => tab.tab === activeTab)
							?.images.map((src) => {
								return { original: src, thumbnail: src };
							}) || [{ original: "" }]
					}
					showPlayButton={false}
					thumbnailPosition="left"
				/>
			</div>
		</div>
	);
}
