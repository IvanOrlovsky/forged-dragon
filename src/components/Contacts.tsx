export default function Contacts() {
	return (
		<div className="flex flex-col sm:flex-row w-full h-screen">
			<div className="h-1/2 sm:w-1/2 p-10 bg-accent-light dark:bg-accent-dark flex flex-col justify-center">
				<div className="border-l-8 dark:border-text-light border-text-dark pl-5">
					<h2 className="text-4xl dark:text-text-light text-text-dark font-bold mb-5">
						Контактная информация
					</h2>
					<div className="mb-5">
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
			<iframe
				src="https://yandex.ru/map-widget/v1/?ll=36.630308%2C55.089686&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxOTg4MDgwNTUxEmbQoNC-0YHRgdC40Y8sINCa0LDQu9GD0LbRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0J7QsdC90LjQvdGB0LosINCc0L7RgdC60L7QstGB0LrQsNGPINGD0LvQuNGG0LAsIDUz0JAiCg26hBJCFShcXEI%2C&z=18"
				style={{ border: 0, width: "100%", height: "100%" }}
				allowFullScreen
				loading="lazy"
			></iframe>
		</div>
	);
}
