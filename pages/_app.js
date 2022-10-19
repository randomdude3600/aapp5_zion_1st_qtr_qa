import '../styles/globals.css';

import React from "react";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<header>
				<div>Map of Cebu</div>
			</header>
			<div>
				<Component {...pageProps} />
			</div>
		</>
	)
}

export default MyApp