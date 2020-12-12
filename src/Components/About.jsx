import {SiNetlify} from "react-icons/si"
import {RiLinkedinBoxLine } from "react-icons/ri";
import {DiGithub} from "react-icons/di"
import '../Styles/about.css'

const About = () => {

    return (
        <div id='about' className='container-about'>
            <div className='size-container-about'>
                <h1>Sobre o projeto Abrace o próximo</h1>
                
                <p>A projeto Abrace o Próximo foi idealizado por mim, Ludmila Oliveira, e ele nasceu com o intuito de reunir diversas instituições e porporcionar visibilidade para cada uma delas. Desde muito nova eu cresci tendo a consciência de que sempre podemos ajudar o próximo, independente do recurso que temos. E como seria isso?</p>

                <p>Podemos doar qualquer valor, mesmo que para você seja pouco; alimentos e água; brinquedos e roupas que estão em bom estado de conservação e que não utilizamos mais, e só estão juntando poeira na sua casa; medicamentos e produtos de higiene; e algo que muitos não param para pensar... nosso tempo.</p>
                
                <p>Um tempo para ser voluntário em uma instituição, ajudando a dar banho em um cachorrinho, cortando legumes da sopa para servir outras pessoas, se propondo a ler histórias para algumas crianças. Tempo que podemos até dispor para ajudar a dar visibilidade para estas belas instituições e assim permitir que mais pessoas possam abraçá-las.</p>
                
                <p>Aqui qualquer pessoa pode conhecer facilmente um pouco de cada instituição, necessidades e contatos, e assim decidir qual causa abraçar entrando direto em contato com a instituição escolhida, bem como, aqui qualquer instituição pode fazer seu cadastro e assim fazer parte do nosso projeto.❤</p>

                <div className='container-about-contact'>

                    <a className="social" href="https://www.linkedin.com/in/ludmila-oliveira-3b79621b3/" target="blank">
                        <RiLinkedinBoxLine size={40} color="#ffffff"/>
                    </a>

                    <a className="social" href="https://github.com/Ludmila-Oliveira" target="blank">
                        <DiGithub size={46} color="#ffffff"/>
                    </a>

                    <a className="social" href="https://app.netlify.com/teams/ludsh220/" target="blank">
                        <SiNetlify size={32} color="#ffffff"/>
                    </a>
    
                </div>
            </div>
        </div>
    )
}

export default About