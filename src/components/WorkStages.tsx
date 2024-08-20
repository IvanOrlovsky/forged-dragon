import Engineering from "../../public/icons/Engineering.svg";
import Design_services from "../../public/icons/Design_services.svg";
import Construction from "../../public/icons/Construction.svg";
import Contact_support from "../../public/icons/Contact_support.svg";

const WorkStages = () => {
	const stages = [
		{
			id: 1,
			title: "Выезд замерщика",
			description:
				"Мы производим выезд замерщика на вашу территорию. Наш специалист поможет с выбором материала и предоставит консультации абсолютно бесплатно.",
			icon: (
				<Engineering className="text-black w-12 h-12  sm:w-16 sm:h-16" />
			),
		},
		{
			id: 2,
			title: "Создание визуализации и проекта",
			description:
				"По вашему желанию мы создадим визуализацию будущего изделия и подготовим проект, чтобы вы могли увидеть, как оно будет выглядеть в вашем интерьере.",
			icon: (
				<Design_services className="text-black w-12 h-12  sm:w-16 sm:h-16" />
			),
		},
		{
			id: 3,
			title: "Производство и установка",
			description:
				"Мы берём на себя производство изделия, доставку на объект и профессиональную установку, гарантируя качество на каждом этапе.",
			icon: (
				<Construction className="text-black w-12 h-12  sm:w-16 sm:h-16" />
			),
		},
		{
			id: 4,
			title: "Бесплатная консультация",
			description:
				"Получите консультацию от нашего эксперта и подробный расчёт стоимости проекта совершенно бесплатно. Мы всегда рядом, чтобы помочь вам принять верное решение.",
			icon: (
				<Contact_support className="text-black w-12 h-12  sm:w-16 sm:h-16" />
			),
		},
	];

	return (
		<section id="work-stages">
			<div className=" px-4 sm:px-6 lg:px-8">
				<div className="mb-12">
					<h2 className="text-light-accent dark:text-dark-accent text-4xl xl:text-6xl font-bold mb-8 h-full">
						Этапы работы
					</h2>
					<p className="text-center text-md lg:text-xl leading-relaxed mb-4  dark:text-light-text text-dark-text font-medium">
						Мы предлагаем полный цикл услуг от первой консультации
						до установки готового изделия. Узнайте, как мы работаем!
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{stages.map((stage) => (
						<div
							key={stage.id}
							className="flex flex-col items-center p-6 bg-white shadow-lg"
						>
							<div className="text-4xl text-indigo-500 mb-4">
								{stage.icon}
							</div>
							<h3 className="text-xl text-center font-semibold text-gray-800">
								{stage.title}
							</h3>
							<p className="mt-4 text-gray-600 text-justify">
								{stage.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WorkStages;
