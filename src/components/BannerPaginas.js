import React from 'react'

const BannerPaginas = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>{props.titulo}</h1>
            </header>
            <div className="content">
                <p>{props.descripcion}</p>
            </div>
        </div>
    </section>
)

export default BannerPaginas
