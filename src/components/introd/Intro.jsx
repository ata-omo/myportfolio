import React from 'react'
import "./Intro.css"
import pic from "../../img/background-char.png"

function Intro() {
  return ( 
    <div className="in">
        <div className="in-left">
            <div className="in-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Ashish Ranjan</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Software Developer</div>
                        <div className="i-title-item">Competetive Programming</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                    </div>
                </div>
                <div className="i-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique assumenda nihil dolorem labore quia placeat ut eum officia ullam id fuga est, in distinctio rerum dicta sed saepe ea delectus iste facere inventore molestiae architecto quo. Labore quo, sequi delectus quisquam reiciendis doloribus repudiandae quos iure quas est tempore quidem quis itaque architecto, veritatis, neque provident? Impedit, incidunt nulla.
                </div>
            </div>
        </div>
        <div className="in-right">
            <div className="i-bg"></div>
            <img className='i-pic' src={pic} alt='' />
            
        </div>
        
    </div>
  )
}

export default Intro