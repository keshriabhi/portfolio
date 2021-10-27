import {React, useState, useEffect} from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.scss';
import { Link } from 'react-router-dom';

import { featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio } from '../../Data';

export default function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

    const list = [
        {
            id : 'featured',
            title : 'Projects'
        },
        {
            id : 'web',
            title : 'Skills'
        },
        {
            id : 'mobile',
            title : 'Learning'
        },
        {
            id : 'design',
            title : 'Soft Skills'
        },
        {
            id : 'content',
            title : 'Hobbies'
        }
    ];

    useEffect(() => {
        switch(selected){
            case "featured" : 
                setData(featuredPortfolio);
                break;
            case "web" : 
                setData(webPortfolio);
                break;
            case "mobile" : 
                setData(mobilePortfolio);
                break;
            case "design" : 
                setData(designPortfolio);
                break;
            case "content" : 
                setData(contentPortfolio);
                break;
            default : 
                setData(featuredPortfolio);
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item =>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                        <div className="item">
                            <img src={d.img} alt=""/>
                            <h3>{d.title}</h3>
                        </div>
                ))}
            </div>
        </div>
    )
}
