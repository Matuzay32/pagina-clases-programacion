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
		content: `Our vision at The Academic Temple is to help individuals achieve their goals and grow in the world of programming and web services. We strive to be a personal and dedicated company, providing high-quality classes and thesis support. We want to be a reference point for those seeking to improve their technical skills and achieve their dreams in this field. Our focus is on creating a friendly learning environment and offering a personalized and high-quality service to each of our clients at The Academic Temple."`,
	},

	{
		title: "Mision of the company",
		username: "Ben Parker",
		position: "CEO",
		company: "Foodtesla",
		image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
		content: `Our mission at The Academic Temple is to provide a comprehensive and high-quality education in programming and web services, including thesis support. We strive to develop technical and personal skills in each of our students, enabling them to achieve their goals and stand out in the job market. We maintain a focus on innovative teaching methodologies and foster a collaborative and positive learning environment. Our commitment is to provide exceptional service to each of our clients at The Academic Temple.`,
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
