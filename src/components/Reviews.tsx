export default function Reviews() {
	return (
		<div
			style={{
				width: "560px",
				height: "800px",
				overflow: "hidden",
				position: "relative",
			}}
		>
			<iframe
				style={{
					width: "100%",
					height: "100%",
					border: "1px solid #e6e6e6",
					borderRadius: "8px",
					boxSizing: "border-box",
				}}
				src="https://yandex.ru/maps-reviews-widget/122849766947?comments"
			></iframe>

			<a
				href="https://yandex.ru/maps/org/zhelezny_drakon/122849766947/"
				target="_blank"
				style={{
					boxSizing: "border-box",
					textDecoration: "none",
					color: "#b3b3b3",
					fontSize: "10px",
					fontFamily: "YS Text,sans-serif",
					padding: "0 20px",
					position: "absolute",
					bottom: "8px",
					width: "100%",
					textAlign: "center",
					left: "0",
					overflow: "hidden",
					textOverflow: "ellipsis",
					display: "block",
					maxHeight: "14px",
					whiteSpace: "nowrap",
				}}
			>
				Железный дракон на карте Обнинска — Яндекс Карты
			</a>
		</div>
	);
}
