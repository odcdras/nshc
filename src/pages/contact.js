import React from "react";
import "./../../src/assets/css/style.css";
import Footer from "./../components/Footer/Footer";
import Header from "./../components/Header/Header";


function contactus(props) {
    return (
        <div>
            <section className="w3l-bootstrap-header">
                <Header />
            </section>

            <section className="w3l-contact-breadcrum">
                <div className="breadcrum-bg">
                    <div className="container py-5">                        
                        <h2 className="my-3">Contact Us</h2>
                        <p>
                            Please contact us
                        </p>
                    </div>
                </div>
            </section>

            <section className="w3l-contacts-12" id="contact">
                <div className="contact-top pt-5">
                    <div className="container py-md-3">
                        <div className="row cont-main-top">
                            {/* <!-- contact address --> */}
                            <div className="contact col-lg-4">
                                <div className="cont-subs">
                                    <div className="cont-add">
                                        <div className="cont-add-rgt">
                                            <h4>Address:</h4>
                                            <p className="contact-text-sub">
                                                Bihar Deoghar
                                            </p>
                                        </div>
                                        <div className="cont-add-lft">
                                            <span
                                                className="fa fa-map-marker"
                                                aria-hidden="true"
                                            ></span>
                                        </div>
                                    </div>
                                    <div className="cont-add add-2">
                                        <div className="cont-add-rgt">
                                            <h4>Email:</h4>
                                            <a href="mailto:info@example.com">
                                                <p className="contact-text-sub">
                                                    info@example.com
                                                </p>
                                            </a>
                                        </div>
                                        <div className="cont-add-lft">
                                            <span
                                                className="fa fa-envelope"
                                                aria-hidden="true"
                                            ></span>
                                        </div>
                                    </div>
                                    <div className="cont-add">
                                        <div className="cont-add-rgt">
                                            <h4>Phone:</h4>
                                            <a href="tel:+7-800-999-800">
                                                <p className="contact-text-sub">
                                                    +91-800-999-800
                                                </p>
                                            </a>
                                        </div>
                                        <div className="cont-add-lft">
                                            <span
                                                className="fa fa-phone"
                                                aria-hidden="true"
                                            ></span>
                                        </div>
                                    </div>
                                    <div className="cont-add add-3">
                                        <div className="cont-add-rgt">
                                            <h4>Find Us On</h4>
                                            <div className="main-social-1 mt-2">
                                                <a
                                                    href="#facebook"
                                                    className="facebook"
                                                >
                                                    <span className="fa fa-facebook"></span>
                                                </a>
                                                <a
                                                    href="#twitter"
                                                    className="twitter"
                                                >
                                                    <span className="fa fa-twitter"></span>
                                                </a>
                                                <a
                                                    href="#instagram"
                                                    className="instagram"
                                                >
                                                    <span className="fa fa-instagram"></span>
                                                </a>
                                                <a
                                                    href="#google-plus"
                                                    className="google-plus"
                                                >
                                                    <span className="fa fa-google-plus"></span>
                                                </a>
                                                <a
                                                    href="#linkedin"
                                                    className="linkedin"
                                                >
                                                    <span className="fa fa-linkedin"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cont-add-lft"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //contact address --> */}
                            {/* <!-- contact form --> */}
                            <div className="contacts12-main col-lg-8 mt-lg-0 mt-5">
                                <form
                                    //onSubmit = {this.handleSubmit}
                                    className="main-input"
                                >
                                    <div className="top-inputs d-grid">
                                        <input
                                            //onChange={this.handleChange}
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            id="w3lName"
                                            required=""
                                            //value={this.state.activeItem.name}
                                        />
                                        <input
                                            //onChange={this.handleChange}
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            id="w3lSender"
                                            required=""
                                            //value={this.state.activeItem.email}
                                        />
                                    </div>
                                    <input
                                        //onChange={this.handleChange}
                                        type="text"
                                        placeholder="Phone Number"
                                        name="phoneno"
                                        id="w3lName"
                                        required=""
                                        //value={this.state.activeItem.phoneno}
                                    />
                                    <textarea
                                        // onChange={this.handleChange}
                                        placeholder="Message"
                                        name="message"
                                        id="w3lMessage"
                                        required=""
                                        //value={this.state.activeItem.message}
                                    ></textarea>
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="btn btn-theme2"
                                        >
                                            Submit Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- //contact form --> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-footer-29-main" id="footer">               
                <Footer />     
            </section>
        </div>
    );
}

export default contactus;