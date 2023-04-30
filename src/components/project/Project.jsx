import React, {useState} from 'react'
import "./project.css"
function Project({img,link,gif}) {

  return (
      <div className="p">
        <div className="navi">
          <div className="navi-circle"></div>
          <div className="navi-circle"></div>
          <div className="navi-circle"></div>
        </div>

        <a href={link} target='_blank' rel="noreferrer">
          <img src={img} onMouseOver={e => e.currentTarget.src = gif} onMouseOut={e => e.currentTarget.src = img} alt="coming.." className="p-img" />
        </a>
      </div>
  )
}

export default Project