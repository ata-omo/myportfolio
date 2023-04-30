import React , {useContext, useRef, useState} from 'react'
import emailjs from 'emailjs-com';
import "./contact.css"
import contact from "../../img/contact.png"
import mail from "../../img/mail.svg"
import add from "../../img/add.png"
import { ThemeContext } from '../../Context';


function Contact() {

  const formRef = useRef()

  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode= theme.state.darkMode;

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    emailjs.sendForm('service_1erjpft', 'template_gvri34m', formRef.current, 'z3-KJAunrIV-5-vB8')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='c'>
      <div className="c-bg">

      </div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title"><p>Why wait! <br/> Let's connect</p></h1>

          <div className="c-info">
            <div className="info-item">
              <a href='https://www.linkedin.com/in/theasr/'>
                <img src={contact} alt="coming.." className="c-icon" />
              </a>
              CLICK IT!
            </div>

            <div className="info-item">
              <a href='ashishranjan.orca@gmail.com'>
                <img src={mail} alt="coming.." className="c-icon" />
              </a>
              ashishranjan.orca@gmail.com 
            </div>

            <div className="info-item">
              <a href='#'>
                <img src={add} alt="coming.." className="c-icon" />
              </a>
              Patna, Bihar, IN (PIN - 801503)
            </div>
          </div>
        </div>

        <div className="c-right"> 
          <p className="c-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa impedit consectetur et vitae nostrum, blanditiis voluptatum doloremque ullam laudantium!<br/> What's your story? let's get in touch. </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" name='user_name' />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Subject" name='subject' />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Email" name='user_mail' required />
            <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder='message' name='message' required/>
            <button type='submit'>Submit</button>
            {done && "Message Sent... Thank You!"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact