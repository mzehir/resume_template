// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import AllRecord from '../../config/allRecord';

const Contact = () => {

    const [lokasyon, setlokasyon] = useState('')
    const [gsm, setgsm] = useState('')
    const [emailAdres, setemailAdres] = useState('')
    const [website2, setwebsite2] = useState('')
    const [sosyalMedyaHesap, setsosyalMedyaHesap] = useState([])

    const [postaName, setpostaName] = useState('')
    const [postaAdres, setpostaAdres] = useState('')
    const [postaMesaj, setpostaMesaj] = useState('')


    useEffect(() => {
        AllRecord.getAnasayfa().then(((data) => {
            if (data) {
                setlokasyon(data.IletisimBilgisi.homeadress)
                setgsm(data.IletisimBilgisi.gsm)
                setemailAdres(data.IletisimBilgisi.emailadress)
                setwebsite2(data.IletisimBilgisi.website)
                setsosyalMedyaHesap(data.SosyalMedyaHesap)
            }
        }))
    }, [])



    return (
        <div>
            <div id="">
                {/* Start Head section */}
                <header className="head">
                    {/* start container */}
                    <div className="container">
                        {/* start row */}
                        <div className="row">
                            <div className="col-xs-8 col-sm-11 col-lg-11">
                                <img
                                    className="logo-page"
                                    src="assets/img/contact_l.png"
                                    alt="Ukieweb"
                                />
                                {/* Title Page */}
                                <h2 className="title">İletişim Sayfası</h2>
                                {/* Description Page */}
                                <h4 className="sub-title">Bu sayfadan benimle irtibat kurabilirsiniz.</h4>
                            </div>
                            <div className="col-xs-4 col-sm-1 col-lg-1 text-right">
                                <a href="/" className="btn-close hover-animate" />
                            </div>
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </header>
                {/* End Head section */}
                {/* Start Content section */}
                <section className="content padding-block border-bottom">
                    {/* start container */}
                    <div className="container">
                        {/* start row */}
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-6 padding-bottom">
                                <h3 className="title title-contact">İletişim Bilgileri</h3>
                                <div className="block-grey">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="font-weight-m width-td">Adres:</td>
                                                <td>{lokasyon}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-m">Telefon No:</td>
                                                <td>
                                                    <a>{gsm}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-m">E-mail Adres:</td>
                                                <td>
                                                    <a>
                                                        {emailAdres}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-weight-m">2.Website:</td>
                                                <td>
                                                    <a href={website2}>{website2}</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* social icon */}
                                    <div className="social">
                                        <ul
                                            className="animated"
                                            data-animation="fadeIn"
                                            data-animation-delay={600}
                                        >
                                            {/* social icons */}
                                            {sosyalMedyaHesap.map((tekHesap) => {
                                                return (
                                                    <li>
                                                        <a className="ukie-icons hover-animate" href={tekHesap.socialMediaAccount}>
                                                            <i className={tekHesap.socialMediaAccountIcon} />
                                                        </a>
                                                    </li>
                                                )
                                            })}

                                        </ul>
                                    </div>
                                    {/* end social icon */}
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-6">
                                <h3 className="title title-contact">İletişim Formu</h3>
                                {/* Start Contact Form */}
                                <div className="contact-form">
                                    <form
                                        action="https://envato.ukiedev.com/ukiecard/style1/assets/php/contact.php"
                                        id="contact-form"
                                        method="post"
                                    >
                                        <input
                                            type="text"
                                            id="user-name"
                                            name="user-name"
                                            placeholder="Bu alana isminizi yazınız."
                                            onChange={e => setpostaName(e.target.value)}
                                        />

                                        <input
                                            type="email"
                                            id="user-email"
                                            name="user-email"
                                            placeholder="Bu alana email adresinizi yazınız."
                                            onChange={e => setpostaAdres(e.target.value)}
                                        />

                                        <input
                                            type="hidden"
                                            id="user-status"
                                            name="user-status"
                                            defaultValue={1}
                                        />

                                        <textarea
                                            id="user-message"
                                            name="user-message"
                                            placeholder="Mesajınızı bu alana yazınız."
                                            defaultValue={""}
                                            onChange={e => setpostaMesaj(e.target.value)}
                                        />
                                        <div className="footer-form">
                                            <input
                                                type="submit"
                                                id="submit-btn"
                                                className="btn btn-color hover-animate"
                                                defaultValue="Gönder"
                                                onClick={deneme}
                                            />
                                            <div className="info-message-form">
                                                <p>Lütfen tüm alanları doldurun!</p>
                                                <span className="close-msg">
                                                    <i className="fa fa-close" />
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* End Contact Form */}
                            </div>
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </section>
                {/* End Content section */}
                {/* Start Map section */}
                <div className="contact-map padding-block text-center">
                    {/* start container */}
                    <div className="container">
                        {/* start row */}
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-12">
                                <div id="map" className="map" />
                            </div>
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* End Map section */}
            </div>
        </div>
    );

    async function deneme() {
        debugger
        var data = {
           postaName: postaName,
           postaAdres: postaAdres,
           postaMesaj: postaMesaj
        }
        console.log(data)
    }
}

export default Contact;