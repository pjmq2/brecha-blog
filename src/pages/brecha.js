import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import BannerPaginas from '../components/BannerPaginas'

import pic08 from '../assets/images/Agosto/20190822_154601-COLLAGE.jpg'
import pic09 from '../assets/images/Agosto/el-cerro-de-la-silla.jpg'
import pic10 from '../assets/images/pic10.jpg'

const descripcionBanner = "'Busqué entre ellos un hombre que levantara una muralla y que se pusiera en la brecha delante de mí, a favor de la tierra, para que yo no la destruyera; pero no lo hallé.' - Ezequiel 22:30";

const brecha = (props) => (
    <Layout>
        <BannerPaginas titulo="EN LA BRECHA" descripcion={descripcionBanner}/>
        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Soy Brechista</h2>
                    </header>
                    {/*<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>*/}
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Primer mes: Adiós Costa Rica, Hola Monterrey</h3>
                            </header>
                            {/*<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>*/}
                            <ul className="actions">
                                <li><Link to="/agosto" className="button">Leer más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/*
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Segundo mes: Conquistando cerros</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Leer más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Tercer mes: VIVAMUS</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Leer más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>*/}
            </section>
        </div>
    </Layout>
)

export default brecha