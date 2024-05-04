import React from "react";
import './styles/About.css'

const About = () => {
    return(
        <div className="about">
            <p className="my_intro"> I specialize in front-end development, focusing on creating visually appealing and user-friendly websites. Alongside this, I have a strong interest in data analytics, where I explore ways to leverage data for optimizing website performance and user experience. With expertise in Java full-stack development, I'm capable of building robust solutions that span from the user interface to the back-end functionality. Furthermore, I'm actively delving into cybersecurity, recognizing its significance in safeguarding digital assets. Eager to join a team where I can apply my skills to develop innovative solutions and continue my professional growth journey.</p>
            <div className="skills">
                <div className="Programming lang">
                    <ul>
                        <li><b>Programming languages:</b></li>
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="Web dev">
                    <ul>
                        <li><b>Web-dev:</b></li>
                        <li>Django</li>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                    </ul>
                </div>
                <div className="Core Subjects">
                    <ul>
                        <li><b>Core-subjects:</b></li>
                        <li>Data structures and algorithms</li>
                        <li>Object-Oriented Programming</li>
                        <li>Database-management system</li>
                        <li>Computer Networks</li>
                        <li>Operating System</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default About