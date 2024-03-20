import React from 'react';
import aboutExpress from '../assets/img/plant.png'
import AboutTreeCard from '../components/AboutTreeCard';
import Section from '../components/Section';
const AboutExpress = () => {
    return (
        <section className="pt-10">
        <Section sectionImg={aboutExpress}  text1='about' text2='express' paragraph1='Trees improve air quality by filtering pollutants and producing oxygen' paragraph2='which contributes to better respiratory health for humans.'/>
        <AboutTreeCard/>
      </section>
    );
};

export default AboutExpress;