import MenuBurger from '../Components/MenuBurger'
import Header from '../Components/Header'
import Institutions from '../Components/Institutions'
import About from '../Components/About'
import FormInstitution from '../Components/FormInstitution'
import Footer from '../Components/Footer'
import {useState} from 'react'
import institutionsList from '../Datas/institutionsList.json'
import '../Styles/singlepage.css'

const SinglePage = () => {
    const [allInstitution, setAllInstitution] = useState(institutionsList.instituicoes)

    return (
        <>
            <MenuBurger/>
            <Header/>
            <Institutions allInstitution={allInstitution}/>
            <About/>
            <FormInstitution allInstitution={allInstitution} setAllInstitution={setAllInstitution}/>
            <Footer/>
        </>
    )
}

export default SinglePage
