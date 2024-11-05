import React from 'react'
import "../../Style/footer.css"
import logoFooter from "../../Images/logoFooter.png"
const Footer = () => {
    return (
        <>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-3 col-sm-12">
                            <div class="footer-about">
                                <img class="imgfo" src={logoFooter} alt="" />
                                <p>"Unlock Your Career Potential with JobDuniya: Your Gateway to Endless Opportunities! Explore,
                                    Apply, Succeed - Where Dreams Meet Destiny.
                                    Join the JobDuniya Community Today and Turn Your Ambitions into Achievements.
                                    Your Future Starts Here - Let JobDuniya Guide Your Career Journey!"</p>
                                <div class="footer-social">
                                    <a href="https://twitter.com/?lang=en"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-sm-12">
                            <div class="footer-contact">
                                <h3 class="underline-hover">Get In Touch With Us</h3>
                                <p><i class="fa fa-map-marker-alt"></i>Shop no 1,JobDuniya Complex,Surat,<br />Gujarat,India
                                </p>
                                <p><i class="fa fa-phone-alt"></i>+91 7434869584</p>
                                <p><i class="fa fa-envelope"></i>JobDuniya@gmail.com</p>
                                <p><i class="far fa-clock"></i>Mon - Sun, 9AM - 10PM</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-2 col-sm-12">
                            <div class="footer-links">
                                <h3 class="underline-hover2">Support Links</h3>
                                <a href="">AboutUs</a>
                                <a href="">Privacy & Policy</a>
                                <a href="">Terms & Condition</a>
                                <a href="">ContactUs</a>
                                <a href="">Get Help</a>
                            </div>
                        </div>


                        <div class="col-md-6 col-lg-3 col-sm-12">
                            <div class="footer-links">
                                <h3 class="underline-hover2">Customer Support</h3>
                                <a href="">ContactUs</a>
                                <a href="">Get Help</a>
                                <div class="feedback-form">
                                    <span class="rate" title="Rate Us">
                                        <h3>How would you rate your experience  with our website?</h3>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </span>
                                </div>


                            </div>


                        </div>


                    </div>
                </div>

                <div class="copyright">
                    <div class="copy-text">
                        <p>Copyright&nbsp; &copy; 2024 <a href="#">JOBDUNIYA</a>&nbsp;All rights reserved</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer