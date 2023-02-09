import Contenedor from "../Components/paginaInicial/Contenedor";
import Card from "../Components/programmingClasses/Card";
import Pricing from "../Components/programmingClasses/Pricing";
import ProcesoPrice from "../Components/programmingClasses/ProcesoPrice";
import Tecnologies from "../Components/programmingClasses/Tecnologies";

export default function thesisClasses() {
	return (
		<Contenedor>
			<Card></Card>

			<Tecnologies></Tecnologies>
			<ProcesoPrice></ProcesoPrice>
			<Pricing></Pricing>
		</Contenedor>
	);
}
