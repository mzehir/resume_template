import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from './components/loading';
import Footer from './components/footer';

import ScrollToTop from './components/scrollToTop';
import OpenContactForm from './components/openContactForm';


import Homepage from './components/homepage/homepage';
import Profile from './components/profile/profile';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Loading></Loading>

      <div id="wraper">
        <Router>
          <Switch>

            <Route exact path="/">
              <Homepage></Homepage>
            </Route>

            <Route path="/profil">
              <Profile></Profile>
            </Route>

            <Route path="/cv">
              <Resume></Resume>
            </Route>

            <Route path="/portfoy">
              <Portfolio></Portfolio>
            </Route>

            <Route path="/blog">
              <Blog></Blog>
            </Route>

            <Route path="/iletisim">
              <Contact></Contact>
            </Route>

          </Switch>
        </Router>

        <Footer></Footer>
      </div>

      <ScrollToTop></ScrollToTop>
      <OpenContactForm></OpenContactForm>


    </div>
  );
}

export default App;
