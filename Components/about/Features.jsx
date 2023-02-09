import { SVGProps, useState } from "react";
import {
	Container,
	Box,
	chakra,
	Text,
	SimpleGrid,
	Flex,
	Link,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";

import { BsWhatsapp } from "react-icons/bs";

import { features as datosFeatures } from "../thesisClasses/site-config";

const Redes = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue(
				"linkHeader.50",
				"linkHeader.500"
			)}
			rounded={"full"}
			w={"3rem"}
			h={"3rem"}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				fontSize: "33px",

				color: "white",
				bg: useColorModeValue(
					"linkHeader.400",
					"whiteAlpha.200"
				),
				transform: "  scale(1.3);",
				transition: "all 1s",
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>

			{children}
		</chakra.button>
	);
};

const Features = () => {
	const [features, setFeatures] = useState(datosFeatures);
	return (
		<Container maxW="6xl" p={{ base: 5, md: 10 }}>
			<chakra.h3
				fontSize="4xl"
				fontWeight="bold"
				mb={20}
				textAlign="center">
				Professional Help at Your Fingertips
			</chakra.h3>
			<SimpleGrid
				columns={{ base: 1, sm: 2, md: 3 }}
				placeItems="center"
				spacing={10}
				mb={4}>
				{features?.map((feature, index) => (
					<Box
						key={index}
						bg={useColorModeValue(
							"gray.100",
							"gray.700"
						)}
						p={10}
						rounded="lg"
						textAlign="center"
						pos="relative">
						<Flex
							p={2}
							w="max-content"
							color="white"
							bgGradient="linear(to-br, #228be6, #15aabf)"
							rounded="md"
							marginInline="auto"
							pos="absolute"
							left={0}
							right={0}
							top="-1.5rem"
							boxShadow="lg">
							{feature.icon}
						</Flex>
						<chakra.h3
							fontWeight="semibold"
							fontSize="2xl"
							mt={6}>
							{feature.heading}
						</chakra.h3>
						<Text fontSize="md" mt={4}>
							{feature.content}
						</Text>

						<Redes
							label={"WhatsApp"}
							href={feature?.consulta}>
							<BsWhatsapp />
						</Redes>
					</Box>
				))}
			</SimpleGrid>
		</Container>
	);
};

export default Features;
