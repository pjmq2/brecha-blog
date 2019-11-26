import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import Brecha from '../assets/images/Retiro_Inicio_Brecha.jpg'
import MCU from '../assets/images/MCU-CenaGala.jpg'
import Siervos from '../assets/images/SiervosMatacanes.jpg'
import VIVAMUS from '../assets/images/VIVAMUS.jpg'

/*import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'*/

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Banner />
                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${Siervos})`}}>
                            <header className="major">
                                <h3>Siervos de la Palabra</h3>
                                <p>Amarlo y que sea amado</p>
                            </header>
                            <Link to="/siervos" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${Brecha})`}}>
                            <header className="major">
                                <h3>En la Brecha</h3>
                                <p>Programa de misioneros voluntarios</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${MCU})`,backgroundPosition: "top"}}>
                            <header className="major">
                                <h3>MCU</h3>
                                <p>Todo por amor a Cristo</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${VIVAMUS})`}}>
                            <header className="major">
                                <h3>Jesed</h3>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex