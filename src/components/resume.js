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
                                        MA, Learning, Design, & Technology <span style={{color: 'hsl(0, 0%, 60%)'}}>(2015)</span><br />
                                        <span class="content is-size-7">
                                            Relevant coursework:
                                            <ul style={{ marginTop: '0px' }}>
                                                <li>CS 106B - Programming Abstractions</li>
                                                <li>CS 193P - iPhone and iPad Application Programming</li>
                                                <li>CS 298 - Seminar on Teaching Introductory Computer Science</li>
                                            </ul> 
                                        </span>
                                    </p>
                                    <div style={{height: '1.125rem'}}></div>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">Yale University</span><br />
                                        BA, Political Science <span style={{color: 'hsl(0, 0%, 60%)'}}>(2006)</span>
                                    </p>
                                    <div style={{height: '1.125rem'}}></div>
                                    <p class="is-size-6">
                                        <div>
                                            <span class="has-text-weight-bold">Online Coursework</span><span style={{color: 'hsl(0, 0%, 60%)'}}> (2020)</span><br />
                                        </div>
                                        <div class="content is-size-7">
                                            <div style={{ marginTop: '4px' }}>
                                                Udemy:
                                                <ul style={{ marginTop: '0px' }}>
                                                    <li>The Complete 2020 Web Development Bootcamp</li>
                                                    <li>JavaScript - Understanding the Weird Parts</li>
                                                    <li>React - The Complete Guide</li>
                                                </ul> 
                                            </div>
                                            <div style={{ marginTop: '4px' }}>
                                                Pluralsight:
                                                <ul style={{ marginTop: '0px' }}>
                                                    <li>Node.js: Getting Started</li>
                                                    <li>Building Web Applications with Node.js and Express 4.0</li>
                                                </ul> 
                                            </div>
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
                                    Technical<br/>Experience
                                </div>
                            </div>
                            <div class="column is-7">
                                <div style={{width: '100%'}}>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">Summit Public Schools - Director of Data / Consultant</span><br />
                                        <a href="https://www.SummitPS.org" target="_blank" rel="noopener noreferrer">www.SummitPS.org</a><br />
                                        <span style={{color: 'hsl(0, 0%, 60%)'}}>8/2015 - 6/2019</span>
                                        <br />
                                        <div class="content" style={{ marginTop: '-5px' }}>
                                            <ul>
                                                <li style={{marginLeft: '-15px'}}>Managed team of 6 to setup and operate numerous student data systems and provide data, reporting, scheduling, and operational support to 11 schools in CA and WA.</li>
                                                <li style={{marginLeft: '-15px'}}>Led the network's first implementation of algorithmic student scheduling.
                                                Replaced a manual spreadsheet-based process and delivered 100% of schedules on time and with near-perfect accuracy.</li>
                                            </ul>
                                        </div>
                                        
                                    </p>
                                </div>

                                <div style={{height: '1.125rem'}}></div>

                                <div style={{width: '100%'}}>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">New Classrooms - SQL Developer / Sr. Mgr. of Student Progression</span><br />
                                        <a href="https://www.NewClassrooms.org" target="_blank" rel="noopener noreferrer">www.NewClassrooms.org</a><br />
                                        <span style={{color: 'hsl(0, 0%, 60%)'}}>7/2012 - 8/2014</span>
                                        <br />
                                        <div class="content" style={{ marginTop: '-5px' }}>
                                            <ul>
                                                <li style={{marginLeft: '-15px'}}>Developed and maintained large suite of SQL-based data integrity tests for one of the country's earliest personalized learning programs.</li>
                                                <li style={{marginLeft: '-15px'}}>Led cross-functional team (academics, operations, engineering) to build next-generation of software tools for dynamically moving 6,000 students through the program's curriculum.</li>
                                            </ul>
                                        </div>
                                        
                                    </p>
                                </div>

                                <div style={{height: '1.125rem'}}></div>

                                <div style={{width: '100%'}}>
                                    <p class="is-size-6">
                                        <span class="has-text-weight-bold">Teach For America - 5th Grade Math Teacher</span><br />
                                        <a href="https://www.TeachForAmerica.org" target="_blank" rel="noopener noreferrer">www.TeachForAmerica.org</a><br />
                                        <span style={{color: 'hsl(0, 0%, 60%)'}}>6/2010 - 6/2012</span>
                                        <br />
                                        <div class="content" style={{ marginTop: '-5px' }}>
                                            <ul>
                                                <li style={{marginLeft: '-15px'}}>Selected into a highly-competitive public service program and taught for 2 years in an under-served Brooklyn neighborhood.</li>
                                                <li style={{marginLeft: '-15px'}}>Created school's first-ever Computer Club, teaching dozens of students HTML and CSS after school.</li>
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