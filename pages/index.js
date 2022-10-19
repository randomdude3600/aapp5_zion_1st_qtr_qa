
import Head from 'next/head';
import Link from 'next/link';

import React from "react";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<Link href="/map">
					<a>SEE MAP</a>
				</Link>
			</main>
		</>	
	)
}