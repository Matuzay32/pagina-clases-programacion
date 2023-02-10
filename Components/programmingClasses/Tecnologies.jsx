import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	Container,
	Avatar,
	useColorModeValue,
	Image,
	Progress,
	SimpleGrid,
	chakra,
} from "@chakra-ui/react";
import React, {
	useContext,
	useEffect,
	useState,
} from "react";
import { GiTechnoHeart } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { motion, isValidMotionProp } from "framer-motion";
import { useAnimation } from "framer-motion";

const Targeta = ({ children }) => {
	return <Box>{children}</Box>;
};

const Contenido = ({ children }) => {
	return (
		<Stack
			overflow={"hidden"}
			bg={useColorModeValue("whiteAlpha.50", "gray.800")}
			backdropFilter={"blur(2px)"}
			boxShadow={"lg"}
			p={8}
			rounded={"xl"}
			align={"center"}
			pos={"relative"}>
			{children}
		</Stack>
	);
};

const Titulo = ({ children, color }) => {
	return (
		<Heading as={"h3"} fontSize={"xl"} color={color}>
			<Box
				as={motion.div}
				whileInView={{
					opacity: [0, 1],
					scale: [2, 1, 1.2],
					transition: { duration: 2 },
				}}>
				{children}
			</Box>
		</Heading>
	);
};

const Texto = ({ children, color }) => {
	return (
		<Text
			textAlign={"center"}
			color={useColorModeValue("gray.600", "gray.400")}
			fontSize={"sm"}
			as={motion.div}
			opacity={0}
			whileInView={{
				transition: { duration: 5 },
				color: color,
				opacity: [0, 0, 0, 0, 0, 0, 0, 0, 1],
				scale: [0, 0, 0, 0, 0, 0, 0, 0, 1.3],
				fontWeight: 900,
			}}>
			{children}
		</Text>
	);
};

const Progreso = ({ children }) => {
	return (
		<Box
			bg={"#24252494"}
			borderRadius="base"
			boxShadow={`0px 0px 1px white, 1px 1px 43px white inset `}
			w={"100%"}
			h={7}
			pos={"relative"}
			as={motion.div}
			whileInView={{
				opacity: [0, 1],
				transition: { duration: 1 },
				x: [-222, 0],
			}}>
			{children}
		</Box>
	);
};

const FotoAvatar = ({ logo }) => {
	return (
		<Flex
			align={"center"}
			mt={8}
			direction={"column"}
			as={motion.div}
			whileInView={{
				scale: [0, 1],
				transition: { duration: 1 },
			}}>
			{logo}
		</Flex>
	);
};

