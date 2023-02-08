import Contenedor from "../Components/paginaInicial/Contenedor";
import Card from "../Components/thesisClasses/Card";
import Pricing from "../Components/thesisClasses/Pricing";
import ProcesoPrice from "../Components/thesisClasses/ProcesoPrice";

export default function thesisClasses() {
	return (
		<Contenedor>
			<Card></Card>

			<ProcesoPrice></ProcesoPrice>
			<Pricing></Pricing>
		</Contenedor>
	);
}
