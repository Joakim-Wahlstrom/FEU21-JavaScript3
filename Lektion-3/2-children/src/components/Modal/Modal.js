import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({handleClose, children, sales}) => {
  return ReactDOM.createPortal((
    <div className='modal-bg'>
      <div className="modal" style={{
        textAlign: 'center',
        border: '4px solid',
        borderColor: sales ? 'red' : '#555'
      }}>
        {children}
        <button className={sales ? 'sales-btn' : ''} onClick={handleClose}>Close</button>
      </div>
    </div>
  ), document.querySelector('#modals'))
  
  
  
}

export default Modal