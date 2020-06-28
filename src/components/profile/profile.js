// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import AllRecord from '../../config/allRecord';

const Profile = () => {

    const [isimVeSoyisim, setisimVeSoyisim] = useState('')
    const [dogumTarihi, setdogumTarihi] = useState('')
    const [emailAdres, setemailAdres] = useState('')
    const [lokasyon, setlokasyon] = useState('')
    const [gsm, setgsm] = useState('')
    const [website2, setwebsite2] = useState('')

    const [onYazi, setonYazi] = useState('')
    const [pdfAd, setpdfAd] = useState('')
    const [cvPdf, setcvPdf] = useState('')
    const [hizmetler, sethizmetler] = useState([])
    const [guzelSoz, setguzelSoz] = useState('')
    const [guzelSozSahibi, setguzelSozSahibi] = useState('')

    useEffect(() => {
        AllRecord.getAnasayfa().then(((data) => {
            if (data) {
                setisimVeSoyisim(data.PersonelBilgisi.nameAndSurname)
                setdogumTarihi(data.PersonelBilgisi.birthDate)
                setemailAdres(data.IletisimBilgisi.emailadress)
                setlokasyon(data.IletisimBilgisi.homeadress)
                setgsm(data.IletisimBilgisi.gsm)
                setwebsite2(data.IletisimBilgisi.website)
            }
        }))

        AllRecord.getProfil().then(((data) => {
            if (data) {
                setonYazi(data.OnYaziBilgileri.coverLetter)
                setpdfAd(data.OnYaziBilgileri.cvName)
                sethizmetler(data.HizmetBilgileri)
                setguzelSoz(data.GuzelSozBilgileri.guzelSoz)
                setguzelSozSahibi(data.GuzelSozBilgileri.guzelSozYazar)
            }
        }))
    }, [])

    return (
        <div>
            {/* Start Head section */}
            <header className="head">
                {/* start container */}
                <div className="container">
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-8 col-sm-11 col-lg-11">
                            <img
                                className="logo-page"
                                src="assets/img/profile_l.png"
                                alt="Ukieweb"
                            />
                            {/* Title Page */}
                            <h2 className="title">Profil Sayfası</h2>
                            {/* Description Page */}
                            <h4 className="sub-title">Hakkımda </h4>
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
            <section className="content border-bottom padding-block">
                {/* start container */}
                <div className="container">
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-7 padding-bottom">
                            <h3 className="title">Merhaba, Ben  </h3>
                            <p>{onYazi}</p>
                            <p className="text-right">
                                <a href="#" className="btn btn-color hover-animate">
                                    CV İndir
                                        </a>
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-5">
                            <div className="block-grey">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="font-weight-m">İsim</td>
                                            <td className="text-right">{isimVeSoyisim}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-m">Doğum Yılı</td>
                                            <td className="text-right">{dogumTarihi}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-m">E-mail Adresi</td>
                                            <td className="text-right">
                                                <a href="mailto:info@yourdomain.com">
                                                    {emailAdres}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-m">Lokasyon Bilgisi</td>
                                            <td className="text-right">{lokasyon}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-m">Telefon Numarası</td>
                                            <td className="text-right">
                                                <a href="tel:01234567890">{gsm}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-m">2.Website</td>
                                            <td className="text-right">
                                                <a href={website2}>{website2}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="font-weight-m">
                                                <i
                                                    className="fa fa-circle green-marker"
                                                    aria-hidden="true"
                                                />
                                                        Freelancer İş
                                                    </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* End Content section */}

            {/* Start Info section */}
            <section className="info border-bottom padding-block text-center">
                {/* start container */}
                <div className="container">
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12">
                            <h3 className="title">Hizmetlerim</h3>
                        </div>
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12">
                            {hizmetler && hizmetler.length > 0 && hizmetler.map((hizmet) => {
                                return (
                                    <div className="circle-block ">
                                        <span className="icon hover-animate">
                                            <i className={hizmet.hizmetIconu} />
                                        </span>
                                        <span className="name hover-animate">{hizmet.hizmet}</span>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* End Info section */}

            {/* Start Instagram Feed section */}
            <section className="instagram-feed padding-block border-bottom text-center">
                {/* start container */}
                <div className="container">
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12">
                            <h3 className="title">İnstagramdan Kareler</h3>
                        </div>
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-6 col-sm-4 col-lg-2">
                            <img
                                className="instagram-foto"
                                src="assets/img/I-f1.jpg"
                                alt="Instagram Feed"
                            />
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-2">
                            <img
                                className="instagram-foto"
                                src="assets/img/I-f2.jpg"
                                alt="Instagram Feed"
                            />
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-2">
                            <img
                                className="instagram-foto"
                                src="assets/img/I-f3.jpg"
                                alt="Instagram Feed"
                            />
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-2">
                            <img
                                className="instagram-foto"
                                src="assets/img/I-f4.jpg"
                                alt="Instagram Feed"
                            />
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-2">
                            <img
                                className="instagram-foto"
                                src="assets/img/I-f5.jpg"
                                alt="Instagram Feed"
                            />
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-2">
                            <img
                                className="instagram-foto"
                                src="assets/img/I-f6.jpg"
                                alt="Instagram Feed"
                            />
                        </div>
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* End Instagram Feed section */}

            {/* Start Calendar section */}
            <section className="calendar padding-block border-bottom text-center">
                {/* start container */}
                <div className="container">
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12">
                            <h3 className="title">Takvim</h3>
                        </div>
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="row calendar-content">
                        <div className="col-xs-12 col-sm-4 col-lg-4">
                            <div className="today border-right">
                                <div className="valign-outer">
                                    <div className="valign-middle">
                                        <div className="valign-inner">
                                            <div className="date">
                                                <span className="day" id="day">
                                                    01
                                                        </span>
                                                <span className="month" id="month">
                                                    Jan
                                                        </span>
                                            </div>
                                            <div className="week-day" id="week-day">
                                                Friday
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-8 col-lg-8">
                            <div className="custom-calendar-wrap">
                                <div id="custom-inner" className="custom-inner">
                                    <div className="custom-header clearfix">
                                        <nav>
                                            <span id="custom-prev" className="custom-prev" />
                                            <span id="custom-next" className="custom-next" />
                                        </nav>
                                        <ul>
                                            <li>
                                                <h2 id="custom-month" className="custom-month" />
                                            </li>
                                            <li>
                                                <h2 id="custom-year" className="custom-year" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="calendar" className="fc-calendar-container"></div>
                                </div>
                            </div>
                            <ul className="notes">
                                <li>
                                    <div className="calendar-note">
                                        Kusura bakmayın müsait değilim.
                                            </div>
                                </li>
                                <li>
                                    <div className="calendar-note today-note">Bugün</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* End Calendar section */}

            {/* Start My thoughts section */}
            <section className="my-thoughts padding-block text-center">
                {/* start container */}
                <div className="container">
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12">
                            <h3 className="title">Haftanın Sözü</h3>
                            <div className="animated">
                                <i className="fa fa-quote-left ukie-icons hover-animate" />
                            </div>
                            <p className="thoughts">{guzelSoz}</p>
                            <h4 className="sub-title">{guzelSozSahibi}</h4>
                        </div>
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* End My thoughts section */}
        </div>
    );
}

export default Profile;