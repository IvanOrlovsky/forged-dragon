"use client";
import Image from "next/image";

export default function HeroSection() {
	return (
		<div className="relative h-[70vh] sm:h-[80vh] mt-16">
			{/* Gradient Overlay */}
			<div className="absolute inset-0 z-40 pointer-events-none">
				<div className="h-full bg-gradient-to-r from-black/80 to-transparent"></div>
			</div>

			{/* Image */}
			<Image
				src={"/main-images/Main.jpg"}
				alt="Фотография кованого дракона"
				fill
				className="absolute inset-0 object-cover object-center"
			/>

			{/* Content */}
			<div className="relative z-50 flex flex-col justify-center h-full pl-4 sm:pl-8 max-w-screen-lg ">
				<div>
					<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight text-white">
						Кованый Дракон
					</h1>
					<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white relative">
						Мастерская художественной ковки
						<div className="absolute bottom-0 left-0 w-16 sm:w-24 h-1 bg-accent-light dark:bg-accent-dark"></div>
					</h2>
				</div>
				<div className="mt-6 sm:mt-8">
					<button className="px-6 py-3 sm:px-8 sm:py-4 bg-accent-light dark:bg-accent-dark hover:bg-accent-light/60 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300">
						Заказать сейчас
					</button>
				</div>
			</div>
		</div>
	);
}
