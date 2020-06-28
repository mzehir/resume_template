import React, { Component } from 'react';

class ScrollToTop extends Component {
    render() {
        return (
            <a href="#" className="btn hover-animate scrollToTop">
                <i className="fa fa-angle-up" />
            </a>
        );
    }
}

export default ScrollToTop;