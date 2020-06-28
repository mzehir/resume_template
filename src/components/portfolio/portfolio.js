// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import AllRecord from '../../config/allRecord';

const Portfolio = () => {

    const [projeler, setprojeler] = useState([])

    useEffect(() => {
        AllRecord.getPortfolyo().then(((data) => {
            debugger
            if (data) {
                setprojeler(data.Projeler)
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
                                src="assets/img/portfolio_l.png"
                                alt="Ukieweb"
                            />
                            {/* Title Page */}
                            <h2 className="title">Portföy</h2>
                            {/* Description Page */}
                            <h4 className="sub-title">Bazı Çalışmalarımdan Kareler</h4>
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

            {/* Start Portfolio section */}
            <div className="portfolio-section padding-block">
                {/* start container */}
                <div className="container">
                    {/* start row */}
                    <div className="row">
                        {/* Portfolio */}
                        <div className="portfolio">
                            <div className="filter_div controls">
                                <div className="col-xs-12 col-sm-12 col-lg-11">
                                    <ul>
                                        <li className="hover-animate filter" data-filter="all">
                                            Tümü
                                            </li>
                                        <li
                                            className="hover-animate filter"
                                            data-filter=".category-1"
                                        >
                                            Web design
                                            </li>
                                        <li
                                            className="hover-animate filter"
                                            data-filter=".category-2"
                                        >
                                            Illustrations
                                            </li>
                                        <li
                                            className="hover-animate filter"
                                            data-filter=".category-3"
                                        >
                                            Applications
                                            </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="portfolio-grid">

                                {projeler.map((proje) => {
                                    debugger
                                    return (
                                        <div
                                            className="mix col-xs-12 col-sm-6 col-lg-4 portfolio-item category-2"
                                            data-value={1}>
                                            <div className="within">
                                                <img src={proje.fotoUrl} alt="Alt" />
                                                <div className="port-item-cont">
                                                    <h3 className="title">{proje.projectTitle}</h3>
                                                    <p className="desc">{proje.shortProjectDescription}</p>
                                                    <a
                                                        className="fancybox popup-content view-work hover-animate"
                                                        href="#work-0"
                                                        rel="mygallery">
                                                        Detayları Gör
                                                    </a>
                                                </div>
                                                <div className="hidden">
                                                    <div className="podrt-desc" id="work-0">
                                                        <div className="modal-box-content">
                                                            <img src={proje.fotoUrl} alt="Alt" />
                                                            <div className="text">
                                                                <h3 className="title">{proje.projectTitle}</h3>
                                                                <table>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="font-weight-m width-td">
                                                                                Tamamlanma Tarihi:
                                                                            </td>
                                                                            <td>{proje.finishDate}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="font-weight-m">Müşteri Bilgisi</td>
                                                                            <td>{proje.customerInformation}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <p>{proje.projectMoreDescription}</p>
                                                                <a href="#" className="btn btn-color">
                                                                    Canlı İncele
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        {/* end Portfolio */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </div>
            {/* End Portfolio section */}
        </div>

    );
}

export default Portfolio;