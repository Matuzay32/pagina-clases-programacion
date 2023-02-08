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
		title: "English Teacher",
		desc: "Experienced English teacher passionate about making online lessons interactive and communication-focused.Online methodology",
		name: "Valentina ",
		accounts: [
			{
				url: "https://wa.me/+573226544891",
				label: "",
				type: "green",
				icon: <BsWhatsapp />,
			},
		],
	},
};
