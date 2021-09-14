import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FiUserCheck } from 'react-icons/fi';
import { GiGraduateCap } from 'react-icons/gi';
import { BsCheckCircle } from 'react-icons/bs';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './CertificationsStyles';

const Certifications = () =>  (
  <Section id="tech">
    <SectionTitle>Education & Certifications</SectionTitle>

    <List>
      <ListItem>
        <picture>
          <GiGraduateCap size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Degree</ListTitle>
          <ListParagraph>
          Bachelor of science (HONOURS) in computing with software development <br />

          Grade : 1:1

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsCheckCircle size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Certification</ListTitle>
          <ListParagraph>
          React - The Complete Guide (incl Hooks, React Router, Redux)

          </ListParagraph>
        </ListContainer>
      </ListItem>




    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Certifications;
