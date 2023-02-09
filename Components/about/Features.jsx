import { SVGProps } from "react";
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

const features = [
	{
		consulta:
			"https://wa.me/541159497891?text=CONSULTA_PAGOS",
		heading: "Payments",
		content:
			"Choose from Stripe, Paddle, Braintree, or PayPal to launch your product quickly.",
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
			"https://wa.me/541159497891?text=CONSULTA_TESIS",

		heading: "Tesis",
		content:
			"Webhooks are wired up to automatically email customers PDF receipts and invoices.",
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
			"https://wa.me/541159497891?text=CONSULTA_PROGRAMACION",
		heading: "API Included",
		content:
			"Roll your own API to easily connect with other apps or services. Pull in updates.",
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
						p={6}
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
