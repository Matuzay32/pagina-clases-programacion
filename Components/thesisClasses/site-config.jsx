import * as React from "react";
// Here we have used react-icons package for the icons
import { BsWhatsapp } from "react-icons/bs";
import {
	FaGithub,
	FaDev,
	FaLinkedin,
	FaQuora,
	FaTwitter,
} from "react-icons/fa";
export const siteConfig = {
	author: {
		imagen: "englishImg.jpeg",
		title: "Asesora",
		desc: "No dudes  en contactar a nuestra asesora profesional en la materia, estamos atentos a tu solicitud",
		name: "Valentina ",
		accounts: [
			{
				url: "https://api.whatsapp.com/send?phone=+573226544891&text=CONSULTA_TESIS_TRABAJOS",

				label: "",
				type: "green",
				icon: <BsWhatsapp />,
			},
		],
	},
};

export const features = [
	{
		consulta:
			"https://wa.me/+541159497891?text=CONSULTA_PAGOS",
		heading: "Payments",
		content:
			"Consult with our advisors about payment methods. We're here to help you find the option that best fits your needs and preferences. And don't worry, we guarantee the security and privacy of your data.",
		icon: (
			<svg
				width={36}
				height={36}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
			</svg>
		),
	},
	{
		consulta:
			"https://wa.me/+541159497891?text=CONSULTA_TESIS",

		heading: "Thesis",
		content:
			"Don't hesitate to consult with our advisors about your practical work and thesis projects. We're here to help you achieve your goals and produce high-quality results in your projects.",
		icon: (
			<svg
				width={36}
				height={36}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
			</svg>
		),
	},
	{
		consulta:
			"https://wa.me/+541159497891?text=CONSULTA_PROGRAMACION",
		heading: "Programming",
		content:
			"If you need help with web application creation, reach out to us. We offer private classes and support for exploring job opportunities in the programming field. We're here to help.",
		icon: (
			<svg
				width={36}
				height={36}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
			</svg>
		),
	},
];
