import React from 'react'

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="footer-manu">
								<ul>
									<li><a href="about.html">About Us</a></li>
									<li><a href="contact.html">Contact us</a></li>
									<li><a href="service.html">How it works</a></li>
									<li><a href="faq.html">FAQ</a></li>
									<li><a href="pricing.html">Pricing</a></li>
								</ul>
							</div>
							<p className="copyright mb-0">Copyright  © Designed &amp; Developed by <a href="http://www.themefisher.com">Themefisher</a>. All rights reserved.
								<br /> Get More <a href="https://themefisher.com/free-bootstrap-templates/">Free Bootstrap
									Templates</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
			{/*Scroll to top*/}
			<div id="scroll-to-top" className="scroll-to-top">
				<span className="icon ion-ios-arrow-up">
				</span></div>


		</div>
	)
}

export default Footer;