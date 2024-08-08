"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
	images,
	children,
	overlay = true,
	overlayClassName,
	className,
	autoplay = true,
	direction = "right",
}: {
	images: string[];
	children: React.ReactNode;
	overlay?: React.ReactNode;
	overlayClassName?: string;
	className?: string;
	autoplay?: boolean;
	direction?: "left" | "right";
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const [loadedImages, setLoadedImages] = useState<string[]>([]);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === images.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		loadImages();
	}, []);

	const loadImages = () => {
		setLoading(true);
		const loadPromises = images.map((image) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = image;
				img.onload = () => resolve(image);
				img.onerror = reject;
			});
		});

		Promise.all(loadPromises)
			.then((loadedImages) => {
				setLoadedImages(loadedImages as string[]);
				setLoading(false);
			})
			.catch((error) => console.error("Failed to load images", error));
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight") {
				handleNext();
			} else if (event.key === "ArrowLeft") {
				handlePrevious();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		// autoplay
		let interval: any;
		if (autoplay) {
			interval = setInterval(() => {
				handleNext();
			}, 5000);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			clearInterval(interval);
		};
	}, []);

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

	const areImagesLoaded = loadedImages.length > 0;

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
			{areImagesLoaded && children}
			{areImagesLoaded && overlay && (
				<div
					className={cn(
						"absolute inset-0 bg-black/60 z-40",
						overlayClassName
					)}
				/>
			)}

			{areImagesLoaded && (
				<AnimatePresence>
					<motion.img
						key={currentIndex}
						src={loadedImages[currentIndex]}
						initial="initial"
						animate="visible"
						exit={direction === "right" ? "rightExit" : "leftExit"}
						variants={slideVariants}
						className="image h-full w-full absolute inset-0 object-cover object-center"
					/>
				</AnimatePresence>
			)}
		</div>
	);
};
