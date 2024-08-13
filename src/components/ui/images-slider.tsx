"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
	images,
	className,
	autoplay = true,
	direction = "right",
}: {
	images: string[];
	className?: string;
	autoplay?: boolean;
	direction?: "left" | "right";
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === images.length ? 0 : prevIndex + 1
		);
	};

	useEffect(() => {
		// autoplay
		let interval: any;
		if (autoplay) {
			interval = setInterval(() => {
				handleNext();
			}, 5000);
		}
		return () => clearInterval(interval);
	}, [autoplay]);

	const slideVariants = {
		initial: {
			scale: 0,
			opacity: 0,
			rotateY: 45,
		},
		visible: {
			scale: 1,
			rotateY: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.645, 0.045, 0.355, 1.0],
			},
		},
		leftExit: {
			opacity: 1,
			x: "-150%",
			transition: {
				duration: 1,
			},
		},
		rightExit: {
			opacity: 1,
			x: "150%",
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div
			className={cn(
				"overflow-hidden h-full w-full relative flex items-center justify-center",
				className
			)}
			style={{
				perspective: "1000px",
			}}
		>
			{/* Градиентное затемнение */}
			<div className="absolute inset-0 z-40 pointer-events-none">
				<div className="h-full bg-gradient-to-r from-black/80 to-transparent"></div>
			</div>

			<AnimatePresence>
				<motion.img
					key={currentIndex}
					src={images[currentIndex]}
					initial="initial"
					animate="visible"
					exit={direction === "right" ? "rightExit" : "leftExit"}
					variants={slideVariants}
					className="h-full w-full absolute inset-0 object-cover object-center"
					alt={`Slide ${currentIndex + 1}`}
				/>
			</AnimatePresence>
		</div>
	);
};
