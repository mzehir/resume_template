import React, { Component } from 'react';

class SwitcherStyle extends Component {
    render() {
        return (
            <div className="style-switcher style-off">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-lg-12 text-center">
                        <div className="switch-colours clearfix">
                            <div className="set clearfix">
                                <h3 className="lighter">Select A Color</h3>
                                <a
                                    href="color-blue.html"
                                    className="new-colour color-blue"
                                    id="color-blue"
                                    data-color="#00b6f9"
                                />
                                <a
                                    href="color-orange.html"
                                    className="new-colour color-orange"
                                    id="color-orange"
                                    data-color="#ffc400"
                                />
                                <a
                                    href="color-purple.html"
                                    className="new-colour color-purple"
                                    id="color-purple"
                                    data-color="#7c4dff"
                                />
                                <a
                                    href="color-green.html"
                                    className="new-colour color-green"
                                    id="color-green"
                                    data-color="#9ccc65"
                                />
                                <a
                                    href="color-red.html"
                                    className="new-colour color-red"
                                    id="color-red"
                                    data-color="#ff7043"
                                />
                                <a
                                    href="color-brown.html"
                                    className="new-colour color-brown"
                                    id="color-brown"
                                    data-color="#ae8c64"
                                />
                                <h3 className="lighter">Select A Background</h3>
                                <a
                                    href="bg-white.html"
                                    className="new-bg bg-white"
                                    data-bg="#ffffff"
                                />
                                <a
                                    href="bg-grey.html"
                                    className="new-bg bg-grey"
                                    data-bg="#f5f5f5"
                                />
                                <a
                                    href="bg-light-blue.html"
                                    className="new-bg bg-light-blue"
                                    data-bg="#cfd8dc"
                                />
                                <a
                                    href="bg-dark-blue.html"
                                    className="new-bg bg-dark-blue"
                                    data-bg="#263238"
                                />
                                <a
                                    href="bg-dark-purple.html"
                                    className="new-bg bg-dark-purple"
                                    data-bg="#1e1f38"
                                />
                                <a
                                    href="bg-brown.html"
                                    className="new-bg bg-brown"
                                    data-bg="#383231"
                                />
                                <h3 className="lighter">Select A Shadow</h3>
                                <div className="switch">
                                    <input type="checkbox" name="box_shadow" id="box_shadow" />
                                    <label>
                                        <i />
                                    </label>
                                </div>
                            </div>
                            {/* end set */}
                        </div>
                        <div className="style-open">
                            <i className="fa fa-tint" />
                        </div>
                        {/* end style-open */}
                    </div>
                </div>
                {/* end row */}
            </div>
        );
    }
}

export default SwitcherStyle;