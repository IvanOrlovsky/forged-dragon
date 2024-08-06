"use client";

import Header from "@/components/Header";

export default function Home() {
	let a = 1;
	let b = a + 1;
	a = b - a;
	console.log(a);

	return (
		<>
			<Header />
			<main></main>
		</>
	);
}
