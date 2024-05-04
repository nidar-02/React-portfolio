import React from "react";
import { Instagram, Twitter, Facebook, LinkedIn } from '@material-ui/icons';
import nid from './assests/1.JPG';
import './styles/Main.css';

const Main = () => {
    return (
        <div className="main">
            <div className="main_container">
                <div className="main_content">
                    <div className="text">
                        <p>Hello Everyone!</p>
                        <h1>NIDARSHAN K V</h1>
                        <p>Front-end Developer & Designer</p>
                        <p>Data-Analyst</p>
                        <p>Java Fullstack developer</p>
                        <div className="icons">
                            <Twitter className="icon" />
                            <Instagram className="icon" />
                            <Facebook className="icon" />
                            <LinkedIn className="icon" />
                        </div>
                        <div className="buttons">
                        
                        </div>
                    </div>
                </div>
                <div className='main-img'>
                    <img src={nid} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main;
