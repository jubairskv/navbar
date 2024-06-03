import React from "react";
import '../Components/Footer.css'
import insta from "../Assets/instagram.png"
import twitter from '../Assets/twitter.png'
import facebook from '../Assets/facebook.png'
import linkedin from "../Assets/linkedin.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footerr section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individualr</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Resource</h4>
                        <a href="/resource">
                            <p>Resource centre</p>
                        </a>
                        <a href="/resource">
                            <p>Testmonial</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Partners</h4>
                        <a href="/resource">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Comming soon on</h4>
                        <div className="socialmedia">
                            <p>
                                <img src={facebook} alt="" />
                            </p>
                            <p>
                                <img src={twitter} alt="" />
                            </p>
                            <p>
                                <img src={linkedin} alt="" />
                            </p>
                            <p>
                                <img src={insta} alt="" />
                            </p>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Jubair All right reserved
                        </p>

                    </div>
                    <div className="sb_footer-below-link">
                        <a href="/terms">
                            <div>
                                <p>Terms & Conditions</p>
                            </div>
                        </a>
                        <a href="/privacy">
                            <div>
                                <p>privacy</p>
                            </div>
                        </a>
                        <a href="/security">
                            <div>
                                <p>Security</p>
                            </div>
                        </a>
                        <a href="/cookie">
                            <div>
                                <p>Cookie Declaration</p>
                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer