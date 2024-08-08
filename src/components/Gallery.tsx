import { ContentType } from "@/types/ContentType";
import { useState } from "react";

export default function Gallery({ tabs, imagesByTab }: ContentType) {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	return (
		<div>
			<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
				{tabs.map((tab) => (
					<li key={tab} className="me-2">
						<a
							onClick={() => setActiveTab(tab)}
							className={`inline-block px-4 py-3 rounded-lg ${
								activeTab === tab
									? "text-white bg-blue-600"
									: "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
							}`}
						>
							{tab}
						</a>
					</li>
				))}
			</ul>
			<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{imagesByTab
					.find((tab) => tab.tab === activeTab)
					?.images.map((src, index) => (
						<img
							key={index}
							src={src}
							alt={`Image ${index}`}
							className="w-full h-auto rounded"
						/>
					))}
			</div>
		</div>
	);
}
