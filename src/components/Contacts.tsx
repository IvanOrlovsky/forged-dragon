import ClientForm from "./ClientForm";

export default function Contacts() {
	return (
		<>
			<section id="contacts">
				<h2 className="pl-4 sm:pl-8 text-light-text dark:text-dark-text text-4xl sm:text-6xl font-bold">
					Свяжитесь с нами
				</h2>
				<div className="flex flex-col xl:flex-row  p-4 xl:p-10">
					<div className="flex flex-col xl:w-1/2 ">
						<div>
							<h3>Мы в социальных сетях:</h3>
						</div>
					</div>
					{/* <div className="h-[8px] sm:w-[8px] sm:h-auto bg-dark-text self-stretch"></div> */}
					<div className="flex flex-col w-full xl:w-1/2 xl:pr-10">
						<div className="border-l-4 sm:border-l-8 border-light-text dark:border-dark-text pl-2 sm:pl-5">
							<h2 className="text-center text-2xl xl:text-3xl text-light-text dark:text-dark-text font-bold mb-5">
								Оставьте заявку:
							</h2>
							<ClientForm />
						</div>
					</div>
					{/* <div className="flex flex-row gap-5 w-full xl:w-1/2">
					
					</div> */}
				</div>
			</section>
		</>
	);
}
