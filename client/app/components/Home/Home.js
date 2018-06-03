import React, {Component} from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import '../../styles/Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
              <header id="header" >
                <div className="embed-responsive embed-responsive-16by9">
                <div className="intro embed-responsive-item">
                    <div className="container">
                      <div className="row">
                        <div className="intro-text">
                            <h1><span className="brand">FESTIVALS IN BERLIN</span></h1>
                           </div>
                      </div>
                    </div>
                </div>
                </div>
              </header>

              <div id="services">
                <div className="container">
                  <div className="row">
                      <div className="col">
                        <button type="button" className="liked img-circle"></button>
                        <button type="button" className="share img-circle"></button>
                        <div>
                        <p className="p2-bold">Gefällt</p>
                        <p className="p2">500 Usern</p>
                        </div>
                      </div>
                    <div className="col-6">
                      <div className="text-center">
                        <h4>Unser Projekt</h4>
                        <p className="p1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo
                          nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor apibus lornare
                          diam commodo nibh.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante
                          facilisis bibendum dolor apibus lornare diam commodo nibh.
                          <a href="javascript:toggle('test')">  Weitere Infos...</a>
                          <div id="test" style={{display: 'none'}}>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante
                            facilisis bibendum dolor apibus lornare diam commodo nibh.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus
                            leo
                            nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor apibus
                            lornare
                            diam commodo nibh.
                          </div> </p>
                        <button className="img-circle team-img photo_female"></button>
                        <button className="img-circle team-img photo_female"></button>
                        <button className="img-circle team-img photo_female"></button>
                        <button className="img-circle team-img photo_female"></button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>


              <div id="portfolio">
                <div className="container">
                  <div className="row">
                      <hr/>
                    <div className="embed-responsive embed-responsive-16by9">
                    <div className="photo1 embed-responsive-item"/>
                    </div>
                    <div className="article-text">
                      <div className="container">
                        <div className="row">
                            <div className="col">
                              <button type="button" className="liked img-circle"></button>
                              <button type="button" className="share img-circle"></button>
                              <div>
                                <p1 className="p2-bold">Gefällt</p1>
                                <p1 className="p2">500 Usern</p1>
                              </div>
                            </div>
                            <div className="col-6">
                            <h1>Das wahre Bayern</h1>
                            <p className="p1">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo
                              nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor apibus lornare
                              diam commodo nibh.Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante
                              facilisis bibendum dolor apibus lornare diam commodo nibh.
                              <a href="javascript:toggle('test')">  Weitere Infos...</a>
                              <div id="test" style={{display: 'none'}}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante
                                facilisis bibendum dolor apibus lornare diam commodo nibh.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus
                                leo
                                nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor apibus
                                lornare
                                diam commodo nibh.
                              </div> </p>
                            <div>
                              <button className="img-circle team-img2 photo_female2"></button>
                              <button className="img-circle team-img2 photo_female2"></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  <br/> <hr/>

                    <div className="thumbnail">
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <button2 className="img-circle team-img2 photo_female2"></button2>
                          </div>
                          <div className="abstand">
                          <p className="p1">
                       Wir wurden gerade auf dem Weg nach Berlin geblitzt :( ! </p>
                      <button type="button" className="liked img-circle"></button>
                      <button type="button" className="share img-circle"></button>
                      <div>
                        <p1 className="p2-bold">Gefällt</p1>
                        <p1 className="p2">30 Usern</p1>
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br/>

                    <hr/>
                    <div className="embed-responsive embed-responsive-16by9">
                    <div className="photo2 embed-responsive-item"/>
                    </div>
                    <div className="article-text">
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <button type="button" className="liked img-circle"></button>
                            <button type="button" className="share img-circle"></button>
                            <div>
                              <p1 className="p2-bold">Gefällt</p1>
                              <p1 className="p2">200 Usern</p1>
                            </div>
                          </div>
                          <div className="col-6">
                            <h1>Das wahre Bayern</h1>
                            <p className="p1">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo
                              nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor apibus lornare
                              diam commodo nibh.Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante
                              facilisis bibendum dolor apibus lornare diam commodo nibh.
                              <a href="javascript:toggle('test')">  Weitere Infos...</a>
                              <div id="test" style={{display: 'none'}}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante
                                facilisis bibendum dolor apibus lornare diam commodo nibh.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus
                                leo
                                nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor apibus
                                lornare
                                diam commodo nibh.
                              </div> </p>
                            <div>
                              <button className="img-circle team-img2 photo_female2"></button>
                              <button className="img-circle team-img2 photo_female2"></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br/> <hr/>


                    <div className="thumbnail">
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <button2 className="img-circle team-img2 photo_female2"></button2>
                          </div>
                          <div className="abstand">
                            <p className="p1">
                              Hey Leute, was geht heute noch bei euch?! </p>
                            <button type="button" className="liked img-circle"></button>
                            <button type="button" className="share img-circle"></button>
                            <div>
                              <p1 className="p2-bold">Gefällt</p1>
                              <p1 className="p2">20 Usern</p1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br/>

                    <hr/>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen=""></iframe>
                    </div>
                    <div className="article-text">
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <button type="button" className="liked img-circle"></button>
                            <button type="button" className="share img-circle"></button>
                            <div>
                              <p1 className="p2-bold">Gefällt</p1>
                              <p1 className="p2">200 Usern</p1>
                            </div>
                          </div>
                          <div className="col-6">
                            <br/>
                              <button className="img-circle team-img2 photo_female2"></button>
                              <button className="img-circle team-img2 photo_female2"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr/>







                  </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
