// pages/_app.js
import { ChakraProvider, theme } from "@chakra-ui/react";
import { tema } from "../theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={tema}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
