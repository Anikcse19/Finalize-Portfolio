import React from 'react';
import "./Intro.css"
import me from "../../image/me.png"

const Intro = () => {
    return (
        <div className='i' >
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h2 className='i-name'>Anik Chandra Deb</h2>
                    <div className="i-title">
                        <div className="i-title-wraper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">React Developer</div>
                            <div className="i-title-item">MERN Stack Developer</div>
                            <div className="i-title-item">Web Designer</div>

                        </div>
                    </div>
                    <div className="i-desc">
                        I Design and Develop services for Customers of all sizes, specializing in creating stylish, creative, mordern websites.
                    </div>
                    <div style={{ marginTop: '20px', }}>
                        <a style={{ textDecoration: 'none', fontSize: '15px' }} target="blank" href='https://drive.google.com/file/d/1YUBtigDOdse-gz3dkI69PAzqV4MA25Gn/view?usp=sharing' className='btn btn-success'>Download Resume</a>
                    </div>
                </div>

            </div>
            <div className="i-right">
                <div className="i-bg">

                </div>
                <img src={me} className='i-img' alt="" />
            </div>
        </div>
    );
};

export default Intro;