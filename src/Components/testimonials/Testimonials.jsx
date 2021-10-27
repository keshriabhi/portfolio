import React from 'react';
import './Testimonials.scss'

export default function Testimonials() {
    const data = [
        {
            id : 1,
            name : 'Ankur Anand',
            title : 'System Engineer II',
            img : 'assets/ankur.jpg',
            icon : 'assets/linkedin.png',
            desc : 'Your dedication is truly remarkable.',
            company : 'Cerner Corporation'
        },
        {
            id : 2,
            name : 'Dinesh Kini',
            title : 'Full-Stack Developer',
            img : 'assets/dinesh.jpg',
            icon : 'assets/linkedin.png',
            desc : 'You are a great Problem Solver',
            company : 'Oracle',
            featured : true
        },
        {
            id : 3,
            name : 'Rachna Keshri',
            title : 'Manager',
            img : 'assets/rachna.jpg',
            icon : 'assets/linkedin.png',
            desc : 'Your leadership motivate others.',
            company : 'Stock Experts'
        }
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(
                    <div className={d.featured ? 'card featured' : 'card'}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img src={d.img} alt="" className="user"/>
                            <img src={d.icon} alt="" className="right"/>
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                            <h5>{d.company}</h5>
                        </div>
                    </div>
                ))}  
            </div>
        </div>
    )
}
