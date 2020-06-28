import React, { Component } from 'react';

class OpenContactForm extends Component {
    render() {
        return (
            <div>
                {/* Style Contact Form */}
                {/* delete this from site once you have decided on a colour scheme - follow documentation for insructions */}
                {/* Button Style open */}
                <div className="style-open-form animated hi-icon-effect-8">
                    <i className="hi-icon fa fa-envelope-o ukie-icons hover-animate hi-icon-mobile" />
                </div>
                {/* End Button Style open */}
                <div className="style-contact-form style-off-form">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12 ">
                            {/* Start Contact Form */}
                            <div className="contact-form">
                                <div className="btn-close-form"></div>
                                <h3 className="title title-contact">Contact Me</h3>
                                <p>
                                    Use this form to tell me about your project goals and needs. I will
                                    be in touch within 24 hours.
                                </p>
                                <form
                                    action="https://envato.ukiedev.com/ukiecard/style1/assets/php/contact.php"
                                    id="contact-form-panel"
                                    method="post"
                                >
                                    <input
                                        type="text"
                                        id="user-name-panel"
                                        name="user-name"
                                        defaultValue
                                        placeholder="Name"
                                    />
                                    <input
                                        type="email"
                                        id="user-email-panel"
                                        name="user-email"
                                        defaultValue
                                        placeholder="Email"
                                    />
                                    <input
                                        type="hidden"
                                        id="user-status-panel"
                                        name="user-status"
                                        defaultValue={1}
                                    />
                                    <textarea
                                        id="user-message-panel"
                                        name="user-message"
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                    <div className="footer-form">
                                        <input
                                            type="submit"
                                            id="submit-btn-panel"
                                            className="btn btn-color hover-animate"
                                            defaultValue="Send Message"
                                        />
                                        <div className="info-message-form">
                                            <p>Please fill out all the fields!</p>
                                            <span className="close-msg">
                                                <i className="fa fa-close" />
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* End Contact Form */}
                            {/* End style-open */}
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End Style Contact Form */}
            </div>
        );
    }
}

export default OpenContactForm;