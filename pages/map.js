import Head from 'next/head';

import map_styles from '../styles/Map.module.css';
import React from "react";

export default function Map(props) {
	const embed_src = 
		`https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62803.115031243346!2d123.90338769961
			001!3d10.326298862676857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x33a997613bbd25df%3A0x
			8bd061454b8432c1!2sMactan-Cebu%20International%20Airport%20(CEB)%2C%20Lapu-Lapu%20Airport%20Road%2C%20L
			apu-Lapu%20City%2C%20Cebu!3m2!1d10.310655599999999!2d123.98022139999999!4m5!1s0x33a998da1684fa5f%3A0x841
			15ba56079b05c!2sMarco%20Polo%20Plaza%20Hotel%2C%20Cebu%20Veterans%20Drive%2C%20Cebu%20City%2C%20Cebu!3m2!
			1d10.341729899999999!2d123.89745579999999!5e0!3m2!1sen!2ssg!4v1665751721189!5m2!1sen!2ssg`;
	return (
		<>
			<div>
				<div style={{ height: '80vh', width: '100vw' }}>
					<iframe 
						src={embed_src}
						className={map_styles.map_container_iframe}
						allowfullscreen>
					</iframe>
				</div>
			</div>
		</>
	)
}	