import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Кованый дракон - Мастерская художественной ковки</title>
				<meta
					name="description"
					content="Мастерская художественной ковки 'Кованый дракон' предлагает эксклюзивные изделия из металла. Закажите уникальные кованые ворота, заборы, лестницы и декоративные элементы."
				/>
				<meta
					name="keywords"
					content="художественная ковка, кованые изделия, кованые ворота, кованые заборы, кованые лестницы, металлоконструкции, ковка на заказ, откатные ворота, авто навесы"
				/>
				<meta name="author" content="Кованый дракон" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* Open Graph */}
				<meta
					property="og:title"
					content="Кованый дракон - Мастерская художественной ковки"
				/>
				<meta
					property="og:description"
					content="Мастерская художественной ковки 'Кованый дракон' предлагает эксклюзивные изделия из металла. Закажите уникальные кованые ворота, заборы, лестницы и декоративные элементы."
				/>
				<meta property="og:image" content="/og-image.png" />
				<meta property="og:url" content="https://kovany-dragon.com" />
				<meta property="og:type" content="website" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
