import {
	Box,
	Text,
	Heading,
	Flex,
	Avatar,
	Link,
	VStack,
	IconButton,
	Divider,
	Fade,
} from "@chakra-ui/react";
import { siteConfig } from "./site-config";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const iconProps = {
	variant: "ghost",
	size: "lg",
	isRound: true,
};

const MainScreen = () => {
	const [card, setCard] = useState(siteConfig);
	return (
		<VStack spacing={5}>
			<motion.div whileHover={{ y: -5, scale: 1.1 }}>
				<Box
					boxShadow="xl"
					_hover={{ boxShadow: "lg" }}
					borderRadius="full">
					<Avatar
						_groupHover={{
							width: "5rem",
							height: "5rem",
						}}
						size="xl"
						src={card.author?.imagen}
					/>
				</Box>
			</motion.div>
			<Heading
				fontSize="xl"
				fontFamily="body"
				textTransform="capitalize"
				noOfLines={2}>
				{card.author?.name}
			</Heading>
			<Text
				color="gray.500"
				fontSize="lg"
				noOfLines={{ base: 3, md: 4 }}
				_groupHover={{ display: "none" }}
				display="block">
				{card.author?.title}
			</Text>
			<Fade in>
				<Text
					color="gray.500"
					fontSize="lg"
					noOfLines={{ base: 3, md: 4 }}
					_groupHover={{ display: "block" }}
					display="none">
					{card.author?.desc}
				</Text>
			</Fade>
			<Divider />
			<Flex
				alignItems="center"
				justify="center"
				w="100%">
				<Box textAlign="center">
					{card.author?.accounts?.map((sc, index) => (
						<IconButton
							key={index}
							as={Link}
							isExternal
							href={sc.url}
							aria-label={sc.label}
							colorScheme={sc.type}
							icon={sc.icon}
							rounded="full"
							{...iconProps}
						/>
					))}
				</Box>
			</Flex>
		</VStack>
	);
};

export default MainScreen;
