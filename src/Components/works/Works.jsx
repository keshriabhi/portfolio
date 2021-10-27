import {React, useState} from 'react'
import './Works.scss';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id : '1',
            icon : './assets/mobile.png',
            title : 'Web Design',
            desc : 'Lorem Ipsum Dolor is simple dummy text of the printing and typesetting industry.',
            img : 'https://www.petermocanu.com/wp-content/uploads/2020/09/login-form-UI-mobile-concept-v2.jpg'
        },
        {
            id : '2',
            icon : './assets/mobile.png',
            title : 'Mobile Design',
            desc : 'Lorem Ipsum Dolor is simple dummy text of the printing and typesetting industry.',
            img : 'https://www.petermocanu.com/wp-content/uploads/2020/09/login-form-UI-mobile-concept-v2.jpg'
        },
        {
            id : '3',
            icon : './assets/mobile.png',
            title : 'Branding',
            desc : 'Lorem Ipsum Dolor is simple dummy text of the printing and typesetting industry.',
            img : 'https://www.petermocanu.com/wp-content/uploads/2020/09/login-form-UI-mobile-concept-v2.jpg'
        }
    ];

    const handleClick = (way) =>{
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
        : 
        setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
    }


    return (
        <div className="works" id="works">
            <div className="slider" style={{transform : `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d=>( 
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://www.petermocanu.com/wp-content/uploads/2020/09/login-form-UI-mobile-concept-v2.jpg" alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <KeyboardArrowLeftIcon className="arrow left" onClick={()=>handleClick('left')}/>
            <KeyboardArrowRightIcon className="arrow right" onClick={()=>handleClick()}/>
        </div>
    )
}
