import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const resume = () => {
    return(
        <section class="section" id="resume">
            <div style={{minHeight: "1.5rem" }} class="is-hidden-mobile"></div>
            <div style={{minHeight: "0.75rem" }} class="is-hidden-tablet"></div>
            <div class="container">

                <h1 class="title">
                    Resume
                </h1>
                <div class="columns is-centered is-multiline">
                    <nav class="level column is-12" style={{maxWidth: '1000px'}}>
                        <div class="columns is-centered" style={{width: '100%', margin: '0'}}>
                            <div class="column is-4">
                                <div class="is-size-4 has-text-weight-bold" style={{width: '100%'}}>
                                    Education
                                </div>
                            </div>
                            <div class="column is-7">
                                <div style={{width: '100%'}}>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">Stanford Graduate School of Education</span><br />
                                        MA, Learning, Design, & Technology <span style={{color: 'hsl(0, 0%, 60%)'}}>(2015)</span>
                                    </p>
                                    <div style={{height: '0.75rem'}}></div>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">Yale University</span><br />
                                        BA, Political Science <span style={{color: 'hsl(0, 0%, 60%)'}}>(2006)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav class="level column is-12" style={{maxWidth: '1000px'}}>
                        <div class="columns is-centered" style={{width: '100%', margin: '0'}}>
                            <div class="column is-4">
                                <div class="is-size-4 has-text-weight-bold" style={{width: '100%'}}>
                                    Experience
                                </div>
                            </div>
                            <div class="column is-7">
                                <div style={{width: '100%'}}>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">Mike Dunham for Burlingame City Council</span><br />
                                        <a href="https://www.MikeForBurlingame.com" target="_blank" rel="noopener noreferrer">www.MikeForBurlingame.com</a><br />
                                        <span style={{color: 'hsl(0, 0%, 60%)'}}>7/2019 - 11/2019</span>
                                        <br />
                                        <div class="content">
                                            <ul>
                                                <li style={{marginLeft: '-15px'}}>Ran grassroots city council campaign challenging two incumbents over housing, transportation, and equity issues.</li>
                                                <li style={{marginLeft: '-15px'}}>Raised $25,000, knocked more than 14,000 doors with 45+ volunteers, and helped drive turnout to its highest level in 15 years.</li>
                                            </ul>
                                        </div>
                                    </p>
                                </div>

                                <div style={{height: '0.75rem'}}></div>

                                <div style={{width: '100%'}}>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">Summit Public Schools - Director of Data / Consultant</span><br />
                                        <a href="https://www.SummitPS.org" target="_blank" rel="noopener noreferrer">www.SummitPS.org</a><br />
                                        <span style={{color: 'hsl(0, 0%, 60%)'}}>8/2015 - 6/2019</span>
                                        <br />
                                        <div class="content">
                                            <ul>
                                                <li style={{marginLeft: '-15px'}}>Managed team of 6 to setup and operate numerous student data systems and provide data, reporting, scheduling, and operational support to 11 schools in CA and WA.</li>
                                            </ul>
                                        </div>
                                        
                                    </p>
                                </div>

                                <div style={{height: '0.75rem'}}></div>

                                <div style={{width: '100%'}}>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">New Classrooms - SQL Developer / Sr. Mgr. of Student Progression</span><br />
                                        <a href="https://www.NewClassrooms.org" target="_blank" rel="noopener noreferrer">www.NewClassrooms.org</a><br />
                                        <span style={{color: 'hsl(0, 0%, 60%)'}}>7/2012 - 8/2014</span>
                                        <br />
                                        <div class="content">
                                            <ul>
                                                <li style={{marginLeft: '-15px'}}>Developed and maintained large suite of SQL-based data integrity tests for one of the country's earliest personalized learning programs.</li>
                                                <li style={{marginLeft: '-15px'}}>Led cross-functional team (academics, operations, engineering) to build next-generation of tools for dynamically moving 6,000 students through the program's curriculum.</li>
                                            </ul>
                                        </div>
                                        
                                    </p>
                                </div>

                                <div style={{height: '0.75rem'}}></div>

                                <div style={{width: '100%'}}>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">Teach For America - 5th Grade Math Teacher</span><br />
                                        <a href="https://www.TeachForAmerica.org" target="_blank" rel="noopener noreferrer">www.TeachForAmerica.org</a><br />
                                        <span style={{color: 'hsl(0, 0%, 60%)'}}>6/2010 - 6/2012</span>
                                        <br />
                                        <div class="content">
                                            <ul>
                                                <li style={{marginLeft: '-15px'}}>Selected into a highly-competitive public service program and taught for 2 years in an under-served Brooklyn neighborhood.</li>
                                            </ul>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <nav class="level column is-12" style={{maxWidth: '1000px'}}>
                        <div class="columns is-centered" style={{width: '100%', margin: '0'}}>
                            <div class="column is-4">
                                <div class="is-size-4 has-text-weight-bold" style={{width: '100%'}}>
                                    Links
                                </div>
                            </div>
                            <div class="column is-7">
                                <div style={{width: '100%'}}>
                                    <p class="is-size-6">
                                        <a href="/documents/Mike Dunham - Resume (Web).pdf" target="_blank" rel="noopener noreferrer">
                                            <span class="has-text-weight-bold" style={{verticalAlign: 'middle'}}>Download Resume</span>
                                            <span class="icon" style={{verticalAlign: 'middle'}}>
                                                <FontAwesomeIcon icon={faFilePdf} />
                                            </span>
                                        </a>
                                    </p>
                                    <div style={{height: '0.75rem'}}></div>
                                    <p class="is-size-6">
                                        <a href="https://www.linkedin.com/in/mikeldunham/" target="_blank" rel="noopener noreferrer">
                                            <span class="has-text-weight-bold" style={{verticalAlign: 'middle'}}>View LinkedIn</span>
                                            <span class="icon" style={{verticalAlign: 'middle'}}>
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </span>
                                        </a>
                                    </p>
                                    <div style={{height: '0.75rem'}}></div>
                                    <p class="is-size-6">
                                        <a href="https://github.com/dunham-mike" target="_blank" rel="noopener noreferrer">
                                            <span class="has-text-weight-bold" style={{verticalAlign: 'middle'}}>View GitHub</span>
                                            <span class="icon" style={{verticalAlign: 'middle'}}>
                                                <FontAwesomeIcon icon={faGithub} />
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default resume;