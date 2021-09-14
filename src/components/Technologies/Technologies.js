import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FiUserCheck } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies & Skills</SectionTitle>
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
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma <br />
            Adobe Illustrator
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <FiUserCheck size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Project Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            Managing Projects/Tasks <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
