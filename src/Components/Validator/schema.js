import * as Yup from 'yup'

export default Yup.object().shape({
    foto: Yup.string().required('Informe o link da foto'),
    nome: Yup.string().min(5, 'Deve ter pelo menos 5 caracteres').required('Qual o nome da instituição?'),
    cidade: Yup.string().min(5, 'Deve ter pelo menos 5 caracteres').required('Qual a cidade?'),
    historia: Yup.string().min(300, 'Deve ter pelo menos 300 caracteres').max(550, 'Isso já é suficiente, obrigado! :)').required('Conte uma história legal sobre sua instituição.'),
    telefone: Yup.string().required('Qual o telefone para entrarem em contato?'),
    email: Yup.string().email().required('Informe o e-mail corretamente, contendo o @ e o . no lugar certo, ok?'),
    instagram: Yup.string().required('Qual o seu @ do instagram?'),
    facebook: Yup.string().required('Qual o seu perfil no Facebook?')
})