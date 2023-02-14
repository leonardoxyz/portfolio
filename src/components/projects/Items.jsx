import React from 'react'
import { motion } from 'framer-motion';

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description } = projectItem;
        return (
          <div className="projects__card">
            <div className="projects__img">
              <img src={img} alt="" />
            </div>

            <div className="projects__content grid" key={id}>
              <div className="projects__details">
                <h2>{title}<br /><span>{description}</span><br/>{category}</h2>
                <div className="projects__btn">
                  <a href="https://github.com/leonardoxyz/portfoliov2" target={"blank"}><button className='btn-project' >See Project</button></a>
                  <a href="https://github.com/leonardoxyz/portfoliov2" target={"blank"}><button className='btn-project' >Live Demo</button></a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Items