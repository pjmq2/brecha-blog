import React from 'react'
import { Offline, Online } from "react-detect-offline";
import Layout from '../components/layout'
import Snake from '../components/Snake'

const Tutorial = (props) => (
    <Layout>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Instrucciones para leer el blog (Tutorial)</h1>
                    </header>
                    <Online>
                            <p>Hola, primero que todo creo que te estarás preguntando porque un blog tiene instrucciones, y es que me pareció que ser un blog normal es muy aburrido entonces quiero hacer algo en el que podamos interactuar un poco más que yo sólo escribir y ustedes sólo leer.</p>
                            <p>A lo largo de las diferentes páginas van a ver cosas escondidas qué revelan más material que a simple vista no están disponibles, algunas instrucciones van a ser un poco complicadas cómo ganar algún nivel de un minijuego, otras van a ser muy claras como: </p>
                            <h3><strong>Apague su internet en este momento</strong></h3>
                            <p>Otras que van a ser completamente escondidas y van a tener que encontrar por sus propios medios. <sup><em>(no hagan spoilers a otras personas)</em></sup>    Finalmente hay otras que sólo son pequeños detalles que voy poniendo de vez en cuando. Tampoco tengo tanto tiempo como para improvisar programar una nueva aplicación cada semana o mes pero voy a intentar mantenerlos entretenidos.</p>
                            <p>Si llegaste aquí y no has visto nada secreto te recomiendo que vuelvas a empezar este tutorial.</p>
                            <p>En general espero que les guste mi página y que Dios los bendiga</p>

                    </Online>

                    <Offline>
                        <p>Hola acabas de empezar con el primer secreto de mi página !</p>
                        <p>Ahora te dejo una sorpresa para que te diviertas un rato antes de volver a poner el wifi (Solo funciona en computadora)</p>
                        <Snake/>
                    </Offline>
                </div>
            </section>
        </div>

    </Layout>
)

export default Tutorial