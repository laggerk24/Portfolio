import React from 'react'

const services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <i className="uil uil servicec__icon"></i>
                <h3 className="services__title"></h3>
            </div>

            <span className="services__button">View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className="services__modal">
                <i className="uil uil-times services__modal-close"></i>
            </div>
        </section>
    )
}

export default services