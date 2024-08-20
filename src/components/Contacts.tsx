import ClientForm from "./ClientForm";

export default function Contacts() {
	return (
		<>
			<section
				id="contacts"
				className="flex flex-col xl:flex-row items-center justify-center p-4 xl:p-10"
			>
				<div className="xl:w-1/2 ">
					<h2 className="  text-light-text dark:text-dark-text text-4xl xl:text-6xl font-bold mb-8 ">
						Как с нами связаться?
					</h2>
				</div>
				{/* <div className="h-[8px] sm:w-[8px] sm:h-auto bg-dark-text self-stretch"></div> */}
				<div className="flex flex-col w-full xl:w-1/2 xl:pr-10">
					<div className="border-l-4 sm:border-l-8 border-light-text dark:border-dark-text pl-2 sm:pl-5">
						<h2 className="text-center text-2xl xl:text-3xl text-light-text dark:text-dark-text font-bold mb-5">
							Оставить заявку:
						</h2>
						<ClientForm />
					</div>
				</div>
				{/* <div className="flex flex-row gap-5 w-full xl:w-1/2">
					
				</div> */}
			</section>
		</>
	);
}
