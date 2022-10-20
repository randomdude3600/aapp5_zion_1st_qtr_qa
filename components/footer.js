import footer_style from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<div className={footer_style.m_footer}>
			<div className={footer_style.m_footer_elm}>
				<h2>Members</h2>
				<h3>GROUP </h3>
				<p>Daniel Benedict, Aracan</p>
				<p>Angel Casaer, Farrarons</p>
				<p>Zion, Delos Angelos</p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>INFO</h2>
				<h3>COME OR ELSE</h3>
				<p></p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>Made By</h2>
				<h3>Gian Cedrick G. Epilan</h3>
				<h3>Nextjs Framework</h3>
				<p>
					<a href="https://nextjs.org/"><u>here</u></a>
				</p>
			</div>
		</div>
	);
}

export default Footer;