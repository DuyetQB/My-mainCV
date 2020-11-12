import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends Component {
    render() {
        return(
        
          
                <div className="wrapper">
                  <header className="header" autofocus>
                    <div className="left">
                      <h1>DSD</h1>
                    </div>
                    <div className="right">
                      <ul className="main-ul">
                        <li className="main-li"><a href="#home">Home</a></li>
                        <li className="main-li"><a href="#all-my-projects">My projects</a></li>
                        <li className="main-li"><a href="#all-skills">My Skills </a></li>
                        <li className="main-li"><a href="#all-about-me">About me </a></li>
                        <li className="main-li"><a href="#all-contact-wrapper">Contact</a></li>
                      </ul>
                    </div>
                    <div className="cover-small-icon">
                      <i className="fas fa-bars" aria-hidden="true" />
                    </div>
                    <nav className="small-nav" id="small-nav-wrapper">
                      <li className="small-li"><a href="#home">Home</a></li>
                      <li className="small-li"><a href="#all-my-projects">My Projects </a></li>
                      <li className="small-li"><a href="#all-skills">My Skills </a></li>
                      <li className="small-li"><a href="#all-about-me">About Me </a></li>
                      <li className="small-li"><a href="#all-contact-wrapper">Contact</a></li>
                    </nav>
                  </header>
                  <div className="content">
                    <div className="first-div" id="home">
                      <div className="first-div-content">
                        <h3>Tôi không có tài năng gì cả. Tôi chỉ đam mê hiểu biết</h3>
                        <p>Albert Einstein</p>
                      </div>
                    </div>
                    <div className="me">
                      <div className="avata">
                        <a href="https://github.com/DuyetQB"><img className="main-image" src="https://1.bp.blogspot.com/-HAEeuYATw0w/X6FHQFRC0BI/AAAAAAAAJDU/Wzlsh13nyIApQMUMj2LjXzrf_te9z76lQCNcBGAsYHQ/s1340/72243306_745912359184848_1103428032359563264_o_edited.jpg" alt="" /></a>
                      </div>
                      <div className="show-name"> <h1>Hi!  <span className="danh_chu" data-thoigiandoi={1500} data-chu="[&quot;Everyone&quot;, &quot;My name is Duyet&quot;, &quot;I am a frontend Developer&quot;]"><span className="tu">I am</span></span></h1></div>
                    </div>
                    <div className="my-projects-wrap" id="all-my-projects">
                      <div className="my-projects-text"><h1>My projects </h1></div>
                      <div className="project-item-wrap">
                        <div className="project-item">
                          <a href="https://huge-facebook1.vercel.app/facebook%20demo.html"><img className="produce-image" src="https://images.unsplash.com/photo-1596526131158-52be64dcc208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" /></a>
                          <div className="produce-text">
                            <h3>FaceBook</h3>
                          </div>
                        </div>
                        <div className="project-item">
                          <a href="https://dsd-shop2.vercel.app/main.html"><img className="produce-image" src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" /></a>
                          <div className="produce-text">
                            <h3>DSD Shop</h3>
                          </div>
                        </div>
                        <div className="project-item">
                          <a href="https://spiderum.vercel.app/spideroom.html"><img className="produce-image" src="https://spiderum.com/assets/images/banner/cover-spiderum-not-login.jpg" alt="" /></a>
                          <div className="produce-text">
                            <h3>Spiderum</h3>
                          </div>
                        </div>
                        <div className="project-item">
                          <a href="https://calculator-blond.vercel.app/main.html"><img className="produce-image" src="https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" /></a>
                          <div className="produce-text">
                            <h3>Calculator</h3>
                          </div>
                        </div>
                        <div className="project-item">
                          <a href="https://eduglobal-three.vercel.app/demo%20responsive1.html"><img className="produce-image" src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" /></a>
                          <div className="produce-text">
                            <h3>Education</h3>
                          </div>
                        </div>
                        <div className="project-item">
                          <a href="https://clock-interface.vercel.app/main.html"><img className="produce-image" src="https://1.bp.blogspot.com/-eSeZw4oH7xg/X6kA4PLllTI/AAAAAAAAJH0/gdWWhdXghHAz6EyGdSdEa-CJDXb_2oz-wCNcBGAsYHQ/s860/unclock.png" alt="" /></a>
                          <div className="produce-text">
                            <h3>Clock Interface App</h3>
                          </div>
                        </div>
                        <div className="project-item">
                          <a href="https://calling-app.vercel.app/main.html"> <img className="produce-image" src="https://images.unsplash.com/photo-1516055619834-586f8c75d1de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" /></a>
                          <div className="produce-text">
                            <h3>Calling App</h3>
                          </div>
                        </div>
                        <div className="project-item">
                          <a href="https://lazyload-ten.vercel.app/lazyload.html"><img className="produce-image" src="https://images.unsplash.com/photo-1604298027700-98d678b0f7a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" /></a>
                          <div className="produce-text">
                            <h3>Lazyload</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-skills" id="all-skills">
                      <div className="skill-text"><h1>My Skills</h1></div>
                      <div className="skill-wrapper">
                        <div className="skill-progress go">
                          <div className="circle">
                            <div className="mask" />
                            <div className="mask" />
                          </div>
                          <div className="inset">
                            <div className="numbers" />
                          </div>
                        </div>
                        <div className="skill-progress go">
                          <div className="circle">
                            <div className="mask" />
                            <div className="mask" />
                          </div>
                          <div className="inset">
                            <div className="numbers" />
                          </div>
                        </div>
                        <div className="skill-progress go">
                          <div className="circle">
                            <div className="mask" />
                            <div className="mask" />
                          </div>
                          <div className="inset">
                            <div className="numbers" />
                          </div>
                        </div>
                        <div className="skill-progress go">
                          <div className="circle">
                            <div className="mask" />
                            <div className="mask" />
                          </div>
                          <div className="inset">
                            <div className="numbers" />
                          </div>
                        </div>
                        <div className="skill-progress go">
                          <div className="circle">
                            <div className="mask" />
                            <div className="mask" />
                          </div>
                          <div className="inset">
                            <div className="numbers" />
                          </div>
                        </div>
                      </div>
                      <div className="small-skillbar">
                        <img src="https://pixels4kids.files.wordpress.com/2014/10/html_css_javascript_and_the_awesome_jquery_header.png" alt="" />
                        <div className="position-skillbar" style={{display: 'none'}}>Biết sử dụng HTML , CSS JS và Jquery </div>
                      </div>
                    </div>
                    <div className="about-me" id="all-about-me">
                      <div className="about-me-text"><h1>About Me </h1></div>
                      <div className="me-cover">
                        <div className="about-me-image">
                          <img className="me-image" id="me-small-img" src="https://cdn.dribbble.com/users/916023/screenshots/14126676/media/114f29e9c6ce56e953fde35043a9fdea.png" alt="" /></div>
                        <div className="about-me-right">
                          <ul className="about-right-ul">
                            <li className="about-right-li"><b>Họ &amp; Tên :</b>Đinh Sĩ Duyệt  .</li>
                            <li className="about-right-li"><b> Đã học tại trường:</b>THCS &amp; THPT Hóa Tiến.</li>
                            <li className="about-right-li"><b>Ngày sinh:</b> 29/04/2001.</li>
                            <li className="about-right-li"><b>Nơi sinh:</b> Hóa Sơn - Minh Hóa - Quảng Bình . </li>
                            <li className="about-right-li"><b>Tại sao là trường THPT:</b> Tôi đã quyết định bỏ học năm lớp 11. </li>
                            <li className="about-right-li"><b>Lý do tôi bỏ học:</b> Bởi vì tôi nghĩ tôi không thuộc về nền giáo dục Việt Nam .Tôi đã bị ám ảnh mang tên lý thuyết ,những thứ mà tôi nghĩ tôi cũng chả bao giờ áp dụng vào trong thực tế.Tôi thật sự muốn thỏa mãn những thứ mà tôi chưa tự tay mình làm được</li>
                            <li className="about-right-li"><b>Email của tôi :</b> Dinhsyduyet@gmail.com.</li>
                            <li className="about-right-li"><b>Những công việc khác đã làm:</b> Tôi từng làm cho một công ty về gia công cơ khí chính xác.</li>
                            <li className="about-right-li"><b>Hiện tại tôi đang làm gì:</b>Hiện tại tôi tự học là chính .</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="about-me-fake" id="about2-fake">
                      <nav>
                        <div className="logo heading">
                          Who's DSD?
                        </div>
                      </nav>
                      <div className="absolute-wrapper">
                        <div className="colored-backgrounds">
                          <div />
                          <div />
                          <div />
                          <div />
                        </div>
                      </div>
                      <main>
                        <div className="content-fake-wrap">
                          <div className="heading">
                            <h1>Hi everyone.My name is Duyet</h1>
                            <p>
                              When I was a kid ! I wish I can be a programmer <br />
                              Then I'm so curious about all things of the computer<br />
                              and I don't know how many other programmers code ! Because in my mind .Codding is really difficult<br />
                              Right Now ! I'm 20 year old and having an own computer <br />
                              So I was started to learn How to code ,how to make a beauti website with HTML,CSS and JS<br />
                              I wanna be a frontend developer .What's the reason? I say no ! I don't have any reason!<br />
                              Yeah &gt;&gt; It's just like that !
                            </p>
                            <button type="button" onclick="love()">View Me</button>
                          </div>
                        </div>
                        <div className="wrapper-fake" id="wrapper2-fake">
                          <div className="images-fake">
                            <div className="image" />
                            <div className="image" />
                            <div className="image" />
                            <div className="image" />
                          </div>
                        </div>
                        <div className="navigation">
                          <div className="navigation-right">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-right" width={26} height={26} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="9 6 15 12 9 18" />
                            </svg>
                          </div>
                          <div className="navigation-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-left" width={26} height={26} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="15 6 9 12 15 18" />
                            </svg>
                          </div>
                        </div>
                      </main>
                      <div className="close" id="main-close">×</div>
                    </div>
                    <div className="contact-wrapper" id="all-contact-wrapper">
                      <form id="contact">
                        <h3> Contact me</h3>
                        <h4>Contact me today, and get reply with in 24 hours!</h4>
                        <fieldset>
                          <input placeholder="Your name" type="text" tabIndex={1} required />
                        </fieldset>
                        <fieldset>
                          <input placeholder="Your Email Address" type="email" tabIndex={2} required />
                        </fieldset>
                        <fieldset>
                          <input placeholder="Your Phone Number" type="tel" tabIndex={3} required />
                        </fieldset>
                        <fieldset>
                          <input placeholder="Your Web Site starts with http://" type="url" tabIndex={4} required />
                        </fieldset>
                        <fieldset>
                          <textarea placeholder="Type your Message Here...." tabIndex={5} required defaultValue={""} />
                        </fieldset>
                        <fieldset>
                          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                        </fieldset>
                      </form>
                      <div className="map-wrap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d515671.72967012034!2d105.8345349976918!3d17.623017877255435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1604911808759!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                      </div>
                    </div>
                    <div className="name-animation">
                      <div className="stage">
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                        <div className="layer" />
                      </div>
                    </div>
                    <div className="video-next">
                      <iframe width={640} height={360} src="https://www.youtube.com/embed/RWLyaTpw1VY" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      <div className="running_man active">
                        <div className="textarea">
                          <span>Love<br />by Duyet</span>
                          <span>Run</span>
                          <span>ning</span>
                          <span>with</span>
                          <span>Me</span>
                        </div>
                        <figure className="man" style={{left: '0px', backgroundImage: 'url("http://www.vicchoutw.com/codepen/images/javascript/running/runman7.png")'}} />
                      </div>
                      {/* for preloading images */}
                      <div id="preload">
                        <img src="http://www.vicchoutw.com/codepen/images/javascript/running/runman1.png" />
                        <img src="http://www.vicchoutw.com/codepen/images/javascript/running/runman2.png" />
                        <img src="http://www.vicchoutw.com/codepen/images/javascript/running/runman3.png" />
                        <img src="http://www.vicchoutw.com/codepen/images/javascript/running/runman4.png" />
                        <img src="http://www.vicchoutw.com/codepen/images/javascript/running/runman5.png" />
                        <img src="http://www.vicchoutw.com/codepen/images/javascript/running/runman6.png" />
                        <img src="http://www.vicchoutw.com/codepen/images/javascript/running/runman7.png" />
                        <img src="http://www.vicchoutw.com/codepen/images/javascript/running/runman8.png" />
                      </div>
                      <div className="facebook-comment">
                        <div id="fb-root" className=" fb_reset"><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div /></div></div>
                        <div className="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="https://dinhsyduyet.blogspot.com" data-numposts={5} data-width fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&container_width=466&height=100&href=https%3A%2F%2Fdinhsyduyet.blogspot.com%2F&locale=vi_VN&numposts=5&sdk=joey&version=v8.0&width=550"><span style={{verticalAlign: 'bottom', width: '550px', height: '0px'}}><iframe name="f88d261912eef8" width="550px" height="100px" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v8.0/plugins/comments.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df16138c40fdea8%26domain%3Dmy-cv2.vercel.app%26origin%3Dhttps%253A%252F%252Fmy-cv2.vercel.app%252Ff1217df23327558%26relation%3Dparent.parent&container_width=466&height=100&href=https%3A%2F%2Fdinhsyduyet.blogspot.com%2F&locale=vi_VN&numposts=5&sdk=joey&version=v8.0&width=550" style={{border: 'none', visibility: 'visible', width: '550px', height: '0px'}} className /></span></div>
                      </div>
                    </div>
                  </div>
                  <footer className="main-footer">
                    <div className="copywrite">Copyright © 2020 Dinh Si Duyet</div>
                  </footer>
                </div>
            


        )
    }
}

export default App;