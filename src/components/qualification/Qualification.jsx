import React from 'react'
import "./qualification.css"

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification-icon"></i> Education
                    </div>
                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification-icon"></i> Experience
                    </div>
                    <div className="qualification__button button--flex">
                        <i className="uil uil- qualification-icon"></i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Mechanical Engineer</h3>
                                <span className="qualification__subtitle">Punjab Engineering College</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018-2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Student</h3>
                                <span className="qualification__subtitle">Kendriya Vidyalya</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016-2018
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification