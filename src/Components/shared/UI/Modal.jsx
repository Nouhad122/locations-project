import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'
import { motion, AnimatePresence } from 'framer-motion'
const ModalOverlay = (props) => {
  return ReactDOM.createPortal(
    <div className={`${classes['modal']} ${props.className}`} style={props.style}>
      <header className={`${classes['modal__header']} ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
        <div className={`${classes['modal__content']} ${props.contentClass}`}>
          {props.children}
        </div>

        <footer className={`${classes['modal__footer']} ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
    ,document.getElementById('modal-hook')
  )
}

const Modal = (props) => {
  return (
    <>
    { props.show && <Backdrop onClick={props.onCancel} /> }
        {props.show && (
            <motion.div
             initial={{ opacity: 0, y: -50 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -50 }}
             transition={{ duration: 0.3, ease: 'easeOut' }}
            >
            <ModalOverlay {...props} />
            </motion.div>
        )}
      
    </>
  )
}

export default Modal
