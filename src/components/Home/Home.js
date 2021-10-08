import React from 'react'
import './Home.scss'
import Quicksell from '../../resources/frontendquicksellv2.PNG'
import Github from '../../resources/github_logo.png'
import Linkedin from '../../resources/linkedin_logo.png'
import Email from '../../resources/email_logo.png'

import HRF_Project from '../../resources/HRF_project.PNG'
import tt16_project from '../../resources/tt16_project.png'
import Backend_project from '../../resources/backend_project.png'



const Home = () => {
    
    return (

        <div class="home">
            <div class="section-top">
                    {/* <div class="header">
                            <a href="/" class="current-page">HOME</a>
                            <a>PROJECTS</a>
                            <a href="/about">ABOUT</a>
                    </div> */}

                    <div>
                            <pre>F U L L S T A C K    D E V E L O P E R</pre>
                            <h1>SECOYA WOOD</h1>
                            {/* <pre>J A V A S C R I P T    |    P Y T H O N    |    N O D E    |    P O S T G R E S Q L    |    M O R E    +</pre> */}
                            <div>
                                    <a href="https://github.com/secoyawood" target="_blank">
                                        <img class="contact-buttons" src={Github}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/secoyawood/" target="_blank">
                                        <img class="contact-buttons" src={Linkedin}/>
                                    </a>
                                    <a href="mailto: zionywood@outlook.com" target="_blank">
                                        <img class="contact-buttons" src={Email}/>
                                    </a>

                            </div>
                    </div>
            </div>
            
            <div class="section-middle">
                <div class="tech-skills-card">
                    <h2 class="tech-title">TECHNICAL SKILLS</h2>
                        <div class="tech-skills-container">
                            
                            <div class="skill-type-sub-card">
                                <div id="skill-type-sub-card-frontend" class="skill-type-sub-card-title">
                                    <h3>FRONTEND</h3>
                                </div>
                                <h4>HTML5/CSS3/SASS/LESS</h4>
                                <h4>JAVASCRIPT</h4>
                                <h4>REACT.JS</h4>
                                <h4>REDUX.JS</h4>
                                <h4>JEST</h4>

                            </div>
                            <div class="skill-type-sub-card">
                                <div class="skill-type-sub-card-title">
                                    <h3>BACKEND</h3>
                                </div>
                                <h4>SQL/POSTGRESQL/SQLITE</h4>
                                <h4>PYTHON</h4>
                                <h4>NODE.JS</h4>
                                <h4>REST APIs</h4>
                                <h4>EXPRESS.JS</h4>

                            </div>
                        </div>    
                        <h4 class="text-more">AND MORE</h4>      

                </div>
                     
                    <div class='projects-main'>

                            {/* <div class="project">
                                <h2 class="project-title">QuickSell</h2>
                                <h3 class="project-stack">REACT - SASS - NODE - POSTGRESQL</h3>
                                <h3 class='project-subtitle'>Fullstack consumer-to-consumer marketplace</h3>
                                <img class="project-picture" src={Quicksell}/>
                      

                            </div>

                            <div class="project">
                                <h2 class="project-title">Crypto Trading Bot</h2>
                                <h3 class="project-stack">JAVASCRIPT - NODE - COINBASE</h3>
                                <h3 class='project-subtitle'>Fullstack consumer-to-consumer marketplace</h3>
                                <img class="project-picture" src={Quicksell}/>
                     

                            </div>

                            <div class="project">
                                <h2 class="project-title">Dev Browser</h2>
                                <h3 class="project-stack">REACT - SASS - NODE - POSTGRESQL</h3>
                                <h3 class='project-subtitle'>Fullstack consumer-to-consumer marketplace</h3>
                                
                                <img class="project-picture" src={Quicksell}/>
                           

                            </div> */}
                            
                    </div>

            </div>
            <div class="section-bottom">
                <h2>TOP PROJECTS</h2>
                {/* <button>VIEW ALL PROJECTS HERE</button> */}
                <h3>MORE PROJECTS COMING SOON</h3>
                <div class="top-projects-container">
                            <div class="project-card">
                                <div class="project-card-title">
                                    <h3>HUMAN RIGHTS FIRST: ASYLUM</h3>
                                </div>
                                <h4>FULLSTACK</h4>
                                <h5>REACT.JS | NODE.JS | PYTHON</h5>
                                <p>A web application that serves to aid asylum lawyers <br/>
                                 with their cases, providing data visualizations and tools.</p>
                                 <img src={HRF_Project}></img>
                                 <button>PROJECT DETAILS</button>
                                 <h4></h4>
                            </div>
                            <div class="project-card" id="left-card">
                                <div class="project-card-title">
                                    <h3>POTLUCK VAULT</h3>
                                </div>
                                <h4>BACKEND</h4>
                                <h5>NODE.JS | EXPRESS</h5>
                                <p>Server backend for Potluck Vault application <br/>
                                 with full CRUD capabilities and middlware verification.</p>
                                 <img src={Backend_project}></img>
                                 <button>PROJECT DETAILS</button>
                                 <h4></h4>
                            </div>
                            <div class="project-card" id="last-card">
                                <div class="project-card-title">
                                    <h3>Secret Recipes</h3>
                                </div>
                                <h4>FRONTEND</h4>
                                <h5>REACT.JS | HTML/SASS </h5>
                                <p>Frontend application that allows users to store <br/>
                                 and share family recipes for long term usage</p>
                                 <img src={tt16_project}></img>
                                 <button>PROJECT DETAILS</button>
                                 <h4></h4>
                            </div>
                </div>
            </div>
            <div class="footer">
                <h3>CONTACT</h3>
                <div class="footer-link-container">
                    <a class="footer-links">Github</a>
                    <a class="footer-links">Linkedin</a>
                    <a class="footer-links">Email</a>
                </div>
         
            </div>

        </div>

    )
}

export default Home
