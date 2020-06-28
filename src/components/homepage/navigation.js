import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="menu">
                    {/* start container */}
                    <div className="container">
                        {/* start row */}
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-12">

                                {/* start menu block (profile) */}
                                <a href="profil" className="menu-li">
                                    {/* img menu block */}
                                    <span className="foto">
                                        {/* for man */}
                                        <img
                                            src="assets/img/menu/profile.png"
                                            className="menu-img"
                                            data-img-name="profile"
                                            alt="Ukieweb"
                                        />
                                        {/* for women */}
                                        {/*  <img src="./assets/img/menu/profile_female.png" class="menu-img" data-img-name="profile_female" alt="Ukieweb" /> */}
                                    </span>
                                    {/* name menu block */}
                                    <span className="name">Profil</span>
                                </a>
                                {/* end menu block (profile) */}

                                {/* start menu block (resume) */}
                                <a href="cv" className="menu-li">
                                    {/* img menu block */}
                                    <span className="foto">
                                        <img
                                            src="assets/img/menu/resume.png"
                                            className="menu-img"
                                            data-img-name="resume"
                                            alt="Ukieweb"
                                        />
                                    </span>
                                    {/* name menu block */}
                                    <span className="name">CV</span>
                                </a>
                                {/* end menu block (resume) */}

                                {/* start menu block (portfolio) */}
                                <a href="portfoy" className="menu-li">
                                    {/* img menu block */}
                                    <span className="foto">
                                        <img
                                            src="assets/img/menu/portfolio.png"
                                            className="menu-img"
                                            data-img-name="portfolio"
                                            alt="Ukieweb"
                                        />
                                    </span>
                                    {/* name menu block */}
                                    <span className="name">Portföy</span>
                                </a>
                                {/* end menu block (portfolio) */}

                                {/* start menu block (blog) */}
                                <a href="blog" className="menu-li">
                                    {/* img menu block */}
                                    <span className="foto">
                                        <img
                                            src="assets/img/menu/blog.png"
                                            className="menu-img"
                                            data-img-name="blog"
                                            alt="Ukieweb"
                                        />
                                    </span>
                                    {/* name menu block */}
                                    <span className="name">Blog</span>
                                </a>
                                {/* end menu block (blog) */}

                                {/* start menu block (contact) */}
                                <a href="iletisim" className="menu-li">
                                    {/* img menu block */}
                                    <span className="foto">
                                        <img
                                            src="assets/img/menu/contact.png"
                                            className="menu-img"
                                            data-img-name="contact"
                                            alt="Ukieweb"
                                        />
                                    </span>
                                    {/* name menu block */}
                                    <span className="name">İletişim</span>
                                </a>
                                {/* end menu block (contact) */}

                            </div>
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </nav>
            </div>
        );
    }
}

export default Navigation;