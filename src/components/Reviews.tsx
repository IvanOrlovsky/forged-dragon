import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Reviews() {
	const testimonials = [
		{
			quote: "Классная мастерская",
			name: "Иван Орловский",
			title: "",
		},
		{
			quote: "Обязательно закажу еще",
			name: "Иван Орловский",
			title: "",
		},
		{
			quote: "Красивый дракон",
			name: "Иван Орловский",
			title: "",
		},
		{
			quote: "Побольше бы таких мастеров",
			name: "Иван Орловский",
			title: "",
		},
		{
			quote: "Очень быстро и дешево сделали",
			name: "Иван Орловский",
			title: "",
		},
	];

	return (
		<div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}