export default function Tecnologies() {
	const deMayorAmenor = (a, b) => {
		const itemA = a.porcentaje;
		const itemB = b.porcentaje;
		if (itemA > itemB) {
			return -1;
		} else if (itemB > itemA) {
			return 1;
		}

		return 0;
	};
	const [targeta, setTargeta] = useState([
		{
			color: "#563d7c",
			brillo: "#563d7c",
			porcentaje: 100,
			alt: "habilidad-1",
			titulo: "Bootstrap",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/1.svg"}
					alt={"habilidad-1"}
				/>
			),
		},
		{
			color: "#1c88c7",
			brillo: "#1c88c7",
			porcentaje: 100,
			alt: "habilidad-3",
			titulo: "Css",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/3.svg"}
					alt={"habilidad-3"}
				/>
			),
		},
		{
			color: "#1c88c7",
			brillo: "#1c88c7",
			porcentaje: 100,
			alt: "habilidad-4",
			titulo: "Docker",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/4.svg"}
					alt={"habilidad-4"}
				/>
			),
		},
		{
			color: "black",
			brillo: "black",
			porcentaje: 100,
			alt: "habilidad-5",
			titulo: "Express",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					bg={"whiteAlpha.400"}
					p={5}
					rounded={"2xl"}
					src={"./Logos/5.svg"}
					alt={"habilidad-5"}
				/>
			),
		},
		{
			color: "orange",
			brillo: "orange",
			porcentaje: 100,
			alt: "habilidad-6",
			titulo: "Html5",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/6.svg"}
					alt={"habilidad-6"}
				/>
			),
		},
		{
			color: "#ECC94B",
			brillo: "#ECC94B",
			porcentaje: 100,
			alt: "habilidad-7",
			titulo: "Js",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/7.svg"}
					alt={"habilidad-7"}
				/>
			),
		},
		{
			color: "#48BB78",
			brillo: "#48BB78",
			porcentaje: 100,
			alt: "habilidad-8",
			titulo: "Mongo DB",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/8.svg"}
					alt={"habilidad-8"}
				/>
			),
		},
		{
			color: "#1c88c7",
			brillo: "#1c88c7",
			porcentaje: 100,
			alt: "habilidad-9",
			titulo: "MySql",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/9.svg"}
					alt={"habilidad-9"}
				/>
			),
		},
		{
			color: "#e0234e",
			brillo: "#e0234e",
			porcentaje: 100,
			alt: "habilidad-10",
			titulo: "Nest Js",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/10.svg"}
					alt={"habilidad-10"}
				/>
			),
		},
		{
			color: "#285E61",
			brillo: "#285E61",
			porcentaje: 100,
			alt: "habilidad-11",
			titulo: "Next Js",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/11.svg"}
					alt={"habilidad-11"}
				/>
			),
		},
		{
			color: "#2B6CB0",
			brillo: "#2B6CB0",
			porcentaje: 100,
			alt: "habilidad-12",
			titulo: "PostgreSQL",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/12.svg"}
					alt={"habilidad-12"}
				/>
			),
		},
		{
			color: "Cyan",
			brillo: "Cyan",
			porcentaje: 100,
			alt: "habilidad-13",
			titulo: "React",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/13.svg"}
					alt={"habilidad-13"}
				/>
			),
		},
		{
			color: "#1c88c7",
			brillo: "#1c88c7",
			porcentaje: 100,
			alt: "habilidad-15",
			titulo: "TypeScript",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/15.svg"}
					alt={"habilidad-15"}
				/>
			),
		},
		{
			color: "#ff4d5a",
			brillo: "#ff4d5a",
			porcentaje: 100,
			alt: "habilidad-14",
			titulo: "Sass",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/14.svg"}
					alt={"habilidad-14"}
				/>
			),
		},
		{
			color: "#61c9ca",
			brillo: "#61c9ca",
			porcentaje: 100,
			alt: "habilidad-2",
			titulo: "Chakra",
			logo: (
				<Image
					w={"100px"}
					h={"100px"}
					src={"./Logos/2.svg"}
					alt={"habilidad-2"}
				/>
			),
		},
	]);
	targeta.sort(deMayorAmenor);
	return (
		<Box>
			<Container
				maxW={"7xl"}
				py={16}
				as={Stack}
				spacing={12}>
				<chakra.h3
					fontSize="4xl"
					fontWeight="bold"
					mb={18}
					textAlign="center">
					With the technologies we work with
				</chakra.h3>
				<SimpleGrid
					columns={{ base: 1, md: 4 }}
					spacing={{ base: 10, md: 4, lg: 10 }}>
					{targeta?.map(
						(
							{
								titulo,
								logo,
								porcentaje,
								color,
								brillo,
							},
							i
						) => {
							return (
								<Targeta key={`${titulo} i`}>
									<FotoAvatar logo={logo} />
									<Contenido>
										<Titulo color={color}>
											{titulo}
										</Titulo>
										<Texto color={color}>
											{porcentaje}%
										</Texto>

										<Progreso>
											<Box
												bg={color}
												w={"0%"}
												borderRadius="base"
												h={7}
												pos={"absolute"}
												as={motion.div}
												whileInView={{
													transition: {
														duration: 5,
													},
													x: 0,
													width: `${porcentaje}%`,
													boxShadow: `1px 1px 15px ${brillo}, 1px 1px 43px white inset `,
												}}></Box>
										</Progreso>
									</Contenido>
								</Targeta>
							);
						}
					)}
				</SimpleGrid>
			</Container>
		</Box>
	);
}
