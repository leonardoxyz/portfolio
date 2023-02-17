import React, { useState } from 'react'
import { motion } from 'framer-motion';

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);
  return (
    <motion.div
    layout 
    className="projects__list">
      {list.map((category, index) => {
        return (
          <button className="projects__list-item"
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category)
            }}
          >
            {category}
          </button>
        )
      })}
    </motion.div>
  )
}

export default List