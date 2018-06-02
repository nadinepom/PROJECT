import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Footer.css';


class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="container text-center">
                    <div className="fnav">
                        <p>Copyright &copy; 2018 Faces. Designed by Beuth Hochschule für Technik Berlin</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;