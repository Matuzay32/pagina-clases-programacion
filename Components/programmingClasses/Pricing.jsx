import {
	chakra,
	VStack,
	HStack,
	Text,
	Container,
	Box,
	Icon,
	Button,
	SimpleGrid,
	useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiCheck } from "react-icons/bi";
import { BsFillCloudCheckFill } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaBook, FaServer } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { SiWebstorm } from "react-icons/si";

import { IconType } from "react-icons";

const plansList = [
	{
		title: "Building Custom Websites",
		price: 15000,
		icon: SiWebstorm,
		features: [
			"Visually appealing and responsive website design optimized for desktop and mobile devices.",
			"Custom graphics and images to enhance the visual appeal and branding of the website.",
			"Basic security measures such as SSL encryption to protect the website and visitors' information.",
		],
	},
	{
		title: "Private Programming Classes",
		price: 1500,
		icon: TbCertificate,
		features: [
			"Private classes",
			"We Work on Practical Assignments",
			"follow-up in the learning process",
			"Preparation for Business Technical Tests",
		],
	},
];

const Pricing = () => {
	return (
		<Container maxW="7xl" py="8" px="0">
			<chakra.h2
				fontSize="5xl"
				fontWeight="bold"
				textAlign="center"
				mb={5}>
				Class Pricing
			</chakra.h2>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={1}
				mt={4}>
				{plansList?.map((plan, index) => (
					<PricingCard key={index} {...plan} />
				))}
			</SimpleGrid>
		</Container>
	);
};

const PricingCard = ({ title, price, icon, features }) => {
	return (
		<Box
			minW={{ base: "xs", sm: "xs", lg: "sm" }}
			rounded="md"
			bg={useColorModeValue("white", "gray.800")}
			boxShadow="md"
			marginInline="auto"
			my={3}
			p={6}>
			<Box textAlign="center">
				<Icon
					as={icon}
					h={10}
					w={10}
					color="linkHeader.400"
				/>
				<chakra.h2 fontSize="2xl" fontWeight="bold">
					{title}
				</chakra.h2>
				<Text fontSize="7xl" fontWeight="bold">
					{price}

					<Text
						as="sup"
						fontSize="3xl"
						fontWeight="normal"
						top="-1em">
						ARS
					</Text>
				</Text>
				{title != "Building Custom Websites" && (
					<Text fontSize="md" color="gray.500">
						per Hour
					</Text>
				)}
			</Box>
			<VStack spacing={2} alignItems="flex-start" my={6}>
				{features.map((feature, index) => (
					<HStack key={index} spacing={3}>
						<Icon
							as={BiCheck}
							h={4}
							w={4}
							color="green.500"
						/>
						<Text fontSize="sm" color="gray.500">
							{feature}
						</Text>
					</HStack>
				))}
			</VStack>
		</Box>
	);
};

export default Pricing;
