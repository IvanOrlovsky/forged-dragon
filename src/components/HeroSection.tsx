"use client";
import Image from "next/image";

export default function HeroSection() {
	return (
		<div className="relative h-[70vh] sm:h-[80vh] mt-16">
			{/* Gradient Overlay */}
			<div className="absolute inset-0 z-40 pointer-events-none">
				<div className="h-full bg-gradient-to-r from-black/80 to-transparent  transition-colors duration-300"></div>
			</div>

			{/* Image */}
			<Image
				src="/main-images/Main.jpg"
				alt="Изображение кованого дракона, созданного в мастерской художественной ковки"
				fill
				className="absolute inset-0 object-cover object-center"
				priority={true}
				quality={85}
			/>

			{/* Content */}
			<div className="relative z-50 flex flex-col justify-center h-full pl-4 sm:pl-8 max-w-screen-lg">
				<div>
					<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight text-light-text  transition-colors duration-300">
						Кованый Дракон
					</h1>
					<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold  text-light-text   transition-colors duration-300">
						Мастерская художественной ковки
					</h2>
				</div>
				<div className="flex flex-col sm:flex-row gap-2 w-fit mt-6 sm:mt-8">
					<a
						href="#contacts"
						className="text-center 	font-bold px-6 py-3 sm:px-8 sm:py-4 bg-accent hover:bg-accent/60 text-dark-text shadow-lg transition-colors duration-300"
					>
						Оставить заявку
					</a>
					<a
						href="#our-works"
						className="text-center px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-4 border-accent hover:bg-dark-accent/60 text-accent font-semibold  shadow-lg transition-colors duration-300"
					>
						Наши работы
					</a>
				</div>
			</div>
		</div>
	);
}
