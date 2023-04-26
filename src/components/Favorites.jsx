import React from 'react'
import { motion } from "framer-motion"

function Favorites() {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1  }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0}}
    >
      <h2>Favorite</h2>
    </motion.div>
  )
}

export default Favorites
 