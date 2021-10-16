import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of this portfolio is to showcase some applications I have designed, developed and tested over the past few years. These applications
        are small to medium in nature with the core focus on continuous learning.
        </SectionText>
        <Button onClick={()=> window.open("https://www.linkedin.com/in/gavin-everett/", "_blank")} >Connect</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;