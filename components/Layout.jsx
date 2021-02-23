import Head from "next/head";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/nunito-sans";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout(props) {
	const router = useRouter();
	const { backTo } = router.query;

	const {
		pageTitle = "SpaceX Data Showcase",
		title = "Title",
		children,
		className = "",
		back = "/home",
		noTitle = false,
		full = false,
		...rest
	} = props;

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>

			<main
				{...rest}
				className={`max-w-6xl mx-auto p-5 py-10 flex flex-col h-full ${className} ${
					full ? "w-full" : ""
				}`}>
				{!noTitle && <div className='relative z-10 flex mb-5'>{title}</div>}
				{children}
			</main>
		</>
	);
}
