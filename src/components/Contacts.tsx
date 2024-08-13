export default function Contacts() {
	return (
		<div className="flex flex-col sm:flex-row w-full h-screen">
			<div className="h-1/2 sm:w-1/2 p-10  flex flex-col justify-center">
				<div className="border-l-8 dark:border-text-light border-text-dark pl-5">
					<h2 className="text-4xl dark:text-text-light text-text-dark font-bold mb-5">
						Контактная информация
					</h2>
					<div className="mb-5 dark:text-text-light text-text-dark">
						<p className="text-xl font-semibold">
							Адрес: Московская улица, 53А, Обнинск
						</p>
						<p className="text-xl font-semibold">
							Телефон: +7 (123) 456-78-90
						</p>
						<p className="text-xl font-semibold">
							Email: example@example.com
						</p>
					</div>
				</div>
			</div>
			<div className="h-1/2 sm:w-1/2">
				<YandexMap />
			</div>
		</div>
	);
}

function YandexMap() {
	return (
		<div
			style={{ position: "relative", overflow: "hidden", height: "100%" }}
		>
			<a
				href="https://yandex.ru/maps/org/zhelezny_drakon/122849766947/?utm_medium=mapframe&utm_source=maps"
				style={{
					color: "#eee",
					fontSize: "12px",
					position: "absolute",
					top: "0px",
				}}
			>
				Железный дракон
			</a>
			<a
				href="https://yandex.ru/maps/967/obninsk/category/genre_sculpture/89667445721/?utm_medium=mapframe&utm_source=maps"
				style={{
					color: "#eee",
					fontSize: "12px",
					position: "absolute",
					top: 14,
				}}
			>
				Жанровая скульптура в Обнинске
			</a>

			<iframe
				src="https://yandex.ru/map-widget/v1/org/zhelezny_drakon/122849766947/reviews/?ll=36.626416%2C55.090318&z=16"
				style={{ border: 0, width: "100%", height: "100%" }}
				allowFullScreen
				loading="lazy"
			></iframe>
		</div>
	);
}
