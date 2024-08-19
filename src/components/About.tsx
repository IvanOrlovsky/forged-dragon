import Image from "next/image";

export default function About() {
	return (
		<section id="about" className="py-12 px-4 sm:px-8">
			<h2 className="text-light-accent dark:text-dark-accent text-4xl sm:text-6xl font-bold mb-8">
				О мастерской
			</h2>
			<div className="flex flex-col gap-2">
				<div className="flex flex-col lg:flex-row lg:items-center ">
					<div className="lg:w-2/5  lg:pr-8 mb-8 lg:mb-0">
						<Image
							src="/main-images/About.jpg"
							alt="Изображение мастера за ковкой"
							width={1000}
							height={800}
							className="object-cover w-full h-72 lg:h-auto rounded-lg shadow-lg"
						/>
					</div>
					<div className="lg:w-3/5 dark:text-light-text text-dark-text font-medium">
						<p className="text-md lg:text-xl leading-relaxed mb-4">
							Добро пожаловать в мастерскую{" "}
							<strong>«Кованый Дракон»</strong>! Мы с гордостью
							представляем наш опыт и знания в области
							художественной ковки, которые мы развиваем уже более
							12 лет. В нашей мастерской мы уделяем особое
							внимание каждому этапу создания уникальных изделий,
							чтобы каждое произведение не только соответствовало
							высоким стандартам качества, но и отражало наш
							творческий подход.
						</p>

						<p className="text-md lg:text-xl leading-relaxed">
							Мы всегда рады новым вызовам и проектам, поэтому
							если у вас есть идея или желание создать что-то
							уникальное, не стесняйтесь обратиться к нам.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row-reverse lg:items-center ">
					<div className="lg:w-2/5 lg:pr-8 mb-8 lg:mb-0">
						<Image
							src="/main-images/Cold.jpg"
							alt="Изображение холодного цеха"
							width={1000}
							height={800}
							className="object-cover w-full h-72 lg:h-auto rounded-lg shadow-lg"
						/>
					</div>
					<div className="lg:w-3/5 dark:text-light-text text-dark-text font-medium">
						<p className="text-md lg:text-xl leading-relaxed mb-4">
							В <strong>холодном цехе</strong> мы производим
							кованые изделия без нагрева металла. Используя
							современные станки и инструменты, мы создаем
							изделия, которые отличаются прочностью и
							элегантностью. Холодная ковка позволяет нам
							воплощать в жизнь самые сложные и тонкие детали,
							обеспечивая точность и высокое качество работы.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row lg:items-center ">
					<div className="lg:w-2/5 lg:pr-8 mb-8 lg:mb-0">
						<Image
							src="/main-images/Hot.jpg"
							alt="Изображение горячего цеха"
							width={1000}
							height={800}
							className="object-cover w-full h-72 lg:h-auto rounded-lg shadow-lg"
						/>
					</div>
					<div className="lg:w-3/5 dark:text-light-text text-dark-text font-medium">
						<p className="text-md lg:text-xl leading-relaxed mb-4">
							В <strong>горячем цехе</strong> происходит магия
							превращения металла в искусство. Здесь мы используем
							специальные печи и молоты для нагрева и обработки
							металла, чтобы создать уникальные формы и текстуры.
							Этот процесс требует большого мастерства и опыта, но
							именно он позволяет нам создавать изделия с
							характером и индивидуальностью, которые могут стать
							настоящим украшением любого интерьера или
							экстерьера.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
