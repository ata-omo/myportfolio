import React from 'react'
import "./about.css"
import Hitk from "../../img/hitk-logo.png"

function About() {
  return (
    <div className='abt'>
        <div className="abt-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="coming..." className="a-img" />
            </div>
        </div>
        <div className="abt-right">
            <h1 className="a-title">About ME</h1>
            <p className="a-sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati reiciendis debitis vero ut in quis deserunt suscipit aspernatur dolorum.
            </p>

            <p className="a-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium earum adipisci voluptates quis veniam quam nam consectetur vitae, repellendus dolorum eaque sapiente praesentium, quo rerum dolorem deleniti aliquam aut id expedita? At molestiae, quam amet et labore laudantium ratione optio?
            </p>

            <div className="a-edu">
                <img src={Hitk} alt="coming.." className="a-edu-img" />
                <div className="a-edu-texts">
                    <h3 className="a-edu-title">
                        Heritage Institute of Technology, Kolkata 
                    </h3>

                    <h5 className="a-edu-desc">Bachelor of Technology in Computer Science and Engineering (2019 - 2023)</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About