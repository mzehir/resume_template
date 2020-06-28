// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import AllRecord from '../../config/allRecord';
import SwitcherStyle from './switcherStyle';
import Navigation from './navigation';

const Homepage = () => {

    const [isimSoyisim, setisimSoyisim] = useState('')
    const [meslek1, setmeslek1] = useState('')
    const [meslek2, setmeslek2] = useState('')
    const [sosyalMedyaHesapList, setsosyalMedyaHesapList] = useState([])

    useEffect(() => {
        AllRecord.getAnasayfa().then(((data) => {
            if (data) {
                setisimSoyisim(data.PersonelBilgisi.nameAndSurname)
                setmeslek1(data.PersonelBilgisi.business1)
                setmeslek2(data.PersonelBilgisi.business2)
                setsosyalMedyaHesapList(data.SosyalMedyaHesap)
            }
        }))
    }, [])


    return (
        <div>
            <div id="">
                {/* Start Home-header section */}
                <section className="home-header border-bottom padding-block">
                    {/* start container */}
                    <div className="container">
                        {/* start row */}
                        <div className="row">
                            <div className="col-xs-12 col-sm-5 col-lg-5 text-right">
                                {/* Your foto */}
                                <div className="foto">
                                    {/* for man */}
                                    <img src="assets/img/photo.png" alt="Ukieweb" />
                                    {/* for women */}
                                    {/* <img src="./assets/img/photo_female.png" alt="Ukieweb"> */}
                                </div>
                                {/* end your foto */}
                            </div>
                            <div className="col-xs-12 col-sm-7 col-lg-7">
                                {/* Your Name */}
                                <h1 className="title">{isimSoyisim}</h1>
                                {/* Your Profession */}
                                <h3 className="sub-title">
                                    {meslek1} &amp; {meslek2}
                                </h3>
                                {/* social icon */}
                                <div className="social">
                                    <ul
                                        className="animated"
                                        data-animation="fadeIn"
                                        data-animation-delay={600}
                                    >
                                        {/* social icons */}
                                        {sosyalMedyaHesapList && sosyalMedyaHesapList.length > 0 && sosyalMedyaHesapList.map((sosyalMedya) => {
                                            return (
                                                <li>
                                                    <a className="ukie-icons hover-animate" href={sosyalMedya.socialMediaAccount}>
                                                        <i className={sosyalMedya.socialMediaAccountIcon} />
                                                    </a>
                                                </li>
                                            )
                                        })}
                                        {/* <li>
                                            <a className="ukie-icons hover-animate" href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ukie-icons hover-animate" href="#">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ukie-icons hover-animate" href="#">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ukie-icons hover-animate" href="#">
                                                <i className="fa fa-dribbble" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ukie-icons hover-animate" href="#">
                                                <i className="fa fa-youtube" />
                                            </a>
                                        </li> */}
                                        {/*
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-behance"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-pinterest"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-digg"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-deviantart"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-envelope-square"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-delicious"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-instagram"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-dropbox"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-skype"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-tumblr"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-vimeo-square"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-flickr"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-github-alt"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-renren"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-vk"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-xing"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-weibo"></i></a></li>
                              <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-rss"></i></a></li>
                          */}
                                    </ul>
                                </div>
                                {/* end social icon */}
                            </div>
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </section>
                {/* End Home-header section */}

                <Navigation></Navigation>

            </div>

            {/* delete this from site once you have decided on a colour scheme - follow documentation for insructions */}
            <SwitcherStyle></SwitcherStyle>
            {/* end Style Switcher */}

        </div>
    );
}

export default Homepage;