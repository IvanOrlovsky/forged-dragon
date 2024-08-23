import React from "react";

const testimonialsData = [
	{
		id: 1,
		name: "Анна Иванова",
		role: "Дизайнер",
		content:
			"Этот продукт изменил мою жизнь. Я рекомендую его всем своим друзьям!",
		avatar: "https://randomuser.me/api/portraits/women/1.jpg",
	},
	{
		id: 2,
		name: "Алексей Смирнов",
		role: "Разработчик",
		content:
			"Очень полезный и удобный продукт. Отличное качество и поддержка.",
		avatar: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: 3,
		name: "Мария Кузнецова",
		role: "Менеджер",
		content: "Мне нравится, как продукт помогает мне в повседневной жизни.",
		avatar: "https://randomuser.me/api/portraits/women/3.jpg",
	},
];

export default function Reviews() {
	return (
		<section id="reviews" className="py-12">
			<div className="container mx-auto px-6 md:px-12">
				<div className="mb-12">
					<h2 className="text-accent  text-4xl xl:text-6xl font-bold mb-8 h-full">
						Отзывы наших клиентов
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonialsData.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white p-6 rounded-lg shadow-lg"
						>
							<div className="flex items-center mb-4">
								<img
									src={testimonial.avatar}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full mr-4"
								/>
								<div>
									<h3 className="text-xl font-semibold">
										{testimonial.name}
									</h3>
									<p className="text-gray-600">
										{testimonial.role}
									</p>
								</div>
							</div>
							<p className="text-gray-700">
								{testimonial.content}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
