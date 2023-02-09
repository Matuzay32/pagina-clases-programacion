import Contenedor from "../Components/paginaInicial/Contenedor";
import Card from "../Components/thesisClasses/Card";
import Pricing from "../Components/thesisClasses/Pricing";
import ProcesoPrice from "../Components/thesisClasses/ProcesoPrice";
import React from "react";
import Features from "../Components/about/Features";
import { BsWhatsapp } from "react-icons/bs";
import MisionVision from "../Components/about/MisionVision";

export default function about() {
	return (
		<Contenedor>
			<MisionVision></MisionVision>
			<Features></Features>
		</Contenedor>
	);
}
