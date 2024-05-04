import React from "react";
import './styles/Section.css';
import nid2 from './assests/2.jpg';

const Section = () =>{
    return(
        <div className="sections">
            <div className="section_container">
                <div className="section_img">
                    <img src={nid2} alt='/' />
                </div>
                <div className="section_content">
                    <div className="project">
                        <div className="project_heading">
                            <h1>Projects</h1>
                        </div>
                        <ul>
                            <h1>BloodBank management System</h1>
                            <div> HTML, CSS, JavaScript, SQLite, Django</div>
                            <li>An online-based web application that displays the amount of blood available in the blood bank, collects blood from donors, and donates blood to those in need.</li>
                            <li>Streamlines the management of blood donations and inventory, facilitating easy tracking of blood types and quantities.</li>
                            <li>Designed with a user-friendly interface, it allows both blood bank staff, donors and patients to interact with the system easily, contributing to a positive user experience.</li>
                        </ul>
                    </div>
                    <div className="project">
                        <div className="project_heading">
                            <h1>Personal Portfolio</h1>
                        </div>
                        <ul>
                            <div>HTML, CSS, JavaScript, React </div>
                            <li>Implemented a user-friendly feedback interface, facilitating seamless communication and enhancing user engagement.</li>
                            <li>Demonstrated professionalism through sleek design, intuitive navigation, and visually appealing presentation, optimizing user experience.</li>
                            <li>Employed a proficient tech stack to ensure a modern and versatile platform for showcasing skills and achievements.</li>
                        </ul>
                    </div>
                    <div className="project">
                        <div className="project_heading">
                            <h1>Quiz Application using Java</h1>
                        </div>
                        <ul>
                            <div>Java, Object-Oriented Programming</div>
                            <li>The Java-based quiz application provides an interactive platform for users to enhance their knowledge by answering questions on various topics, making learning engaging.</li>
                            <li>It supports multiple-choice questions, making it easy for users to participate and providing immediate feedback on their answers.</li>
                            <li>The application features an intuitive and visually appealing design, enhancing the overall user experience and usability</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;
