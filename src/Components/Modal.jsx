import '../Styles/modal.css'

const Modal = ({id='modal', onClose = () => {}, children}) => {
    const handleOutsideClick = (e) => {
        if(e.target.id === id){
            onClose()
        }
    }

    return (
        <div id={id} className='modal' onClick={handleOutsideClick}>
            <div className='container'>
                <button className='close' onClick={onClose}>FECHAR</button>
                <h2 id='title-modal'>Um pouquinho sobre quem somos</h2>
                <div className='history'>{children}</div>
            </div>
        </div>
    )
}

export default Modal