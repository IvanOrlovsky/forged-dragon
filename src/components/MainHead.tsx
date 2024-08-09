import { ImagesSlider } from "./ui/images-slider";

export default function MainHead() {
	const images = [
		"/main-images/main1.jpg",
		"/main-images/main2.jpg",
		"/main-images/main3.jpg",
	];

	return (
		<>
			{/* ImagesSlider as background */}
			<ImagesSlider
				images={images}
				direction="left"
				className="absolute inset-0 h-5/6"
			/>
			{/* Content on top of the slider */}
			<div className=" relative z-40 flex flex-col justify-center h-5/6 pl-8 mt-16">
				<h2 className="text-white text-3xl font-semibold">
					Мастерская художественной ковки
				</h2>
				<h1 className="text-white text-8xl font-bold mt-2">
					Кованый Дракон
				</h1>
				{/* Вы можете добавлять другие элементы сюда */}
			</div>
		</>
	);
}
