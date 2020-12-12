import {useState} from 'react'
import Modal from '../Components/Modal'
import {FiInstagram, FiFacebook} from "react-icons/fi"
import '../Styles/institutions.css'

const Institutions = ({allInstitution}) => {
  
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [currentInstitution, setcurrentInstitution] = useState(null)

    return (
        <div className='container-institutions'>
            <h1>Conheça nossas instituições</h1>

            <div id='institutions' className='container-cards'>
                
                {
                        allInstitution.map(institutions => {
                        return (
                            <div key={institutions.id} className='card-institutions'>
                                
                                <section id='about-institutions'>
                                    <img src={institutions.foto} alt='Foto da instituição'/>
                                    <h3>{institutions.nome}</h3>
                                    <p>{institutions.cidade} | {institutions.estado}</p>
                                </section>

                                <button className='button-institutions' onClick={() => {
                                    setIsModalVisible(true)
                                    setcurrentInstitution(institutions)
                                }}>SAIBA MAIS</button>

                                    {isModalVisible ? (
                                        <Modal onClose={() => setIsModalVisible(false)}>
                                            <p id='p-history'>{currentInstitution.historia}</p>
                                            <p id='p-necessity'><b>Nossas necessidades são: </b>{currentInstitution.necessidades.join(' | ')}</p>
                                            <p id='p-email'>Entre em contato conosco através do nosso e-mail {currentInstitution.email} ou {currentInstitution.telefone}.</p>
                                            
                                            <section id='social-institution'>
                                                <a href={currentInstitution.instagram}target='blank'>
                                                    <FiInstagram size={36} color="#ffffff"/>
                                                </a>
                                                <a href={currentInstitution.facebook}target='blank'>
                                                    <FiFacebook size={36} color="#ffffff"/>
                                                </a>
                                            </section>

                                        </Modal>
                                    ) : null}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Institutions
