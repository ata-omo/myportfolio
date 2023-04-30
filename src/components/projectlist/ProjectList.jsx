import React from 'react'
import Project from "../project/Project"
import "./projectlist.css"
import {projects} from "../../data"

function ProjectList() {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Creation!</h1>
            <p className="pl-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis placeat aut possimus voluptates in repellat enim vero tempore nemo voluptatum?</p>


        </div>
        <div className="pl-list">
          {projects.map((item) =>(
            <Project key={item.id} img={item.img} link={item.link} gif={item.gif}/>
          ))}
          
            
        </div>
    </div>
  )
}

export default ProjectList