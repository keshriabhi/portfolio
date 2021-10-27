import {React, useEffect, useRef} from 'react';
import './Intro.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped';


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay : 1500,
            backSpeed : 60,
            strings: ['Developer', 'Designer', 'Content Creator'] 
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/meLast.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Abhishek Keshri</h1>
                    <h3>Web <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ExpandMoreIcon className="expandIcon"/>
                </a>
            </div>
        </div>
    )
}
