// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import AllRecord from '../config/allRecord';

const Footer = () => {

    const [gsm, setgsm] = useState('')
    const [email, setemail] = useState('')
    const [lokasyon, setlokasyon] = useState('')


    useEffect(() => {
        AllRecord.getAnasayfa().then(((data) => {
            if (data) {
                setgsm(data.IletisimBilgisi.gsm)
                setemail(data.IletisimBilgisi.emailadress)
                setlokasyon(data.IletisimBilgisi.homeadress)
            }
        }))
    }, [])




    return (
        <footer className="footer">
            {/* start container */}
            <div className="container">
                {/* start row */}
                <div className="row">
                    {/* start phone number */}
                    <div className="col-xs-12 col-sm-6 col-lg-3">
                        <a href="#" className="hover-animate">
                            <span className="ukie-icons hover-animate">
                                <i className="fa fa-phone" />
                            </span>{" "}
                            {gsm}
                        </a>
                    </div>
                    {/* end phone number */}
                    {/* start email */}
                    <div className="col-xs-12 col-sm-6 col-lg-3">
                        <a href="#" className="hover-animate">
                            <span className="ukie-icons hover-animate">
                                <i className="fa fa-paper-plane" />
                            </span>{" "}
                            {email}
                        </a>
                    </div>
                    {/* end email */}
                    {/* start address */}
                    <div className="col-xs-12 col-sm-6 col-lg-3">
                        <a href="#" className="hover-animate">
                            <span className="ukie-icons hover-animate">
                                <i className="fa fa-map-marker" />
                            </span>{" "}
                            {lokasyon}
                        </a>
                    </div>
                    {/* end address */}
                    {/* start Copyright */}
                    <div className="col-xs-12 col-sm-6 col-lg-3 text-right">
                        <span className="copyright">
                            Copyright © 2020 Her hakkı saklıdır
                                    </span>
                    </div>
                    {/* end Copyright */}
                </div>
                {/* end row */}
            </div>
            {/* end container */}
        </footer>
    );
}

export default Footer;