import { h } from "../html.js";

export function Head({ title }) {
	return (
		<head>
			<meta charset="utf-8" />
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="personal site for phoebe" />
			<link rel="preload" href="/fonts/BerkeleyMono-Regular.woff2" as="font" type="font/woff2" crossorigin />
			<link rel="stylesheet" href="/style.css" />
		</head>
	);
}