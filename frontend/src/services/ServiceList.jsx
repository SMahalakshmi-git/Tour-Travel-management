import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from "reactstrap";

import currencyImg from '../assets/images/currency.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: currencyImg,
        title: "Currency Converter",
        desc: "Travel Smart: Effortless Currency Conversion at Your Fingertips!",
   },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Discover Hidden Gems with Expert Tour Guides!",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor Your Dream Vacation with Our Customization Options!",
    },
]


const ServiceList = () => {
    return (
        <>
        {servicesData.map((item,index)=>(
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                <ServiceCard item={item}/>
            </Col>
        ))}
        </>
    );
};
  


export default ServiceList
