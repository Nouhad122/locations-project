import React from 'react'
import ReactDOM from 'react-dom'
import classes from './SideDrawer.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const SideDrawer = (props) => {
  const content = (
    <AnimatePresence>
      {props.show && (
        <motion.aside 
          className={classes['side-drawer']}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {props.children}
        </motion.aside>
      )}
    </AnimatePresence>
  )
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer
