// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import AllRecord from '../../config/allRecord';

const Resume = () => {

    const [egitimList, setegitimList] = useState([])
    const [calismaList, setcalismaList] = useState([])

    const [yetkinAlanlar, setyetkinAlanlar] = useState([])
    const [extraYetkinAlanlar, setextraYetkinAlanlar] = useState([])
    const [profesyonelHizmetler, setprofesyonelHizmetler] = useState([])

    const [hobiler, sethobiler] = useState([])
    const [yabanciDil, setyabanciDil] = useState([])


    useEffect(() => {
        AllRecord.getCv().then(((data) => {
            if (data) {

                setegitimList(data.EgitimGecmisi)

                setcalismaList(data.CalismaGecmisi)

                setyetkinAlanlar(data.YetkinAlanlar)

                setextraYetkinAlanlar(data.ExtraYetkinAlanlar)

                setprofesyonelHizmetler(data.AyricaYetkinAlanlar)

                sethobiler(data.Hobiler)

                setyabanciDil(data.YabanciDiller)
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
                                src="assets/img/resume_l.png"
                                alt="Ukieweb"
                            />
                            {/* Title Page */}
                            <h2 className="title">CV Sayfası</h2>
                            {/* Description Page */}
                            <h4 className="sub-title">Akademik Niteliklerim</h4>
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
                            <h3 className="title title-resume">Eğitim Bilgileri</h3>
                            <div className="block-grey">
                                <div id="education-slider" className="owl-carousel owl-theme">

                                    {egitimList.map((birEgitim) => {
                                        debugger
                                        return (
                                            <div className="item">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="font-weight-m width-td">Okul İsmi</td>
                                                            <td>{birEgitim.okunanOkul}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="font-weight-m">Bölüm</td>
                                                            <td>{birEgitim.okunanOkulBolum}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="font-weight-m">Yıl</td>
                                                            <td>{birEgitim.okunanOkulZamani}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p>{birEgitim.okunanOkulTecrube}</p>
                                            </div>
                                        )
                                    })}

                                    {/* <div className="item">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="font-weight-m width-td">Okul İsmi</td>
                                                    <td>isim</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-m">Bölüm</td>
                                                    <td>bölüm</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-m">Yıl</td>
                                                    <td>yıl</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>tecrübe</p>
                                    </div>

                                    <div className="item">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="font-weight-m width-td">Okul İsmi</td>
                                                    <td>isim</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-m">Bölüm</td>
                                                    <td>bölüm</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-m">Yıl</td>
                                                    <td>yıl</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>tecrübe</p>
                                    </div> */}


                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-6">
                            <h3 className="title title-resume">Çalışma Geçmişi</h3>
                            <div className="block-grey">
                                <div id="work-slider" className="owl-carousel owl-theme">


                                    <div className="item">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="font-weight-m width-td1">
                                                        Şirket İsmi
                                                        </td>
                                                    <td>Themeforest</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-m">Pozisyon</td>
                                                    <td>Melbourne VIC</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-m">Yıl</td>
                                                    <td>2007-2012</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed dusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi.
                                            </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* End Content section */}

            {/* Start Skills section */}
            <section className="skills border-bottom padding-block">
                {/* start container */}
                <div className="container">
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-6 padding-bottom">
                            <h3 className="title title-skills">Profesyonel Yetkinlikler</h3>

                            {yetkinAlanlar && yetkinAlanlar.length > 0 && yetkinAlanlar.map((birYetkinAlan) => {
                                return (
                                    <div>
                                        <label className="progress-bar-label">{birYetkinAlan.yetkinAlan}</label>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={birYetkinAlan.yetkinAlanYuzde}
                                                aria-valuemin={0}
                                                aria-valuemax={100}>
                                                <span>{birYetkinAlan.yetkinAlanYuzde}%</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}


                        </div>

                        <div className="col-xs-12 col-sm-12 col-lg-6">
                            <h3 className="title title-skills">Ek Yetkinlikler</h3>

                            {extraYetkinAlanlar && extraYetkinAlanlar.length > 0 && extraYetkinAlanlar.map((birExtraYetkinAlan) => {
                                return (
                                    <div className="circle-progress-block">
                                        <div className="circle-progress">
                                            <input
                                                type="text"
                                                className="dial"
                                                defaultValue={birExtraYetkinAlan.extraYetkinAlanYuzde}
                                                data-color="#00b6f9"
                                                data-from={0}
                                                data-to={99}
                                            />
                                        </div>
                                        <label className="circle-progress-label">{birExtraYetkinAlan.extraYetkinAlan}</label>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-6 language-skills">
                            <h3 className="title title-skills">Yabancı Dil</h3>

                            {yabanciDil && yabanciDil.length > 0 && yabanciDil.map((dil) => {
                                return (
                                    <div className="progress">
                                        <label className="progress-bar-label">{dil.yabanciDil}</label>
                                        <span className="ratyli" data-rate={dil.yabanciDilSeviye} data-ratemax={5} />
                                    </div>
                                )
                            })}

                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-6 knowledge">
                            <h3 className="title title-skills">Profesyonel Hizmetlerim</h3>
                            <div className="col-xs-12 col-sm-12 col-lg-12">
                                <ul>
                                    {profesyonelHizmetler && profesyonelHizmetler.length > 0 && profesyonelHizmetler.map((birhizmet) => {
                                        return (
                                            <li>{birhizmet.ayricaYetkinAlan}n</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* End Skills section */}

            {/* Start Info section */}
            <section className="info border-bottom padding-block text-center">
                {/* start container */}
                <div className="container">
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12">
                            <h3 className="title">Hobilerim</h3>
                        </div>
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12">
                            {hobiler && hobiler.length > 0 && hobiler.map((hobi) => {
                                return (
                                    <div className="circle-block ">
                                        <span className="icon hover-animate">
                                            <i className={hobi.hobiler} />
                                        </span>
                                        <span className="name hover-animate">{hobi.hobilerAciklama}</span>
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

        </div>
    );
}

export default Resume;