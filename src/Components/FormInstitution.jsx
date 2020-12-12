import '../Styles/formInstitution.css'
import schema from './Validator/schema'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
 
const FormInstitution = ({allInstitution, setAllInstitution}) => {
    
    // --------------- Evento de envio do Formulario --------------------------   
    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {

            values.id = allInstitution.length + 1
                        
            setAllInstitution([...allInstitution, values]) //criei uma cópia da lista e adicionei o novo item, evitando que houvesse sobre inscrição
            
            // Modal de mensagem de envio
            Swal.fire({
                title: 'Sucesso!',
                text: 'Sua instituição foi cadastrada!',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#bb4f04',
            })
        
            resetForm({})
            setSubmitting(false);

        }, 400);
    }
    // --------------- Montagem do formulário --------------------------   

    return(
        <div id='form' className='container-form'>
            <h1>Cadastre sua instituição</h1>
            <Formik
            initialValues={{
                foto: '',
                nome: '',
                cidade: '',
                estado: '',
                historia: '',
                necessidades: '',
                telefone: '',
                email: '',
                instagram: '',
                facebook: '',
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
            validateOnMount
            >
            {({             
            isSubmitting,
            }) => (
                <Form id='form-area'>
                    <fieldset>
                        <legend>Sobre sua Instituição</legend>

                        <label>URL da foto:</label>
                        <Field
                            type='text'
                            name='foto'
                            id='photo'
                            className='width-input'
                            placeholder='Cole a url da sua foto aqui'                            
                        />
                        <p className='error'>{<ErrorMessage name='foto'/>}</p>
                        <br/> 
                       
                        <label>Nome:</label>
                        <Field
                            name='nome'
                            id='name'
                            className='width-input'
                            type='text'
                            placeholder='Nome da sua instituição'
                        />
                        <p className='error'>{<ErrorMessage name='nome'/>}</p>
                        <br/><br/>  
                       
                        <label>Cidade:</label>
                        <Field
                            className='width-input'
                            type='text'
                            name='cidade'
                            id='city'
                            placeholder='Digite sua cidade'
                        />
                        <p className='error'>{<ErrorMessage name='cidade'/>}</p>   
                        <br/><br/>                      

                        <label>Estado:</label>
                        <Field as="select" name="estado">
                            <option value='vazio'>Selecione</option>
                            <option value='Acre'>AC</option>
                            <option value='Alagoas'>AL</option>
                            <option value='Amapa'>AP</option>
                            <option value='Amazonas'>AM</option>
                            <option value='Bahia'>BA</option>
                            <option value='Ceara'>CE</option>
                            <option value='Distrito Federal'>DF</option>
                            <option value='Espirito Santo'>ES</option>
                            <option value='Goias'>GO</option>
                            <option value='Maranhao'>MA</option>
                            <option value='Mato Grosso'>MT</option>
                            <option value='Mato Grosso do Sul'>MS</option>
                            <option value='Minas Gerais'>MG</option>
                            <option value='Para'>PA</option>
                            <option value='Paraiba'>PB</option>
                            <option value='Parana'>PR</option>
                            <option value='Pernambuco'>PE</option>
                            <option value='Piaui'>PI</option>
                            <option value='Rio de Janeiro'>RJ</option>
                            <option value='Rio Grande do Norte'>RN</option>
                            <option value='Rio Grande do Sul'>RS</option>
                            <option value='Rondonia'>RO</option>
                            <option value='Roraima'>RR</option>
                            <option value='Santa Catarina'>SC</option>
                            <option value='Sao Paulo'>SP</option>
                            <option value='Sergipe'>SE</option>
                            <option value='Tocantins'>TO</option>
                        </Field>
                    </fieldset>

                    <fieldset>
                        <legend>Nos conte sua história</legend>
                        <Field
                            as="textarea"
                            name="historia"
                            placeholder="Faça um resumo da sua história..."
                        />
                        <p className='error'>{<ErrorMessage name='historia'/>}</p>
                        <br/>

                    </fieldset>
                    <fieldset>
                        <legend>Nos conte suas necessidades</legend>
                        <ul role="group" aria-labelledby="checkbox-group">
                            <li>
                                <label>
                                <Field type="checkbox" name="necessidades" value="Alimentos" />
                                Alimentos
                                </label>
                            </li>
                            <li>
                                <label>
                                <Field type="checkbox" name="necessidades" value="Brinquedos" />
                                Brinquedos
                                </label>
                            </li>
                            <li>
                                <label>
                                <Field type="checkbox" name="necessidades" value="Material Escolar" />
                                Material Escolar
                                </label>
                            </li>
                            <li>
                                <label>
                                <Field type="checkbox" name="necessidades" value="Medicamentos" />
                                Medicamentos
                                </label>
                            </li>
                            <li>
                                <label>
                                <Field type="checkbox" name="necessidades" value="Produtos de Higiene" />
                                Produtos de Higiene
                                </label>
                            </li>
                            <li>
                                <label>
                                <Field type="checkbox" name="necessidades" value="Roupas" />
                                Roupas
                                </label>
                            </li>
                            <li>
                                <label>
                                <Field type="checkbox" name="necessidades" value="Outros custos" />
                                Outros custos
                                </label>
                            </li>
                        </ul>
                    </fieldset>

                    <fieldset>
                        <legend>Deixe seus contatos</legend>
                        <label htmlFor='phone'>Telefone/Whatsapp:</label>
                        <Field
                            className='width-input'
                            type='text'
                            name='telefone'
                            id='phone'
                            placeholder='(99) 99999.9999'
                        />
                        <p className='error'>{<ErrorMessage name='telefone'/>}</p>    
                        <br/><br/>                      

                        <label htmlFor='email'>E-mail:</label>
                        <Field
                            className='width-input'
                            type="email"
                            name="email"
                            placeholder='Digite seu e-mail'
                            maxLength='30'
                        />
                        <p className='error'>{<ErrorMessage name='email'/>}</p> 
                        <br/><br/>                         
                    
                        <label htmlFor='instagram'>Instagram:</label>
                        <Field
                            className='width-input'
                            type='text'
                            name='instagram'
                            id='instagram'
                            placeholder='Digite seu instagram'
                        />
                        <p className='error'>{<ErrorMessage name='instagram'/>}</p>    
                        <br/><br/>                          

                        <label htmlFor='facebook'>Facebook:</label>
                        <Field
                            className='width-input'
                            type='text'
                            name='facebook'
                            id='facebook'
                            placeholder='Digite seu facebook'
                        />
                        <p className='error'>{<ErrorMessage name='facebook'/>}</p>
                        <br/>                         

                    </fieldset>

                    <div className='container-send-button'>
                        <button type="submit" disabled={isSubmitting}>ENVIAR</button>
                    </div>
                </Form>
            )}
            </Formik>
            
        </div>

    )
}

export default FormInstitution