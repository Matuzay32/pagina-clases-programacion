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
import { IconType } from "react-icons";

const plansList = [
	{
		title: "Academics Works",
		price: 2000,
		icon: FaBook,
		features: [
			"Writing of essays and theses in Spanish and English on topics related to marketing, psychology, and administration",
			"Translation and revision of texts in Spanish and English related to marketing, psychology, and administration",
			"Research and preparation of reports in Spanish and English on topics related to marketing, psychology, and administration",
		],
	},
	{
		title: "Tutorials in the area of ​​psychology.",
		price: 1500,
		icon: TbCertificate,
		features: [
			"Private classes",
			"We do academic works",
			"follow-up in the learning process",
			"The works can be done in both English and Spanish.",
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
				<Text fontSize="md" color="gray.500">
					per Hour
				</Text>
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
