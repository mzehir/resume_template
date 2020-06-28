import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <div>
                <div id="">
                    {/* Start Head section */}
                    <header className="head-blog">
                        <div className="slider_container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <div className="head">
                                            {/* start container */}
                                            <div className="container">
                                                {/* start row */}
                                                <div className="row">
                                                    <div className="col-xs-8 col-sm-10 col-lg-10">
                                                        <img
                                                            className="logo-page"
                                                            src="assets/img/blog_l.png"
                                                            alt="Ukieweb"
                                                        />
                                                        {/* Title Page */}
                                                        <h2 className="title">Blog</h2>
                                                        {/* Description Page */}
                                                        <h4 className="sub-title">I write here my thoughts</h4>
                                                    </div>
                                                    <div className="col-xs-2 col-sm-1 col-lg-1 text-right">
                                                        <ul className="flex-direction-nav">
                                                            <li>
                                                                <a className="next" href="#" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xs-2 col-sm-1 col-lg-1 text-right">
                                                        <a
                                                            href="/"
                                                            className="btn-close hover-animate"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="head search-head search-blog">
                                            {/* start container */}
                                            <div className="container">
                                                {/* start row */}
                                                <div className="row">
                                                    <div className="col-xs-10 col-sm-11 col-lg-11">
                                                        <form action="#" method>
                                                            <input
                                                                type="text"
                                                                name="search"
                                                                className="search-input"
                                                                placeholder="Search"
                                                                defaultValue
                                                            />
                                                            <input
                                                                type="submit"
                                                                className="btn-search"
                                                                defaultValue
                                                            />
                                                        </form>
                                                    </div>
                                                    <div className="col-xs-2 col-sm-1 col-lg-1 text-right">
                                                        <ul className="flex-direction-nav">
                                                            <li>
                                                                <a className="prev" href="#" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    {/* Start Blog section */}
                    <section className="blog padding-block">
                        {/* start container */}
                        <div className="container">
                            {/* start row */}
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-8 padding-bottom">
                                    {/* start post */}
                                    <div className="post">
                                        {/* start photo */}
                                        <div className="photo">
                                            <img src="assets/img/blog/post1.png" alt="UkieWeb" />
                                        </div>
                                        {/* end photo */}
                                        {/* start title post */}
                                        <h3 className="title title-blog">Standard Post with Image</h3>
                                        {/* end title post */}
                                        <div className="entry-byline">
                                            <i className="fa fa-user" />
                                            <span className="entry-author right-border">
                                                <a href="#" title="Posts by Theme Admin" rel="author">
                                                    <span>Jonh Doe</span>
                                                </a>
                                            </span>
                                            <i className="fa fa-clock-o" />
                                            <time className="entry-published right-border">30/04/2015</time>
                                            <i className="fa fa-comment" />
                                            <span className="comments-link">30 Comments</span>
                                        </div>
                                        {/* start desc post */}
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum dolor.
              </p>
                                        {/* end desc post */}
                                        <a
                                            href="post-img.html"
                                            className="btn hover-animate btn-color-hover"
                                        >
                                            Read More
              </a>
                                    </div>
                                    {/* end post */}
                                    {/* start post */}
                                    <div className="post">
                                        {/* start photo */}
                                        <div className="photo">
                                            <img src="assets/img/blog/post2.png" alt="UkieWeb" />
                                        </div>
                                        {/* end photo */}
                                        {/* start title post */}
                                        <h3 className="title title-blog">Standard Post with Image</h3>
                                        {/* end title post */}
                                        <div className="entry-byline">
                                            <i className="fa fa-user" />
                                            <span className="entry-author right-border">
                                                <a href="#" title="Posts by Theme Admin" rel="author">
                                                    <span>Jonh Doe</span>
                                                </a>
                                            </span>
                                            <i className="fa fa-clock-o" />
                                            <time className="entry-published right-border">30/05/2015</time>
                                            <i className="fa fa-comment" />
                                            <span className="comments-link">65 Comments</span>
                                        </div>
                                        {/* start desc post */}
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum dolor.
              </p>
                                        {/* end desc post */}
                                        <a
                                            href="post-img.html"
                                            className="btn hover-animate btn-color-hover"
                                        >
                                            Read More
              </a>
                                    </div>
                                    {/* end post */}
                                    {/* start post */}
                                    <div className="post last">
                                        {/* start video */}
                                        <div className="video">
                                            <iframe
                                                src="http://player.vimeo.com/video/22439234?title=0&portrait=0&byline=0"
                                                frameBorder={0}
                                                allowFullScreen
                                                replaced="true"
                                            />
                                        </div>
                                        {/* end video */}
                                        {/* start title post */}
                                        <h3 className="title title-blog">Standard Post with Video</h3>
                                        {/* end title post */}
                                        <div className="entry-byline">
                                            <i className="fa fa-user" />
                                            <span className="entry-author right-border">
                                                <a href="#" title="Posts by Theme Admin" rel="author">
                                                    <span>Jonh Doe</span>
                                                </a>
                                            </span>
                                            <i className="fa fa-clock-o" />
                                            <time className="entry-published right-border">29/05/2015</time>
                                            <i className="fa fa-comment" />
                                            <span className="comments-link">5 Comments</span>
                                        </div>
                                        {/* start desc post */}
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum dolor.
              </p>
                                        {/* end desc post */}
                                        <a href="#" className="btn hover-animate btn-color-hover">
                                            Read More
              </a>
                                    </div>
                                    {/* end post */}
                                    {/* start pagination */}
                                    <div className="pagination">
                                        <span className="page-numbers current">1</span>
                                        <a className="page-numbers" href="#">
                                            2
              </a>
                                        <a className="page-numbers" href="#">
                                            3
              </a>
                                        <span className="page-numbers dots">…</span>
                                        <a className="page-numbers" href="#">
                                            9
              </a>
                                        <a className="next page-numbers" href="#">
                                            Next »
              </a>
                                    </div>
                                    {/* end pagination */}
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    {/* start slidebar */}
                                    <aside className="widget widget_categories">
                                        <h3 className="widget-title">Categories</h3>
                                        <ul>
                                            <li className="cat-item cat-item-6">
                                                <a href="#">Web design</a>
                                            </li>
                                            <li className="cat-item cat-item-8">
                                                <a href="#">Web development</a>
                                            </li>
                                            <li className="cat-item cat-item-7">
                                                <a href="#">Logos &amp; Illustrations</a>
                                            </li>
                                            <li className="cat-item cat-item-1">
                                                <a href="#">Marketing</a>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="widget widget_recent_entries">
                                        <h3 className="widget-title">Recent Posts</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Excepteur sint occaecat cupidatat non proident</a>
                                            </li>
                                            <li>
                                                <a href="#">Duis aute irure dolor in reprehenderit</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor
                  </a>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="widget widget_archive">
                                        <h3 className="widget-title">Archives</h3>
                                        <ul>
                                            <li>
                                                <a href="#">October 2014</a>
                                            </li>
                                            <li>
                                                <a href="#">September 2014</a>
                                            </li>
                                            <li>
                                                <a href="#">June 2014</a>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="widget widget_tag_cloud">
                                        <h3 className="widget-title">Tags</h3>
                                        <div className="tagcloud">
                                            <a href="#" className="hover-animate">
                                                Web
                </a>
                                            <a href="#" className="hover-animate">
                                                Illustrations
                </a>
                                            <a href="#" className="hover-animate">
                                                Graphic design
                </a>
                                            <a href="#" className="hover-animate">
                                                Applications
                </a>
                                            <a href="#" className="hover-animate">
                                                Photo
                </a>
                                            <a href="#" className="hover-animate">
                                                UkieWeb
                </a>
                                        </div>
                                    </aside>
                                    {/* end slidebar */}
                                </div>
                            </div>
                            {/* end row */}
                        </div>
                        {/* end container */}
                    </section>
                    {/* End Blog section */}
                </div>

                {/* Scroll to Top */}

                {/* End Scroll to Top */}

                {/* Style Contact Form */}
                
                {/* End Style Contact Form */}
            </div>

        );
    }
}

export default Blog;