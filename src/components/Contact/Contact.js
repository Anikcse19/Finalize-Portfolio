import React, { useContext, useRef, useState } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../Context/Context';


const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = e => {
        e.prevntdefault()
        emailjs.sendForm('service_kewwdx2',
            'template_9w7joef',
            formRef.current,
            'user_C2y9xnbK5iN70C19Kgo9Z')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='c'>
            <div className="c-bg">
            </div>
            <div className="c-wraper">
                <div className="c-left">
                    <h1 className="c-title">Lets, talk about my projects</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Phone-512.png" className='c-icon' alt="" />
                            +8801533676236
                        </div>
                        <div className="c-info-item">
                            <img src="https://cdn1.iconfinder.com/data/icons/aami-flat-emails/64/email-20-128.png" className='c-icon' alt="" />
                            anikdebcse@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src="https://cdn1.iconfinder.com/data/icons/neutro-essential/32/home-256.png" className='c-icon' alt="" />
                            Chattogram,Bangladesh
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Do you want to talk to know me more? </b> If you want to know me more ,you will reach me accoroding to the below contact form. Please fillup this form and I will send you special respons.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode ? "#222" : '#CAD7F3' }} type="text" placeholder='Name' name='user_name' /> <br />
                        <input style={{ backgroundColor: darkMode ? "#222" : '#CAD7F3' }} type="text" placeholder='Subject' name='user_subject' /> <br />
                        <input style={{ backgroundColor: darkMode ? "#222" : '#CAD7F3' }} type="text" placeholder='Email' name='email' />
                        <textarea style={{ backgroundColor: darkMode ? "#222" : "#CAD7F3" }} name="" id="" placeholder='Message' name='message' rows="5"></textarea>
                        <button>Submit</button>
                    </form>
                    {
                        done && "Thank you"
                    }
                </div>
            </div>
        </div>
    );
};

export default Contact;