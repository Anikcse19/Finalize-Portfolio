import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className='a'>

            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_499750332_2000133420009280246_339156.jpg" className='a-img' alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">I am an proffesional web developer and work with high dedication</p>
                <p className="a-desc">
                    I am working with React, Vanila Js, Bootstrap, Material Ui etc. I have been done some of projects with Reatc and also with Vanila Js
                </p>
            </div>
        </div>
    );
};

export default About;