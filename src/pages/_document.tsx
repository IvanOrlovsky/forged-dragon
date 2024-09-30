"use client";

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en" className="!scroll-smooth">
			<Head>
				<title>Кованый дракон - Мастерская художественной ковки</title>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<meta
					name="description"
					content="Мастерская художественной ковки 'Кованый дракон' предлагает эксклюзивные изделия из металла. Закажите уникальные кованые ворота, заборы, лестницы и декоративные элементы."
				/>
				<meta
					name="keywords"
					content="кованый дракон, обнинск ковка, обнинск, заказать изделие из месталла, изделия из металла, ковка, металлическая ковка, художественная ковка, кованые изделия, кованые ворота, кованые заборы, кованые лестницы, металлоконструкции, ковка на заказ, откатные ворота, авто навесы, балконы, лестницы, заборы, ворота, калитки, беседки, металл, калуга ковка, калужская область"
				/>
				<meta name="author" content="Иван Орловский" />
				<meta name="robots" content="index, follow" />

				{/* Open Graph */}
				<meta
					property="og:title"
					content="Кованый дракон - Мастерская художественной ковки"
				/>
				<meta
					property="og:description"
					content="Мастерская художественной ковки 'Кованый дракон' предлагает эксклюзивные изделия из металла. Закажите уникальные кованые ворота, заборы, лестницы и декоративные элементы."
				/>
				<meta
					property="og:image"
					content="https://forgeddragon.ru/og-image.jpg"
				/>
				<meta
					property="vk:image"
					content="https://forgeddragon.ru/og-image.jpg"
				/>
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:url" content="https://forgeddragon.ru" />
				<meta property="og:type" content="website" />
			</Head>
			<body className="bg-primary">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
