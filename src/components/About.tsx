import Image from "next/image";

export default function About() {
	return (
		<section id="about" className="py-12 px-4 sm:px-8">
			<h2 className="text-light-accent dark:text-dark-accent text-4xl sm:text-6xl font-bold mb-12">
				О мастерской
			</h2>
			<div className="flex flex-col gap-12">
				<div className="flex flex-col  lg:flex-row lg:items-center bg-[#4d4d52]">
					<div className="lg:w-1/2  mb-8 lg:mb-0">
						<Image
							src="/main-images/About.jpg"
							alt="Изображение мастера за ковкой"
							width={1000}
							height={800}
							className="object-cover w-full h-72 lg:h-auto shadow-lg"
						/>
					</div>
					<div className="lg:w-1/2 dark:text-light-text text-dark-text font-medium text-justify p-8 sm:p-0">
						<p className="text-md lg:text-xl leading-relaxed lg:mx-8">
							Добро пожаловать в мастерскую{" "}
							<strong>«Кованый Дракон»</strong>!{" "}
						</p>
						<p className="text-md lg:text-xl leading-relaxed lg:mx-8 ">
							Мы с гордостью представляем наш опыт и знания в
							области художественной ковки, которые мы развиваем
							уже более 12 лет. В нашей мастерской мы уделяем
							особое внимание каждому этапу создания уникальных
							изделий, чтобы каждое произведение не только
							соответствовало высоким стандартам качества, но и
							отражало наш творческий подход.
						</p>

						<p className="text-md lg:text-xl leading-relaxed lg:mx-8">
							Мы всегда рады новым вызовам и проектам, поэтому
							если у вас есть идея или желание создать что-то
							уникальное, не стесняйтесь обратиться к нам.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row-reverse lg:items-center bg-[#1b1b1c]">
					<div className="lg:w-1/2  mb-8 lg:mb-0">
						<Image
							src="/main-images/Cold.jpg"
							alt="Изображение холодного цеха"
							width={1000}
							height={800}
							className="object-cover w-full h-72 lg:h-auto shadow-lg"
						/>
					</div>
					<div className="lg:w-1/2 dark:text-light-text text-dark-text font-medium text-justify">
						<p className="text-md lg:text-xl leading-relaxed p-8 sm:p-0 mb-4 lg:mx-8">
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
				<div className="flex flex-col lg:flex-row lg:items-center bg-[#4d4d52]">
					<div className="lg:w-1/2 lg:pr-8mb-8 lg:mb-0">
						<Image
							src="/main-images/Hot.jpg"
							alt="Изображение горячего цеха"
							width={1000}
							height={800}
							className="object-cover w-full h-72 lg:h-auto shadow-lg"
						/>
					</div>
					<div className="lg:w-1/2 dark:text-light-text text-dark-text font-medium text-justify">
						<p className="text-md lg:text-xl leading-relaxed mb-4 p-8 sm:p-0 lg:mx-8">
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
