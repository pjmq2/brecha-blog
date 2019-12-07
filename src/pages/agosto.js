import React from 'react'
import Layout from '../components/layout'
//import EarthApp from '../components/globoTerraqueo'
import MapOnModal from '../components/MapaEnModal'
import ReactPlayer from 'react-player'

import pic1 from '../assets/images/Agosto/IMG-20190819.jpg'
import pic2 from '../assets/images/Agosto/IMG-20190820.jpg'

const MapStyles = {
    width: '80%',
    height: '100%'
  }

const Agosto = (props) => (
    <Layout>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Agosto: Adiós Costa Rica, Hola Monterrey</h1>
                    </header>
                    <span className="image main"><img src={pic1} alt="" /></span>

                    <p>Tenía ganas de hacer un blog desde el inicio de mi brecha, pero me fui un poco ambicioso y estoy pudiendo publicar el primer post 
                    hasta 3 meses después, a pesar de que ya lo había escrito hace rato no había encontrado la plataforma para poner todo lo que quería 
                    entonces un poco tarde pero aquí les va.</p>

                    <p>La vida comunitaria demasiado chiva y uno puede sentirse en casa aún estando casi 3000 kilómetros de distancia. Además es un 
                    misterio por qué a pesar de ser diferentes países y culturas todos compartimos el mismo "Modo de Vida" y por alguna razón podemos 
                    "detectar" a nuestra gente fácilmente. Me pasó que cuando llegué a Monterrey el hermano que me fue recoger al aeropuerto del cual 
                    no tenía datos más que su apodo y un WhatsApp que decía "voy atrasado espérame afuera, llegó en la Urvan". Vale aclarar que no 
                    sabía que era una Urvan, no tenía la placa, ni el color del carro pero por obra del espíritu Santo cuando llegó la primera buseta 
                    que vi abrí la puerta y me monté yo no pregunté nada él tampoco preguntó nada cuando ya nos alejamos del aeropuerto me dijo si sos 
                    Pablo verdad.</p>

                    <p> Monterrey es muy grande comparado a Costa Rica, las calles son dos o tres veces más grandes y con el doble de niveles, la ciudad 
                    tiene casi la población de todo mi país y el estado de Nuevo León es tres veces más grande, y por lo tanto la vida es muy diferente, 
                    de no ser por qué como dije antes el "Modo de vida" comunitario es prácticamente igual ya sea Costa Rica, Guatemala, España o México, 
                    SOMOS UN MISMO PUEBLO. </p>

                    <p>Acá en México cambie un poco en mis servicios, ya que a pesar de ir a CEM casi toda mi universidad, mi servicio principal era con 
                    adolescentes en Shalom. Aquí me tocó servir en el MCU del Tecnológico de Monterrey (que queda a menos de 500m de la casa)</p>

                    <MapOnModal/>
                    <br/>
                    <p>Además estoy apoyando con VIVAMUS (una carrera que organiza la comunidad) y en la oficina de finanzas de los Siervos. Por lo que 
                    tengo bastante servicio y muchas cosas que estar haciendo.</p>

                    <p>Cómo estoy publicando esto hasta mucho después puedo dejarles un resumen de lo que fue VIVAMUS, como un adelanto 😉</p>
                   
                    <center> <ReactPlayer url="https://www.youtube.com/watch?v=d5m8_r-ECC4" /> </center>
                    <br/>

                    <p>En mi generación de la Brecha somos 10 aunque la mitad se van a ir a otras comunidades, ya tuvimos la primera despedida y pronto se 
                    van otros 3. Pero es una generación muy chiva y bastante diversa, varios mexicanos, una Dominicana, un Indio y yo. En los hombres 
                    estamos David huitrón de aquí de Monterrey, Ricardo Ibarra de Mexicali, Jonathan León de Xalapa, Nathaniel Fernández de India y yo de 
                    Costa Rica. Las mujeres son Maria García de República Dominicana, Isabel de Tampico, Magui Perez de Xalapa, Sara Llamas y Sandra Delgado de 
                    San Miguel Allende</p>

                    <span className="image main"><img src={pic2} alt="" /></span>

                    <p>Y en general este primer mes ha sido vivir la formación de la Brecha (al fin oficialmente) e ir conociendo un poco la ciudad y 
                    los hermanos con los que me tocó servir. Por suerte ya venía un poco preparado para manejar aquí y desde mi primer día ya pude tomar
                     un carro y moverme por la ciudad, lo que nadie me explico es que con cualquier lluvia (aún las más pequeñas) la ciudad se inunda y 
                     así me pasó que a los 15 días ya quedé con un carro inundado en medio de una avenida 🤦🏻‍♂️. Gracias a Dios unos muchachos (ángeles) que 
                     estaban pasando por ahí nos ayudaron a secar el motor y pudimos volver a casa sanos y salvos.</p>

                </div>
            </section>
        </div>

    </Layout>
)

export default Agosto