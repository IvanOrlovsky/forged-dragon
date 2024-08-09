"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card } from "@/types/Card";

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
	const [selected, setSelected] = useState<Card | null>(null);
	const [lastSelected, setLastSelected] = useState<Card | null>(null);

	const handleClick = (card: Card) => {
		setLastSelected(selected);
		setSelected(card);
	};

	const handleOutsideClick = () => {
		setLastSelected(selected);
		setSelected(null);
	};

	return (
		<>
			<div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
				{cards.map((card, i) => (
					<div key={i} className={cn(card.className, "")}>
						<motion.div
							onClick={() => handleClick(card)}
							className="relative overflow-hidden cursor-pointer bg-white rounded-xl h-full w-full"
							layoutId={`card-${card.id}`}
						>
							<ImageComponent card={card} />
						</motion.div>
					</div>
				))}
			</div>

			<AnimatePresence>
				{selected && (
					<motion.div
						onClick={handleOutsideClick}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
					>
						<motion.div
							className="relative"
							layoutId={`card-${selected.id}`}
						>
							<SelectedCard selected={selected} />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

const ImageComponent = ({ card }: { card: Card }) => {
	return (
		<motion.img
			layoutId={`image-${card.id}-image`}
			src={card.thumbnail}
			height="500"
			width="500"
			className="object-cover object-top h-full w-full transition duration-200"
			alt="thumbnail"
		/>
	);
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
	return (
		<div className="bg-transparent h-auto w-auto flex justify-center rounded-lg shadow-2xl">
			<Image
				src={selected?.thumbnail ?? ""}
				alt="Selected"
				width={800}
				height={800}
				className="object-contain"
			/>
		</div>
	);
};
