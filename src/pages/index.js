import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Certifications from '../components/Certifications/Certifications';
import { useState, useEffect } from 'react';
import Typical from 'react-typical';
import { LoaderStyle, WrapperStyle } from './indexStyles';
import Avatar from '../components/Avatar/Avatar';
import { AvatarStyles } from '../components/Avatar/AvatarStyles';




const Home = () => {

  //create state for loading screen
  const[loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 10000)
    }, []);




  return (

    <div>
      {loading ? 
      <WrapperStyle>
        <AvatarStyles>
       <Avatar />
       </AvatarStyles>
      <LoaderStyle>
      <Typical
      steps={['Hello!', 1000,
       'My name is Gavin Everett', 2000,
       'Welcome to my portfolio', 2000]}
      loop={1}
      wrapper="b"
    />
    </LoaderStyle>
    </WrapperStyle>
    :

    <Layout>
    <Section grid>
    <Hero />
    <BgAnimation />
    </Section>
    <Projects />
    <Technologies />
    <Certifications />
    <Timeline />
    <Acomplishments />   
    </Layout>
   
    }


  </div>
  );
};

export default Home;
