import {
	Container,
	Text,
	VStack,
	Box,
	Avatar,
	Icon,
	useColorModeValue,
	chakra,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icon
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
	{
		title: "Vision of the company",
		username: "Ben Parker",
		position: "CEO",
		company: "Foodtesla",
		image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
		content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`,
	},

	{
		title: "Mision of the company",
		username: "Ben Parker",
		position: "CEO",
		company: "Foodtesla",
		image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
		content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`,
	},
];

const MisionVision = () => {
	return (
		<Container maxW="2xl" p={5}>
			{testimonials?.map((testimonial) => (
				<VStack spacing={4}>
					<chakra.h3
						fontSize="4xl"
						fontWeight="bold"
						mt={20}
						textAlign="center">
						{testimonial.title}
					</chakra.h3>
					<Text
						p={5}
						color={useColorModeValue(
							"gray.600",
							"gray.300"
						)}
						zIndex={5}>
						{testimonial?.content}
					</Text>
				</VStack>
			))}
		</Container>
	);
};

export default MisionVision;
