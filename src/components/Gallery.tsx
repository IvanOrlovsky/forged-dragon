import { ContentType } from "@/types/ContentType";
import { useState, useEffect } from "react";
import { Card } from "@/types/Card";
import { LayoutGrid } from "./ui/layout-grid";

export default function Gallery({ tabs, imagesByTab }: ContentType) {
	const [activeTab, setActiveTab] = useState(tabs[0]);
	const [cards, setCards] = useState<Card[]>(
		imagesByTab[0].images.map((src, index) => {
			return { id: index, thumbnail: src.replace(/\\/g, "/") };
		})
	);

	useEffect(() => {
		setCards(
			imagesByTab
				.find((tab) => tab.tab === activeTab)
				?.images.map((src, index) => {
					return { id: index, thumbnail: src.replace(/\\/g, "/") };
				}) || [{ id: 0, thumbnail: "" }]
		);
	}, [activeTab]);

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
			<div>
				<LayoutGrid cards={cards} />
			</div>
		</div>
	);
}
