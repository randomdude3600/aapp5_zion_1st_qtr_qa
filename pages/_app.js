import '../styles/globals.css';

import React from "react";

import Footer from '../components/footer';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<false_body></false_body>
				<Nav/>
				<article>
					<Component {...pageProps} />
				</article>
			<Footer/>
		</>
	)
}

export default MyApp