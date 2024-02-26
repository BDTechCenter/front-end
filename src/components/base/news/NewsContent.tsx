"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NewsContent() {
	const path = usePathname();
	const newsId = parseInt(path.split("/")[2]);
	console.log(newsId);

	const atualNews = newsData[newsId];
	console.log(atualNews);

	return (
		<section className="flex h-full mx-44 my-20 gap-28">
			<div className="flex flex-col gap-5">
				<h1 className="font-bold text-3xl 2xl:text-4xl">{atualNews.title}</h1>
				<p className="text-justify">{atualNews.description}</p>
				<div className="bg-zinc-100 rounded-lg flex flex-col py-2 px-5 w-[30%]">
					<p className="font-semibold">{atualNews.author}</p>
					<p className="text-xs">{atualNews.date}</p>
				</div>
				<Image
					src={atualNews.img}
					alt={atualNews.id + "Img"}
					width={500}
					height={500}
					className="w-full"
				/>
				{atualNews.content.map((cont) => (
          <p key={cont[0]} className="text-justify">{cont}</p>
        ))}
			</div>
			<div className="w-full">
				<h1 className="text-bdpurple font-bold text-xl">Other News</h1>
			</div>
		</section>
	);
}

const newsData = [
	{
		id: 1,
		img: "/imgNews.png",
		date: "January 20",
		title: "Introduction to Machine Learning Algorithms",
		author: "Matheus Aprigio",
		description:
			"Python is a high-level, general-purpose, open-source programming language. It is known for its simple syntax and readability, which makes it a popular choice among beginners and professionals alike. Python supports multiple programming paradigms and has a vast standard library, making it suitable for a wide range of applications, from web development to data analysis and task automation.",
		content: [
			"Python is emerging as one of the most influential programming languages ​​in the world. Recognized for its simple syntax and readability, Python is a popular choice for a variety of applications, from web development to data analysis and artificial intelligence.",

			"With a comprehensive standard library and an active, welcoming community, Python supports programmers of all skill levels. Large companies like Google, Facebook, and Netflix rely on Python for their daily operations due to its flexibility and scalability.",

			"As we move into the era of artificial intelligence and data analytics, Python continues to be at the forefront of technological innovation, driving progress in areas like machine learning and data science.",

			"In short, Python is more than just a programming language; It is a powerful catalyst for innovation and technological progress around the world.",
		],
	},
	{
		id: 2,
		img: "/imgNews.png",
		date: "February 09",
		title: "Taking a Glimpse of What TRPC IS? - DEV Community",
		author: "John Doe",
		description:
			"Python is a high-level, general-purpose, open-source programming language. It is known for its simple syntax and readability, which makes it a popular choice among beginners and professionals alike. Python supports multiple programming paradigms and has a vast standard library, making it suitable for a wide range of applications, from web development to data analysis and task automation.",
		content: [
			"Python is emerging as one of the most influential programming languages ​​in the world. Recognized for its simple syntax and readability, Python is a popular choice for a variety of applications, from web development to data analysis and artificial intelligence.",

			"With a comprehensive standard library and an active, welcoming community, Python supports programmers of all skill levels. Large companies like Google, Facebook, and Netflix rely on Python for their daily operations due to its flexibility and scalability.",

			"As we move into the era of artificial intelligence and data analytics, Python continues to be at the forefront of technological innovation, driving progress in areas like machine learning and data science.",

			"In short, Python is more than just a programming language; It is a powerful catalyst for innovation and technological progress around the world.",
		],
	},
	{
		id: 3,
		img: "/imgNews.png",
		date: "March 19",
		title: "The Future of Artificial Intelligence",
		author: "Matheus Aprigio",
		description: [
			"Python is a high-level, general-purpose, open-source programming language. It is known for its simple syntax and readability, which makes it a popular choice among beginners and professionals alike. Python supports multiple programming paradigms and has a vast standard library, making it suitable for a wide range of applications, from web development to data analysis and task automation.",
		],
		content: [
			"Python is emerging as one of the most influential programming languages ​​in the world. Recognized for its simple syntax and readability, Python is a popular choice for a variety of applications, from web development to data analysis and artificial intelligence.",

			"With a comprehensive standard library and an active, welcoming community, Python supports programmers of all skill levels. Large companies like Google, Facebook, and Netflix rely on Python for their daily operations due to its flexibility and scalability.",

			"As we move into the era of artificial intelligence and data analytics, Python continues to be at the forefront of technological innovation, driving progress in areas like machine learning and data science.",

			"In short, Python is more than just a programming language; It is a powerful catalyst for innovation and technological progress around the world.",
		],
	},
	{
		id: 4,
		img: "/imgNews.png",
		date: "December 12",
		title: "Web Development Trends in 2024",
		author: "Jane Smith",
		description: [
			"Python is a high-level, general-purpose, open-source programming language. It is known for its simple syntax and readability, which makes it a popular choice among beginners and professionals alike. Python supports multiple programming paradigms and has a vast standard library, making it suitable for a wide range of applications, from web development to data analysis and task automation.",
		],
		content: [
			"Python is emerging as one of the most influential programming languages ​​in the world. Recognized for its simple syntax and readability, Python is a popular choice for a variety of applications, from web development to data analysis and artificial intelligence.",

			"With a comprehensive standard library and an active, welcoming community, Python supports programmers of all skill levels. Large companies like Google, Facebook, and Netflix rely on Python for their daily operations due to its flexibility and scalability.",

			"As we move into the era of artificial intelligence and data analytics, Python continues to be at the forefront of technological innovation, driving progress in areas like machine learning and data science.",

			"In short, Python is more than just a programming language; It is a powerful catalyst for innovation and technological progress around the world.",
		],
	},
];
