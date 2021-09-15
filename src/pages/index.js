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
import { LoaderStyle } from './indexStyles';


const Home = () => {

  //create state for loading screen
  const[loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
    }, []);




  return (

    <div>
      {loading ? 
      <LoaderStyle>
      <Typical
      steps={['Hello', 1000, 'Hello world!', 500]}
      loop={1}
      wrapper="p"
    />
    </LoaderStyle>
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
