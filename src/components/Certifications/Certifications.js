import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FiUserCheck } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './CertificationsStyles';

const Certifications = () =>  (
  <Section id="tech">
    <SectionTitle>Education & Certifications</SectionTitle>
    <SectionText>
     I have worked with a wide range of technologies in both areas of
     front and back end development.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML/CSS/Javascript <br />
            Boostrap <br />
            Chrome DevTools <br />
            Github <br />
            React.js <br />
            Next.js 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
           Databases <br />
           SQL <br />
           API <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Certifications;
