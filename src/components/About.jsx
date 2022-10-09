import React from 'react'
import imgAbout1 from '../assets/img/About1.jpg'
import imgAbout2 from '../assets/img/About2.jpg'
import imgAbout3 from '../assets/img/About3.jpg'
import imgAbout4 from '../assets/img/About4.jpg'


function About() {
    return (
            <div className="grid grid-cols-2 container">
                <img src={imgAbout1} alt="about1" />
                <img src={imgAbout2} alt="about2" />
                <img src={imgAbout3} alt="about3" />
                <img src={imgAbout4} alt="about4" />
            </div>
    )
}

export default About