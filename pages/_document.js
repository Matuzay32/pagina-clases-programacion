import {
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="shortcut icon"
					type="image/svg"
					href="/icono.svg"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
