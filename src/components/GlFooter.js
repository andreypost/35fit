import React from 'react';
import { Link } from "react-router-dom";

export const GlFooter = () => {
	return (
		<footer>
			<section>
				<article className="flex alignStart alignLf connectGl">
					<h4>Stay connected</h4>
					<div className="column alignStart justBet subscribeBlGl">
						<h6>NEWSLETTER</h6>
						<p>Be first in the queue! Get our latest news straight to your inbox.</p>
						<form action="" className="flex justBet wrap" id="footerFormGl">
							<fieldset>
								<legend>Email:</legend>
								<input type="email" placeholder="Enter e-mail address" className="inputEmailGl" required />
							</fieldset>
							<button type="submit" form="footerFormGl" className="transparent">Subscribe</button>
						</form>
					</div>
					<div className="column alignStart justBet socialGl">
						<h6>SOCIAL</h6>
						<div className="flex">
							<div className="socialHrefGl column">
								<a href="/" target="_blanc"><i></i></a>
								<a href="/" target="_blanc"><i></i></a>
								<a href="/" target="_blanc"><i></i></a>
							</div>
							<div className="socialLinesGl column">
								<hr />
								<hr />
								<hr />
							</div>
						</div>
					</div>
				</article>
			</section>
			<article className="footerBgGl">
				<section>
					<article className="flex alignStart alignLf touchGl">
						<h4>Get in touch</h4>
						<div className="flex justBet alignStart wrap contacBlGl">
							<div className="column alignStart justBet">
								<h6>GENERAL</h6>
								<div className="column alignStart">
									<a href="tel:+372 666 9999" className="hrefContactGl">- 372 666 9999</a>
									<a href="mailto:info@35fit.com" target="_blanc" className="hrefContactGl emailGl">- info@35fit.com</a>
								</div>
								<Link to="/faq" className="flex justBet transparent">Careers</Link>
							</div>
							<div className="column alignStart justBet">
								<h6>CLUB</h6>
								<div className="column alignStart">
									<a href="tel: +372 666 9999" className="hrefContactGl">- 372 666 9999</a>
									<a href="mailto:gonsiori@35fit.com" target="_blanc" className="hrefContactGl emailGl">- gonsiori@35fit.com</a>
								</div>
								<a href=" " className="showContactGl flex justBet transparent">Contacts</a>
							</div>
						</div>
						<div className="column alignStart justBet alignLf partnerGl">
							<h6>PARTNERS</h6>
							<p>Search Engine Optimization And Advertising</p>
							<Link to="/team" className="flex justBet transparent">Become a partner</Link>
						</div>
					</article>
				</section>
				<section className="careerBlockGl">
					<div className="flex justEnd wrap">
						<Link to="/faq">Careers</Link>
						<Link to="/">Privacy policy</Link>
						<Link to="/">Terms and conditions</Link>
					</div>
				</section>
			</article>
		</footer>
	);
}
