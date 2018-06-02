import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import '../../styles/Home.css';

class start extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                {/* <Header/> */}
                <header id="header">
                    <div className="intro text-center">
                        <div className="overlay">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-7 col-md-offset-12 center-block">
                                    <div className="intro-text">
                                        <h1>WILLKOMMEN BEI <span className="brand">FACES</span></h1>
                                        <p>Neuste Projekte</p>
                                        <a href="#portfolio" className="btn btn-default btn-lg page-scroll">UNSERE
                                            STORY</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="three" className="wrapper style2">
                    <div className="inner">
                        <header className="align-center">
                            <p className="special">Es gibt gerade viel zu sehen blabla......</p>
                            <h2>Aktuelle Projekte</h2>
                        </header>
                        <div className="gallery">
                            <div>
                                <div className="image fit">
                                    <a>BREHSIS - Das wahre Bayern</a>
                                    <a href="/Home"><img src="images/Projekt1.jpg" alt="Das wahre Bayern"/></a>

                                </div>
                            </div>
                            <div>
                                <div className="image fit">
                                    <a href="#"><img src="../../../../FACES-MVP/public/images/Projekt2.jpg" alt=""/></a>
                                </div>
                            </div>
                            <div>
                                <div className="image fit">
                                    <a href="#"><img src="../../../../FACES-MVP/public/images/Projekt3.jpg" alt=""/></a>
                                </div>
                            </div>
                            <div>
                                <div className="image fit">
                                    <a href="#"><img src="images/Projekt4.jpg" alt=""/></a>
                                </div>
                            </div>
                            <div>
                                <div className="image fit">
                                    <a href="#"><img src="images/Projekt4.jpg" alt=""/></a>
                                </div>
                            </div>
                            <div>
                                <div className="image fit">
                                    <a href="#"><img src="images/Projekt4.jpg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="one" className="wrapper style2">
                    <div className="inner">
                        <div className="grid-style">

                            <div>
                                <div className="box">
                                    <div className="image fit">
                                        <img src="../../../../FACES-MVP/public/images/Projekt2.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <header className="align-center">
                                            <p>projektinhalt hier</p>
                                            <h2>Lorem ipsum dolor</h2>
                                        </header>
                                        <p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis.
                                            Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra
                                            elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat
                                            malesuada.</p>
                                        <footer className="align-center">
                                            <a href="#" className="button alt">Learn More</a>
                                            <a href="#" className="button special">Ignite</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="box">
                                    <div className="image fit">
                                        <img src="../../../../FACES-MVP/public/images/Projekt3.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <header className="align-center">
                                            <p>mattis elementum sapien pretium tellus</p>
                                            <h2>Vestibulum sit amet</h2>
                                        </header>
                                        <p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis.
                                            Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra
                                            elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat
                                            malesuada.</p>
                                        <footer className="align-center">
                                            <a href="#" className="button alt">Learn More</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="box">
                                    <div className="image fit">
                                        <img src="images/pic03.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <header className="align-center">
                                            <p>mattis elementum sapien pretium tellus</p>
                                            <h2>Vestibulum sit amet</h2>
                                        </header>
                                        <p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis.
                                            Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra
                                            elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat
                                            malesuada.</p>
                                        <footer className="align-center">
                                            <a href="#" className="button alt">Learn More</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="box">
                                    <div className="image fit">
                                        <img src="images/pic03.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <header className="align-center">
                                            <p>mattis elementum sapien pretium tellus</p>
                                            <h2>Vestibulum sit amet</h2>
                                        </header>
                                        <p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis.
                                            Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra
                                            elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat
                                            malesuada.</p>
                                        <footer className="align-center">
                                            <a href="#" className="button alt">Learn More</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="two" className="wrapper style3">
                    <div className="inner">
                        <header className="align-center">
                            <p>Hier ist noch platz für ein impressum oder einen abschließenden punkt (damit die website
                                abgerudent ist). </p>
                            <h2>Danke für die Unterstützung von Faces</h2>
                        </header>
                    </div>
                </section>

                <Footer/>

            </div>
        );
    }
}

export default start;
