import React from 'react'
import ReactDom from 'react-dom'
import Trailer from './Trailer'

function Modal(props) {
    if(!props.open) return null
  return ReactDom.createPortal(
    <div onClick={props.onClose} className='overlay'>
         <div onClick={(e)=> {
          e.stopPropagation()
          }} className="modalContainer">
             <Trailer embedId={props.movie.trailerId} />
           <div className="modalRight">
            <p onClick={()=> props.onClose()}  className='closeBtn'>X</p>
           </div>
        </div> 
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
