
import Head from 'next/head';
import Link from 'next/link';

import React from "react";

import Map from "../components/map";
import Scbtn from "../components/scroll_to_top";
import Invitation from "../components/invitation";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				{/* invitation here */}
				<Invitation/>
				<Map/>
			</main>
			<Scbtn/>
		</>	
	)
}