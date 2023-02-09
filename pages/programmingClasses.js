import Contenedor from "../Components/paginaInicial/Contenedor";
import Card from "../Components/programmingClasses/Card";
import Pricing from "../Components/programmingClasses/Pricing";
import ProcesoPrice from "../Components/programmingClasses/ProcesoPrice";

export default function thesisClasses() {
	return (
		<Contenedor>
			<Card></Card>
			<ProcesoPrice></ProcesoPrice>
			<Pricing></Pricing>
		</Contenedor>
	);
}
