import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Brecha de Pablo Madrigal</h1>
            </header>
            <div className="content">
                <p>Página personal para el periodo de la Brecha y la formación con los siervos</p>
                <ul className="actions">
                    <li><Link to="/tutorial" className="button next scrolly">Instrucciones para ver el Blog</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
