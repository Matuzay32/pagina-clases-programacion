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
				url: "https://wa.me/+573226544891?text=CONSULTA_TESIS_O_CLASES",
				label: "",
				type: "green",
				icon: <BsWhatsapp />,
			},
		],
	},
};
